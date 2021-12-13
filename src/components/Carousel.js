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
    <div className='banner-type-carousel'>
      <div id="typed-strings">
        <h1 className="font-700 font-poppins">BlockChain</h1>
        <h1 className="font-700 font-poppins">Make World</h1>
      </div>
      <span id="typed" className="font-700 text-white font-poppins"></span>


      
      {/* <div className="slick-slider-wrapper">
      <Slider {...settings}>
        <div className="slider-title">
          <h2>Block<span>Chain</span></h2>
          <p>Development</p>
        </div>
        <div className="slider-title">
          <h2>Make World</h2>
          <p>Feature ready</p>
        </div>
      </Slider>
    </div> */}
    </div>
  )
}
