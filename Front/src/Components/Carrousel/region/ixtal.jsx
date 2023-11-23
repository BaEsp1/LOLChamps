 //Malphite , neeko , Nidalee ,qiyana,rengar y zyra

import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import Malphite from "../../../lol/square/Malphite.png";
import Neeko from "../../../lol/square/Neeko.png";
import Nidalee from "../../../lol/square/Nidalee.png";
import Qiyana from "../../../lol/square/Qiyana.png";
import Rengar from "../../../lol/square/Rengar.png";
import Zyra from "../../../lol/square/Zyra.png";
import { useDispatch } from 'react-redux';
import { getDetail } from '../../Redux/Actions';
import { Link } from 'react-router-dom';

const Ixtal = () => {

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
        <Link to={`/detail/${encodeURI("Malphite")}`} onClick={() => handleDetailClick("Malphite")}>
        <img src={Malphite} alt="Imagen 1" />
        </Link>
      </div>
      <div>
      <Link to={`/detail/${encodeURI("Neeko")}`} onClick={() => handleDetailClick("Neeko")}>
        <img src={Neeko} alt="Imagen 2" />
        </Link>
      </div>
      <div>
        <Link to={`/detail/${encodeURI("Nidalee")}`} onClick={() => handleDetailClick("Nidalee")}>
        <img src={Nidalee} alt="Imagen 3" />
        </Link>
      </div>
      <div>
      <Link to={`/detail/${encodeURI("Qiyana")}`} onClick={() => handleDetailClick("Qiyana")}>
        <img src={Qiyana} alt="Imagen 4" />
        </Link>
      </div>
      <div>
      <Link to={`/detail/${encodeURI("Rengar")}`} onClick={() => handleDetailClick("Rengar")}>
        <img src={Rengar} alt="Imagen 5" />
        </Link>
      </div>
      <div>
        <Link to={`/detail/${encodeURI("Zyra")}`} onClick={() => handleDetailClick("Zyra")}>
        <img src={Zyra} alt="Imagen 6" />
        </Link>
      </div>
    </Slider>
  );
};

export default Ixtal;
