import React from 'react';
import { Link } from 'react-router-dom'

const Profile = () => {
  return (
    <div>
      <h1 style={{ color: 'white' }}>Reccomended for you</h1>
      <div className='row' >
        <div className='col s1 m5'>
        <Link to={'/united'}> 
          <div className='card light-blue darken-3 hoverable' >
            <div className='card-image'>
              <img src='images/ut.jpg' alt='united tech' />
              {/* <span className='card-title yellow-text text-lighten-1'>
                <p>
                  <b>
                    <i>United Technologies </i>
                  </b>
                </p>
              </span> */}
            </div>
            <div className='card-content purple lighten-4'>
              <p>
                United Technologies Corporation was an American multinational
                conglomerate headquartered in Farmington, Connecticut. It merged
                with the Raytheon Company in April 2020 to form Raytheon
                Technologies.
              </p>
            </div>  
          </div>
          </Link>
        </div>
        
        {/* Second Card */}

        <div className='col s1 m5'>
        <Link to={'/allyf'}> 
          <div className='card light-blue darken-3 hoverable'>
            <div className='card-image'>
              <img
                src='images/ally.jpg'
                alt='A financial'
                className='Image'
              />
              {/* <span className='card-title yellow-text text-lighten-1'>
                <p>
                  <b>
                    <i>Ally Financiel</i>
                  </b>
                </p>
              </span> */}
            </div>
            <div className='card-content purple lighten-4'>
              <p>
                Ally Financial is a bank holding company organized in Delaware
                and headquartered in Detroit, Michigan. The company provides
                financial services like online banking
              </p>
            </div>
          </div>
          </Link>
        </div>
      </div>

      {/* card3 */}
      <div className='row'>
        <div className='col s1 m5'>
        <Link to={'/xcel'}> 
          <div className='card light-blue darken-3 hoverable'>
            <div className='card-image'>
              <img
                src='images/excel.jpg'
                alt='excel energy'
                className='Image'
              />
              {/* <span className='card-title yellow-text text-lighten-1'>
                <p>
                  <b>
                    <i>Xcel Energy </i>
                  </b>
                </p>
              </span> */}
            </div>
            <div className='card-content purple lighten-4'>
              <p>
                Xcel Energy, Inc. (Xcel), is an integrated power company. The
                Company is engaged in producing, selling and delivering
                electricity and related products and services in various markets
                in the United States. The Company's segments include Generation,
                Retail and Corporate activities. The Generation segment includes
                generation and international. The Retail segment includes Mass
                customers and Business Solutions. Its Business Solutions include
                commercial, industrial and governmental/institutional (C&I)
                customers, and other distributed and reliability products.
              </p>
            </div>
          </div>
          </Link>
        </div>
        {/* card4 */}

        <div className='col s1 m5'>
        <Link to={'/rockwell'}> 
          <div className='card light-blue darken-3 hoverable'>
            <div className='card-image'>
              <img
                src='images/rockw.jpg'
                alt='Rock automation'
                className='Image'
              />
              {/* <span className='card-title yellow-text text-lighten-1'>
                <p>
                  <b>
                    <i>Rockwell Automation </i>
                  </b>
                </p>
              </span> */}
            </div>
            <div className='card-content purple lighten-4'>
              <p>
                Rockwell Automation provides our customers with a complete
                automation solution that provides maximum flexibility and
                economic efficiency with market leading and trend setting
                innovation as the core driving force.
              </p>
            </div>
          </div>
          </Link>
        </div>

        {/* cards stop */}
      </div>
    </div>
  );
};

export default Profile;
