import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { useEffect } from "react";
import { addFav, delFav , getDetail} from "./Redux/Actions";
import "./FavsCard.css"

const LoadImages = require.context('../lol/loading', false, /\.(jpg)$/);
const LoadImageMap = LoadImages.keys().reduce((acc, key) => {
  const champId = key.replace(/^\.\/(.*)\.jpg$/, '$1');
  acc[champId] = LoadImages(key);
  return acc;
}, {});

   const FavsCard = (props) => {

    const [isFav, setIsFav] = useState(false);
    const dispatch = useDispatch();
    const listFavorites = useSelector((state) => state.favorites);
  
    useEffect(() => {
      const favoritesArray = Object.values(listFavorites);
      const isCardInFavorites = favoritesArray.some((fav) => fav.id === props.id);
      if (isCardInFavorites) setIsFav(true);
    }, [listFavorites, props.id]);
  
    
    function handleFavorite() {
      setIsFav((prevIsFav) => !prevIsFav);
  
      if (isFav) {
        dispatch(delFav(props.id));
      } else {
        dispatch(addFav(props.id));
      }
    }

    const handleDetailClick = (id) => {
      console.log(id)
        dispatch(getDetail(id));
      };
  
      return (
          <div className="Favs">
      
              <Link to={`/detail/${encodeURI(props.id)}`} onClick={() => handleDetailClick(props.id)}>
                <img src={LoadImageMap[props.id+"_0"]} alt={props.id} className="Loading"></img>
                <h3>{props.id}</h3>
              </Link>
              { isFav ? (<button onClick={handleFavorite}  >❤️</button>) : (
                      <button onClick={handleFavorite}  > ♥ </button>  ) }
          </div>       
      )
}


export default FavsCard;