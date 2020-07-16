import React from 'react';

function Footer() {
  return (
    <footer
      className='page-footer light-blue darken-3'
      style={{
        position: 'flex',
        bottom: '0',
        left: '0',
        width: '100%',
      }}
    >
      <div className='container'>
        <div className='row'>
          <div className='col l6 s12'>
            <h5 className='white-text'>Michael Bruwer</h5>
            <p className='grey-text text-lighten-4'>
              Welcome to my Profile this was built useing React
            </p>
          </div>
          <div className='col l4 offset-l2 s12'>
            <h5 className='white-text'>Links</h5>
            <ul>
              <li>
                <a
                  className='grey-text text-lighten-3'
                  href='https://github.com/MichaelBruwer'
                >
                  Github
                </a>
              </li>
              <li>
                <a
                  className='grey-text text-lighten-3'
                  href='https://www.linkedin.com/in/michael-bruwer-2806a41a9/'
                >
                  LinkedIn
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
