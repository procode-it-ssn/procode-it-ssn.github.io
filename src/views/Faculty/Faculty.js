import React from "react";
import "./Faculty.css";
import Fac_img from "../../img/dr_tss.jpg";
export const Faculty = () => {
  return (
    <div className="bgColor">
      <div className="intro-container py-1">
        <div className="intro-logo">
          <div
            className="logo"
            style={{
              background: `url(${Fac_img}) no-repeat center center/contain`,
              height: "100%",
              width: "50%",
              display: "inline-block",
            }}
          ></div>
          <div className="intro">
            <p>
              Dr. T. Sree Sharmila<br></br>
              M.E., Ph.D.<br></br>
              Associate Professor<br></br>
              Email: sreesharmilat@ssn.edu.in<br></br>
              Extn: 376<br></br>
            </p>
          </div>
        </div>
        <div className="intro-text">
          <p className="my-2 item-text">
            Dr. T. Sree Sharmila obtained her Ph.D. degree from Anna University,
            Chennai under the Faculty of Information and Communication
            Engineering in July 2013. She completed her Master of Engineering in
            Computer Science and Engineering from Annamalai University,
            Chidambaram during June 2005 and her Bachelor of Engineering in
            Information Technology from Manonmaniam Sundaranar University,
            Tirunelveli during June 2003. She joined SSNCE in June 2005 as a
            lecturer in the department of Information Technology. Her current
            research areas of interest include computer vision, image processing
            and machine learning techniques. To her credit she has published
            more than 95 papers in international and national journals and
            conferences. She is a recognized Anna University research supervisor
            to guide Ph.D./M.S. candidates. Under her guidance, 8 Ph.D. scholars
            are doing their active research in the area of image and video
            processing. She has organized many externally/internally funded
            conferences/workshops and seminars at national and international
            level. She is a member of the professional societies, including ACM
            and IEEE. She is SSN-IEEE student branch counselor, Associate
            Program Officer of YRC events and one of the deputy wardens of
            ladies hostel, SSNCE.
          </p>
          <p className="my-2 item-text">
            Honors And Awards Received <br></br> <br></br>
            <ul>
              <li>
                {" "}
                1) Received IEEE Outstanding Branch Counselor and Branch Chapter
                Advisor Award 2019 by IEEE Member and Geographic Activities, USA{" "}
              </li>
              <li>
                {" "}
                2) Received Outstanding Student Branch Counselor Award during
                2017, 2018 and 2019 from IEEE Madras Section.{" "}
              </li>
              <li>
                {" "}
                3) Received International Travel Support (ITS) from DST (Young
                scientist) for presenting the paper in IEEE TENCON 2016 at
                Marina Bay Sand, Singapore during November 2016.{" "}
              </li>
              <li>
                {" "}
                4) Received Young Women Achiever Award by Venus International
                Foundation on March 5, 2016{" "}
              </li>
              <li>
                {" "}
                5) Recognised as a Teacher par Excellence for the academic year
                2008-2009, 2012-2013, 2013-2014, 2014-2015, 2016-2017 and
                2017-2018 by the Management of the SSN Institutions during the
                Teacher’s day celebrations{" "}
              </li>
            </ul>
          </p>
          <p className="my-2 item-text">
            Research Project Details <br></br> <br></br>
            1) Title : Developing efficient technique for underwater acoustic
            images <br></br>
            <br></br>
            Funding Agency : SSN Trust <br></br>
            <br></br>
            Investigator : Dr. T. Sree Sharmila <br></br>
            Duration : Oct 2014-Mar 2016 <br></br>
            Amount : 3 Lakhs <br></br>
            <br></br>
            2) Title : Lie detection – An integrated approach <br></br>
            <br></br>
            Funding Agency : SSN Trust <br></br>
            <br></br>
            Investigator : Dr. T. Sree Sharmila <br></br>
            Duration : Oct 2017-Mar 2019 <br></br>
            Amount : 3.5 Lakhs <br></br>
            <br></br>
            <br></br>
            International Journals: 34 <br></br>
            International Conferences: 61 <br></br>
            <br></br>
            <a
              className="fac-prof-link"
              href="https://www.linkedin.com/in/sree-sharmila-443710a0/?originalSubdomain=in"
            >
              Linkedin Profile
            </a>
            <br></br>
            <br></br>
            <a
              className="fac-prof-link"
              href="https://scholar.google.com/citations?user=SSGOx8kAAAAJ&hl=en"
            >
              Google scholar Profile
            </a>
          </p>
        </div>
      </div>
    </div>
  );
};
export default Faculty;
