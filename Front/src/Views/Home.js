import React from "react";
import { Link } from 'react-router-dom';
import "./Home.css" ;
import MyCarousel2 from "../Components/Carrousel/Home-Maps";
import TanksC from "../Components/Carrousel/Tanks";

function Home() {

  return (
    <div className="Home">
      <div className="Page">
        <Link to="/howToPlay" className="HowPlay">
          <div className="ImgHome">
            <h1>How to play?</h1>
            <p>League of Legends is a team-based strategy game where two teams of five powerful champions face off to destroy the other’s base. Choose from over 140 champions to make epic plays, secure kills, and take down towers as you battle your way to victory.</p>
          </div>
        </Link>
        <div className="Order">
          <div className="Columna1">
            <Link to="">SUPPORT</Link>
            <p>Carousel</p>
            <Link to="">MARKSMAN</Link>
            <p>Carousel</p>
          </div>
          <div className="Carousel2">
            <MyCarousel2 />
            <br></br>
            <div className="botombutons">
                <div>
                    <Link to="">TANK</Link>
                    <TanksC/>
                </div>
                <br></br>
                <div>
                    <Link to="">FIGTHER</Link>
                    <p>Carousel</p>
                </div>
            </div>
          </div>
          <div className="Columna3">
            <Link to="">MAGE</Link>
            <p>Carousel</p>
            <Link to="">ASSASIN</Link>
            <p>Carousel</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
