import React from 'react';
import { Link } from 'react-router-dom'

const About = () => {
  return (
    <div className='center abg' style={{ color: 'Black' }}>
      <div className='tc'>
      <h3>Find the company that fits you</h3>
      <div >
      <a href='/Login' className="waves-effect waves-light btn"style={{ margin: '10px' }}>Login</a>
      <a href='/Register' className="waves-effect waves-light btn"style={{ margin: '10px' }}>Register</a>
      </div>
      <br/>
      <h4>How it works for you</h4>
      {/* icons with text */}
      <div style={{ display: 'flex', flexwrap: 'wrap', justifyContent: 'center' }}>
       <p style={{ margin: '10px' }}> <Link to={'/SR'}> <i href='/' className='fas fa-search fa-4x hoverable'style={{ margin: '10px' }}></i></Link><br/>Find Potential Companies  </p>  
       <p style={{ margin: '10px' }}><i className="far fa-question-circle fa-4x" style={{ margin: '10px' }}></i> <br/>Research Companies</p>           
       <p style={{ margin: '10px' }}> <i className="far fa-comment fa-4x" style={{ margin: '10px' }}></i><br/>Leave your Thoughts on Them</p>
      </div>
      <h4>Important Note</h4>
      <p>To use the Search please Login or Register and proceed to the Search Results Page.<br/> To get to the Search results Page Use the Navbar or Alternatively use the Magnifying glass Above</p>

      </div>
    </div>
  );
};

export default About;
