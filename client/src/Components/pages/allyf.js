import React, {Fragment} from 'react';
import CommentForm from '../Comments/CommentForm';
import Comments from '../Comments/Comment';

const allyf = () => {
    return(
<div>
<div
        className='card  pfbg blue lighten-4  center'
        style={{ color: 'white' }}
      >
        <div>
          <img
            src='images/ally.jpg'
            className='circle'
            alt='Profilepic'
            style={{ width: '150px' }}
          />
          <h3><i>Ally Financiel </i></h3>
        </div>
        <div>
            <Fragment>
              <h5>Bio</h5>
              <p> Ally Financial is a bank holding company organized in Delaware
                and headquartered in Detroit, Michigan. The company provides
                financial services like online banking</p>
            </Fragment>

          <ul>
            <li>
                <Fragment>
                  <b> Company:</b>
                  <br />
                  Ally Financiel
                </Fragment>
            </li>
          </ul>
          <ul>
            <li>
                <Fragment>
                  <b>Website:</b>
                  <br />
                  <a href='https://www.ally.com/home1?prtarget=am&prospects'> Ally Financiel</a>
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

export default allyf;