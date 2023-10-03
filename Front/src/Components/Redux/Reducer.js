import {
  LOADING,
  READY,
  GET_ALL_CHAMPS,
  GET_DETAIL,
  GET_CLASS,
} from "./ActionsType"

const initialState = {
  display: false,
  allChamps:[],
  class:[],
  detail:[],
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
          detail: action.payload,
        }; 
      }
    default:
        return state;
    }
}

export default rootReducer;