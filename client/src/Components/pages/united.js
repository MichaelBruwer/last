import React, {Fragment} from 'react';
import CommentForm from '../Comments/CommentForm';
import Comments from '../Comments/Comment';

const united = () => {
    return(
<div>
<div
        className='card  pfbg blue lighten-4  center'
        style={{ color: 'Black' }}
      >
        <div>
          <img
            src='images/ut.jpg'
            className='circle'
            alt='Profilepic'
            style={{ width: '150px' }}
          />
          <h3><i>United Technologies </i></h3>
        </div>
        <div>
            <Fragment>
              <h5>Bio</h5>
              <p> United Technologies Corporation was an American multinational
                conglomerate headquartered in Farmington, Connecticut. It merged
                with the Raytheon Company in April 2020 to form Raytheon
                Technologies.</p>
            </Fragment>

          <ul>
            <li>
                <Fragment>
                  <b> Company:</b>
                  <br />
                  United Technologies
                </Fragment>
            </li>
          </ul>
          <ul>
            <li>
                <Fragment>
                  <b>Website:</b>
                  <br />
                  <a href='https://www.rtx.com/'> United Technologies</a>
                </Fragment>
              
            </li>
          </ul>
        </div>
      </div>
      {/* //comment s */}
      <div>
        <Comments />
      </div>
      <div>
        <CommentForm />
      </div>
      

      {/* //com stop */}

      {/* rateing */}
      {/* <div id='star'>
        <star />
      </div> */}
      
    
</div>
)}

export default united;