
//Aphelios , AurelionSol , Diana, Leona , Pantheon,orianaa , Taric, Zoe

import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import Aphelios from "../../../lol/square/Aphelios.png";
import AurelionSol from "../../../lol/square/AurelionSol.png";
import Diana from "../../../lol/square/Diana.png";
import Leona from "../../../lol/square/Leona.png";
import Pantheon from "../../../lol/square/Pantheon.png";
import Soraka  from "../../../lol/square/Soraka.png";
import Taric from "../../../lol/square/Taric.png";
import Zoe from "../../../lol/square/Zoe.png";
import { useDispatch } from 'react-redux';
import { getDetail } from '../../Redux/Actions';
import { Link } from 'react-router-dom';

const Targon = () => {

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
            <Link to={`/detail/${encodeURI("Aphelios")}`} onClick={() => handleDetailClick("Aphelios")}>
            <img src={Aphelios} alt="Imagen 1" />
            </Link>
        </div>
        <div>
        <Link to={`/detail/${encodeURI("AurelionSol")}`} onClick={() => handleDetailClick("AurelionSol")}>
            <img src={AurelionSol} alt="Imagen 2" />
            </Link>
        </div>
        <div>
            <Link to={`/detail/${encodeURI("Diana")}`} onClick={() => handleDetailClick("Diana")}>
            <img src={Diana} alt="Imagen 3" />
            </Link>
        </div>
        <div>
        <Link to={`/detail/${encodeURI("Leona")}`} onClick={() => handleDetailClick("Leona")}>
            <img src={Leona} alt="Imagen 4" />
            </Link>
        </div>
        <div>
        <Link to={`/detail/${encodeURI("Pantheon")}`} onClick={() => handleDetailClick("Pantheon")}>
            <img src={Pantheon} alt="Imagen 5" />
            </Link>
        </div>
        <div>
            <Link to={`/detail/${encodeURI("Soraka ")}`} onClick={() => handleDetailClick("Soraka ")}>
            <img src={Soraka } alt="Imagen 6" />
            </Link>
        </div>
        <div>
        <Link to={`/detail/${encodeURI("Taric")}`} onClick={() => handleDetailClick("Taric")}>
            <img src={Taric} alt="Imagen 7" />
            </Link>
        </div>
        <div>
        <Link to={`/detail/${encodeURI("Zoe")}`} onClick={() => handleDetailClick("Zoe")}>
            <img src={Zoe} alt="Imagen 8"/>
            </Link>
        </div>
    </Slider>
  );
};

export default Targon;
