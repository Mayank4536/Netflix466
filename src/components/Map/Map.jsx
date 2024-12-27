import React from 'react'
import './Map.css'

const Map = () => {
  return (
    <div>
      <address id='address'>
        Bokaro Steel City College <br/>
        Sec-6, Bokaro, Jharkhand - 827006
      </address>

      <div className='responsive-map'>
      <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d42442.35384453366!2d77.56952691327882!3d12.956777286274894!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bae1670c9b44e6d%3A0xf8dfc3e8517e4fe0!2sBengaluru%2C%20Karnataka!5e1!3m2!1sen!2sin!4v1734858580481!5m2!1sen!2sin" 
         width="600" height="450" 
         allowFullScreen 
         loading="lazy" 
         referrerPolicy="no-referrer-when-downgrade"></iframe>
      </div>
       
    </div>
  )
}

export default Map
