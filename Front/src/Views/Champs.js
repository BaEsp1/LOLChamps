// import SearchBar from "../Components/Search";
import { useState , useEffect } from "react";
import "./Champs.css"
// import fav from "../lol/Like.png"
import { useDispatch, useSelector } from "react-redux";
import ChampsCards from "../Components/ChampsCards";
import { filterChamps, getChamps, getClass, orderChamps , search} from "../Components/Redux/Actions";

function Champs () {
    
    const all = useSelector((state)=> state.allChamps);
    const dispatch = useDispatch();
    const [textSearch, setTextSearch] = useState([]);

        // FILTRO Y ORDER :

        const handleOrder = (e) => {
            dispatch(orderChamps(e.target.value))
        }
    
        const handleFilter = (tag) => {
            if(tag !== "All"){
                dispatch(filterChamps(tag))
            }else {
                dispatch(getChamps())
                dispatch(getClass())
            }
        }
        //SEARCH:

        const handleSearch = (text) =>{
            if(text !== ""){
            setTextSearch(text)
            dispatch(search(text))
            }else{
                setTextSearch(text)
                dispatch(getChamps())
            }
        }

        const clearSearch = () => {
            setTextSearch("")
            dispatch(getChamps());
          };

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
                <div className="search">
                    <input type="text" value={textSearch} onChange={(e) => handleSearch(e.target.value)} />
                    {textSearch 
                    ? (<button className="clear-search" onClick={clearSearch}>X</button>)
                    : (<button className="clear-search" disabled> </button>)
                    }
                </div>

                <h3>Order:</h3>
                    <select onChange={handleOrder}>
                        <option value="Asc">A - Z</option>
                        <option value="Desc">Z - A</option>
                    </select>

                <h3>Filter:</h3>
                <div className="filters">
                    <button onClick={() =>handleFilter("Fighter")}>Fighter</button>
                    <button onClick={() =>handleFilter("Mage")}>Mage</button>
                    <button onClick={() =>handleFilter("Marksman")}>Marksman</button>
                    <button onClick={() =>handleFilter("Assassin")}>Assassin</button>
                    <button onClick={() =>handleFilter("Support")}>Support</button>
                    <button onClick={() =>handleFilter("Tank")}>Tank</button>
                    <button onClick={() =>handleFilter("All")}>All</button>
                </div>
                {/* <h3>Stats</h3> */}
            </div>
            <div className="allChamps">
            {filteredC.map((e) => (
                <ChampsCards
                id ={e.id}
                name={e.name}
                key ={e.id} />
                ))}
            </div>            

        </div>

    </div>
    )
}

export default Champs;