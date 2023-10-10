import {
    GET_ALL_CHAMPS,
    GET_DETAIL,
    LOADING,
    READY,
    GET_CLASS,
    ADD_FAV,
    GET_FAV,
    DEL_FAV
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

// Importa axios y otras constantes necesarias

export function getDetail(id) {
    return async function(dispatch) {
        try {
            console.log("activo");
            const back = await axios.get(URL + '/champs/' + id);
            dispatch({
                type: GET_DETAIL,
                payload: {
                    detail: [back.data]
                },
            });
        } catch (error) {
            console.error(error);
        }
    };
}

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

//==================== Fav's ==========================

export function getfavs(){
    return async function (dispatch){
        try {
            const response = await axios( URL +"/favs/get")
            return dispatch({
                type:GET_FAV, 
                payload: response.data,
            })
        } catch (error) {
            return dispatch({type: "ERROR", payload: error});            
        }
    }
}

export const addFav = (id) => {
    console.log(id);
    return async function (dispatch){ 
            try {
            const respuestaDelBack = await axios.post( URL +"/favs/create", id)
            console.log(respuestaDelBack.data);
            return dispatch({
                type: ADD_FAV,
                payload: respuestaDelBack.data,
                })
        } catch (error) {
            return dispatch({type: "ERROR", payload: error});
        }
    }
}

export function delFav (id){
    return async function (dispatch){
        try {
            const response = await axios.delete( URL +"/favs/delete/" + id)
            console.log( response.data)
                return dispatch({
                    type: DEL_FAV,
                    payload: response.data,
                })
        } catch (error) {
            return dispatch({type: "ERROR", payload: error});
        }
        }
}
