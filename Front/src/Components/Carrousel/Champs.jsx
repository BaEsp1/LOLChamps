import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { useDispatch, useSelector } from 'react-redux';
import "./carru.css";
import { Link } from 'react-router-dom';
import { getDetail } from '../Redux/Actions';

// Importa todas las imágenes de la carpeta square
const squareImages = require.context('../../lol/square', false, /\.(png)$/);
const imageMap = squareImages.keys().reduce((acc, key) => {
  const champId = key.replace(/^\.\/(.*)\.png$/, '$1');
  acc[champId] = squareImages(key);
  return acc;
}, {});

// const dispatch = useDispatch;

function TanksC() {
  const tanks = useSelector((state) => state.class.Tank);
  const dispatch = useDispatch(); 

  const handleDetailClick = (tankId) => {
    dispatch(getDetail(tankId));
  };

  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 4,
    autoplay: true,
    autoplaySpeed: 2800,
    arrows: false,
  };

  return (
    <div className='carru'>
      <Slider {...settings}>
        {tanks
          ? tanks.map((tank) => (
            <div key={tank.id} className='carru'>
              <Link to={`/detail/${encodeURI(tank.id)}`} onClick={() => handleDetailClick(tank.id)}>
                <img src={imageMap[tank.id]} alt={tank.name} />
              </Link>
            </div>
          ))
          : <img src="not" alt="not" />}
      </Slider>
    </div>
  );
}


function MagesC() {
  const mages = useSelector((state) => state.class.Mage);
  const dispatch = useDispatch(); 

  const handleDetailClick = (id) => {
    dispatch(getDetail(id));
  };

  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 4,
    autoplay: true,
    autoplaySpeed: 2800,
    arrows: false,
  };

  return (
    <div className='carru'>
      <Slider {...settings}>
        {mages
          ? mages.map((mage) => (
            <div key={mage.id} className='carru'>
              <Link to={`/detail/${encodeURI(mage.id)}`} onClick={() => handleDetailClick(mage.id)}>
                <img src={imageMap[mage.id]} alt={mage.name} />
              </Link>
            </div>
          ))
          : <img src="not" alt="not" />}
      </Slider>
    </div>
  );
}

function AssasC() {
  const assas = useSelector((state) => state.class.Assassin);
  const dispatch = useDispatch(); 

  const handleDetailClick = (id) => {
    dispatch(getDetail(id));
  };

  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 4,
    autoplay: true,
    autoplaySpeed: 2800,
    arrows: false,
  };

  return (
    <div className='carru'>
      <Slider {...settings}>
        {assas
          ? assas.map((assas) => (
            <div key={assas.id} className='carru'>
              <Link to={`/detail/${encodeURI(assas.id)}`} onClick={() => handleDetailClick(assas.id)}>
                <img src={imageMap[assas.id]} alt={assas.name} />
              </Link>
            </div>
          ))
          : <img src="not" alt="not" />}
      </Slider>
    </div>
  );
}

function SuppC(){
  const assas = useSelector((state) => state.class.Support);
  const dispatch = useDispatch(); 

  const handleDetailClick = (id) => {
    dispatch(getDetail(id));
  };

  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 4,
    autoplay: true,
    autoplaySpeed: 2800,
    arrows: false,
  };

  return (
    <div className='carru'>
      <Slider {...settings}>
        {assas
          ? assas.map((assas) => (
            <div key={assas.id} className='carru'>
              <Link to={`/detail/${encodeURI(assas.id)}`} onClick={() => handleDetailClick(assas.id)}>
              <img src={imageMap[assas.id]} alt={assas.name} />
              </Link>
            </div>
          ))
          : <img src="not" alt="not" />}
      </Slider>
    </div>
  );
};

function MarkC(){
  const assas = useSelector((state) => state.class.Marksman);
  const dispatch = useDispatch(); 

  const handleDetailClick = (id) => {
    dispatch(getDetail(id));
  };


  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 4,
    autoplay: true,
    autoplaySpeed: 2800,
    arrows: false,
  };

  return (
    <div className='carru'>
      <Slider {...settings}>
        {assas
          ? assas.map((assas) => (
            <div key={assas.id} className='carru'>
              <Link to={`/detail/${encodeURI(assas.id)}`} onClick={() => handleDetailClick(assas.id)}>
              <img src={imageMap[assas.id]} alt={assas.name} />
              </Link>
            </div>
          ))
          : <img src="not" alt="not" />}
      </Slider>
    </div>
  );
};

function FigthC(){
  const assas = useSelector((state) => state.class.Fighter);
  const dispatch = useDispatch(); 

  const handleDetailClick = (id) => {
    dispatch(getDetail(id));
  };

  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 4,
    autoplay: true,
    autoplaySpeed: 2800,
    arrows: false,
  };

  return (
    <div className='carru'>
      <Slider {...settings}>
        {assas
          ? assas.map((assas) => (
            <div key={assas.id} className='carru'>
              <Link to={`/detail/${encodeURI(assas.id)}`} onClick={() => handleDetailClick(assas.id)}>
              <img src={imageMap[assas.id]} alt={assas.name} />
              </Link>
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
