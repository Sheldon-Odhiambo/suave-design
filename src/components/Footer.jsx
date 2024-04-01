import React from 'react';
import "../styles/Footer.css"
import logo from "../assets/slogo.png"

const Footer = () => {
  return (
    <div className="footer-container">
        <footer>
            <div className="row">
                <div className="col">
                    <img src={logo} className="logo" alt="" />
                    <p> our dynamic design company comprises a skilled team ready to transform visions into impactful designs. From local projects to ventures across Africa and globally, our professionals bring a versatile and creative touch to every endeavor. </p>
                </div>
                <div className="col">
                    <h3>Office <div className="underline"><span></span></div></h3>
                    <p>Amazing Road </p>
                    <p>Nairobi, Kenya</p>
                    <p className="email-id">suavedesign@gmail.com</p>
                    <p>+25725611196</p>
                </div>
                <div className="col">
                    <h3>Links <div className="underline"><span></span></div></h3>
                    <ul>
                        <li><a href=".index.html">Home</a></li>
                        <li><a href="./about.html">About</a></li>
                        <li><a href=".service.html">Service</a></li>
                        <li><a href="./faqs.html">Faqs</a></li>
                        <li><a href="./blogs.html">Blog</a></li>
                        <li><a href="./contact.html">Contact</a></li>
                    </ul>
                </div>
                <div className="col">
                    <h3>Newsletter <div className="underline"><span></span></div></h3>
                    <form>
                        <i className="fa-solid fa-envelope"></i>
                        <input type="email" placeholder="Enter your email id" required />
                        <button type="submit"><i className="fas fa-arrow-right"></i></button>
                    </form>
                    <div className="social-icons">
                        <i className="fab fa-whatsapp"></i>
                        <i className="fa-brands fa-twitter"></i>
                        <i className="fab fa-instagram"></i>
                        <i className="fa-brands fa-facebook-f"></i>
                    </div>
                </div>
            </div>
            <hr/>
            <p className="copyright">Suave Design 2023 - All Rights Reserved</p>
        </footer>
    </div>
  )
}

export default Footer;
