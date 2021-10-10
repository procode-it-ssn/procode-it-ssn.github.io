import React from "react";
import "./Office.css";
import Akar_img from "../../img/akarvin2.jpg";
import Harris_img from "../../img/harrison.jpg";
export const Office = () => {
  return (
    <div className="parallax2">
      <h1 align="center" className="py-4">
        OFFICE BEARERS
      </h1>
      <div>
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
                    src={Akar_img}
                    style={{ width: "100%", height: "98%" }}
                    alt="Akarvin"
                  />
                </div>
              </div>
              <div className="col-md-6 col-sm-12 d-flex align-items-center">
                <div className="info">
                  <p>Akarvin Raja Prajan</p>
                  <p>President</p>
                  <p>Final Year IT</p>
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
                    src={Harris_img}
                    style={{ width: "100%", height: "98%" }}
                    alt="Harrison"
                  />
                </div>
              </div>
              <div className="col-md-6 col-sm-12 d-flex align-items-center">
                <div className="info">
                  <p>Harrison Vijay</p>
                  <p>Vice President</p>
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
export default Office;
