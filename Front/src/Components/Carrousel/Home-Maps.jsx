
import Abismo from "../../lol/Maps/Abismo.png";
import Bosque from "../../lol/Maps/Bosque.png";
import Lamentos from "../../lol/Maps/Lamentos.png";
import Cristal from "../../lol/Maps/Cristal.png";

import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const MyCarousel2 = () => {
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1, 
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 1800,
    arrows: false, // Oculta las flechas de navegación
  };

  return (
    <Slider {...settings}>
      <div>
        <img src={Abismo} alt="Imagen 1" title="ARAM" />
      </div>
      <div>
        <img src={Lamentos} alt="Imagen 2" title="Summoner's Rift"/>
      </div>
      <div>
        <img src={Cristal} alt="Imagen 3" title="Crystal" />
      </div>
      <div>
        <img src={Bosque} alt="Imagen 4" title="Twisted Treeline"/>
      </div>
    </Slider>
  );
};

export default MyCarousel2;
