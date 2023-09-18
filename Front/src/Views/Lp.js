import Logo from "../lol/Logo.png"
import "./Lp.css"

function Lp () {

    return (
        <div className="Lp">

            <div className="Title">
                <h1>Welcome to </h1>
                <img src={Logo} alt="logo"/>
                <h1> Guide page</h1>
            </div>

        </div>
    )   
}

export default Lp;