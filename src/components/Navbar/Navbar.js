import React from "react";
import "./navbar.css";
import Ssn_img from "../../img/ssnlogo1.png";

export const Navbar = () => {
  return (
    // <nav className="navbar">
    //   <ul className="navlinks">
    //     <li>
    //       <a href="/" className="navlink">
    //         Home
    //       </a>
    //     </li>
    //     <li>
    //       <a href="/faculty" className="navlink">
    //         The Faculty
    //       </a>
    //     </li>
    //     <li>
    //       <a href="/team" className="navlink">
    //         The Team
    //       </a>
    //     </li>
    //     <li>
    //       <a href="/events" className="navlink">
    //         Events
    //       </a>
    //     </li>
    //     <li>
    //       <a href="/past" className="navlink">
    //         Past Sessions
    //       </a>
    //     </li>
    //   </ul>
    // </nav>

    <nav className="navbar navbar-expand-lg sticky-top navbar-dark bg-dark">
      <div className="container">
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0 w-100 justify-content-around">
            <li className="nav-item">
              <a className="nav-link active" href="https://www.ssn.edu.in">
                <img src={Ssn_img} alt="logo-img" width="50" height="25"></img>
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link active" href="/">
                Home
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="/faculty">
                The Faculty
              </a>
            </li>
            <li className="nav-item dropdown">
              <div
                className="nav-link dropdown-toggle"
                id="navbarDropdown"
                role="button"
                data-bs-toggle="dropdown"
              >
                The Team
              </div>
              <ul className="dropdown-menu">
                <li>
                  <a className="dropdown-item" href="/office">
                    Office Bearers
                  </a>
                </li>
                <li>
                  <a className="dropdown-item" href="/theads">
                    Team Heads
                  </a>
                </li>
                <li>
                  <a className="dropdown-item" href="/edheads">
                    Event and Design Heads
                  </a>
                </li>
                <li>
                  <a className="dropdown-item" href="/core">
                    Core Team Members
                  </a>
                </li>
              </ul>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="/events">
                Events
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};
