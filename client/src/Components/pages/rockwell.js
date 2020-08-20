import React, {Fragment} from 'react';
import CommentForm from '../Comments/CommentForm';
import Comments from '../Comments/Comment';

const rockwell = () => {
    return(
<div>
<div
        className='card  pfbg blue lighten-4  center'
        style={{ color: 'white' }}
      >
        <div>
          <img
            src='images/rockw.jpg'
            className='circle'
            alt='Profilepic'
            style={{ width: '150px' }}
          />
          <h3><i>Rockwell Automation </i></h3>
        </div>
        <div>
            <Fragment>
              <h5>Bio</h5>
              <p> Rockwell Automation, Inc., is an American provider of industrial automation
                   and information technology. Brands include Allen-Bradley and FactoryTalk software.
                    Headquartered in Milwaukee, Wisconsin, Rockwell Automation employs over 23,000 people
                     and has customers in more than 100 countries worldwide.</p>
            </Fragment>

          <ul>
            <li>
                <Fragment>
                  <b> Company:</b>
                  <br />
                  Rockwell Automation
                </Fragment>
            </li>
          </ul>
          <ul>
            <li>
                <Fragment>
                  <b>Website:</b>
                  <br />
                  <a href='https://www.rtx.com/'> Rockwell Automation</a>
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

export default rockwell;