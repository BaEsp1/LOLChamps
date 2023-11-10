import "./Footer.css"
import { Link } from "react-router-dom";
import Git from "../Icons/github.png"
import Linke from "../Icons/LinkedIn.png"
import Baesp from "../Icons/Baesp.png"

const Footer = ( ) =>{

    return (
        <div className="Footer">
            <h2>Developed by</h2> <h1>Baesp1</h1>
               <Link to="https://github.com/BaEsp1" title="Git Hub Baesp"><img src={Git} alt="Git"/></Link>
                <Link to="https://www.linkedin.com/in/baesp"  title="LinkedIn Baesp"><img src={Linke} alt="LinkedIn"/></Link>
                 <Link to="https://baesp1.github.io/" title="Port-foil Baesp"><img src={Baesp} alt="portfoil" className="port"/></Link> 
        </div>
    )
}

export default Footer;

