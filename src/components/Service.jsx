import React from 'react'
import "../styles/Service.css"
import service1 from "../assets/serv1.jpg"
import service2 from "../assets/serv2.jpg"
import service3 from "../assets/serv3.jpg"
import service4 from "../assets/serv4.jpg"
import service5 from "../assets/serv5.jpg"
import Title from "./Title"
// import Footer from "./Footer"

const Service = () => {
  return (


    <>

<Title title='Our Service'/>


 <div className="service-main-container">
    
    <section   className="our-digital-container">
      <div className="our-digital-text">
        <h3>Suave Design</h3>
        <h2>Digital design services</h2>
        <p>'Transform your online presence with our comprehensive digital design services, tailored to engage your audience effectively. Our offerings encompass website design, user interface (UI) design, user experience (UX) design, and interactive media creation. From crafting visually stunning websites and intuitive interfaces to optimizing user journeys and creating dynamic multimedia content, we elevate your brand in the digital realm. Examples of our work include sleek websites, intuitive UI elements, optimized UX flows, and engaging multimedia presentations. With a focus on creativity, innovation, and client satisfaction, our team delivers tailored digital design solutions that drive results.'</p>

      </div>
      <img src={service1} alt="" />
    </section>

    <section   className="our-print-container">
      <div className="our-print-text">
        <h2>Printing Design</h2>
        <p>Elevate your brand's visual identity with our comprehensive printing design services, tailored to make a lasting impression. Our offerings encompass a wide range of print materials, including business cards, brochures, flyers, posters, and packaging design. From conceptualization to final production, our skilled designers ensure that every print piece reflects your brand's personality and messaging effectively. Examples of our work include eye-catching business cards, informative brochures, captivating flyers, attention-grabbing posters, and appealing packaging designs. With a focus on quality, creativity, and attention to detail, we deliver print designs that stand out and leave a memorable impact.</p>
      </div>
      <img src={service2} alt="" />
    </section>

    <section   className="our-brand-container">
      <div className="our-brand-text">
        <h2>Branding</h2>
        <p>Suave Design specializes in crafting distinctive and impactful branding solutions that elevate businesses and leave a lasting impression. Our comprehensive branding services encompass logo design, brand identity development, and brand strategy consultation. We work closely with our clients to understand their unique values, vision, and target audience, allowing us to create cohesive and memorable brand identities that resonate with their customers. From conceptualization to implementation, we ensure that every aspect of the brand experience reflects the essence of the business and helps differentiate it from competitors. With a focus on creativity, innovation, and strategic thinking, Suave Design helps businesses build strong and enduring brands that stand out in today's competitive marketplace.</p>
      </div>
      <img src={service3} alt="" />
    </section>

    <section   className="our-photography-container">
      <div className="our-photography-text">
        <h2>Photography</h2>
        <p>Suave Design offers professional photography services to complement our comprehensive design solutions. Our experienced photographers capture stunning images that tell a story, evoke emotions, and enhance your brand's visual identity. Whether you need product photography, corporate headshots, event coverage, or lifestyle photos, our skilled team delivers high-quality images that align with your brand's aesthetic and messaging. With a keen eye for detail and a commitment to excellence, we ensure that every photograph reflects the essence of your brand and resonates with your target audience. Partner with Suave Design for captivating photography that elevates your brand and makes a lasting impression.</p>
      </div>
      <img src={service4} alt="" />
    </section>

    <section   className="our-consultation-container">
      <div className="our-consultation-text">
        <h2>Consultation service</h2>
        <p>Suave Design offers professional photography services to complement our comprehensive design solutions. Our experienced photographers capture stunning images that tell a story, evoke emotions, and enhance your brand's visual identity. Whether you need product photography, corporate headshots, event coverage, or lifestyle photos, our skilled team delivers high-quality images that align with your brand's aesthetic and messaging. With a keen eye for detail and a commitment to excellence, we ensure that every photograph reflects the essence of your brand and resonates with your target audience. Partner with Suave Design for captivating photography that elevates your brand and makes a lasting impression.</p>
      </div>
      <img src={service5} alt="" />
    </section>

    <section   className="our-promotion-container">
      <div className="our-promotion-text">
        <h2>Promotional Products</h2>
        <p>Suave Design offers professional photography services to complement our comprehensive design solutions. Our experienced photographers capture stunning images that tell a story, evoke emotions, and enhance your brand's visual identity. Whether you need product photography, corporate headshots, event coverage, or lifestyle photos, our skilled team delivers high-quality images that align with your brand's aesthetic and messaging. With a keen eye for detail and a commitment to excellence, we ensure that every photograph reflects the essence of your brand and resonates with your target audience. Partner with Suave Design for captivating photography that elevates your brand and makes a lasting impression.</p>
      </div>
      <img src={service1} alt="" />
    </section>

    <section   className="our-consultation-container">
      <div className="our-consultation-text">
        <h2>Web Development</h2>
        <p>Suave Design offers professional photography services to complement our comprehensive design solutions. Our experienced photographers capture stunning images that tell a story, evoke emotions, and enhance your brand's visual identity. Whether you need product photography, corporate headshots, event coverage, or lifestyle photos, our skilled team delivers high-quality images that align with your brand's aesthetic and messaging. With a keen eye for detail and a commitment to excellence, we ensure that every photograph reflects the essence of your brand and resonates with your target audience. Partner with Suave Design for captivating photography that elevates your brand and makes a lasting impression.</p>
      </div>
      <img src={service5} alt="" />
    </section>


    
  
  </div>

  </>



  )
}

export default Service
