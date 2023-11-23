
// Blitzcrank, DrMundo , Ekko, Janna , Jinx, Renata ,Singed , Twitch, Urgot , viktor ,Warwick , Zac , Ziggs y Zeri

import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import Blitzcrank from "../../../lol/square/Blitzcrank.png";
import DrMundo from "../../../lol/square/DrMundo.png";
import Ekko from "../../../lol/square/Ekko.png";
import Janna from "../../../lol/square/Janna.png";
import Jinx from "../../../lol/square/Jinx.png";
import Renata from "../../../lol/square/Renata.png";
import Singed from "../../../lol/square/Singed.png";
import Twitch from "../../../lol/square/Twitch.png";
import Urgot from "../../../lol/square/Urgot.png";
import Viktor from "../../../lol/square/Viktor.png";
import Warwick from "../../../lol/square/Warwick.png";
import Zac from "../../../lol/square/Zac.png";
import Ziggs from "../../../lol/square/Ziggs.png";
import Zeri from "../../../lol/square/Zeri.png";
import { useDispatch } from 'react-redux';
import { getDetail } from '../../Redux/Actions';
import { Link } from 'react-router-dom';

const Zaun = () => {

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
        <Link to={`/detail/${encodeURI("Blitzcrank")}`} onClick={() => handleDetailClick("Blitzcrank")}>
        <img src={Blitzcrank} alt="Imagen 1" />
        </Link>
      </div>
      <div>
      <Link to={`/detail/${encodeURI("DrMundo")}`} onClick={() => handleDetailClick("DrMundo")}>
        <img src={DrMundo} alt="Imagen 2" />
        </Link>
      </div>
      <div>
        <Link to={`/detail/${encodeURI("Ekko")}`} onClick={() => handleDetailClick("Ekko")}>
        <img src={Ekko} alt="Imagen 3" />
        </Link>
      </div>
      <div>
      <Link to={`/detail/${encodeURI("Janna")}`} onClick={() => handleDetailClick("Janna")}>
        <img src={Janna} alt="Imagen 4" />
        </Link>
      </div>
      <div>
      <Link to={`/detail/${encodeURI("Jinx")}`} onClick={() => handleDetailClick("Jinx")}>
        <img src={Jinx} alt="Imagen 5" />
        </Link>
      </div>
      <div>
        <Link to={`/detail/${encodeURI("Renata")}`} onClick={() => handleDetailClick("Renata")}>
        <img src={Renata} alt="Imagen 6" />
        </Link>
      </div>
      <div>
      <Link to={`/detail/${encodeURI("Singed")}`} onClick={() => handleDetailClick("Singed")}>
        <img src={Singed} alt="Imagen 7" />
        </Link>
      </div>
      <div>
      <Link to={`/detail/${encodeURI("Twitch")}`} onClick={() => handleDetailClick("Twitch")}>
        <img src={Twitch} alt="Imagen 8"/>
        </Link>
      </div>
      <div>
      <Link to={`/detail/${encodeURI("Urgot")}`} onClick={() => handleDetailClick("Urgot")}>
        <img src={Urgot} alt="Imagen 9"/>
        </Link>
      </div>
      <div>
      <Link to={`/detail/${encodeURI("Viktor")}`} onClick={() => handleDetailClick("Viktor")}>
        <img src={Viktor} alt="Imagen 10"/>
        </Link>
      </div>
      <div>
      <Link to={`/detail/${encodeURI("Warwick")}`} onClick={() => handleDetailClick("Warwick")}>
        <img src={Warwick} alt="Imagen 11"/>
        </Link>
      </div>
      <div>
      <Link to={`/detail/${encodeURI("Zac")}`} onClick={() => handleDetailClick("Zac")}>
        <img src={Zac} alt="Imagen 12"/>
        </Link>
      </div>
      <div>
      <Link to={`/detail/${encodeURI("Ziggs")}`} onClick={() => handleDetailClick("Ziggs")}>
        <img src={Ziggs} alt="Imagen 13"/>
        </Link>
      </div>
      <div>
      <Link to={`/detail/${encodeURI("Zeri")}`} onClick={() => handleDetailClick("Zeri")}>
        <img src={Zeri} alt="Imagen 14"/>
        </Link>
      </div>   
    </Slider>
  );
};

export default Zaun;
