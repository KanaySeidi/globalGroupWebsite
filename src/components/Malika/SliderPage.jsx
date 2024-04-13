import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import React from 'react'
import { imgImp } from '../../helpers/imgImports'
import Slider from "react-slick";

const { phone } = imgImp  


export function SliderPage() {
  let settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };
  return (
    <>
      
        <Slider {...settings}>
      <div className='bg-red-200 flex'>
        <img src={phone} className="" alt=""/>
        <div>
            <h2 className="">Rewards.</h2>
            <p>Join our Rewards club and earn<br/> points when shopping. Turn your<br/> points into rewards from world-<br/>class brands.</p>
        </div>
      </div>

      <div className='border border-black'>
      <img src={phone} className="w-146 h-96" alt=""/>
                <h2>Rewards.</h2>
                <p>Join our Rewards club and earn<br/> points when shopping. Turn your<br/> points into rewards from world-<br/>class brands.</p>
            </div>



      <div className='border border-black'>
      <img src={phone} className="w-146 h-96" alt=""/>
                <h2>Rewards.</h2>
                <p>Join our Rewards club and earn<br/> points when shopping. Turn your<br/> points into rewards from world-<br/>class brands.</p>
            </div>

      <div className='border border-black'>
      <img src={phone} className="w-146 h-96" alt=""/>
                <h2>Rewards.</h2>
                <p>Join our Rewards club and earn<br/> points when shopping. Turn your<br/> points into rewards from world-<br/>class brands.</p>
            </div>

      

      
      
    </Slider>

    </>
  )
}

export default SliderPage;
