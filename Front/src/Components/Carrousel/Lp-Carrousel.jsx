
import Ahri from "../../lol/Ahri.jpg";
import Ashe from "../../lol/Ashe.jpg";
import Akaly from "../../lol/Akaly.jpg";
import Bard from "../../lol/Bard.jpg";
import Cmile from "../../lol/Cmile.jpg";
import Darius from "../../lol/Darius.jpg";
import Ekko from "../../lol/Ekko.jpg";
import Evelynn from "../../lol/Evelynn.jpg";
import Jhin from "../../lol/Jhin.jpg";
import Tristana from "../../lol/Tristana.jpg";

import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const MyCarousel = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3, // Configura el número de imágenes a mostrar a la vez
    slidesToScroll: 3,
  };

  return (
    <Slider {...settings}>
      <div>
        <img src={Ahri} alt="Imagen 1" />
      </div>
      <div>
        <img src={Ashe} alt="Imagen 2" />
      </div>
      <div>
        <img src={Akaly} alt="Imagen 3" />
      </div>
      <div>
        <img src={Bard} alt="Imagen 4" />
      </div>
      <div>
        <img src={Cmile} alt="Imagen 5" />
      </div>
      <div>
        <img src={Darius} alt="Imagen 6" />
      </div>
      <div>
        <img src={Ekko} alt="Imagen 7" />
      </div>
      <div>
        <img src={Evelynn} alt="Imagen 8" />
      </div>
      <div>
        <img src={Jhin} alt="Imagen 3" />
      </div>
      <div>
        <img src={Tristana} alt="Imagen 10" />
      </div>
      {/* Agrega más elementos div para más imágenes */}
    </Slider>
  );
};

export default MyCarousel;
