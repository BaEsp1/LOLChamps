import Lupa from "../lol/Lupa.png";
import "./Search.css";

function SearchBar() {

    return (
        <label className="Search">
            <input></input><img src={Lupa} alt="Lupa" className="Lupa"></img>
        </label>
    )
}

export default SearchBar;