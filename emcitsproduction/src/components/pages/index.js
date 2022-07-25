import React from 'react';
import { Link } from 'react-router-dom';

const index = () => {
  return (
    <div className='container'>
      <div className='top-grid'>
        <Link to='/cloud'>
          <img src='images/cloud.jpg' alt='Cloud icon' />
        </Link>
        <Link to='/security'>
          <img src='images/Security.png' alt='Security icon' />
        </Link>
        <Link to='/servers'>
          <img src='images/Servers.png' alt='Server icon' />
        </Link>
        <Link to='/systems'>
          <img src='images/Systems.png' alt='systems icon' />
        </Link>
      </div>
      <div className='bottom-grid'>
        <Link to='/wireless'>
          <img src='images/Wireless.png' alt='Wireless icon' />
        </Link>
        <Link to='/cabling'>
          <img src='images/Cabling-&-Build-Outs.png' alt='Cabling icon' />
        </Link>
        <Link to='/securitycameras'>
          <img src='images/Security-Camera.png' alt='Security Icon' />
        </Link>
      </div>
    </div>
  );
};

export default index;
