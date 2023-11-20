import { useSelector } from "react-redux";
import FavsCard from "../Components/FavsCard";
import "./Favorite.css"
import Footer from "../Components/Footer";
import gif from "../lol/Gif/Pengu.gif";

function Favorites () {

    const favorites = useSelector((state) => state.favorites);
    const ltFavorites = [...new Set(favorites)];
    let Pengu = gif;
    return (
        <div>
            <h1>My List's favorites</h1>
                {favorites.length === 0
                ? <div className="NoFavs"><h3>Try adding your favorite champions to your favorites list !!</h3>
                    <img alt="gif pengu" src={Pengu} /></div>
                :  <div className="CardsFavs">
                    {ltFavorites.map((e) => (
                    <FavsCard
                    id={e.id}
                    key={e.id} />
                    ))}
                    </div>}
            <div><Footer/></div>
        </div>

    )
}

export default Favorites;