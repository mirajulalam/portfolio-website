import React from 'react'
import './footer.css';
import {FaFacebookF} from 'react-icons/fa';
import {BsGithub} from 'react-icons/bs';
import {FaLinkedinIn} from 'react-icons/fa';

const Footer = () => {
  return (
    <footer>
      <a href="#" className='footer_logo'>ALIF Exclusive</a>

      <ul className='permalinks'>
        <li><a href="#">Home</a></li>
        <li><a href="#about">About</a></li>
        <li><a href="#experience">Experience</a></li>
        <li><a href="#services">Services</a></li>
        <li><a href="#portfolio">Portfolio</a></li>
        <li><a href="#testimonials">Testimonials</a></li>
        <li><a href="#contact">Contact</a></li>
      </ul>

      <div className="footer_socials">
        <a href="https://www.facebook.com/mdmirajul.alam.7" target="_blank"><FaFacebookF/></a>
        <a href="https://github.com/mirajulalam" target="_blank"><BsGithub/></a>
        <a href="https://www.linkedin.com/in/mirajul-alam-alif-19025b241/" target="_blank"><FaLinkedinIn/></a>
      </div>

      <div className="footer_copyright">
        <small>&copy; Mirajul Alam Alif.All rights reserved.</small>
      </div>
    </footer>
  )
}

export default Footer