import React from 'react';
import Logo from "../Components/Logo";
import "./Lp.css";
import MyCarousel from "../Components/Carrousel/Lp-Carrousel";

function Lp() {

  return (
    <div className="Lp">
      <div className="Title">
        <h1>WELCOME TO</h1>
        <Logo/>
        <h1> GUIDE PAGE</h1>
      </div>

      <button className="Enter"><a href="/home">Enter</a></button>

      <div className="Carousel">
        <MyCarousel />
      </div>
    </div>
  )
}

export default Lp;
