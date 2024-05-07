import React from 'react'
import '../styles/Footer.css'
import logo from '../assets/slogo.png'

const Footer = () => {
  return (

    <footer>
    <div className='footer-container'>
      <div className='footer-section'>
        <h3 className='footer-section-title'>About Us</h3>
        <section className='footer-section-title-underline'>
          <hr className='underline-orange' />
          <hr className='underline-grey' />
        </section>
        <img src= {logo} className='footer-logo'alt='suave design logo'/>
        <p> our dynamic design company comprises a skilled team ready to transform visions into impactful designs. From local projects to ventures across Africa and globally, our professionals bring a versatile and creative touch to every endeavor. </p>
        <section className='footer-socials'>
          <a
            href='https://web.facebook.com/profile.php?id=100091794979978'
            className='footer-icon-container'
            target='_blank'
          >
            <i className='fa-brands fa-facebook-f'></i>
          </a>
          <a
            href='https://twitter.com/interfoxInc'
            className='footer-icon-container'
            target='_blank'
          >
            <i className='fa-brands fa-twitter'></i>
          </a>
          <a
            href='https://www.linkedin.com/company/interfox-networks-limited/'
            className='footer-icon-container'
            target='_blank'
          >
            <i className='fa-brands fa-linkedin-in'></i>
        </a>
          <a
            href='mailto:sc3s@gmail.com'
            className='footer-icon-container'
          >
            <i className='fa-solid fa-envelope'></i>
          </a>
          <a href='tel:+2547246558548' className='footer-icon-container'>
            <i className='fa-solid fa-phone'></i>
          </a>
        </section>
      </div>
      <div className='footer-section'>
        <h3 className='footer-section-title'>Company</h3>
        <section className='footer-section-title-underline'>
          <hr className='underline-orange' />
          <hr className='underline-grey' />
        </section>
        <section className='footer-links'>
          <a href='./index.html'>Home</a>
          <a href='./about.html'>About Us</a>
          <a href='./services.html'>Services</a>
          <a href='./faqs.html'>Faqs</a>
          <a href='./contact.html'>Contact</a>
        </section>
      </div>
      <div className='footer-section'>
        <h3 className='footer-section-title'>Contacts</h3>
        <section className='footer-section-title-underline'>
          <hr className='underline-orange' />
          <hr className='underline-grey' />
        </section>
        <address className='footer-links'>
          <p>Suave Design</p>
          <p>Nairobi, Kenya</p>
          <p>+25725611196</p>
        </address>
      </div>
      <div className='footer-section'>
        <h3 className='footer-section-title'>Useful Links</h3>
        <section className='footer-section-title-underline'>
          <hr className='underline-orange' />
          <hr className='underline-grey' />
        </section>
        <section className='footer-links'>
          <a href='/privacy-policy'>Privacy Policy</a>
          <a href='/faqs'>Faqs</a>
          <a href='/covid-19-pandemic'>Covid-19 Response</a>
        </section>
      </div>
    </div>
    <hr id='footer-copyright-seperator' />
    <section className='footer-copyright'>
      Copyright 2024 &copy; Suave Design
    </section>
  </footer>


  )
}

export default Footer