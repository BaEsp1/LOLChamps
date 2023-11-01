import React from "react";
import Logo from "../Components/Logo";
import { Link } from "react-router-dom";
import "./Index.css";

const IndexDetail = () => {


    return (
        <div className="Index">
            <div className="IndexLeft">
            <Link to="/home">Home</Link>
            <Link to="/champs">Champs</Link>
            <Link to="/maps">Maps</Link>
            <Link to="/favorites">Favorites</Link>
            </div>

            <Logo />

            <div className="IndexRight">
                <Link to="/">Close</Link>
            </div>
        </div>
    )
}

export default IndexDetail;
