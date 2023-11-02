import React from "react";
import { Link } from 'react-router-dom';
import "./Home.css" ;
import MyCarousel2 from "../Components/Carrousel/Home-Maps";
import {TanksC, MagesC , AssasC, SuppC, MarkC, FigthC} from "../Components/Carrousel/Champs";


function Home() {

    // const fondo = BG;

  return (
    <div className="Home">


        <div className="Order">
            <div className="Columna1">
                <div className="back">
                    <h2>SUPPORT</h2>
                    <SuppC/>                
                </div>

                <div className="back">
                    <h2>ASSASSIN</h2>
                    <AssasC/>                
                </div>
            </div>

            <div className="Carousel2">
                <div className="HwP">            
                     <Link to="/howToPlay" >
                    <h1>How to play?</h1>
                    <p>League of Legends is a team-based strategy game where two teams of five powerful champions face off to destroy the other’s base.</p>
                    </Link>
                </div>
                <MyCarousel2 />
                <br></br>
                <div className="botombutons">
                    <div className="back">
                        <h2>TANK</h2>
                        <TanksC/>
                    </div>
                    <br></br>
                    <div className="back">
                        <h2>FIGTHER</h2>
                        <FigthC/>
                    </div>
                </div>

            </div>

            <div className="Columna3">
                <div className="back">
                    <h2>MAGE</h2>
                    < MagesC/>
                </div>
                <div className="back">
                    <h2>MARKSMAN</h2>
                    <MarkC/>
                </div>
            </div>

        </div>
      </div>

  );
}

export default Home;

