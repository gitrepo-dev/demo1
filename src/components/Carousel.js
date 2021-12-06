import React from 'react'
import Slider from "react-slick";
// import "slick-carousel/slick/slick.css";
// import "slick-carousel/slick/slick-theme.css";

export default function Carousel() {


    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplaySpeed: 5000,
        autoplay: true,
        centerMode: true,
        fade: true,
        pauseOnHover: true,
        adaptiveHeight: true
      };

    return (
        <div className="slick-slider-wrapper">
        <Slider {...settings}>
          <div className="slider-title">
            <h2>Heading 1</h2>            
            <p>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution</p>
          </div>
          <div className="slider-title">
            <h2>Heading</h2>            
            <p>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution</p>
          </div>         
        </Slider>
      </div>
    )
}
