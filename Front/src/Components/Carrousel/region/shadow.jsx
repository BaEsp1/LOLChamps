//elise ,Gwen , Hecarim , Kalista , Karthus , maokai , Thresh , vex , viego y yorick

import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import Elise from "../../../lol/square/Elise.png";
import Gwen from "../../../lol/square/Gwen.png";
import Hecarim from "../../../lol/square/Hecarim.png";
import Kalista from "../../../lol/square/Kalista.png";
import Karthus from "../../../lol/square/Karthus.png";
import Maokai from "../../../lol/square/Maokai.png";
import Thresh from "../../../lol/square/Thresh.png";
import Vex from "../../../lol/square/Vex.png";
import Viego from "../../../lol/square/Viego.png";
import Yorick from "../../../lol/square/Yorick.png";
import { useDispatch } from 'react-redux';
import { getDetail } from '../../Redux/Actions';
import { Link } from 'react-router-dom';

const Shadow = () => {

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
        <Link to={`/detail/${encodeURI("Elise")}`} onClick={() => handleDetailClick("Elise")}>
        <img src={Elise} alt="Imagen 1" />
        </Link>
      </div>
      <div>
      <Link to={`/detail/${encodeURI("Gwen")}`} onClick={() => handleDetailClick("Gwen")}>
        <img src={Gwen} alt="Imagen 2" />
        </Link>
      </div>
      <div>
        <Link to={`/detail/${encodeURI("Hecarim")}`} onClick={() => handleDetailClick("Hecarim")}>
        <img src={Hecarim} alt="Imagen 3" />
        </Link>
      </div>
      <div>
      <Link to={`/detail/${encodeURI("Kalista")}`} onClick={() => handleDetailClick("Kalista")}>
        <img src={Kalista} alt="Imagen 4" />
        </Link>
      </div>
      <div>
      <Link to={`/detail/${encodeURI("Karthus")}`} onClick={() => handleDetailClick("Karthus")}>
        <img src={Karthus} alt="Imagen 5" />
        </Link>
      </div>
      <div>
        <Link to={`/detail/${encodeURI("Maokai")}`} onClick={() => handleDetailClick("Maokai")}>
        <img src={Maokai} alt="Imagen 6" />
        </Link>
      </div>
      <div>
      <Link to={`/detail/${encodeURI("Thresh")}`} onClick={() => handleDetailClick("Thresh")}>
        <img src={Thresh} alt="Imagen 7" />
        </Link>
      </div>
      <div>
      <Link to={`/detail/${encodeURI("Vex")}`} onClick={() => handleDetailClick("Vex")}>
        <img src={Vex} alt="Imagen 8"/>
        </Link>
      </div>
      <div>
      <Link to={`/detail/${encodeURI("Viego")}`} onClick={() => handleDetailClick("Viego")}>
        <img src={Viego} alt="Imagen 9"/>
        </Link>
      </div>
      <div>
      <Link to={`/detail/${encodeURI("Yorick")}`} onClick={() => handleDetailClick("Yorick")}>
        <img src={Yorick} alt="Imagen 10"/>
        </Link>
      </div>
    </Slider>
  );
};

export default Shadow;
