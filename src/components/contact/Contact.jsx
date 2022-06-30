import React,{ useRef } from 'react'
import './contact.css';
import {MdOutlineEmail} from 'react-icons/md'
import {RiMessengerLine} from 'react-icons/ri';
import emailjs from '@emailjs/browser';
import swal from 'sweetalert';

const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_jkidp1c', 'template_86gvfvq', form.current, 'bC3daaJCpTsOQkKTT')
      .then((result) => {
          console.log(result.text);
          swal("Successfully", "Thanks for your message", "success");
          e.target.reset();
      }, (error) => {
          console.log(error.text);
      });
  };
  return (
    <section id='contact'>
      <h5>Get In Touch</h5>
      <h2>Contact Me</h2>
      <div className="container contact_container">
        <div className="contact_options">
          <article className='contact_option'>
              <MdOutlineEmail className='contact_option-icon'/>
            <h4>Email</h4>
            <h5>alifmirajulalam@gmail.com</h5>
            <a href="mailto:alifmirajulalam@gmail.com" target="_blank">Send a message</a>
          </article>
          <article className='contact_option'>
              <RiMessengerLine className='contact_option-icon'/>
            <h4>Messenger</h4>
            <h5>MD Mirajul Alam</h5>
            <a href="https://m.me/mdmirajul.alam.7" target="_blank">Send a message</a>
          </article>
        </div>
        {/* end of contact options */}
        <form ref={form} onSubmit={sendEmail}>
          <input type="text" name="name" placeholder='Your Full Name' required/>
          <input type="email" name="email" placeholder='Your Email' required/>
          <textarea name="message"  rows="7" placeholder='Your Message' required></textarea>
          <button type='submit' className='btn btn-primary'>Send Message</button>
        </form>
      </div>
    </section>
  )
}

export default Contact