
//Fizz,Gangplank,Graves, illao, Miss Fortune, nautilus, pyke,tahm kench,twisted fate

import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import Fizz from "../../../lol/square/Fizz.png";
import Gangplank from "../../../lol/square/Gangplank.png";
import Graves from "../../../lol/square/Graves.png";
import illao from "../../../lol/square/Illaoi.png";
import Miss from "../../../lol/square/MissFortune.png";
import Nautilus from "../../../lol/square/Nautilus.png";
import Pyke from "../../../lol/square/Pyke.png";
import TahmKench from "../../../lol/square/TahmKench.png";
import TwistedFate from "../../../lol/square/TwistedFate.png";
import { useDispatch } from 'react-redux';
import { getDetail } from '../../Redux/Actions';
import { Link } from 'react-router-dom';

const Bilgewater = () => {

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
        <Link to={`/detail/${encodeURI("Fizz")}`} onClick={() => handleDetailClick("Fizz")}>
        <img src={Fizz} alt="Imagen 1" />
        </Link>
      </div>
      <div>
      <Link to={`/detail/${encodeURI("Gangplank")}`} onClick={() => handleDetailClick("Gangplank")}>
        <img src={Gangplank} alt="Imagen 2" />
        </Link>
      </div>
      <div>
        <Link to={`/detail/${encodeURI("Graves")}`} onClick={() => handleDetailClick("Graves")}>
        <img src={Graves} alt="Imagen 3" />
        </Link>
      </div>
      <div>
      <Link to={`/detail/${encodeURI("Illaoi")}`} onClick={() => handleDetailClick("Illaoi")}>
        <img src={illao} alt="Imagen 4" />
        </Link>
      </div>
      <div>
      <Link to={`/detail/${encodeURI("MissFortune")}`} onClick={() => handleDetailClick("MissFortune")}>
        <img src={Miss} alt="Imagen 5" />
        </Link>
      </div>
      <div>
        <Link to={`/detail/${encodeURI("Nautilus")}`} onClick={() => handleDetailClick("Nautilus")}>
        <img src={Nautilus} alt="Imagen 6" />
        </Link>
      </div>
      <div>
      <Link to={`/detail/${encodeURI("Pyke")}`} onClick={() => handleDetailClick("Pyke")}>
        <img src={Pyke} alt="Imagen 7" />
        </Link>
      </div>
      <div>
      <Link to={`/detail/${encodeURI("TahmKench")}`} onClick={() => handleDetailClick("TahmKench")}>
        <img src={TahmKench} alt="Imagen 8"/>
        </Link>
      </div>
      <div>
      <Link to={`/detail/${encodeURI("TwistedFate")}`} onClick={() => handleDetailClick("TwistedFate")}>
        <img src={TwistedFate} alt="Imagen 9"/>
        </Link>
      </div>
    </Slider>
  );
};

export default Bilgewater;
