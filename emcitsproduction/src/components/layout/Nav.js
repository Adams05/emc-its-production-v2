import React from 'react'
import { Link } from 'react-router-dom'


const Nav = () => {
  return (
    <>
      <div className='nav'>
       <div className='brand'>
        <Link to='/'><img src="images/logoV3.png" alt="emcits logo" /></Link>
       </div>
       <div className='nav-contact-info'>
        <div className='contact-info'>
          <img src="images/Phone.png" alt="phone icon"/>
          <h3 className='small-title white'><a href="tele:2166723840">216.672.3840</a></h3>
        </div>
        <div className='contact-info'>
          <img src="images/Email.png" alt='mail icon'/>
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