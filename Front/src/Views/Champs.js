import SearchBar from "../Components/Search";
import { useSelector, useDispatch } from "react-redux/es/hooks/useSelector";
import { useState , useEffect } from "react";
import "./Champs.css"
import fav from "../lol/Like.png"

const squareImages = require.context('../lol/square', false, /\.(png)$/);
const imageMap = squareImages.keys().reduce((acc, key) => {
    const champId = key.replace(/^\.\/(.*)\.png$/, '$1');
    acc[champId] = squareImages(key);
    return acc;
}, {});


function Champs () {
    const all = useSelector((state)=> state.allChamps);
    // const dispatch = useDispatch();
    const Fav = fav

    //Paginado:
    const [currentPage, setCurrentPage] = useState(0);

    let nextPage = () => {
        if (all.length <= currentPage + 27) {
        setCurrentPage(currentPage);
        } else setCurrentPage(currentPage + 27);
    };

    let prevPage = () => {
        if (currentPage < 27) {
        setCurrentPage(0);
        } else {
        setCurrentPage(currentPage - 27);
        }
    };

    const firstPage = () => {
        setCurrentPage(0);
    };

    const lastPage = () => {
        setCurrentPage(all.length - 27);
        console.log(currentPage);
    };

    useEffect(() => {
        firstPage()
    }, [all]);
    
    
    const filteredC = all.slice(currentPage, currentPage + 27);

    let pageActual= Math.floor(currentPage/27+1)
    

    return(
    <div className="Champs">

        <div className="paginado">
            <button onClick={firstPage} className="boton"name="btonFirst" key="btonFirst"> {'<<'} </button>
            <button onClick={prevPage} className="boton"name="btonPrev" key="btonPrev"> {' < '} </button>
            <label className="labelPag" name="labelPag" key="labelPag"> {pageActual} </label>
            <button onClick={nextPage} className="boton"name="btonNext" key="btonNext"> {' > '} </button>
            <button onClick={lastPage} className="boton"name="btonLast" key="btonLast"> {'>>'} </button>
        </div>

        <div className="page">
            <div className="filtros">
                <h3>Search:</h3>
                <SearchBar/>
                <h3>Order:</h3>
                    <select>
                        <option>A - Z</option>
                        <option>Z - A</option>
                    </select>

                <h3>Filter:</h3>
                <button>Figther</button>
                <button>Mage</button>
                <button>Marksman</button>
                <button>Support</button>
                <button>Tank</button>
                <button>All</button>

                <h3>Stats</h3>
            </div>
            <div className="allChamps">
                {filteredC.map((e) => (
                    <div className="Card">
                        <p>{e.name}<img src={Fav} alt="Fav" className="Fav"></img></p>
                        <img src={imageMap[e.id]} alt={e.name} className="square"/>
                    </div>
                    ))}
            </div>            

        </div>

    </div>
    )
}

export default Champs;