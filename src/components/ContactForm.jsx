import React, { useRef, useState } from 'react';
import emailjs from '@emailjs/browser';
import { ConfirmationMessage } from './ConfirmationMessage';
import ErrorMessage from './ErrorMessage';

export const ContactUs = () => {
  
  const form = useRef(null);
  const [showMessage, setShowMessage] = useState(false);
  const [showError, setShowError] = useState(false);
  const [message, setMessage] = useState('');

  // form validation


  const sendEmail = (e) => {
    e.preventDefault();
    const formData = new FormData(form.current);

    // Validate fields
    const userName = formData.get('from_name');
    const userEmail = formData.get('reply_to');
    const messageText = formData.get('message');

    if (!userName || !userEmail || !messageText) {
      setMessage('Please fill in all fields.');
      return;
    }
    if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(userEmail)) {
      setMessage('Invalid email format.');
      return;
    }
     //form variables
     const serviceId='service_omp692l';
     const templateId = 'template_uz1g9nq';
     const publicKey = 'BaZ9p5ykE2CDxA82g';
     
     emailjs.sendForm(serviceId, templateId, form.current, publicKey)
     .then((result) => {
       if(result.status == 200){
         setShowMessage(true);
         setShowError(false);
         setMessage("Thank you for getting in touch. I'll be reaching out to you shortly.");
       }
     }, (error) => {
         
       setShowMessage(false);
       setShowError(true);
       setMessage("Apologies, but an error occurred. Please try again.");
      
     });
  };

  return (
    
    <>
    {(!showError && !showMessage)?
    <form id="contact" className=' row g-3'ref={form} onSubmit={sendEmail}>
      {message && <span className='error'>{message}</span>}
      <div className='col-md-6'>
       <input className="w-100 p-2 rounded border-0" type="text" name="from_name" id="from_name" placeholder='Name'/>
       
      </div>
      <div className='col-md-6'>
        <input className="w-100 p-2 rounded border-0" type="email" name="reply_to" id="reply_to" placeholder='Email'/>
      </div>
      <div className='col-md-12'>
        <textarea className="w-100 p-2 rounded border-0" name="message" placeholder='Your Message' rows="5"/>
      </div>  
      <div className='col-md-12'>
        <input className="w-25 btn rounded btn-light text-uppercase w-25 m-auto"type="submit" value="Send" />
      </div>
    </form>
    : ''
    }
    {showMessage && <ConfirmationMessage message={message}/>}
    
    {(showError && !showMessage)? <ErrorMessage message={message}/> : ''}
    </>
  );
};