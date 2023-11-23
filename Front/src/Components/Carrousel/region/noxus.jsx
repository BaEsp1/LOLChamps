
//Cassiopeia , Darius ,Draven , Katarina, Kled , Leblanc, Mordekaiser , Rell , Riven , Samira , Sion , Swain , talon , vladimir


// Cassiopeia, Darius , Draven, Katarina , Kled, Leblanc , Mordekaiser , Rell, Riven, Samira , Sion , Swain , Talon y Vladimir

import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import Cassiopeia from "../../../lol/square/Cassiopeia.png";
import Darius from "../../../lol/square/Darius.png";
import Draven from "../../../lol/square/Draven.png";
import Katarina from "../../../lol/square/Katarina.png";
import Kled from "../../../lol/square/Kled.png";
import Leblanc from "../../../lol/square/Leblanc.png";
import Mordekaiser from "../../../lol/square/Mordekaiser.png";
import Rell from "../../../lol/square/Rell.png";
import Riven from "../../../lol/square/Riven.png";
import Samira from "../../../lol/square/Samira.png";
import Sion from "../../../lol/square/Sion.png";
import Swain from "../../../lol/square/Swain.png";
import Talon from "../../../lol/square/Talon.png";
import Vladimir from "../../../lol/square/Vladimir.png";
import { useDispatch } from 'react-redux';
import { getDetail } from '../../Redux/Actions';
import { Link } from 'react-router-dom';

const Noxus = () => {

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
        <Link to={`/detail/${encodeURI("Cassiopeia")}`} onClick={() => handleDetailClick("Cassiopeia")}>
        <img src={Cassiopeia} alt="Imagen 1" />
        </Link>
      </div>
      <div>
      <Link to={`/detail/${encodeURI("Darius")}`} onClick={() => handleDetailClick("Darius")}>
        <img src={Darius} alt="Imagen 2" />
        </Link>
      </div>
      <div>
        <Link to={`/detail/${encodeURI("Draven")}`} onClick={() => handleDetailClick("Draven")}>
        <img src={Draven} alt="Imagen 3" />
        </Link>
      </div>
      <div>
      <Link to={`/detail/${encodeURI("Katarina")}`} onClick={() => handleDetailClick("Katarina")}>
        <img src={Katarina} alt="Imagen 4" />
        </Link>
      </div>
      <div>
      <Link to={`/detail/${encodeURI("Kled")}`} onClick={() => handleDetailClick("Kled")}>
        <img src={Kled} alt="Imagen 5" />
        </Link>
      </div>
      <div>
        <Link to={`/detail/${encodeURI("Leblanc")}`} onClick={() => handleDetailClick("Leblanc")}>
        <img src={Leblanc} alt="Imagen 6" />
        </Link>
      </div>
      <div>
      <Link to={`/detail/${encodeURI("Mordekaiser")}`} onClick={() => handleDetailClick("Mordekaiser")}>
        <img src={Mordekaiser} alt="Imagen 7" />
        </Link>
      </div>
      <div>
      <Link to={`/detail/${encodeURI("Rell")}`} onClick={() => handleDetailClick("Rell")}>
        <img src={Rell} alt="Imagen 8"/>
        </Link>
      </div>
      <div>
      <Link to={`/detail/${encodeURI("Riven")}`} onClick={() => handleDetailClick("Riven")}>
        <img src={Riven} alt="Imagen 9"/>
        </Link>
      </div>
      <div>
      <Link to={`/detail/${encodeURI("Samira")}`} onClick={() => handleDetailClick("Samira")}>
        <img src={Samira} alt="Imagen 10"/>
        </Link>
      </div>
      <div>
      <Link to={`/detail/${encodeURI("Sion")}`} onClick={() => handleDetailClick("Sion")}>
        <img src={Sion} alt="Imagen 11"/>
        </Link>
      </div>
      <div>
      <Link to={`/detail/${encodeURI("Swain")}`} onClick={() => handleDetailClick("Swain")}>
        <img src={Swain} alt="Imagen 12"/>
        </Link>
      </div>
      <div>
      <Link to={`/detail/${encodeURI("Talon")}`} onClick={() => handleDetailClick("Talon")}>
        <img src={Talon} alt="Imagen 13"/>
        </Link>
      </div>
      <div>
      <Link to={`/detail/${encodeURI("Vladimir")}`} onClick={() => handleDetailClick("Vladimir")}>
        <img src={Vladimir} alt="Imagen 14"/>
        </Link>
      </div>   
    </Slider>
  );
};

export default Noxus;
