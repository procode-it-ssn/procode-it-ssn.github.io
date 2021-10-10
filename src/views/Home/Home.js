import React from "react";
import "./Home.css";
import ProcodeLogo from "../../img/pcdLogoEdit.png";
export const Home = () => {
  return (
    <div className="bgColor">
      <div className="intro-container py-1">
        <div className="intro-logo">
          <div
            className="logo"
            style={{
              background: `url(${ProcodeLogo}) no-repeat center center/contain`,
              height: "100%",
              width: "50%",
              display: "inline-block",
            }}
          ></div>
          <div className="intro">
            <p>
              We are the Official Tech club of the Department of Information
              Technology, SSNCE.
            </p>
            <p>"A platform for students, by students"</p>
          </div>
        </div>
        <div className="intro-text d-flex flex-column">
          <div className="intro-text-item d-flex flex-row">
            <p className="subHead">
              Goal
            </p>
            <p className="my-2 item-text">
              Our Goal is to pass on the knowledge and experience gained in various
              fields, to those who wish to learn them.
            </p>
          </div>
          <div className="intro-text-item d-flex flex-row">
            <p className="order-2 subHead">
              Why Procode?
            </p>
            <p className="order-1 my-2 item-text">
              We know the struggle in finding the right resources and guidance. The
              club aims to ease that struggle
            </p>
          </div>
          <div className="intro-text-item d-flex flex-row">
            <p className="subHead">
              What can you get?
            </p>
            <p className="my-2 item-text">
              Guidance and training on DSA for Placements and Competitive
              Programming. This year we have also added ML, Web and App Development.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Home;