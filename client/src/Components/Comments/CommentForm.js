import React, { Component, Fragment } from 'react';

export default class CommentForm extends Component {
  //constructor to set default state
  constructor(props) {
    super(props);
    this.state = {
      loading: false,
      error: '',

      comment: {
        name: '',
        message: '',
      },
    };

    // bind context to methods
    this.handleFieldChange = this.handleFieldChange.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
  }

  //Handle form input field changes & update the state

  handleFieldChange = (event) => {
    const { value, name } = event.target;

    this.setState({
      ...this.state,
      comment: {
        ...this.state.comment,
        [name]: value,
      },
    });
  };

  //Form submit

  onSubmit(e) {
    // prevent default form submission
    e.preventDefault();

    if (!this.isFormValid()) {
      this.setState({ error: 'Cannot be null or empty' });
      return;
    }

    // loading status and clear error
    this.setState({ error: '', loading: true });

    // persist the comments on server
    let { comment } = this.state;
    fetch('http://localhost:5000', {
      method: 'post',
      body: JSON.stringify(comment),
    })
      .then((res) => res.json())
      .then((res) => {
        if (res.error) {
          this.setState({ loading: false, error: res.error });
        } else {
          // add time and push comment to state
          comment.time = res.time;
          this.props.addComment(comment);

          // clear message box
          this.setState({
            loading: false,
            comment: { ...comment, message: '' },
          });
        }
      })
      //if error
      .catch((err) => {
        this.setState({
          error: 'Something went wrong.',
          loading: false,
        });
      });
  }

  // validation

  isFormValid() {
    return this.state.comment.name !== '' && this.state.comment.message !== '';
  }

  renderError() {
    return this.state.error ? (
      <div className='alert'>{this.state.error}</div>
    ) : null;
  }

  render() {
    return (
      <Fragment>
        <form method='post' onSubmit={this.onSubmit}>
          <div className='form-group'>
            {/* //name */}
            <input
              onChange={this.handleFieldChange}
              value={this.state.comment.name}
              placeholder=' Insert Name'
              name='name'
              type='text'
            />
          </div>
          <div className='form-group'>
            {/* //comment */}
            <textarea
              onChange={this.handleFieldChange}
              value={this.state.comment.message}
              placeholder=' Insert Comment'
              name='message'
              type='text'
            />
          </div>

          {this.renderError()}
          {/* //submit */}
          <div>
            <button
              disabled={this.state.loading}
              className='waves-effect waves-light btn'
            >
              Comment
            </button>
          </div>
        </form>
      </Fragment>
    );
  }
}
