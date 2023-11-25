import React from 'react'
import "./index.css"
import { NavLink } from "react-router-dom";
import { FaLinkedinIn } from "react-icons/fa6";
import "@fontsource/poppins";
import THH from '../img/THH.jpeg'
const Header = () => {
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
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
            </div>
          </div>
          <div>
            <button>Get In Touch</button>
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
            <NavLink style={{ textDecoration: "none" }} to="/challenges">
              <h5>Contact</h5>
            </NavLink>
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