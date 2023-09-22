import React from "react";
import Logo from "../Components/Logo";
import { Link, useLocation } from 'react-router-dom';
import "./Index.css";

const Index = () => {
    const location = useLocation();

    const links = {
        '/home': [
            <Link to="/champs">Champs</Link>,
            <Link to="/maps">Maps</Link>,
            <Link to="/favorites">Favorites</Link>,
        ],
        '/champs': [
            <Link to="/home">Home</Link>,
            <Link to="/maps">Maps</Link>,
            <Link to="/favorites">Favorites</Link>,
        ],
        '/maps': [
            <Link to="/champs">Champs</Link>,
            <Link to="/home">Home</Link>,
            <Link to="/favorites">Favorites</Link>,
        ],
        '/favorites': [
            <Link to="/champs">Champs</Link>,
            <Link to="/maps">Maps</Link>,
            <Link to="/home">Home</Link>,
        ],
        '/howToPlay': [
            <Link to="/champs">Champs</Link>,
            <Link to="/maps">Maps</Link>,
            <Link to="/favorites">Favorites</Link>,
        ],
    };

    const navLinks = links[location.pathname] || [];

    return (
        <div className="Index">
            <div className="IndexLeft">
                {navLinks.map((link, index) => (
                    <React.Fragment key={index}>{link}</React.Fragment>
                ))}
            </div>

            <Logo />

            <div className="IndexRight">
                <Link to="/">Close</Link>
            </div>
        </div>
    )
}

export default Index;
