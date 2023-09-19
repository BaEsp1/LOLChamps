
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
import Amumu from "../../lol/Amumu.jpg";
import Anivia from "../../lol/Anivia.jpg";
import Lol from "../../lol/Lol.jpg";
import Aurelio from "../../lol/Aurelio.jpg";
import Annie from "../../lol/Annie.jpg";

import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const MyCarousel = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3, 
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
        <img src={Jhin} alt="Imagen 9" />
      </div>
      <div>
        <img src={Tristana} alt="Imagen 10" />
      </div>
      <div>
        <img src={Amumu} alt="Imagen 11" />
      </div>
      <div>
        <img src={Anivia} alt="Imagen 12" />
      </div>
      <div>
        <img src={Annie} alt="Imagen 13" />
      </div>
      <div>
        <img src={Aurelio} alt="Imagen 15" />
      </div>
      <div>
        <img src={Lol} alt="Imagen 14" />
      </div>
    </Slider>
  );
};

export default MyCarousel;
