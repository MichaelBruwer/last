import React, { Component } from 'react';
//comments
import CommentList from '../Comments/CommentList';
import CommentForm from '../Comments/CommentForm';

class commentsec extends Component {
  //CommentConstruct
  constructor(props) {
    super(props);
    //set state to empty and loading to false
    this.state = {
      comments: [],
      loading: false,
    };

    this.addComment = this.addComment.bind(this);
  }

  componentDidMount() {
    // loading
    this.setState({ loading: true });

    // get all the comments
    fetch('http://localhost:3000')
      .then((res) => res.json())
      .then((res) => {
        this.setState({
          comments: res,
          loading: false,
        });
      })
      .catch((err) => {
        this.setState({ loading: false });
      });
  }

  /**
   * Add new comment
   * @param {Object} comment
   */
  addComment(comment) {
    this.setState({
      loading: false,
      comments: [comment, ...this.state.comments],
    });
  }

  render() {
    return (
      <div>
        {/* //comments */}
        <div className='row green lighten-1'>
          <div className='col-4  pt-3 border-right'>
            <h6>Say something about This Person/Company</h6>
            <CommentForm addComment={this.addComment} />
          </div>
          <div className='col-8  pt-3 bg-white'>
            <CommentList
              loading={this.state.loading}
              comments={this.state.comments}
            />
          </div>
        </div>
      </div>
    );
  }
}

export default commentsec;
//end of comments code
