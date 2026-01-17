import React, { useState } from 'react';

const Contact = () => {
  // Simple state to show success message after submission
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = async (event) => {
    event.preventDefault();
    const form = event.target;
    
    // Send the data to Formspree
    const response = await fetch("https://formspree.io/f/xreeedgk", {
        method: 'POST',
        body: new FormData(form),
        headers: {
            'Accept': 'application/json'
        }
    });

    if (response.ok) {
        setIsSubmitted(true); // Show success message
        form.reset(); // Clear the form
    } else {
        alert("Oops! There was a problem submitting your form");
    }
  };

  return (
    <section id="contact" className="contact-section">
      <div className="contact-container">
        
        {/* Left Side: Contact Info */}
        <div className="contact-info">
          <h2 className="section-title">Contact Me</h2>
          <p>
            I'm currently open to new opportunities and collaborations. 
            Feel free to reach out!
          </p>
          
          <div className="info-item">
            <i className="fa fa-envelope"></i>
            <span>shuklaarpit383@zohomail.in</span>
          </div>
          <div className="info-item">
            <i className="fa fa-phone"></i>
            <span>+91 9755489508</span>
          </div>
          <div className="info-item">
            <i className="fa fa-map-marker"></i>
            <span>Chhindwara, MP, India</span>
          </div>
        </div>

        {/* Right Side: The Form */}
        <div className="contact-form-card">
            {isSubmitted ? (
                <div className="success-message">
                    <h3>Message Sent! 🚀</h3>
                    <p>Thanks for reaching out, Arpit. I'll get back to you soon.</p>
                </div>
            ) : (
                <form onSubmit={handleSubmit}>
                    <div className="form-group">
                        <input 
                          type="text" 
                          name="name" 
                          placeholder="Your Name" 
                          required 
                        />
                    </div>
                    
                    <div className="form-group">
                        <input 
                          type="email" 
                          name="email" 
                          placeholder="Your Email" 
                          required 
                        />
                    </div>
                    
                    <div className="form-group">
                        <textarea 
                          name="message" 
                          placeholder="Your Message" 
                          rows="5" 
                          required
                        ></textarea>
                    </div>
                    
                    <button type="submit">Send Message</button>
                </form>
            )}
        </div>
      </div>
    </section>
  );
};

export default Contact;