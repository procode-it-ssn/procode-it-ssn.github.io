import React from 'react';
import './Home.css';
import ProcodeLogo from '../../img/pcdLogoEdit.png';
export const Home = () => {
  return (
    <div className="bgColor intro-logo-div">
      <div
        className=" d-flex flex-md-row flex-column start-container"
        // style={{ margin: '5rem' }}
      >
        {/* <div
            className="logo"
            style={{
              background: `url(${ProcodeLogo}) no-repeat center center/contain`,
              height: '500px',
              width: '250px',
              display: 'block',
            }}
          ></div> */}
        <div className="logo d-flex justify-content-center">
          <img src={ProcodeLogo} alt="ProcodeLogo" className="intro-logo" />
        </div>

        <div className="intro">
          <p>
            We are the Official Tech club of the Department of Information
            Technology, SSNCE.
          </p>
          <p>"A platform for students, by students"</p>
        </div>
      </div>
      <div className="intro-container py-1">
        <div className="intro-text d-flex flex-column">
          <div className="intro-text-item d-flex flex-md-row flex-column">
            <p className="subHead">Goal</p>
            <p className="item-text">
              Our Goal is to pass on the knowledge and experience gained in
              various fields, to those who wish to learn them.
            </p>
          </div>

          <div className="intro-text-item d-flex flex-md-row flex-column">
            <p className="subHead order-md-2">Why Procode?</p>
            <p className="item-text order-md-1">
              We know the struggle in finding the right resources and guidance.
              The club aims to ease that struggle
            </p>
          </div>

          <div className="intro-text-item d-flex flex-lg-row flex-column">
            <p className="subHead">What can you get?</p>
            <p className="item-text">
              Guidance and training on DSA for Placements and Competitive
              Programming. This year we have also added ML, Web and App
              Development.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Home;
