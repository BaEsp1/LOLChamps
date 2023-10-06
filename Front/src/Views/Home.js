import React from "react";
import { Link } from 'react-router-dom';
import "./Home.css" ;
import MyCarousel2 from "../Components/Carrousel/Home-Maps";
import {TanksC, MagesC , AssasC, SuppC, MarkC, FigthC} from "../Components/Carrousel/Champs";
import BG from "../lol/Banner2.png"


function Home() {

    const fondo = BG;

  return (
    <div className="Home">
            <Link to="/howToPlay" className="HowPlay">
                <div>            
                    <img src={fondo} className="ImgHome" alt="BG" ></img>
                    <h1>How to play?</h1>
                    <p>League of Legends is a team-based strategy game where two teams of five powerful champions face off to destroy the other’s base. Choose from over 140 champions to make epic plays, secure kills, and take down towers as you battle your way to victory.</p>
                </div>
            </Link>

        <div className="Order">
            <div className="Columna1">
                <div>
                    <h2>SUPPORT</h2>
                    <SuppC/>                
                </div>

                <div>
                    <h2>ASSASSIN</h2>
                    <AssasC/>                
                </div>
            </div>

            <div className="Carousel2">
                <MyCarousel2 />
                <br></br>
                <div className="botombutons">
                    <div>
                        <h2>TANK</h2>
                        <TanksC/>
                    </div>
                    <br></br>
                    <div>
                        <h2>FIGTHER</h2>
                        <FigthC/>
                    </div>
                </div>

            </div>

            <div className="Columna3">
                <div>
                    <h2>MAGE</h2>
                    < MagesC/>
                </div>
                <div>
                    <h2>MARKSMAN</h2>
                    <MarkC/>
                </div>
            </div>

        </div>
      </div>

  );
}

export default Home;

