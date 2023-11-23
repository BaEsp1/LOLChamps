
//Fiora,Galio,Garen,JarvanIV , Kayle,Lucian , Lux , Morgana , poppy, Quinn,shyvana , sona, Sylas ,Vayne y Xing Zhao

import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import Fiora from "../../../lol/square/Fiora.png";
import Galio from "../../../lol/square/Galio.png";
import Garen from "../../../lol/square/Garen.png";
import JarvanIV from "../../../lol/square/JarvanIV.png";
import Kayle from "../../../lol/square/Kayle.png";
import Lucian from "../../../lol/square/Lucian.png";
import Lux from "../../../lol/square/Lux.png";
import Morgana from "../../../lol/square/Morgana.png";
import Poppy from "../../../lol/square/Poppy.png";
import Quinn from "../../../lol/square/Quinn.png";
import Shyvana from "../../../lol/square/Shyvana.png";
import Sona from "../../../lol/square/Sona.png";
import Sylas from "../../../lol/square/Sylas.png";
import Vayne from "../../../lol/square/Vayne.png";
import XinZhao from "../../../lol/square/XinZhao.png";
import { useDispatch } from 'react-redux';
import { getDetail } from '../../Redux/Actions';
import { Link } from 'react-router-dom';

const Demacia = () => {

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
        <Link to={`/detail/${encodeURI("Fiora")}`} onClick={() => handleDetailClick("Fiora")}>
        <img src={Fiora} alt="Imagen 1" />
        </Link>
      </div>
      <div>
      <Link to={`/detail/${encodeURI("Galio")}`} onClick={() => handleDetailClick("Galio")}>
        <img src={Galio} alt="Imagen 2" />
        </Link>
      </div>
      <div>
        <Link to={`/detail/${encodeURI("Garen")}`} onClick={() => handleDetailClick("Garen")}>
        <img src={Garen} alt="Imagen 3" />
        </Link>
      </div>
      <div>
      <Link to={`/detail/${encodeURI("JarvanIV")}`} onClick={() => handleDetailClick("JarvanIV")}>
        <img src={JarvanIV} alt="Imagen 4" />
        </Link>
      </div>
      <div>
      <Link to={`/detail/${encodeURI("Kayle")}`} onClick={() => handleDetailClick("Kayle")}>
        <img src={Kayle} alt="Imagen 5" />
        </Link>
      </div>
      <div>
        <Link to={`/detail/${encodeURI("Lucian")}`} onClick={() => handleDetailClick("Lucian")}>
        <img src={Lucian} alt="Imagen 6" />
        </Link>
      </div>
      <div>
      <Link to={`/detail/${encodeURI("Lux")}`} onClick={() => handleDetailClick("Lux")}>
        <img src={Lux} alt="Imagen 7" />
        </Link>
      </div>
      <div>
      <Link to={`/detail/${encodeURI("Morgana")}`} onClick={() => handleDetailClick("Morgana")}>
        <img src={Morgana} alt="Imagen 8"/>
        </Link>
      </div>
      <div>
      <Link to={`/detail/${encodeURI("Poppy")}`} onClick={() => handleDetailClick("Poppy")}>
        <img src={Poppy} alt="Imagen 9"/>
        </Link>
      </div>
      <div>
      <Link to={`/detail/${encodeURI("Quinn")}`} onClick={() => handleDetailClick("Quinn")}>
        <img src={Quinn} alt="Imagen 10"/>
        </Link>
      </div>
      <div>
      <Link to={`/detail/${encodeURI("Shyvana")}`} onClick={() => handleDetailClick("Shyvana")}>
        <img src={Shyvana} alt="Imagen 11"/>
        </Link>
      </div>
      <div>
      <Link to={`/detail/${encodeURI("Sona")}`} onClick={() => handleDetailClick("Sona")}>
        <img src={Sona} alt="Imagen 12"/>
        </Link>
      </div>
      <div>
      <Link to={`/detail/${encodeURI("Sylas")}`} onClick={() => handleDetailClick("Sylas")}>
        <img src={Sylas} alt="Imagen 13"/>
        </Link>
      </div>
      <div>
      <Link to={`/detail/${encodeURI("Vayne")}`} onClick={() => handleDetailClick("Vayne")}>
        <img src={Vayne} alt="Imagen 14"/>
        </Link>
      </div>
        <div>
      <Link to={`/detail/${encodeURI("XinZhao")}`} onClick={() => handleDetailClick("XinZhao")}>
        <img src={XinZhao} alt="Imagen 15"/>
        </Link>
      </div>    
    </Slider>
  );
};

export default Demacia;
