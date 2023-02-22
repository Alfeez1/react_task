import React from 'react';
import { svg } from 'react';
import Navbar from './Navbar/Navbar';
import chair from '.././assets/chair1.png';
import MyForm from './InputForm';
import Footer from './Footer/Footer';
import './Navbar/navbar.css';
const Home = () => {
  return (
    <div style={{ position: 'relative' }}>
      <div
        style={{
          position: 'relative',
          zIndex: 1,
        }}
      >
        <Navbar />
      </div>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 940 420"
        style={{ position: 'absolute', top: 0, left: 0 }}
      >
        <defs>
          <linearGradient id="gradient" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#03a5ec" />
            <stop offset="100%" stopColor="#1fdd99" />
          </linearGradient>
        </defs>
        <path
          fill="url(#gradient)"
          fillOpacity="1"
          d="M0,160L34.3,181.3C68.6,203,137,245,206,266.7C274.3,288,343,288,411,282.7C480,277,549,267,617,245.3C685.7,224,754,192,823,176C891.4,160,960,160,1029,181.3C1097.1,203,1166,245,1234,229.3C1302.9,213,1371,139,1406,101.3L1440,64L1440,0L1405.7,0C1371.4,0,1303,0,1234,0C1165.7,0,1097,0,1029,0C960,0,891,0,823,0C754.3,0,686,0,617,0C548.6,0,480,0,411,0C342.9,0,274,0,206,0C137.1,0,69,0,34,0L0,0Z"
        ></path>
      </svg>
      <div
        id="hide-on-mobile"
        style={{
          position: 'relative',
          zIndex: 1,
          // textAlign: 'center',
          marginLeft: 380,
          paddingTop: '260px',
          // paddingRight: 780,
          color: '#ffff',
          fontWeight: 'bold',
          fontSize: '25px',
        }}
      >
        Careers
      </div>
      <div
        style={{
          position: 'relative',
          zIndex: 1,
          margin: 50,
          marginLeft: 100,
          marginRight: 100,

          // backgroundColor: 'red',
        }}
      >
        <div
          className="resume"
          style={{
            position: 'relative',
            zIndex: 1,
            color: 'black',
            fontWeight: 'bold',
            fontSize: '25px',
          }}
        >
          Submit Your Resume
        </div>
        <div
          style={{
            position: 'relative',
            zIndex: 1,
            color: 'black',
            fontSize: '17px',
          }}
        >
          Become discoverable for all our roles
        </div>
        <div
          className="form"
          style={{
            marginTop: 90,
            position: 'relative',
            zIndex: 1,
          }}
        >
          <div className="header">
            <div
              style={{
                position: 'relative',
                zIndex: 1,
                color: 'black',
                fontWeight: 'bold',
                fontSize: '19px',
              }}
            >
              Personal Detials
            </div>
            <div
              className
              style={{
                position: 'relative',
                zIndex: 1,
                color: 'black',
                fontSize: '14px',
              }}
            >
              please complete the below form and attach cv
            </div>
          </div>
          <div className="hide-on-mobiles">
            <MyForm />
          </div>
        </div>
      </div>
      <img
        src={chair}
        id="hide-on-mobile"
        alt="Image description"
        style={{
          position: 'absolute',
          zIndex: 2,
          top: 0,
          right: 0,
          width: '400px',
          height: '350px',
          margin: 150,
        }}
      />{' '}
      <div>
        <Footer />{' '}
      </div>
    </div>
  );
};
export default Home;
