import React from "react";
import Logo from "../Components/Logo";
import { Link, useLocation } from 'react-router-dom';
import "./Index.css" ;


const index = () => {

    const location = useLocation();

    return(
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
    )
}

export default index;

