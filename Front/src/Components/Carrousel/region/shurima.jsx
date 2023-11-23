
//Akshan ,Amumu , Azir , Nasus , Rammus , Renekton , Sivir , Skarner , Taliyah y Xerath

import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import Akshan from "../../../lol/square/Akshan.png";
import Amumu from "../../../lol/square/Amumu.png";
import Azir from "../../../lol/square/Azir.png";
import Nasus from "../../../lol/square/Nasus.png";
import Rammus from "../../../lol/square/Rammus.png";
import Renekton from "../../../lol/square/Renekton.png";
import Sivir from "../../../lol/square/Sivir.png";
import Skarner from "../../../lol/square/Skarner.png";
import Taliyah from "../../../lol/square/Taliyah.png";
import Xerath from "../../../lol/square/Xerath.png";
import { useDispatch } from 'react-redux';
import { getDetail } from '../../Redux/Actions';
import { Link } from 'react-router-dom';

const Shurima = () => {

    const dispatch = useDispatch();

    const settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 5, 
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 1800,
        arrows: true,
    };


   const handleDetailClick = (id) => {
    dispatch(getDetail(id));
  };

  return (
    <Slider {...settings}>
      <div>
        <Link to={`/detail/${encodeURI("Akshan")}`} onClick={() => handleDetailClick("Akshan")}>
        <img src={Akshan} alt="Imagen 1" />
        </Link>
      </div>
      <div>
      <Link to={`/detail/${encodeURI("Amumu")}`} onClick={() => handleDetailClick("Amumu")}>
        <img src={Amumu} alt="Imagen 2" />
        </Link>
      </div>
      <div>
        <Link to={`/detail/${encodeURI("Azir")}`} onClick={() => handleDetailClick("Azir")}>
        <img src={Azir} alt="Imagen 3" />
        </Link>
      </div>
      <div>
      <Link to={`/detail/${encodeURI("Nasus")}`} onClick={() => handleDetailClick("Nasus")}>
        <img src={Nasus} alt="Imagen 4" />
        </Link>
      </div>
      <div>
      <Link to={`/detail/${encodeURI("Rammus")}`} onClick={() => handleDetailClick("Rammus")}>
        <img src={Rammus} alt="Imagen 5" />
        </Link>
      </div>
      <div>
        <Link to={`/detail/${encodeURI("Renekton")}`} onClick={() => handleDetailClick("Renekton")}>
        <img src={Renekton} alt="Imagen 6" />
        </Link>
      </div>
      <div>
      <Link to={`/detail/${encodeURI("Sivir")}`} onClick={() => handleDetailClick("Sivir")}>
        <img src={Sivir} alt="Imagen 7" />
        </Link>
      </div>
      <div>
      <Link to={`/detail/${encodeURI("Skarner")}`} onClick={() => handleDetailClick("Skarner")}>
        <img src={Skarner} alt="Imagen 8"/>
        </Link>
      </div>
      <div>
      <Link to={`/detail/${encodeURI("Taliyah")}`} onClick={() => handleDetailClick("Taliyah")}>
        <img src={Taliyah} alt="Imagen 9"/>
        </Link>
      </div>
      <div>
      <Link to={`/detail/${encodeURI("Xerath")}`} onClick={() => handleDetailClick("Xerath")}>
        <img src={Xerath} alt="Imagen 10"/>
        </Link>
      </div>
    </Slider>
  );
};

export default Shurima;
