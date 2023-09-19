import React from 'react';
import Logo from "../lol/Logo.png";
import "./Lp.css";
import MyCarousel from "../Components/Carrousel/Lp-Carrousel";
import Swal from 'sweetalert2';

function Lp() {

  const page = () => {
    Swal.fire({
      title: 'Are you sure?',
      text: "You go to page Official of League of Legends!",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: "Let's go!"
    }).then((result) => {
      if (result.isConfirmed) {
        window.location.href = 'https://www.leagueoflegends.com/'; 
      }
    });
  }

  return (
    <div className="Lp">
      <div className="Title">
        <h1>WELCOME TO</h1>
        <img src={Logo} alt="logo" onClick={() => page()} />
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
