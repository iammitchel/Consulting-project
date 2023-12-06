import React from 'react'
import Header from './Header'
// import about3 from "../img/about3.jpg"
// import about2 from "../img/about2.jpg";
import about4 from "../img/about4.jpg";
// import about5 from "../img/about5.jpg";

const about = () => {
  return (
    <div>
      <Header />
      <section id="about">
        <section id="about1">
          <h1>About Us</h1>
        </section>
        <section id="about3" className="section-p1">
          <p>
            Our dynamic team of seasoned professionals is dedicated to
            delivering unparalleled expertise across a spectrum of consulting
            services. Our consultants bring a rich tapestry of skills and
            insights to address the diverse needs of our clients. Our team
            excels in crafting comprehensive and strategic business plans
            tailored to each client's unique vision and objectives. From
            startups seeking funding to established enterprises planning
            expansion, we leverage our collective experience to provide roadmaps
            that inspire confidence among stakeholders.
          </p>
        </section>
        {/* <section id="about2">
          <div className="service-img">
            <img src={about3} alt="" />
          </div>
          <div className="service-text">
            <p>
              Our dynamic team of seasoned professionals is dedicated to
              delivering unparalleled expertise across a spectrum of consulting
              services. Our consultants bring a rich tapestry of skills and
              insights to address the diverse needs of our clients. Our team
              excels in crafting comprehensive and strategic business plans
              tailored to each client's unique vision and objectives. From
              startups seeking funding to established enterprises planning
              expansion, we leverage our collective experience to provide
              roadmaps that inspire confidence among stakeholders.
            </p>
          </div>
        </section>
        <section id="about2">
          <div className="service-text">
            <p>
              Our consultants are adept at delving into market dynamics,
              competitor landscapes, and emerging trends to provide insightful
              analyses. Our reports are characterized by meticulous research
              methodologies, clarity in presentation, and a focus on delivering
              actionable intelligence that empowers informed decision-making.
              Navigating the complexities of finance is second nature to our
              team. We employ advanced financial modeling techniques to create
              robust projections and conduct precise valuations.
            </p>
          </div>
          <div className="service-img">
            <img src={about2} alt="" />
          </div>
        </section>
        <section id="about2">
          <div className="service-img">
            <img src={about5} alt="" />
          </div>
          <div className="service-text">
            <p>
              Whether you're planning for growth, seeking investment, or
              evaluating opportunities, our financial experts ensure a solid
              foundation for strategic decision-making. Our design and content
              experts collaborate seamlessly to craft engaging and persuasive
              presentations. Tailored to resonate with your target audience, our
              presentations go beyond visuals to convey your company's story,
              vision, and value proposition effectively.
            </p>
          </div>
        </section> */}
        <section id="about2">
          <div className="service-text">
            <p>
              Collectively, the team at Ten Fibre Consulting is recognized for
              its adaptability, precision, and collaborative spirit. We are
              committed to excellence in every client engagement, leveraging our
              combined expertise to navigate challenges, seize opportunities,
              and drive transformative success.
              {/* Whether you're planning for growth, seeking investment, or
            evaluating opportunities, our financial experts ensure a solid
            foundation for strategic decision-making. Our design and content
            experts collaborate seamlessly to craft engaging and persuasive
            presentations. Tailored to resonate with your target audience, our
            presentations go beyond visuals to convey your company's story,
            vision, and value proposition effectively. Our consultants
            specialize in meticulous due diligence, ensuring a comprehensive
            understanding of potential risks and opportunities. Whether you're
            considering mergers, acquisitions, or strategic partnerships, our
            team conducts thorough investigations into legal, financial, and
            operational aspects, providing you with actionable insights to make
            informed decisions. Collectively, the team at Ten Fibre Consulting
            is recognized for its adaptability, precision, and collaborative
            spirit. We are committed to excellence in every client engagement,
            leveraging our combined expertise to navigate challenges, seize
            opportunities, and drive transformative success. */}
            </p>
          </div>
          <div className="service-img">
            <img src={about4} alt="" />
          </div>
        </section>
        {/* <section id='about2'>
        <p>
          Our dynamic team of seasoned professionals is dedicated to delivering
          unparalleled expertise across a spectrum of consulting services. With
          a collective experience spanning [total years] years, our consultants
          bring a rich tapestry of skills and insights to address the diverse
          needs of our clients. Our team excels in crafting comprehensive and
          strategic business plans tailored to each client's unique vision and
          objectives. From startups seeking funding to established enterprises
          planning expansion, we leverage our collective experience to provide
          roadmaps that inspire confidence among stakeholders. Our consultants
          are adept at delving into market dynamics, competitor landscapes, and
          emerging trends to provide insightful analyses. Our reports are
          characterized by meticulous research methodologies, clarity in
          presentation, and a focus on delivering actionable intelligence that
          empowers informed decision-making. Navigating the complexities of
          finance is second nature to our team. We employ advanced financial
          modeling techniques to create robust projections and conduct precise
          valuations. Whether you're planning for growth, seeking investment, or
          evaluating opportunities, our financial experts ensure a solid
          foundation for strategic decision-making. Our design and content
          experts collaborate seamlessly to craft engaging and persuasive
          presentations. Tailored to resonate with your target audience, our
          presentations go beyond visuals to convey your company's story,
          vision, and value proposition effectively. Our consultants specialize
          in meticulous due diligence, ensuring a comprehensive understanding of
          potential risks and opportunities. Whether you're considering mergers,
          acquisitions, or strategic partnerships, our team conducts thorough
          investigations into legal, financial, and operational aspects,
          providing you with actionable insights to make informed decisions.
          Collectively, the team at Ten Fibre Consulting is recognized for its
          adaptability, precision, and collaborative spirit. We are committed to
          excellence in every client engagement, leveraging our combined
          expertise to navigate challenges, seize opportunities, and drive
          transformative success.
        </p>
        <HashLink to="/#contact-us" smooth style={{ textDecoration: "none" }}>
          <button>Get in Touch</button>
        </HashLink>
      </section> */}
      </section>
      <footer>
        <p>©2023 by Ten Fibre Consulting</p>
      </footer>  
    </div>
  );
}

export default about