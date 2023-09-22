import "./Maps.css";
import { Link } from "react-router-dom";

function Maps (){

    return (
       <div className="Maps">
        <Link to="/"><img className="Frejord" alt="Frejord"></img></Link>
        <Link to="/"><img className="Demacia" alt="Demacia"></img></Link>
        <Link to="/"><img className="Targon" alt="Targon"></img></Link>
        <Link to="/"><img className="Noxus" alt="Noxus"></img></Link>
        <Link to="/"><img className="Shurima" alt="Shurima"></img></Link>
        <Link to="/"><img className="Shadow" alt="Shadow"></img></Link>
        <Link to="/"><img className="Ionia" alt="Ionia"></img></Link>
        <Link to="/"><img className="Piltover" alt="Piltover"></img></Link>
        <Link to="/"><img className="Zaun" alt="Zaun"></img></Link>
        <Link to="/"><img className="Bilgewater" alt="Bilgewater"></img></Link>

       </div>
    )
}

export default Maps;