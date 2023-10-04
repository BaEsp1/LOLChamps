import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { useSelector } from 'react-redux';
import "./carru.css";

// Importa todas las imágenes de la carpeta square
const squareImages = require.context('../../lol/square', false, /\.(png)$/);
const imageMap = squareImages.keys().reduce((acc, key) => {
  const champId = key.replace(/^\.\/(.*)\.png$/, '$1');
  acc[champId] = squareImages(key);
  return acc;
}, {});

function TanksC() {
  const tanks = useSelector((state) => state.class.Tank);

  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 4,
  };

  return (
    <div className='carru'>
      <Slider {...settings}>
        {tanks
          ? tanks.map((tank) => (
            <div key={tank.id} className='carru'>
              {/* Usa la lógica para seleccionar la imagen adecuada dinámicamente */}
              <img src={imageMap[tank.id]} alt={tank.name} />
            </div>
          ))
          : <img src="not" alt="not" />}
      </Slider>
    </div>
  );
}


function MagesC() {
  const mages = useSelector((state) => state.class.Mage);

  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 4,
  };

  return (
    <div className='carru'>
      <Slider {...settings}>
        {mages
          ? mages.map((mage) => (
            <div key={mage.id} className='carru'>
              {/* Usa la lógica para seleccionar la imagen adecuada dinámicamente */}
              <img src={imageMap[mage.id]} alt={mage.name} />
            </div>
          ))
          : <img src="not" alt="not" />}
      </Slider>
    </div>
  );
}

function AssasC() {
  const assas = useSelector((state) => state.class.Assassin);

  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 4,
  };

  return (
    <div className='carru'>
      <Slider {...settings}>
        {assas
          ? assas.map((assas) => (
            <div key={assas.id} className='carru'>
              {/* Usa la lógica para seleccionar la imagen adecuada dinámicamente */}
              <img src={imageMap[assas.id]} alt={assas.name} />
            </div>
          ))
          : <img src="not" alt="not" />}
      </Slider>
    </div>
  );
}

function SuppC(){
  const assas = useSelector((state) => state.class.Support);

  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 4,
  };

  return (
    <div className='carru'>
      <Slider {...settings}>
        {assas
          ? assas.map((assas) => (
            <div key={assas.id} className='carru'>
              {/* Usa la lógica para seleccionar la imagen adecuada dinámicamente */}
              <img src={imageMap[assas.id]} alt={assas.name} />
            </div>
          ))
          : <img src="not" alt="not" />}
      </Slider>
    </div>
  );
};

function MarkC(){
  const assas = useSelector((state) => state.class.Marksman);

  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 4,
  };

  return (
    <div className='carru'>
      <Slider {...settings}>
        {assas
          ? assas.map((assas) => (
            <div key={assas.id} className='carru'>
              {/* Usa la lógica para seleccionar la imagen adecuada dinámicamente */}
              <img src={imageMap[assas.id]} alt={assas.name} />
            </div>
          ))
          : <img src="not" alt="not" />}
      </Slider>
    </div>
  );
};

function FigthC(){
  const assas = useSelector((state) => state.class.Fighter);

  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 4,
  };

  return (
    <div className='carru'>
      <Slider {...settings}>
        {assas
          ? assas.map((assas) => (
            <div key={assas.id} className='carru'>
              {/* Usa la lógica para seleccionar la imagen adecuada dinámicamente */}
              <img src={imageMap[assas.id]} alt={assas.name} />
            </div>
          ))
          : <img src="not" alt="not" />}
      </Slider>
    </div>
  );
};


export {
  TanksC,
  MagesC,
  AssasC,
  SuppC,
  FigthC,
  MarkC
};
