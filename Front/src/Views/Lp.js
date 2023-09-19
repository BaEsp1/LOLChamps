import Logo from "../lol/Logo.png"
import "./Lp.css"
import MyCarousel from "../Components/Carrousel/Lp-Carrousel"

function Lp () {

    return (
        <div className="Lp">

            <div className="Title">
                <h1>WELCOME TO</h1>
                <img src={Logo} alt="logo"/>
                <h1> GUIDE PAGE</h1>
            </div>
            
        <button className="Enter"><a href="/home">Enter</a></button>

        <div className="Carousel">
            <MyCarousel/>
        </div>

        </div>
    )   
}

export default Lp;