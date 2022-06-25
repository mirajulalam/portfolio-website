import React from 'react'
import './services.css';
import {BiCheck} from 'react-icons/bi'

const Services = () => {
  return (
    <section id='services'>
      <h5>What I Offer</h5>
      <h2>Services</h2>

      <div className="container services_container">
          <article className='service'>
            <div className="service_head">
              <h3>UI/UX Design</h3>
            </div>
            <ul className='service_list'>
              <li>
                <BiCheck className='service_list-icon'/>
                <p>Good design is innovative</p>
              </li>
              <li>
                <BiCheck className='service_list-icon'/>
                <p>Good design is unobtrusive</p>
              </li>
              <li>
                <BiCheck className='service_list-icon'/>
                <p>Good design is aesthetic</p>
              </li>
              <li>
                <BiCheck className='service_list-icon'/>
                <p>Good design is honest</p>
              </li>
              <li>
                <BiCheck className='service_list-icon'/>
                <p>Good design is long-lasting</p>
              </li>
              
            </ul>
          </article>
          {/* End of UI/UX */}
          <article className='service'>
            <div className="service_head">
              <h3>Web Development</h3>
            </div>
            <ul className='service_list'>
              <li>
                <BiCheck className='service_list-icon'/>
                <p>Analytical Skills</p>
              </li>
              <li>
                <BiCheck className='service_list-icon'/>
                <p>Basics of the Backend</p>
              </li>
              <li>
                <BiCheck className='service_list-icon'/>
                <p>JavaScript Skills</p>
              </li>
              <li>
                <BiCheck className='service_list-icon'/>
                <p>Responsive Design Skills</p>
              </li>
              <li>
                <BiCheck className='service_list-icon'/>
                <p>Debugging Skills</p>
              </li>
              <li>
                <BiCheck className='service_list-icon'/>
                <p>Hosting Skills</p>
              </li>
            </ul>
          </article>
          {/* End development */}
          <article className='service'>
            <div className="service_head">
              <h3>Content Creation</h3>
            </div>
            <ul className='service_list'>
              <li>
                <BiCheck className='service_list-icon'/>
                <p>CONTENT MARKETING</p>
              </li>
              <li>
                <BiCheck className='service_list-icon'/>
                <p>WEB CONTENT</p>
              </li>
              <li>
                <BiCheck className='service_list-icon'/>
                <p>Photography</p>
              </li>
              <li>
                <BiCheck className='service_list-icon'/>
                <p>Facebook</p>
              </li>
              <li>
                <BiCheck className='service_list-icon'/>
                <p>Adobe Creative Suite</p>
              </li>
             
            </ul>
          </article>
          {/* End of content creation */}
      </div>
    </section>
  )
}

export default Services