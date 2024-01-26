import React, { useState } from 'react'
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import NextArrow from './NextArrow';
import PrevArrow from './PrevArrow';
import foodItems from '../data/items';
import brands from '../data/brands';
import { Link } from 'react-router-dom';

const Carousel = ({onImgClick}) => {
    const [currentSlide, setCurrentSlide] = useState(0);
    
    const settings = {
        infinite: false,
        speed: 500,
        slidesToShow: 5,
        slidesToScroll: 1,
        prevArrow: currentSlide > 0 ? <PrevArrow/>: null,
        nextArrow: currentSlide < (foodItems.length - 5)? <NextArrow /> : null,
        beforeChange: (oldIndex, newIndex)=>{
            setCurrentSlide(newIndex);
        }
    };
    return (
        <>
            <div className='pt-1 pb-5 slide-bg'>
                <div className="container">
                    <h3 className='mt-5 mb-4'>Inspiration for your first order</h3>
                    <Slider {...settings}>
                        {foodItems.map((item) => {
                            return (
                                <div key={item.id} className='mx-4'>
                                    <Link to="/cuisines" onClick={onImgClick} >
                                    <img src={item.cover} className='carousel-image' alt="..." />
                                    </Link>
                                    <p className='mx-5 text'>{item.title}</p>
                                </div>
                            )
                        })}
                    </Slider>
                </div>
            </div>
            <div className="container my-5">
                <h3 className='my-2'>Top brands for you</h3>
                <Slider {...settings}>
                    {brands.map((brand) => {
                        return (
                            <div key={brand.id} className='mx-4'>
                                <img src={brand.cover} className='mx-4 carousel-image' alt="..." />
                                <p className='mx-5 text'>{brand.title}</p>
                                <p className='mx-5 text'>{brand.time}</p>
                            </div>
                        )
                    })}
                </Slider>
            </div>
        </>
    )
}

export default Carousel
