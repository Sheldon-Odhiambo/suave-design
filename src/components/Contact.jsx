import React from 'react'
import "../styles/Contact.css"
import Title from './Title'

const Contact = () => {
  return (
    

    <>
    <Title title='Contact Us'/>

    <section className="contacts">

    
    <p className='contact-paragraph'>Any Request or remarks? Just write us a message!</p>
    
    {/* <p style="margin: -4rem auto 3rem;text-align:center; margin-top: 2rem;">Any question or remarks? Just write us a message!</p> */}
    
    <div className="contact-main-container">
        <div className="contact-info-container">
            <h2>Contact Information</h2>
            <p>Fill up the form and a member of the team will get back to you within 24hrs </p>
    
        <div className="contact-social-links">
            <a href="https://www.instagram.com/suaveaccessories/">
                <div className="contact-icon-background"><i class="fa-brands fa-facebook-f"></i></div><p>suave_accessories</p>
            </a>
            <a href="https://www.instagram.com/suaveaccessories/">
                <div className="contact-icon-background"><i class="fa-brands fa-instagram"></i></div><p>suaveaccessories</p>
    
            </a>
            
            <a href="">
                <div className="contact-icon-background"><i class="fa-regular fa-envelope"></i></div><p>suaveaccessories@gmail.com</p>
    
            </a>
            <a href="">
                <div className="contact-icon-background"><i class="fa-solid fa-phone"></i></div><p>+254(0)725611196</p>
    
            </a>
    
        </div>
        </div>
        <form  className="contact-form">
            <fieldset>    
                <label for="name">Full name</label>
                <input type="text" placeholder="name" name="name"/>
            </fieldset>
            <fieldset>
                <label for="email">Email</label>
                <input type="email" placeholder="name@gmail.com" name="email"/>
            </fieldset> 
            <fieldset>
                <label for="phone">Phone</label>
                <input type="text" placeholder="+254" name="phone number"/>
            </fieldset>
            <fieldset>
                <label for="subject">Subject</label>
                <input type="text" placeholder="subject" name="Subject"/>
            </fieldset>
            <fieldset>
                <label>Your Request</label>
                <textarea name="Message" placeholder="write your Request here" ></textarea>
            </fieldset>
            <button type="submit">Submit</button>
            
    
        </form>
    </div>
    </section>
   
    </>


  )
}

export default Contact
