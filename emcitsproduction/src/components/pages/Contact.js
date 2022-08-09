import React, { useRef, useState } from 'react';
import emailjs from '@emailjs/browser';
import ReCAPTCHA from 'react-google-recaptcha';
import Map from '../layout/Map';

const Contact = () => {
  const [sent, setSent] = useState(false);
  const form = useRef();
  const captchaRef = useRef();

  function getToken() {
    const token = captchaRef.current.getValue();

    console.log(token)

    if(token) {
      document.getElementById('submitBtn').removeAttribute('disabled')
    }
  }

  const sendEmail = (e) => {
    e.preventDefault();
    captchaRef.current.reset();

    setSent(true);
    emailjs
      .sendForm(
        'service_vtz3g69',
        'template_ifi2z3a',
        form.current,
        'SSVAaujA_zx43NEkl',
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );
  };

  return (
    <>
      <div className='container'>
        <div className='contact-grid'>
          <div className='card mb-4 contact-card'>
            <div className='card-title p-2'>
              <h3 className='medium-text'>Contact Information</h3>
            </div>
            <div className='pl-2 pr-2'>
              <hr />
            </div>
            <div className='card-body'>
              <ul className='contact-list'>
                <img
                  src='images/house-icon.png'
                  alt='house icon'
                  className='contact-icons'
                />
                <li className='contact-list-item'>
                  {' '}
                  <b> Address:</b> 17138 Lorain Ave. <br />2nd Floor, Cleveland OH. 44111
                </li>
                <br />
                <img
                  src='images/cellphone-icon.png'
                  alt='house icon'
                  className='contact-icons'
                />
                <li className='contact-list-item'>
                  {' '}
                  <b> Phone:</b> <a href='tel:2166723840'>216.672.3840</a>
                </li>
                <br />
                <img
                  src='images/email-icon.png'
                  alt='house icon'
                  className='contact-icons'
                />
                <li className='contact-list-item'>
                  {' '}
                  <b> Email:</b>{' '}
                  <a href='mailto:support@emcitsolutions.com'>
                    support@emcits.com
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <div className='card-image mb-4'>
            <img
              src='images/office_img.jpg'
              alt='office img'
              className='office-image'
            />
            <div className='card-title'>
              <h3>Get in Touch!</h3>
            </div>
            <div className='card-body'>
              {!sent ? (
                  <form ref={form} onSubmit={sendEmail}>
                  <div className='form-grid'>
                    <input
                      type='text'
                      placeholder='First Name'
                      name='firstName'
                      required
                      className='text-input'
                    ></input>
                    <input
                      type='text'
                      placeholder='Last Name'
                      name='lastName'
                      required
                      className='text-input'
                    ></input>
                    <input
                      type='text'
                      placeholder='Email'
                      name='email'
                      required
                      className='text-input'
                    ></input>
                    <input
                      type='text'
                      placeholder='Company'
                      name='company'
                      className='text-input'
                    ></input>
                    <input
                      type='tel'
                      placeholder='Phone Number'
                      name='phone'
                      className='text-input'
                    ></input>
                  </div>
                  <br />
                  <ReCAPTCHA sitekey={process.env.REACT_APP_RECAPTCHA_SITE_KEY}  ref={captchaRef} onChange={getToken} 
                    className='captcha'/>
                  <br />
                  <textarea
                    type='text'
                    placeholder='What can we help you with?'
                    name='message'
                    className='textArea'
                  />
                  <button
                    type='submit'
                    className='submitBtn center-element mt-2'
                    id='submitBtn'
                    value='send'
                    disabled
                  >
                    Submit
                  </button>
                </form>
              ) : (
                <><h3 className="center medium-title">Your message has been sent</h3><br /><p className='center small-title'>We will get back to you shortly.</p></>
              )} 
              
            </div>
          </div>
        </div>
      </div>
      <Map />
    </>
  );
};

export default Contact;
