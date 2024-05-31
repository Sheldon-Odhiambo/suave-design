import React, { useRef, useEffect } from 'react';
import { Link } from 'react-router-dom';
import service1 from '../assets/serv4.jpg';
import service2 from '../assets/serv2.jpg';
import service3 from '../assets/serv3.jpg';
import service4 from '../assets/serv4.jpg';
import "../styles/Home.css";

const Home = () => {
  const el = useRef(null);

  // Uncomment and use Typed.js if needed
  // useEffect(() => {
  //   const typed = new Typed(el.current, {
  //     strings: ['Divergent and Convergent Thinking', 'Iteration Process'],
  //     stringsElement: null,
  //     typeSpeed: 30,
  //     startDelay: 1200,
  //     backSpeed: 20,
  //     backDelay: 2500,
  //     loop: true,
  //     cursorChar: '|',
  //     contentType: 'html',
  //   });

  //   return () => {
  //     typed.destroy();
  //   };
  // }, []);

  return (
    <section className='home-container'>
      <div className="home-content">
        <div className="info">
          <h2>Suave Design</h2>
          <h3>Where we! <span ref={el} className="change-content"></span></h3>
          <p>
            Creative printing and branding encompass the art of strategically communicating a brand's identity and message through visually compelling designs and printed materials. In the realm of creative printing, innovative techniques and materials are utilized to produce eye-catching promotional items, signage, packaging, and more. This involves leveraging graphic design principles, typography, color schemes, and imagery to create impactful visuals that resonate with target audiences.
          </p>
        </div>
      </div>

      <div className="image-container">
        <div className="image-grid">
          <div className="image-item">
            <img src={service1} alt="Image 1" />
            <p>Photography</p>
          </div>
          <div className="image-item">
            <img src={service2} alt="Image 2" />
            <p>Software Engineering</p>
          </div>
          <div className="image-item">
            <img src={service3} alt="Image 3" />
            <p>Branding</p>
          </div>
          <div className="image-item">
            <img src={service4} alt="Image 4" />
            <p>Marketing</p>
          </div>
        </div>
        <div className="more-info">
          <p>We've got plenty more! 🌟</p>
          <Link to="/service" className="view-all-btn">View All</Link>
        </div>
      </div>
    </section>
  );
};

export default Home;
