import React from 'react'
import './about.css';
import me from '../../assets/IMG-20220503-WA0079.png';
import { FaAward } from 'react-icons/fa';
import { FiUsers } from 'react-icons/fi';
import { VscFolderLibrary } from 'react-icons/vsc';
const About = () => {
  return (
    <section id="about">
      <h5>Get To Know</h5>
      <h2>About Me</h2>

      <div className='container about_container'>
        <div className="about_me">
          <div className="about_me-image">
            <img src={me} alt="About images" />
          </div>
        </div>


        <div className="about_content">
          <div className="about_cards">
            <article className='about_card'>
              <FaAward className='about_icon' />
              <h5>Experience</h5>
              <small>1+ Years Working</small>
            </article>

            <article className='about_card'>
              <FiUsers className='about_icon' />
              <h5>Clients</h5>
              <small>50+ Worldwide</small>
            </article>

            <article className='about_card'>
              <VscFolderLibrary className='about_icon' />
              <h5>Projects</h5>
              <small>10+</small>
            </article>
          </div>
          <p>I have professional experience with programming languages and tools such as React, HTML, CSS, Sass, Bootstrap, javascript, ES6, Express Js, and Firebase Auth to contribute features by writing and maintaining code. I also have experience in Photoshop, Node.js, JSON, After Effects. I am highly motivated and enthusiastic, always with excellent attention to detail. I will give my best effort to achieve the best result. All tasks I try to carry out on time and in full. So if you have any questions or inputs, please don't hesitate to contact me.</p>
          <a href="#contact" className='btn btn-primary'>Let's Talk</a>
        </div>
      </div>
    </section>
  )
}

export default About