import React from 'react'

const Cloud = () => {
  return (
    <>
      <div className='container'>
        <div className='banner-img'>
          <img src="images/Wireless-Image.jpg" alt='Wireless' className='service-imgs'/>
        </div>
        <div className='flex'>
          <img src="images/Wireless.png" alt='Wireless card' className="service-cards"/>
          <div>
            <h3 className='small-title blue'>Wireless</h3>
            <p className='font'>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, 
              when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into
              electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets 
              containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
          </div>
        </div>
      </div>
    </>
  )
}

export default Cloud