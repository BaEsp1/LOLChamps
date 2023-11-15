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
  display: false,
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
        display: true,
      };
    case READY:
      return {
        ...state,
        display: false,
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
        const search = state.allChamps.filter((champ) => champ.name === action.payload);
        return {
          ...state,
          allChamps: search,
        };
      }
    default:
        return state;
    }
}

export default rootReducer;