
import React, { useState } from 'react';
import swal from 'sweetalert';
import axios from 'axios';
// import './ContactForm.css';
import "./MyFormStyles.css"

const MyForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    number: '',
    message: ''
  });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = event => {
    setFormData({ ...formData, [event.target.name]: event.target.value });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      const res = await axios.post('/contact', {
        name: formData.name,
        email: formData.email,
        number: formData.number,
        message: formData.message,
      });
      console.log("Hii your data saved in mongoose", res);
      setSubmitted(true);
      swal("Thank you for submitting the form! We will be in touch with you soon.");
      
      setFormData({ name: '', email: '', number: '', message: '' });
    } catch (err) {
      console.error(err);
    }
  }
  
 
  return (

    <div class="form-and-div-container">
  

  
    <form id="contact-form" className="contact-form" onSubmit={handleSubmit}>
  


      <label htmlFor="name" className="form-label">Name:</label>
      <input
        id="name-input"
        type="text"
        // placeholder="Name"
        name="name"
        value={formData.name}
        onChange={handleChange}
        required
        className="form-input_1"
      />

      <label htmlFor="email" className="form-label">Email:</label>
      <input
        id="email-input"
        type="email"
        // placeholder="Email"
        name="email"
        value={formData.email}
        onChange={handleChange}
        required
        className="form-input_1"
      />

      <label htmlFor="number" className="form-label">Phone Number:</label>
      <input
        id="number-input"
        type="number"
        // placeholder="Number"
        name="number"
        value={formData.number}
        onChange={handleChange}
        required
        className="form-input_1"
      />

      <label htmlFor="message" className="form-label">Message:</label>
      <textarea
        id="message-input"
        // placeholder="Message"
        name="message"
        value={formData.message}
        onChange={handleChange}
        required
        className="form-input_1"
      />

      <button type="submit" className="form-submit">{submitted ? "Submitted Successfully" : "Please Submit "}</button>
      <p>By submitting my data I agree to be contacted</p>
  
      </form>

      <div id="second-heading-container">
      <p id="a-tag-3">A Decade of Advancing Technological Expertise.</p>
      <p id="a-tag-4">Our technological proficiency has greatly improved  over the past decade, and we are now equipped to effectively tackle your challenges.</p>
    </div>
</div>
  );

};

export default MyForm;
