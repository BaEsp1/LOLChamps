import React from "react";
import { Link } from 'react-router-dom';
import "./Home.css" ;
import MyCarousel2 from "../Components/Carrousel/Home-Maps";

function Home () {


    // poner un loading hasta que cargue:
 //Pedir que traigan los campeones
 // pedir que los dividan en clases 


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
                    <Link to="" >SUPPORT</Link>             
                    <p>Carousel</p>   
                    <Link to="" >ADC</Link>
                    <p>Carousel</p>  
                </div>

                <div className="Carousel2">
                <MyCarousel2/>
                <br></br>
                <Link to="" >Mid Line</Link>
                <p>Carousel</p>  
                </div>

                <div className="Columna3">
                    <Link to="" >Top Line</Link>   
                    <p>Carousel</p>               
                    <Link to="" >Jungle</Link>
                    <p>Carousel</p>  
                </div>

                </div>
            </div>
        </div>
    )   
}

export default Home;