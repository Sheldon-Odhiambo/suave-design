import React from 'react';
import '../styles/Contact.css';

const Contact = () => {
  return (
    <div className="contact-page">
      <main className="main-content">
        <section className="hero">
          <h1>We're here to listen.</h1>
          <p>We create customized programs that blend proven strategies with tactical instruction for guaranteed results.</p>
          <a href="#schedule" className="schedule-link">Schedule a meeting now</a>
        </section>
        <div className="form-container">
          <section className="contact-form">
            <form>
              <div className="form-group">
                <label>First Name</label>
                <input type="text" placeholder="Suave Design" />
              </div>
              <div className="form-group">
                <label>Last Name</label>
                <input type="text" placeholder="Studios" />
              </div>
              <div className="form-group">
                <label>Email</label>
                <input type="email" placeholder="suavedesign@gmail.com" />
              </div>
              <div className="form-group">
                <label>Phone Number</label>
                <input type="tel" placeholder="+254-725-611-196" />
              </div>
              <div className="form-group">
                <label>Message</label>
                <textarea placeholder="I need a website." />
              </div>
              <div className="form-group">
                <label>How did you hear about us?</label>
                <select>
                  <option>Google</option>
                  <option>Facebook</option>
                  <option>Instagram</option>
                  <option>Twitter</option>
                </select>
              </div>
              <button type="submit" className="submit-button">Submit</button>
            </form>
          </section>
          <aside className="contact-info">
            <h2>Visit Us</h2>
            <address>
              6TH Floor<br />
              The Arch Place, Kilimani<br />
              Nairobi, KE
            </address>
            <a href="#directions" className="directions-link">Get Directions</a>
            <h2>Say Hello</h2>
            <p>
              <a href="mailto:info@kawigraphics.com">info@suave-design.com</a>
            </p>
          </aside>
        </div>
      </main>
    </div>
  );
};

export default Contact;
