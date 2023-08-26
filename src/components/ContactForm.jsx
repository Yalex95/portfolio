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
    
    <form className="d-flex flex-column" ref={form} onSubmit={sendEmail}>
      {/* form */}
      <input className="mb-3 p-2 rounded border-0" type="text" name="user_name" placeholder='Name'/>
      <input className="mb-3 p-2 rounded border-0" type="email" name="user_email" placeholder='Email'/>
      <textarea className="mb-3 p-2 rounded border-0"  name="message" placeholder='Your Message' rows="5"/>
      <input className="btn rounded btn-light text-uppercase w-25 m-auto"type="submit" value="Send" />
    </form>
  );
};