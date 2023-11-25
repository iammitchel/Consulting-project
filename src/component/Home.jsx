import React from 'react'
import "./index.css";
import video from "../img/1.mp4"
import img from "../img/consulting.jpg"
import { FaBusinessTime } from "react-icons/fa6";
import { GiArchiveResearch } from "react-icons/gi";
import { IoIosBusiness } from "react-icons/io";
import { FcBusinessman } from "react-icons/fc";
import { TbCalendarDue } from "react-icons/tb";

import Header from './Header'

const Home = () => {
  const style = { fontSize: "680%"};
  return (
    <div>
      <Header />
      <section id="home">
        <div id="home-info">
          <div id="content" className="section-p1">
            <h1>
              Ten <br /> Fibre <br /> Consulting
            </h1>
            <p>
              We are a full-service consulting firm that specializes in
              providing our clients insightful and unique consulting services to
              meet their various requirements. Our analyses are insightful,
              revealing and targeted to address our client’s specific needs. We
              have decades of practical consulting experience and we leverage
              this experience to our client’s advantage. We are able to leverage
              a large number of industry experts to deliver the best output for
              our client’s requirements <br />
              <br />
              25 + professional consultants and industry experts 100 +
              Successful projects 50+ Industries Covered Core values: <br />
              <br />- Quality services <br /> - Attention to detail <br /> -
              Client satisfaction <br /> - Confidentiality
            </p>
          </div>
          <div id="video">
            <video src={video} autoPlay loop muted />
          </div>
        </div>
      </section>

      <section id="services">
        <div>
          <FaBusinessTime style={style} />
          <h2>Business plan preparation </h2>
          <button>Learn More</button>
        </div>
        <div>
          <GiArchiveResearch style={style} />
          <h2>Research report preparation </h2>
          <button>Learn More</button>
        </div>
        <div>
          <IoIosBusiness style={style} />
          <h2 style={{ marginTop: "120px" }}>
            Financial modelling and valuation{" "}
          </h2>
          <button>Learn More</button>
        </div>
        <div>
          <FcBusinessman style={style} />
          <h2 style={{ marginTop: "120px" }}>
            Investor and corporate presentations{" "}
          </h2>
          <button>Learn More</button>
        </div>
        <div>
          <TbCalendarDue style={style} />
          <h2>Company Due Diligence </h2>
          <button>Learn More</button>
        </div>
      </section>
      <section id="training">
        <img src={img} alt="" />
      </section>

      <section id="contact-us">
        <div className="contact-info">
          <h1>Contact Us</h1>
          <p>info@tenfibreconsulting.com</p>
          <p>+23480….</p>
        </div>
        <div>
          <form action="">
            <input type="text" placeholder="Name" />
            <input type="text" placeholder="Email" />
            <input type="text" placeholder="Phone" />
            <input type="text" placeholder="Subject" />
            <textarea
              name=""
              placeholder="Type your message here"
              id=""
              cols="30"
              rows="10"
            ></textarea>
          </form>
          <button>Submit</button>
        </div>
      </section>

      <section id="footer">
        <p>©2023 by Ten Fibre Consulting</p>
      </section>
    </div>
  );
}

export default Home