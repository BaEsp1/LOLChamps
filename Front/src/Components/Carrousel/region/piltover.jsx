
//Caitlyn , camille , ezreal, heimerdinger , jayce,orianaa , seraphine, Vi

import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import Caitlyn from "../../../lol/square/Caitlyn.png";
import Camille from "../../../lol/square/Camille.png";
import Ezreal from "../../../lol/square/Ezreal.png";
import Heimerdinger from "../../../lol/square/Heimerdinger.png";
import Jayce from "../../../lol/square/Jayce.png";
import Orianna from "../../../lol/square/Orianna.png";
import Seraphine from "../../../lol/square/Seraphine.png";
import Vi from "../../../lol/square/Vi.png";
import { useDispatch } from 'react-redux';
import { getDetail } from '../../Redux/Actions';
import { Link } from 'react-router-dom';

const Piltover = () => {

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
        <Link to={`/detail/${encodeURI("Caitlyn")}`} onClick={() => handleDetailClick("Caitlyn")}>
        <img src={Caitlyn} alt="Imagen 1" />
        </Link>
      </div>
      <div>
      <Link to={`/detail/${encodeURI("Camille")}`} onClick={() => handleDetailClick("Camille")}>
        <img src={Camille} alt="Imagen 2" />
        </Link>
      </div>
      <div>
        <Link to={`/detail/${encodeURI("Ezreal")}`} onClick={() => handleDetailClick("Ezreal")}>
        <img src={Ezreal} alt="Imagen 3" />
        </Link>
      </div>
      <div>
      <Link to={`/detail/${encodeURI("Heimerdinger")}`} onClick={() => handleDetailClick("Heimerdinger")}>
        <img src={Heimerdinger} alt="Imagen 4" />
        </Link>
      </div>
      <div>
      <Link to={`/detail/${encodeURI("Jayce")}`} onClick={() => handleDetailClick("Jayce")}>
        <img src={Jayce} alt="Imagen 5" />
        </Link>
      </div>
      <div>
        <Link to={`/detail/${encodeURI("Orianna")}`} onClick={() => handleDetailClick("Orianna")}>
        <img src={Orianna} alt="Imagen 6" />
        </Link>
      </div>
      <div>
      <Link to={`/detail/${encodeURI("Seraphine")}`} onClick={() => handleDetailClick("Seraphine")}>
        <img src={Seraphine} alt="Imagen 7" />
        </Link>
      </div>
      <div>
      <Link to={`/detail/${encodeURI("Vi")}`} onClick={() => handleDetailClick("Vi")}>
        <img src={Vi} alt="Imagen 8"/>
        </Link>
      </div>
    </Slider>
  );
};

export default Piltover;
