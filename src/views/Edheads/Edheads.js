import React from "react";
import "./Edheads.css";
import Adhi_img from "../../img/adhi.jpg";
import Mahima_img from "../../img/mahima2.jpg";
import nandana_img from "../../img/nandana2.jpg";
import sharan_img from "../../img/sharan.jpg";
export const Edheads = () => {
  return (
    <div className="parallax3">
      <h1 align="center" className="py-4">
        EVENT AND DESIGN HEADS
      </h1>
      <br />
      <div>
        <br />
        <div className="before_box">
          <div className=" box_for_core_members">
            <div className="row mb-5">
              <div className="col-md-6 col-sm-12 d-flex justify-content-center">
                <div
                  className="image"
                  style={{
                    height: "100%",
                    width: "100%",
                    margin: "10%",
                  }}
                >
                  <img
                    src={Adhi_img}
                    style={{ width: "100%", height: "98%" }}
                    alt="Adithya"
                  />
                </div>
              </div>
              <div className="col-md-6 col-sm-12 d-flex align-items-center">
                <div className="info">
                  <p>Adithya R.</p>
                  <p>Event Head</p>
                  <p>Final Year IT</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="before_box">
          <div a className=" box_for_core_members">
            <div className="row mb-5">
              <div className="col-md-6 col-sm-12 d-flex justify-content-center">
                <div
                  className="image"
                  style={{
                    height: "100%",
                    width: "100%",
                    margin: "10%",
                  }}
                >
                  <img
                    src={Mahima_img}
                    style={{ width: "100%", height: "98%" }}
                    alt="Mahima"
                  />
                </div>
              </div>
              <div className="col-md-6 col-sm-12 d-flex align-items-center">
                <div className="info">
                  <p>Mahima</p>
                  <p>Event Head</p>
                  <p>Final Yr IT</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="before_box">
          <div className=" box_for_core_members">
            <div className="row mb-5">
              <div className="col-md-6 col-sm-12 d-flex justify-content-center">
                <div
                  className="image"
                  style={{
                    height: "100%",
                    width: "100%",
                    margin: "10%",
                  }}
                >
                  <img
                    src={nandana_img}
                    style={{ width: "100%", height: "98%" }}
                    alt="Nandana"
                  />
                </div>
              </div>
              <div className="col-md-6 col-sm-12 d-flex align-items-center">
                <div className="info">
                  <p>Nandana Srinivasan</p>
                  <p>Event Head</p>
                  <p>Final Yr IT</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="before_box">
          <div className=" box_for_core_members">
            <div className="row mb-5">
              <div className="col-md-6 col-sm-12 d-flex justify-content-center">
                <div
                  className="image"
                  style={{
                    height: "100%",
                    width: "100%",
                    margin: "10%",
                  }}
                >
                  <img
                    src={sharan_img}
                    style={{ width: "100%", height: "98%" }}
                    alt="Sharan"
                  />
                </div>
              </div>
              <div className="col-md-6 col-sm-12 d-flex align-items-center">
                <div className="info">
                  <p>Krithik Sharan</p>
                  <p>Marketing &amp; Design Head</p>
                  <p>Final Yr IT</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <br />
      </div>
    </div>
  );
};
export default Edheads;
