import React from 'react'
import { Link } from 'react-router-dom'


const showMenu = () => {
  const menu = document.querySelector('.mobile-nav');
  menu.classList.toggle('show');
}

const Nav = () => {
  return (
    <>
    <div className='mobile-nav'>
      <div className='mobile-container'>
        <img src='images/menu-icon.png' alt='menu icon' className='menu-icon' id='mobileIcon' onClick={showMenu}/>
          <ul className='mobile-nav-list'>
            <Link to ='/'><li>Home</li></Link>
            <Link to ='/about'><li>About</li></Link>
            <Link to ='/contact'><li>Contact</li></Link>
          </ul>
          <div className='mobile-icons'>
            <h3 className='font mb-2'><img src="images/phone-icon.jpg" alt="phone icon" className='contact-icons'/> <a href="tel:2166723840">216.672.3840</a></h3>
            <h3 className='font'><img src="images/email-icon.png" alt="mail icon" className="contact-icons"/> <a href="mailto:support@emcits.com">support@emcits.com</a></h3>
          </div>
        <img src="images/emc_logo_v3.png" alt='logo' className="mobile-logo"/>
      </div>
    </div>
      <div className='nav'>
      <img src="images/menu-icon.png" alt='menu icon' className='main-menu-icon' id='mobileIcon' onClick={showMenu}/>
       <div className='brand'>
        <Link to='/'><img src="images/emc_logo_v3.png" alt="emcits logo" /></Link>
       </div>
       <div className='nav-contact-info'>
        <div className='contact-info'>
          <img src="images/phone_icon_v2.png" style={{width: '40px', height: '60px'}} alt="phone icon"/>
          <h3 className='small-title white'><a href="tele:2166723840">216.672.3840</a></h3>
        </div>
        <div className='contact-info'>
          <img src="images/email_icon_v2.png" className='email-icon' alt='mail icon'/>
          <h3 className='small-title white'><a href="mailto:support@emcits.com">support@emcits.com</a></h3>
        </div>
       </div>
      </div>
      <div className='lower-nav'>
        <h3 className='medium-title white'>Outsourced I.T. Solutions, Consulting & Technology Integration for Greater Cleveland</h3>
      </div>
    </>
    
  )
}

export default Nav