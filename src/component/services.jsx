import React from 'react'
import Header from './Header'
import service1 from "../img/service1.jpg";
import service2 from "../img/service2.jpg";
import service3 from "../img/service3.jpg";
import service4 from "../img/service4.jpg";
import service5 from "../img/service5.jpg";
import service6 from "../img/service6.jpg";
import "./index.css";
import { HashLink } from "react-router-hash-link";

const services = () => {
  return (
    <div>
      <Header />
      <section id="service">
        <div className="service-text">
          <h1>Our Services</h1>
          <p>Cost-effective services to drive your growth</p>
        </div>
        <div className="service-img">
          <img src={service1} alt="" />
        </div>
      </section>

      <section id="service2a" className='service2'>
        <div className="service-img">
          <img src={service3} alt="" />
        </div>
        <div className="service-text">
          <h1>Business Plan Preparation:</h1>
          <p>
            Elevate your business vision with our comprehensive business plan
            preparation service. We specialize in crafting strategic,
            well-researched business plans tailored to your unique goals and
            industry landscape. Our team collaborates closely with you to
            articulate your mission, outline market opportunities, delineate
            competitive advantages, and develop detailed financial projections.
            Whether you're a startup seeking funding or an established business
            aiming for growth, our business plans serve as dynamic roadmaps to
            guide your success.
          </p>
          <HashLink to="/#contact-us" smooth style={{ textDecoration: "none" }}>
            <button>Get in Touch</button>
          </HashLink>
        </div>
      </section>
      <section id="service2b" className='service2'>
        <div className="service-text">
          <h1>Research Report Preparation:</h1>
          <p>
            Uncover actionable insights and stay ahead of industry trends with
            our meticulous research report preparation service. We delve deep
            into market dynamics, competitor landscapes, and emerging
            opportunities to provide you with in-depth analyses that inform
            critical business decisions. Our reports are characterized by
            rigorous research methodologies, clarity in presentation, and a
            focus on delivering valuable, data-driven perspectives that empower
            you to make informed strategic choices.
          </p>
          <HashLink to="/#contact-us" smooth style={{ textDecoration: "none" }}>
            <button>Get in Touch</button>
          </HashLink>
        </div>
        <div className="service-img">
          <img src={service4} alt="" />
        </div>
      </section>
      <section id="service2c" className='service2'>
        <div className="service-img">
          <img src={service5} alt="" />
        </div>
        <div className="service-text">
          <h1>Financial Modelling and Valuation:</h1>
          <p>
            Navigate the complexities of finance with confidence through our
            expert financial modeling and valuation service. Our skilled
            financial analysts leverage advanced modeling techniques to create
            robust financial models that project future performance and assess
            the impact of various scenarios. Additionally, we offer precise
            valuation services, helping you understand the true worth of your
            business, assets, or investment opportunities. Whether you're
            planning for expansion, investment, or acquisition, our financial
            expertise ensures a solid foundation for strategic decision-making.
          </p>
          <HashLink to="/#contact-us" smooth style={{ textDecoration: "none" }}>
            <button>Get in Touch</button>
          </HashLink>
        </div>
      </section>
      <section id="service2d" className='service2'>
        <div className="service-text">
          <h1>Investor and Corporate Presentations:</h1>
          <p>
            Make a compelling impact on investors, partners, and stakeholders
            with our captivating investor and corporate presentations. Our
            design and content experts collaborate to create visually appealing,
            persuasive presentations that effectively communicate your company's
            story, vision, and value proposition. We tailor each presentation to
            resonate with your target audience, incorporating engaging visuals
            and clear messaging to leave a lasting impression and support your
            goals, whether it's fundraising, partnership development, or
            internal communication.
          </p>
          <HashLink to="/#contact-us" smooth style={{ textDecoration: "none" }}>
            <button>Get in Touch</button>
          </HashLink>
        </div>
        <div className="service-img">
          <img src={service2} alt="" />
        </div>
      </section>
      <section id="service2e" className='service2'>
        <div className="service-img">
          <img src={service6} alt="" />
        </div>
        <div className="service-text">
          <h1>Company Due Diligence:</h1>
          <p>
            Ensure a thorough understanding of potential risks and opportunities
            with our meticulous company due diligence service. Whether you're
            considering a merger, acquisition, or strategic partnership, our
            experienced team conducts comprehensive investigations into the
            legal, financial, and operational aspects of target companies. We
            provide detailed reports highlighting potential issues, synergies,
            and value drivers, empowering you to make informed decisions and
            mitigate risks. Our due diligence services are designed to safeguard
            your interests and enhance the success of your business
            transactions.
          </p>
          <HashLink to="/#contact-us" smooth style={{ textDecoration: "none" }}>
            <button>Get in Touch</button>
          </HashLink>
        </div>
      </section>
      <section id="footer">
        <p>©2023 by Ten Fibre Consulting</p>
      </section>
    </div>
  );
}

export default services