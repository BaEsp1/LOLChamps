import Swal from "sweetalert2";
import {
  LOADING,
  READY,
  GET_ALL_CHAMPS,
  GET_DETAIL,
  GET_CLASS,
  ADD_FAV,
  GET_FAV,
  DEL_FAV,
  ORDER,
  SEARCH,
  FILTER,
} from "./ActionsType"

const initialState = {
  loading: false,
  allChamps:[],
  class:[],
  detail:[],
  favorites: [],
  };

  const rootReducer = (state = initialState, action) => {
    switch(action.type) {
      case LOADING:
      return {
        ...state,
        loading: true,
      };
    case READY:
      return {
        ...state,
        loading: false,
      };
      case GET_ALL_CHAMPS: {
        return {
          ...state,
          allChamps: action.payload.allChamps,
        };
      }
      case GET_CLASS: {
        return {
          ...state,
          class: action.payload.class,
        };
      }
      case GET_DETAIL: {
        return { 
          ...state,
          detail: action.payload.detail,
        }; 
      }
      case GET_FAV:{
        return {
          ...state,
          favorites: action.payload,
        };
      }
      case ADD_FAV:{
          return {
            ...state,
            favorites: action.payload,
          };
      }
      case DEL_FAV:{
        return {
          ...state,
         favorites: action.payload,
        };
      }
      case ORDER: {
        const isDesc = action.payload === 'Desc';
      
        const sortedChamps = [...state.allChamps].sort((a, b) => {
          if (isDesc) {
            return b.id.localeCompare(a.id);
          } else {
            return a.id.localeCompare(b.id);
          }
        });
      
        return {
          ...state,
          allChamps: sortedChamps,
        };
      }
      case FILTER: {
        let filteredChamps;
        const filteredClass = state.class[action.payload];
        filteredChamps = filteredClass ? filteredClass : [];
          return {
            ...state,
              allChamps: filteredChamps,
          };
    }
    case SEARCH: {
      const searchTerm = action.payload.toLowerCase(); 
      const searchResults = state.allChamps.filter((champ) => {
        return champ.name.toLowerCase().includes(searchTerm);
      });
    
      if (searchResults.length === 0) {
        Swal.fire({
          icon: "error",
          title: "Oops... Champion not found",
          text: "Try Again!",
        });
        return state;
      } else {
        return {
          ...state,
          allChamps: searchResults,
        };
      }
    }
    default:
        return state;
    }
}

export default rootReducer;