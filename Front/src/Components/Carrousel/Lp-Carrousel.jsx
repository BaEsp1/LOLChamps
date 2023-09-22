
import Ahri from "../../lol/Champs/Ahri.jpg";
import Ashe from "../../lol/Champs/Ashe.jpg";
import Akaly from "../../lol/Champs/Akaly.jpg";
import Bard from "../../lol/Champs/Bard.jpg";
import Cmile from "../../lol/Champs/Cmile.jpg";
import Darius from "../../lol/Champs/Darius.jpg";
import Ekko from "../../lol/Champs/Ekko.jpg";
import Evelynn from "../../lol/Champs/Evelynn.jpg";
import Jhin from "../../lol/Champs/Jhin.jpg";
import Tristana from "../../lol/Champs/Tristana.jpg";
import Amumu from "../../lol/Champs/Amumu.jpg";
import Anivia from "../../lol/Champs/Anivia.jpg";
import Lol from "../../lol/Champs/Lol.jpg";
import Aurelio from "../../lol/Champs/Aurelio.jpg";
import Annie from "../../lol/Champs/Annie.jpg";

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
