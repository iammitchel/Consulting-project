import React from 'react'
import "./index.css"
import { NavLink } from "react-router-dom";
import { FaLinkedinIn } from "react-icons/fa6";
import "@fontsource/poppins";
import THH from '../img/THH.jpeg'
import { HashLink } from "react-router-hash-link";
const Header = () => {

  // function handleScroll() {
  //   window.scroll({
  //     top: document.body.offsetHeight,
  //     left: 0,
  //     behavior: "smooth",
  //   });
  // }
  return (
    <>
      <section id="header" className="section-p1">
        <div id="header1">
          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: "10px",
            }}
          >
            <img src={THH} alt="" />
            <div className="text">
              <h2> Ten Fibre Consulting</h2>
              <p>Stay ahead with our suite of consulting services</p>
            </div>
          </div>
          <div>
            <HashLink
              to="/#contact-us"
              smooth
              style={{ textDecoration: "none" }}
            >
              <button>Get in Touch</button>
            </HashLink>
          </div>
        </div>
        <div id="header2">
          <div className="navbar">
            <NavLink style={{ textDecoration: "none" }} to="/">
              <h5>Home</h5>
            </NavLink>
            <NavLink style={{ textDecoration: "none" }} to="/services">
              <h5>Services</h5>
            </NavLink>
            <NavLink style={{ textDecoration: "none" }} to="/about">
              <h5>About</h5>
            </NavLink>
            <HashLink
              to="/#contact-us"
              smooth
              style={{ textDecoration: "none" }}
            >
              <h5>Contact</h5>
            </HashLink>

            {/* <div onClick={handleScroll}
            style={{cursor:'pointer'}}>
              <h5>Contact</h5>
            </div> */}
            {/* <NavLink style={{ textDecoration: "none" }} to="/challenges">
              <h5 >Contact</h5>
            </NavLink> */}
          </div>
          <div style={{ marginTop: "15px" }}>
            <FaLinkedinIn />
          </div>
        </div>
      </section>
    </>
  );
}

export default Header