import React from 'react'
import './portfolio.css';
import IMG1 from '../../assets/live.jpg'

const Portfolio = () => {
  return (
    <section id='portfolio'>
      <h5>My Recent Work</h5>
      <h2>Portfolio</h2>

      <div className="container portfolio_container">

          <article className='portfolio_item'>
            <div className="portfolio_item-image">
               <img src={IMG1} alt="" />
            </div>
              <h3>This is portfolio item title</h3>
             <div className="portfolio_item-cta">
             <a href="https://github.com/mirajulalam" className='btn' target="_blank">Live</a>
             <a href="https://github.com/mirajulalam" className='btn' target="_blank">Server</a>
              <a href="https://car-parts-manufacturer.web.app/" className='btn btn-primary' target='_blank'>Live Demo</a>
             </div>
          </article>
          <article className='portfolio_item'>
            <div className="portfolio_item-image">
               <img src={IMG1} alt="" />
            </div>
              <h3>This is portfolio item title</h3>
             <div className="portfolio_item-cta">
             <a href="https://github.com/mirajulalam" className='btn' target="_blank">Live</a>
             <a href="https://github.com/mirajulalam" className='btn' target="_blank">Server</a>
              <a href="https://car-parts-manufacturer.web.app/" className='btn btn-primary' target='_blank'>Live Demo</a>
             </div>
          </article>
          <article className='portfolio_item'>
            <div className="portfolio_item-image">
               <img src={IMG1} alt="" />
            </div>
              <h3>This is portfolio item title</h3>
             <div className="portfolio_item-cta">
             <a href="https://github.com/mirajulalam" className='btn' target="_blank">Live</a>
             <a href="https://github.com/mirajulalam" className='btn' target="_blank">Server</a>
              <a href="https://car-parts-manufacturer.web.app/" className='btn btn-primary' target='_blank'>Live Demo</a>
             </div>
          </article>

          
      </div>
    </section>
  )
}

export default Portfolio