import React from 'react'
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
  <>
    <div className='footer'>
      <div className='footer-wrapper'>
        <ul className='footer-list'>
          <Link to="/" className='footer-list-item'><li>HOME</li></Link>
          <Link to="/about" className='footer-list-item'><li>ABOUT</li></Link>
          <Link to="/contact" className='footer-list-item'><li>CONTACT</li></Link>
        </ul>
        <img src="images/footer_octos.png" alt="footer octos" className='footer-img'/>
      </div>
    </div>
    <div className='copyright'>
        <p>Website designed by EMC I.T. Solutions <br />©2022 EMC I.T. Solutions, All rights reserved.</p>
    </div>
  </>
  )
}

export default Footer