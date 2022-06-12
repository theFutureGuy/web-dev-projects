import React from 'react';
import './Testimonial.css';  
import {  Pagination } from 'swiper';

import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';

const data = [
    {
        avatar: '#',
        name:'David Bombal',
        review:"Lorem ipsum dolor sit amet consectetur jhfdsjdfslkj"
    },
    {
        avatar: '#',
        name:'David Bombal',
        review:"Lorem ipsum dolor sit amet consectetur jhfdsjdfslkj"
    },
        
    {
        avatar: '#',
        name:'David Bombal',
        review:"Lorem ipsum dolor sit amet consectetur jhfdsjdfslkj"
    },
        
    {
        avatar: '#',
        name:'David Bombal',
        review:"Lorem ipsum dolor sit amet consectetur jhfdsjdfslkj"
    }
        
        
       
]

const Testimonials = () =>{
 
    return (
    <section id="testimonials">
        <h5>Review from clients</h5>
        <h2>Testmonials</h2>

        <Swiper className='container testimonials__container'>
            
            modules={[Pagination]}
            spaceBetween={40}
            slidesPerView={1}
            pagination={{ clickable: true }}
            {
                data.map(({avatar,name,review},index) => {
                    return(
                        <SwiperSlide key={index} className="testimonial">
                                <div className='client__avatar'>
                                    <img src={avatar} alt={name} />
                                </div>
                                <small>
                                    Lorem ipsum dolor sit amet,
                                     consectetur adipisicing elit. Repudiandae, non dolorem, 
                                     tempora odio vel illum aliquid rem aspernatur doloribus 
                                     placeat unde facere nam magni quasi eaque, ad molestiae 
                                     earum optio.
                                </small>
                        </SwiperSlide>
                    )
                }
                )
            }
        </Swiper>
        </section>)
}



export default Testimonials