import { useSelector } from "react-redux";
import FavsCard from "../Components/FavsCard";
import "./Favorite.css"

function Favorites () {

    const ltFavorites = useSelector((state) => state.favorites);
    console.log(ltFavorites)

    return (
        <div>
            <h1>My List's favorites</h1>
             <div className="CardsFavs" >
                {ltFavorites.map((e) => (
                    <FavsCard
                    id={e.id}
                    key={e.id} />
                ))}
            </div>
        </div>

    )
}

export default Favorites;