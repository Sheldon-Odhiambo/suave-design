import React, { useState } from 'react';
import "../styles/Faqs.css";
import Title from "./Title"


const Faqs = () => {
  // FAQ data
  const Faqs = [
    {
      question: 'What design services do you offer??',
      answer: 'We offer a comprehensive range of design services, including logo design, branding, print design, digital design, and more. Explore our portfolio for a detailed overview.'
    },
    {
      question: 'Do you provide printing services?',
      answer: 'Yes, we offer printing services for a variety of materials, including business cards, brochures, posters, banners, and more. Our printing services ensure high-quality and professional results.'
    },
    {
      question: 'Can you handle international projects?',
      answer: 'Absolutely! Our talented team is equipped to undertake design and printing projects locally, across Africa, and worldwide. We thrive on bringing creativity to a global scale.'
    },
    {
      question: 'What is the typical turnaround time for design and printing projects?',
      answer: 'Turnaround times vary based on the scope and complexity of the project. We work closely with clients to establish realistic timelines, ensuring timely delivery without compromising quality.'
    },
    {
      question: 'Do you offer branding consultations?',
      answer: 'Yes, we provide branding consultations to help clients define their brand strategy, positioning, and visual identity. Our goal is to create a strong and cohesive brand that resonates with the target audience.'
    },
    {
      question: 'Can I view samples of your previous work?',
      answer: 'Certainly! Visit our portfolio section to explore a diverse collection of our past projects, showcasing the creativity and quality of our design and printing services.'
    },
    {
      question: 'How do I request a quote for a project?',
      answer:'You can easily request a quote by filling out our online inquiry form or contacting our team directly. Provide details about your project, and well promptly get back to you with a customized quote.',
    },
    {
      question: 'Do you offer custom design solutions for unique projects?',
      answer:'Yes, we specialize in tailoring our design services to meet the specific needs of our clients. Whether its a unique design concept or a special project, we are here to bring your ideas to life.',
    },
    {
      question: 'What file formats do you accept for design projects?',
      answer:'We accept a variety of file formats, and our team is proficient in working with industry-standard design software. We can accommodate formats that best suit your project requirements.',
    },
    {
      question: 'Can I order and track my print projects online?',
      answer:'Yes, we provide online ordering and tracking for print projects. Our user-friendly platform allows clients to place orders, monitor progress, and receive updates conveniently.',
    },
    

    // more FAQs data needed
  ];

  // State to track which FAQ is currently open
  const [openIndex, setOpenIndex] = useState(null);

  // Function to toggle FAQ open/close
  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (

    <>

<Title title='FAQs'/>

        <div className="faq-page">
      {/* <h1>Frequently Asked Questions</h1> */}
      <div className="faq-list">
        {Faqs.map((faq, index) => (
          <div key={index} className="faq-item">
            <div className="faq-question" onClick={() => toggleFAQ(index)}>
              <h3>{faq.question}</h3>
              {openIndex === index ? <i className="fas fa-minus"></i> : <i className="fas fa-plus"></i>}
            </div>
            {openIndex === index && <p className="faq-answer">{faq.answer}</p>}
          </div>
        ))}
      </div>
    </div>
    </>

  );
};

export default Faqs;
