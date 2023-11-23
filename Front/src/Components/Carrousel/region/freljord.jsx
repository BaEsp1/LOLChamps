
// Anivia, Ashe , Braum, Gnar , Gragas, Lissandra , Nunu , Olaf, Ornn , Sejuana , trundle , tryndamere , Udyr y Volibear

import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import Anivia from "../../../lol/square/Anivia.png";
import Ashe from "../../../lol/square/Ashe.png";
import Braum from "../../../lol/square/Braum.png";
import Gnar from "../../../lol/square/Gnar.png";
import Gragas from "../../../lol/square/Gragas.png";
import Lissandra from "../../../lol/square/Lissandra.png";
import Nunu from "../../../lol/square/Nunu.png";
import Olaf from "../../../lol/square/Olaf.png";
import Ornn from "../../../lol/square/Ornn.png";
import Sejuani from "../../../lol/square/Sejuani.png";
import Trundle from "../../../lol/square/Trundle.png";
import Tryndamere from "../../../lol/square/Tryndamere.png";
import Udyr from "../../../lol/square/Udyr.png";
import Volibear from "../../../lol/square/Volibear.png";
import { useDispatch } from 'react-redux';
import { getDetail } from '../../Redux/Actions';
import { Link } from 'react-router-dom';

const Freljord = () => {

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
        <Link to={`/detail/${encodeURI("Anivia")}`} onClick={() => handleDetailClick("Anivia")}>
        <img src={Anivia} alt="Imagen 1" />
        </Link>
      </div>
      <div>
      <Link to={`/detail/${encodeURI("Ashe")}`} onClick={() => handleDetailClick("Ashe")}>
        <img src={Ashe} alt="Imagen 2" />
        </Link>
      </div>
      <div>
        <Link to={`/detail/${encodeURI("Braum")}`} onClick={() => handleDetailClick("Braum")}>
        <img src={Braum} alt="Imagen 3" />
        </Link>
      </div>
      <div>
      <Link to={`/detail/${encodeURI("Gnar")}`} onClick={() => handleDetailClick("Gnar")}>
        <img src={Gnar} alt="Imagen 4" />
        </Link>
      </div>
      <div>
      <Link to={`/detail/${encodeURI("Gragas")}`} onClick={() => handleDetailClick("Gragas")}>
        <img src={Gragas} alt="Imagen 5" />
        </Link>
      </div>
      <div>
        <Link to={`/detail/${encodeURI("Lissandra")}`} onClick={() => handleDetailClick("Lissandra")}>
        <img src={Lissandra} alt="Imagen 6" />
        </Link>
      </div>
      <div>
      <Link to={`/detail/${encodeURI("Nunu")}`} onClick={() => handleDetailClick("Nunu")}>
        <img src={Nunu} alt="Imagen 7" />
        </Link>
      </div>
      <div>
      <Link to={`/detail/${encodeURI("Olaf")}`} onClick={() => handleDetailClick("Olaf")}>
        <img src={Olaf} alt="Imagen 8"/>
        </Link>
      </div>
      <div>
      <Link to={`/detail/${encodeURI("Ornn")}`} onClick={() => handleDetailClick("Ornn")}>
        <img src={Ornn} alt="Imagen 9"/>
        </Link>
      </div>
      <div>
      <Link to={`/detail/${encodeURI("Sejuani")}`} onClick={() => handleDetailClick("Sejuani")}>
        <img src={Sejuani} alt="Imagen 10"/>
        </Link>
      </div>
      <div>
      <Link to={`/detail/${encodeURI("Trundle")}`} onClick={() => handleDetailClick("Trundle")}>
        <img src={Trundle} alt="Imagen 11"/>
        </Link>
      </div>
      <div>
      <Link to={`/detail/${encodeURI("Tryndamere")}`} onClick={() => handleDetailClick("Tryndamere")}>
        <img src={Tryndamere} alt="Imagen 12"/>
        </Link>
      </div>
      <div>
      <Link to={`/detail/${encodeURI("Udyr")}`} onClick={() => handleDetailClick("Udyr")}>
        <img src={Udyr} alt="Imagen 13"/>
        </Link>
      </div>
      <div>
      <Link to={`/detail/${encodeURI("Volibear")}`} onClick={() => handleDetailClick("Volibear")}>
        <img src={Volibear} alt="Imagen 14"/>
        </Link>
      </div>   
    </Slider>
  );
};

export default Freljord;
