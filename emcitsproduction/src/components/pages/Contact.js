import React, { useRef, useEffect } from 'react';
import emailjs from '@emailjs/browser';
import ReCAPTCHA from 'react-google-recaptcha';
import Map from '../layout/Map';

const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_vtz3g69', 'template_ifi2z3a', form.current, 'SSVAaujA_zx43NEkl')
    .then((result) => {
      console.log(result.text);
    }, (error) => {
      console.log(error.text)
    })
  }


  return (
    <>
      <div className='container'>
        <div className='contact-grid'>
          <div className='card mb-4'>
            <div className='card-title p-2'>
              <h3 className='medium-text'>Contact Information</h3>
            </div>
            <div className='pl-2 pr-2'>
              <hr />
            </div>
            <div className='card-body'>
              <ul className='contact-list'>
                <img src="images/house-icon.png" alt="house icon" className='contact-icons' /><li className='contact-list-item'> <b> Address:</b> 17138 Lorain Ave</li>
                <br />
                <img src="images/cellphone-icon.png" alt="house icon" className='contact-icons' /><li className='contact-list-item'> <b> Phone:</b> <a href="tel:2166723840">216.672.3840</a></li>
                <br />
                <img src="images/email-icon.png" alt="house icon" className='contact-icons' /><li className='contact-list-item'> <b> Email:</b> <a href="mailto:support@emcitsolutions.com">support@emcitsolutions.com</a></li>
              </ul>
            </div>
          </div>
          <div className="card-image mb-4">
            <img src="images/office_img.png" alt='office img' className='office-image'/>
            <div className='card-title'>
              <h3>Get in Touch!</h3>
            </div>
            <div className='card-body'>
              <form ref={form} onSubmit={sendEmail}>
                <div className='form-grid'>
                 <input type='text' placeholder="First Name" name="firstName" required className='text-input'></input>
                 <input type='text' placeholder="Last Name" name="lastName" required className='text-input'></input>
                 <input type='text' placeholder="Email" name="email" required className='text-input'></input>
                 <input type='text' placeholder="Company" name="company" className='text-input'></input>
                 <input type='tel' placeholder="Phone Number" name="phone" className='text-input'></input>
                </div>
                <br />
                <textarea type="text" placeholder="What can we help you with?" name="message" className='textArea'/>           
                <button type="submit" className='submitBtn center-element mt-2' value="send">Submit</button>
              </form>
            </div>
          </div>
        </div>
      </div>
      <Map />
    </>
    
  )
}

export default Contact