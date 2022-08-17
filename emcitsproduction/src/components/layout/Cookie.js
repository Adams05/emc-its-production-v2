import React from 'react'

const Cookie = () => {
  return (
    <div className='cookie-bar'>
     <p>We use cookies on our website to give you the most relevant experience by remembering your preferences and repeat visits.
      By clicking 'Accept' you agree to our use of cookies.</p>
      <br />
      <div className='cookie-buttons'>
        <button className='accept-btn' style={{marginRight: '10px'}}>Accept</button>
        <button className='learn-btn'>Learn More</button>
      </div>
    </div>
  )
}

export default Cookie