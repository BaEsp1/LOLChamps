import React from 'react';
import Logo from "../Components/Logo";
import "./Lp.css";
import MyCarousel from "../Components/Carrousel/Lp-Carrousel";
import { getChamps, getClass } from "../Components/Redux/Actions";
import { useEffect } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

function Lp({ getChamps, getClass }) {

  useEffect(() => {
    getChamps();
  }, [getChamps]);

  useEffect(() => {
    getClass();
  }, []); 

  return (
    <div className="Lp">
      <div className="Title">
        <h1>WELCOME TO</h1>
        <Logo/>
        <h1> GUIDE PAGE</h1>
      </div>

      <button className="Enter">
        <Link to="/home">Enter</Link>
        </button>

      <div className="Carousel">
        <MyCarousel />
      </div>
    </div>
  )
}

const mapStateToProps = (state) => ({
  allChamps: state.allChamps,
  class: state.class,
});

const mapDispatchToProps = {
  getChamps,
  getClass,
};

export default connect(mapStateToProps, mapDispatchToProps)(Lp);
