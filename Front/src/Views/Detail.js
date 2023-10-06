import { useSelector } from "react-redux";
import "./Detail.css"
import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
// import 'bootstrap/dist/css/bootstrap.min.css';
import ProgressBar from 'react-bootstrap/ProgressBar';

// =================== Img COL1 ========================
const squareImages = require.context('../lol/loading', false, /\.(jpg)$/);
const imageMap = squareImages.keys().reduce((acc, key) => {
  const champId = key.replace(/^\.\/(.*)\.jpg$/, '$1');
  acc[champId] = squareImages(key);
  return acc;
}, {});

//  ===================== Carrousel Col2 ==============
const skinsImages = require.context('../lol/Skins', false, /\.(jpg)$/);

function Col2({ championName }) {

    const skinImageFiles = skinsImages.keys();
  
    const championSkinImages = skinImageFiles
      .filter((filename) => filename.includes(championName))
      console.log(championSkinImages)
  
      const settings = {
        dots: true,            
        infinite: true,        
        speed: 500,            
        slidesToShow: 1,       
        slidesToScroll: 1,     
        autoplay: true,        
        autoplaySpeed: 2000, 
        arrows: true,  
      };

    return (
      <Slider {...settings}>
        {championSkinImages.map((filename, index) => (
          <div key={index}>
            <img src={skinsImages(filename)} alt={championName}  className="Skins"/>
          </div>
        ))}
      </Slider>
    );
  }

  //  ===================== STATS Col3 ==============
  function RatingBar({ rating }) {
    // Asegúrate de que rating esté en el rango 0-100
    const normalizedRating = Math.max(0, Math.min(100, rating));
  
    return (
        <ProgressBar now={normalizedRating} label={`${normalizedRating}`} visuallyHidden />
      );
    }

//  ===================== DETAIL  ==============

function Detail (){

    const dataDetail = useSelector((state)=>state.detail);
    const data = Array.isArray(dataDetail) ? dataDetail : [];
    console.log(dataDetail)
    console.log(data)

    return (
        <div className="detail">
                {/* ============ Campeon ========== */}
            <div className="Col1">
             {data.map((c)=>(
                <div key={c.id}>
                <h1>{c.name}</h1>
                <h2>{c.title}</h2>
                {/* <h3>Class : {c.tags}</h3> */}
                <p>{c.blurb}</p>
                <img src={imageMap[c.id+"_0"]} alt={c.name}></img>
                </div>
                ))}
            </div>

                {/* ============ Skins ========== */}
            <div className="Col2">
                <h1>Skins</h1>
            {data.map((c)=>(
                <Col2 championName={c.name}/>))}
            </div>

                 {/* ============ Stats ========== */}
            <div className="Col3">
            <h1>Stats</h1>
            {data.map((c)=>(
                    <div className="Stats">
                        <h3>Attack:</h3>
                        <RatingBar rating={c.info.attack*10} />
                        <br></br>
                        <h3>Defense:</h3>
                        <RatingBar rating={c.info.defense*10} />
                        <br></br>
                        <h3>Magic:</h3>
                        <RatingBar rating={c.info.magic*10} />
                        <br></br>
                        <h3>Difficulty:</h3>
                        <RatingBar rating={c.info.difficulty*10} />
                        <br/>
                        <hr/>
                        <h2>Tags</h2>
                        <h4>{c.tags}</h4>
                    </div>
            ))}
            </div>
        </div>
    )
}

export default Detail;