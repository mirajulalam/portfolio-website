import React from 'react'
import './testimonials.css';
import AVATAR1 from '../../assets/review2.jfif'
import AVATAR2 from '../../assets/review2.jfif';
import AVATAR3 from '../../assets/review3.jfif';

// import Swiper core and required modules
import {  Pagination } from 'swiper';

import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';




const Testimonials = () => {

  const data =[
    {
        name: 'Mary',
        review: "I had a little hickup with processing my order. And customer service was stellar. We had an open line of communication and they resolved the issue in a timely manor. Answered all of my questions and concerns. I personally believe one of the best features a company should strive for is relationships with costomers and willingness to work together to resolve issues.",
        avatar: AVATAR1
    },
    {
        name: 'Harry',
        review: "After I submitted a low rating due to a shipping delay & faulty part Rose gave me a call within a few hours of submitting my rating & worked diligently to get things straightened out. Originally I had written I wouldn't buy from them again, but seeing how great their customer service is its reassuring to know that if you have an issue they will ensure to fix your issue",
        avatar: AVATAR1
    },
    {
        name: 'Jennifer',
        review: "I made contact with customer service an they were extremely helpful to get my issue resolved. I explain to them that it was very dented probably from shipping an they are currently shipping me another one free to me. I am very surprised how this company handles their customers an are not all about a dollar. Definitely will be buying more parts. ",
        avatar: AVATAR1
    },
]

  return (
    <section id='testimonials'>
      <h5>Review from clients</h5>
      <h2>Testimonials</h2>

      <Swiper className="container testimonials_container swiper"
      // install Swiper modules
      modules={[ Pagination]}
      spaceBetween={40}
      slidesPerView={1}
      pagination={{ clickable: true }}
     >
        
       {
        data.map(({avatar,name,review},index)=>{
          return(
            <SwiperSlide key={index} className='testimonials swiper-slide'>
          <div className="clients_avatar">
            <img src={avatar} alt="avatar1" />
          </div>
          <h5 className='client_name'>{name}</h5>
            <small className='client_review'>{review}</small>
        </SwiperSlide>
          )
        })
       }
        
      </Swiper>
    </section>
  )
}

export default Testimonials