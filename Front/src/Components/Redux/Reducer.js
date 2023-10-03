import {
  LOADING,
  READY,
  GET_ALL_CHAMPS,
  GET_DETAIL,
  SET_FILTER,
} from "./ActionsType"

const initialState = {
  display: false,
  allChamps:[],
  detail:[],
  filteredChamps: {},
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
      case SET_FILTER: {
        const { allChamps } = state;
        
        const filter = allChamps.reduce((acc, champ) => {
          champ.tags.forEach((tag) => {
            acc[tag] = [...(acc[tag] || []), champ];
          });
          return acc;
        }, {});
      
        return {
          ...state,
          filteredChamps: filter,
        };
      }
      case GET_DETAIL: {
        return { 
                ...state,
                detail: action.payload,
        }; 
      }
    default:
        return state;
    }
}

export default rootReducer;