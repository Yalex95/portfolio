import React, { useState } from 'react'

export const ConfirmationMessage = ({message}) => {
  
  return (

    <div className='row justify-content-center'>
        <div className="col-4 text-center">
          <img className="img-fluid" src="./src/assets/images/message_sent.png" alt="message sent" />  
          <p className='text-white mb-4 fs-4 '>
            {message}
          </p>        
        </div>
    </div>
  )
}
