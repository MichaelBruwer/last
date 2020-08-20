import React, {Fragment} from 'react';
import CommentForm from '../Comments/CommentForm';
import Comments from '../Comments/Comment';

const xcel = () => {
    return(
<div>
<div
        className='card  pfbg blue lighten-4  center'
        style={{ color: 'white' }}
      >
        <div>
          <img
            src='images/excel.jpg'
            className='circle'
            alt='Profilepic'
            style={{ width: '150px' }}
          />
          <h3><i>Xcel Energy </i></h3>
        </div>
        <div>
            <Fragment>
              <h5>Bio</h5>
              <p> Xcel Energy, Inc. (Xcel), is an integrated power company. The
                Company is engaged in producing, selling and delivering
                electricity and related products and services in various markets
                in the United States. The Company's segments include Generation,
                Retail and Corporate activities. The Generation segment includes
                generation and international. The Retail segment includes Mass
                customers and Business Solutions. Its Business Solutions include
                commercial, industrial and governmental/institutional (C&I)
                customers, and other distributed and reliability products.</p>
            </Fragment>

          <ul>
            <li>
                <Fragment>
                  <b> Company:</b>
                  <br />
                  Xcel Energy
                </Fragment>
            </li>
          </ul>
          <ul>
            <li>
                <Fragment>
                  <b>Website:</b>
                  <br />
                  <a href='https://www.xcelenergy.com/'> Xcel Energy</a>
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

export default xcel;