import React from "react";
import Logo from "../Components/Logo";
import { Link, useLocation } from 'react-router-dom';
import "./Home.css" ;
import MyCarousel2 from "../Components/Carrousel/Home-Maps";

function Home () {

    const location = useLocation();

    return (
        <div className="Home">
            <div className="Index">
                <div className="IndexLeft">
                    { (location === "/home") ? <Link to="/home">Home</Link> : <Link to="Champs">Champs</Link> }
                    <Link to="Maps">Maps</Link>
                </div>

                <Logo />

                <div className="IndexRight">
                    <Link to="Favorite">Favorite</Link>
                    <Link to="/">Close</Link>

                </div>

            </div>

            <div className="Page">

            <Link className="HowPlay">
                <div className="ImgHome">
                    <h1>How play?</h1>
                    <p>eaioeadioaejuiodjioqwjedaiodjioaejidoa </p>
                </div>
            </Link>
            <div className="Order">

                <div className="Columna1">
                    <Link to="" >Support</Link>                
                    <Link to="" >ADC</Link>
                </div>

                <div className="Carousel2">
                <MyCarousel2/>
                </div>

                <div className="Columna2">
                    <Link to="" >Mid Line</Link>
                </div>

                <div className="Columna3"></div>
                    <Link to="" >Top Line</Link>                
                    <Link to="" >Jungle</Link>
                </div>
            
            </div>
        </div>
    )   
}

export default Home;