import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { useSelector } from 'react-redux';
import "./carru.css"

function TanksC() {

  const tanks = useSelector((state) => state.class.Tank);

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  return (
    <div className='tanks'>

    <Slider {...settings}>
      {tanks
      ? tanks.map((tank) => (
        <div key={tank.id} className='carru'> 
          <img src={tank.image} alt={tank.name} />
        </div>))
      : <img src="not" alt="not"></img> }
    </Slider> </div>
  );
}

export default TanksC;
