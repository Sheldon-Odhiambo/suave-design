import React, {useRef, useEffect} from 'react'
import service1 from "../assets/serv4.jpg"
import service2 from "../assets/serv2.jpg"
import service3 from "../assets/serv3.jpg"
import service4 from "../assets/serv4.jpg"
import about from "../assets/about.jpg"

// import Typed from 'typed.js'
import "../styles/House.css"

const House = () => {

  const el = useRef(null);

//   useEffect(() => {
//     const typed = new Typed(el.current, {
//       strings: ['Divergent and Convergent Thinking', 'Iteration Process'],
//       stringsElement: null,
//       // typing speed
//       typeSpeed: 30,
//       // time before typing starts
//       startDelay: 1200,
//       // backspacing speed
//       backSpeed: 20,
//       // time before backspacing
//       backDelay: 2500,
//       // loop
//       loop: true,
//       // false = infinite
//       // loopCount: 5,
// // character for cursor
//       cursorChar: '|',
//       // attribute to type (null == text)
//       attr: null,
//       // either html or text
//       contentType: 'html',
//       // call when done callback function
//     });

//     // Destropying
//     return () => {
//       typed.destroy();
//     };
//   }, []);

  return (
    <section className='house-container'> 

    
      
      <div className="house-content">
        <div className="info">
          <h2>Suave Design</h2>
          <h3>Where we! <span ref={el}className="change-content"></span></h3>


          <p>Creative printing and branding encompass the art of strategically communicating a brand's identity and message through visually compelling designs and printed materials. In the realm of creative printing, innovative techniques and materials are utilized to produce eye-catching promotional items, signage, packaging, and more. This involves leveraging graphic design principles, typography, color schemes, and imagery to create impactful visuals that resonate with target audiences. </p>

          {/* <a href="" className='info-btn'>See more</a> */}
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
                <p>We have plenty more! 🌟</p>
                <button className="view-all-btn">View All</button>
            </div>
        </div>
      

    </section>
  )
}

export default House
