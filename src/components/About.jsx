import React from 'react'
import "../styles/About.css"
import Title from "./Title"
import about from "../assets/about.jpg"
// import Footer from './Footer'

const About = () => {
  return (

    <>   

      <div className="section">
        <div className="container">
            <div className="content-section">
                <div className="title">
                    <h1>About Us</h1>
                </div>
                <div className="content">
                    <h3>Creative Printing & Branding</h3>
                    <p>Based in Kenya, our dynamic design company comprises a skilled team ready to transform visions into impactful designs. From local projects to ventures across Africa and globally, our professionals bring a versatile and creative touch to every endeavor. Explore the intersection of innovation and expertise with our committed team, delivering design excellence that transcends borders.</p>
                    <div className="button">
                        <a href="https://www.instagram.com/suaveaccessories/">Read More</a>
                    </div>
                </div>
                {/* <div className="social">
                    <a href="https://www.instagram.com/suaveaccessories/"><i class="fa-brands fa-instagram"></i></a>
                    <a href="https://www.instagram.com/suaveaccessories/"><i class="fa-brands fa-x-twitter"></i></a>
                </div> */}
            </div>
            <div className="about-image">
                <img src={about} alt="" />
            </div>
        </div>
    </div>
    
    </>

    


  )
}

export default About
