import React from "react";
import { Link } from "react-router-dom";
import { useState } from "react";
import { connect, useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { addFav, delFav, getDetail} from "./Redux/Actions";
import "../Views/Champs.css"

const squareImages = require.context('../lol/square', false, /\.(png)$/);
const imageMap = squareImages.keys().reduce((acc, key) => {
    const champId = key.replace(/^\.\/(.*)\.png$/, '$1');
    acc[champId] = squareImages(key);
    return acc;
}, {});

const ChampsCards = (props) =>{

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
            dispatch(getDetail(id));
          };
      
    return (
        <div className="Card">
            { isFav ? (<button onClick={handleFavorite}  className="FavOn" >❤️</button>) : (
                    <button onClick={handleFavorite}  className="FavOff"> ♥ </button>  ) }
    
            <Link to={`/detail/${encodeURI(props.id)}`} onClick={() => handleDetailClick(props.id)}>
              <h3>{props.name}</h3>
              <img src={imageMap[props.id]} alt={props.name} className="square" />
            </Link>

        </div>
        )
    };
    
    
    export const mapDispatchToProps = (dispatch)=>{
        return  {  addCharacter:    id=>  dispatch(addFav(id)) ,
                deleteCharacter: id=> dispatch(delFav(id))    }}
    
    export function mapStateToProps (state) {
        return {
            favorites : state.favorites 
                    }
                }
    

export default connect(mapDispatchToProps, mapStateToProps)(ChampsCards);