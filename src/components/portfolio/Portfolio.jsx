import React from 'react'
import './portfolio.css';
import IMG1 from '../../assets/live.jpg';
import IMG2 from '../../assets/live2.jpg';
import IMG3 from '../../assets/live3.jfif';

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
              <h3>Car Parts Manufacturer <br />Full-Stack</h3>
             <div className="portfolio_item-cta">
             <a href="https://github.com/mirajulalam/car-manufacturer-clint-website" className='btn' target="_blank">Live</a>
             <a href="https://github.com/mirajulalam/car-manufacturer-server-website" className='btn' target="_blank">Server</a>
              <a href="https://car-parts-manufacturer.web.app/" className='btn btn-primary' target='_blank'>Live Demo</a>
             </div>
          </article>
          <article className='portfolio_item'>
            <div className="portfolio_item-image">
               <img src={IMG2} alt="" />
            </div>
              <h3>Fruits Warehouse <br />Full-Stack</h3>
             <div className="portfolio_item-cta">
             <a href="https://github.com/mirajulalam/fruits-warehouse-clint-website" className='btn' target="_blank">Live</a>
             <a href="https://github.com/mirajulalam/fruits-warehouse-server-website" className='btn' target="_blank">Server</a>
              <a href="https://fruits-warehouse-1e44f.web.app/" className='btn btn-primary' target='_blank'>Live Demo</a>
             </div>
          </article>
          <article className='portfolio_item'>
            <div className="portfolio_item-image">
               <img src={IMG3} alt="" />
            </div>
              <h3>David Choching Studio <br />Front-End</h3>
             <div className="portfolio_item-cta">
             <a href="https://github.com/mirajulalam/david-coaching-studio" className='btn' target="_blank">Live</a>
             <a href="" className='btn'>Server</a>
              <a href="https://david-coaching-studio.web.app/" className='btn btn-primary' target='_blank'>Live Demo</a>
             </div>
          </article>

          
      </div>
    </section>
  )
}

export default Portfolio