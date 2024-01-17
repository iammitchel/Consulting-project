import React, { useState } from "react";
// import emailjs from "@emailjs/browser";
import "./index.css";
import video from "../img/3.mp4";
import service1 from "../img/service1.jpg";
import { FaBusinessTime } from "react-icons/fa6";
import { GiArchiveResearch } from "react-icons/gi";
import { IoIosBusiness } from "react-icons/io";
import { FcBusinessman } from "react-icons/fc";
import { TbCalendarDue } from "react-icons/tb";
import { HashLink } from "react-router-hash-link";

import Header from "./Header";

const Home = () => {
  // const form = useRef("");

  const [formState, setFormState] = useState({});

  const changeHandler = (event) =>{
    setFormState({...formState, [event.target.name]: event.target.value})
  }

 

  // const submitHandler = (event) =>{
  //   event.preventDefault();
  //    const config = {
  //      SecureToken: "4992dc8c-84b6-4501-a578-c482e427bf2b",
  //      To: "jarod@tenfibre.com",
  //      From: formState.email,
  //      Subject: `${formState.subject}`,
  //     //  Phone: `${formState.number}`,
  //      Body: `${formState.message}`,
  //    };
  //    if(window.Email) {
  //     window.Email.send(config).then(() => alert("email sent succesfully"));
  //    }
  // }

  // const sendEmail = (e) => {
  //   e.preventDefault();

  //   emailjs
  //     .sendForm(
  //       "service_ja5nca1",
  //       "template_hbsabcn",
  //       form.current,
  //       "SH_wEedln_lHQZt93"
  //     )
  //     .then(
  //       (result) => {
  //         console.log(result.text);
  //         form.current.reset();
  //       },
  //       (error) => {
  //         console.log(error.text);
  //         form.current.reset();
  //       }
  //     );
  // };

  const style = { fontSize: "680%" };
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
              We have over 25 consultants who have completed over 100 consulting
              projects across Africa, Europe and Asia <br /> <br /> Core values:
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
          <HashLink
            to="/services#service2a"
            smooth
            style={{ textDecoration: "none" }}
          >
            <button>Learn More</button>
          </HashLink>
        </div>
        <div>
          <GiArchiveResearch style={style} />
          <h2>Research report preparation </h2>
          <HashLink
            to="/services#service2b"
            smooth
            style={{ textDecoration: "none" }}
          >
            <button>Learn More</button>
          </HashLink>
        </div>
        <div>
          <IoIosBusiness style={style} />
          <h2 style={{ marginTop: "100px" }}>
            Financial modelling and valuation{" "}
          </h2>
          <HashLink
            to="/services#service2c"
            smooth
            style={{ textDecoration: "none" }}
          >
            <button>Learn More</button>
          </HashLink>
        </div>
        <div>
          <FcBusinessman style={style} />
          <h2 style={{ marginTop: "70px" }}>
            Investor and corporate presentations{" "}
          </h2>
          <HashLink
            to="/services#service2d"
            smooth
            style={{ textDecoration: "none" }}
          >
            <button>Learn More</button>
          </HashLink>
        </div>
        <div>
          <TbCalendarDue style={style} />
          <h2>Company Due Diligence </h2>
          <HashLink
            to="/services#service2e"
            smooth
            style={{ textDecoration: "none" }}
          >
            <button>Learn More</button>
          </HashLink>
        </div>
      </section>
      <section id="training">
        <div className="service-text">
          <h1>Corporate Trainings:</h1>
          <p>
            • Business Plan Trainings <br />
            • Financial Modelling Trainings <br />• Microsoft
            Office Suite Trainings
          </p>
        </div>
        <div className="service-img">
          <img src={service1} alt="" />
        </div>
      </section>

      <section id="contact-us">
        <div className="contact-info">
          <h1>Contact Us</h1>
          <p>jarod@tenfibre.com</p>
          <p>+234 703 129 2497</p>
          <p>7, Haruna Street, Karu, Abuja-FCT, Nigeria.</p>
        </div>
        <div>
          {/* <form ref={form} onSubmit={submitHandler}> */}
          <form method="POST" name="contact" netlify>
            {/* <label>Name</label> */}
            <input
              type="text"
              name="name"
              placeholder="Name"
              onChange={changeHandler}
              
            />
            {/* <label>Email</label> */}
            <input
              type="email"
              name="email"
              placeholder="Email"
              onChange={changeHandler}
          
            />
            {/* <label>Subject</label> */}
            <input
              type="text"
              name="subject"
              placeholder="Subject"
              onChange={changeHandler}
              
            />
            {/* <label>Phone</label> */}
            {/* <input
              type="number"
              name="number"
              placeholder="Phone"
              onChange={changeHandler}
              value={formState.number || ""}
            /> */}
            {/* <label>Message</label> */}
            <textarea
              name="message"
              placeholder="Message"
              onChange={changeHandler}
              // value={formState.message || ""}
            />
            <input type="Submit" value="Send" />
          </form>
          {/* <button>Submit</button> */}
        </div>
      </section>

      <footer>
        <p>©2023 by Ten Fibre Consulting</p>
      </footer>
    </div>
  );
};

export default Home;
