
//Ahri , Akali, Irelia , Ivern , Jhin , karma , kayn , Kennen , Lee Sin , Lillia , Master Yi , Rakan , sett, Shen , Syndra, Varus , wukong, Xayah, Yasuo,yone , Zed

import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import Ahri from "../../../lol/square/Ahri.png";
import Akali from "../../../lol/square/Akali.png";
import Irelia from "../../../lol/square/Irelia.png";
import Ivern from "../../../lol/square/Ivern.png";
import Jhin from "../../../lol/square/Jhin.png";
import Karma from "../../../lol/square/Karma.png";
import Kayn from "../../../lol/square/Kayn.png";
import Kennen from "../../../lol/square/Kennen.png";
import LeeSin from "../../../lol/square/LeeSin.png";
import Lillia from "../../../lol/square/Lillia.png";
import MasterYi from "../../../lol/square/MasterYi.png";
import Rakan from "../../../lol/square/Rakan.png";
import Sett from "../../../lol/square/Sett.png";
import Shen from "../../../lol/square/Shen.png";
import Syndra from "../../../lol/square/Syndra.png";
import Varus from "../../../lol/square/Varus.png";
import Wukong from "../../../lol/square/MonkeyKing.png";
import Xayah from "../../../lol/square/Xayah.png";
import Yasuo from "../../../lol/square/Yasuo.png";
import Yone from "../../../lol/square/Yone.png";
import Zed from "../../../lol/square/Zed.png";
import { useDispatch } from 'react-redux';
import { getDetail } from '../../Redux/Actions';
import { Link } from 'react-router-dom';

const Ionia = () => {

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
        <Link to={`/detail/${encodeURI("Ahri")}`} onClick={() => handleDetailClick("Ahri")}>
        <img src={Ahri} alt="Imagen 1" />
        </Link>
      </div>
      <div>
      <Link to={`/detail/${encodeURI("Akali")}`} onClick={() => handleDetailClick("Akali")}>
        <img src={Akali} alt="Imagen 2" />
        </Link>
      </div>
      <div>
        <Link to={`/detail/${encodeURI("Irelia")}`} onClick={() => handleDetailClick("Irelia")}>
        <img src={Irelia} alt="Imagen 3" />
        </Link>
      </div>
      <div>
      <Link to={`/detail/${encodeURI("Ivern")}`} onClick={() => handleDetailClick("Ivern")}>
        <img src={Ivern} alt="Imagen 4" />
        </Link>
      </div>
      <div>
      <Link to={`/detail/${encodeURI("Jhin")}`} onClick={() => handleDetailClick("Jhin")}>
        <img src={Jhin} alt="Imagen 5" />
        </Link>
      </div>
      <div>
        <Link to={`/detail/${encodeURI("Karma")}`} onClick={() => handleDetailClick("Karma")}>
        <img src={Karma} alt="Imagen 6" />
        </Link>
      </div>
      <div>
      <Link to={`/detail/${encodeURI("Kayn")}`} onClick={() => handleDetailClick("Kayn")}>
        <img src={Kayn} alt="Imagen 7" />
        </Link>
      </div>
      <div>
      <Link to={`/detail/${encodeURI("Kennen")}`} onClick={() => handleDetailClick("Kennen")}>
        <img src={Kennen} alt="Imagen 8"/>
        </Link>
      </div>
      <div>
      <Link to={`/detail/${encodeURI("LeeSin")}`} onClick={() => handleDetailClick("LeeSin")}>
        <img src={LeeSin} alt="Imagen 9"/>
        </Link>
      </div>
      <div>
      <Link to={`/detail/${encodeURI("Lillia")}`} onClick={() => handleDetailClick("Lillia")}>
        <img src={Lillia} alt="Imagen 10"/>
        </Link>
      </div>
      <div>
      <Link to={`/detail/${encodeURI("MasterYi")}`} onClick={() => handleDetailClick("MasterYi")}>
        <img src={MasterYi} alt="Imagen 11"/>
        </Link>
      </div>
      <div>
      <Link to={`/detail/${encodeURI("Rakan")}`} onClick={() => handleDetailClick("Rakan")}>
        <img src={Rakan} alt="Imagen 12"/>
        </Link>
      </div>
      <div>
      <Link to={`/detail/${encodeURI("Sett")}`} onClick={() => handleDetailClick("Sett")}>
        <img src={Sett} alt="Imagen 13"/>
        </Link>
      </div>
      <div>
      <Link to={`/detail/${encodeURI("Shen")}`} onClick={() => handleDetailClick("Shen")}>
        <img src={Shen} alt="Imagen 14"/>
        </Link>
      </div>
        <div>
      <Link to={`/detail/${encodeURI("Syndra")}`} onClick={() => handleDetailClick("Syndra")}>
        <img src={Syndra} alt="Imagen 15"/>
        </Link>
      </div>    
        <div>
      <Link to={`/detail/${encodeURI("Varus")}`} onClick={() => handleDetailClick("Varus")}>
        <img src={Varus} alt="Imagen 16"/>
        </Link>
      </div>  
        <div>
      <Link to={`/detail/${encodeURI("MonkeyKing")}`} onClick={() => handleDetailClick("MonkeyKing")}>
        <img src={Wukong} alt="Imagen 17"/>
        </Link>
      </div>  
        <div>
      <Link to={`/detail/${encodeURI("Xayah")}`} onClick={() => handleDetailClick("Xayah")}>
        <img src={Xayah} alt="Imagen 18"/>
        </Link>
      </div>  
        <div>
      <Link to={`/detail/${encodeURI("Yasuo")}`} onClick={() => handleDetailClick("Yasuo")}>
        <img src={Yasuo} alt="Imagen 19"/>
        </Link>
      </div>  
        <div>
      <Link to={`/detail/${encodeURI("Yone")}`} onClick={() => handleDetailClick("Yone")}>
        <img src={Yone} alt="Imagen 20"/>
        </Link>
      </div>  
           <div>
      <Link to={`/detail/${encodeURI("Zed")}`} onClick={() => handleDetailClick("Zed")}>
        <img src={Zed} alt="Imagen 21"/>
        </Link>
      </div>     
    </Slider>
  );
};

export default Ionia;
