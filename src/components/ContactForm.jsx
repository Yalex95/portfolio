import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';
import { ConfirmationMessage } from './ConfirmationMessage';

export const ContactUs = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();
const serviceId='service_omp692l';
const templateId = 'template_uz1g9nq';
// console.log(form.current)
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
       <input className="w-100 p-2 rounded border-0" type="text" name="from_name" id="from_name" placeholder='Name'/>
      </div>
      <div className='col-md-6'>
        <input className="w-100 p-2 rounded border-0" type="email" name="reply_to" id="reply_to" placeholder='Email'/>
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