import React, { useState } from 'react'
import message_sent from "../assets/images/message_sent.png";

export const ConfirmationMessage = ({message}) => {
  
  return (

    <div className='row justify-content-center'>
        <div className="col-4 text-center">
          <img className="img-fluid" src={message_sent} alt="message sent" />  
          <p className='text-white mb-4 fs-4 '>
            {message}
          </p>        
        </div>
    </div>
  )
}
