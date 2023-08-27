import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';
import { ConfirmationMessage } from './ConfirmationMessage';

export const ContactUs = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();
const serviceId='service_omp692l';
const templateId = 'template_uz1g9nq';
const publicKey = 'BaZ9p5ykE2CDxA82g';
    emailjs.sendForm(serviceId, templateId, form.current, publicKey)
      .then((result) => {
          <ConfirmationMessage message={result}/>
      }, (error) => {
          <ConfirmationMessage message={error}/>
      });
  };

  return (
    
    <form className="row g-3" ref={form} onSubmit={sendEmail}>
      {/* form */}
      <div className='col-md-6'>
       <input className="w-100 p-2 rounded border-0" type="text" name="user_name" placeholder='Name'/>
      </div>
      <div className='col-md-6'>
        <input className="w-100 p-2 rounded border-0" type="email" name="user_email" placeholder='Email'/>
      </div>
      <div className='col-md-12'>
        <textarea className="w-100 p-2 rounded border-0"  name="message" placeholder='Your Message' rows="5"/>
      </div>  
      <div className='col-md-12'>
        <input className="w-25 btn rounded btn-light text-uppercase w-25 m-auto"type="submit" value="Send" />
      </div>
    </form>
  );
};