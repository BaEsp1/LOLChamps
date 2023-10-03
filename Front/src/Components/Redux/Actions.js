import {
    GET_ALL_CHAMPS,
    GET_DETAIL,
    LOADING,
    READY,
    GET_CLASS,
} from "./ActionsType";
import axios from "axios";

const URL = "http://localhost:3001";

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
            const respBack = await axios.get(URL+'/champs')
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
            const back = await axios.get( `${URL}/champs/${id}`)
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

export const getClass = () => {
    return async function (dispatch){
        try {
            const resp = await axios.get( `${URL}/class`)
            return dispatch ({
                type: GET_CLASS,
                payload: {
                    class:resp.data,
                },
            })
        } catch (error) {
            console.log(error)
        }
    }
};
