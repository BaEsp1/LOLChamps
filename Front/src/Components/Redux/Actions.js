import {
    GET_ALL_CHAMPS,
    GET_DETAIL,
    LOADING,
    READY,
    SET_FILTER,
} from "./ActionsType";
import axios from "axios";

const URL = "http://localhost:3001/champs";

/* ========================*  LOADER *======================== */
export function loading() {
    return {
    type: LOADING,
    };
}

export function ready() {
    return {
        type: READY,
    };
}

//============================= CHAMPS ========================
export function getChamps() {
    return async function(dispatch){
        try {
            const respBack = await axios.get(URL)
            return dispatch({
                type: GET_ALL_CHAMPS,
                payload: {
                    allChamps: respBack.data,
                },
                });

            } catch (error) {
                console.log(error);
            }
    };
};

export function getDetail(id) {
    return async function (dispatch){
        try {
            const back = await axios.get( `${URL}/${id}`)
            return dispatch ({
                type: GET_DETAIL,
                payload: back.data
            })
        } catch (error) {
            console.log(error)
        }
    }
};
// ==================== FILTRO DE CLASE ================

export const setFilter = () => ({
    type: SET_FILTER,
  });
  