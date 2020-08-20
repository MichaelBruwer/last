import React from 'react';

function Footer() {
  return (
    <footer
      className='page-footer purple lighten-2'
      style={{
        position: 'Absolute',
        bottom: '0',
        left: '0',
        width: '100%',
        height: '100px',
        
      }}
    >
      <div className='container'>
        <div className='row'>
          <div className='col m3 s6'>
          </div>
          <div className='col l4 offset-l2 s12'>
           <div style={{display: 'flex', flexwrap: 'wrap' }}>
            <h5 className='white-text' style={{margin: '10px'}}>Links:</h5>
            <ul style={{display: 'flex', flexwrap: 'wrap' }}>
              <li style={{margin: '10px'}}>
                <a
                  className='grey-text text-lighten-3'
                  href='https://github.com/MichaelBruwer'
                >
                  <i class="fab fa-github fa-3x"></i>
                </a>
              </li>
              <li style={{margin: '10px'}}>
                <a
                  className='grey-text text-lighten-3'
                  href='https://www.linkedin.com/in/michael-bruwer-2806a41a9/'
                >
                 <i class="fab fa-linkedin fa-3x"></i>
                </a>
              </li>
            </ul>
          </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
