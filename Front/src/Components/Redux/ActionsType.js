/* ========================* ACTIONS LOADER *======================== */
const LOADING = "LOADING";
const READY = "READY";


/* ========================* ACTIONS CHAMPS *======================== */
const GET_ALL_CHAMPS = "GET_ALL_CHAMPS"; //Trae todos los campeones
const GET_DETAIL = "GET_DETAIL"; // trae detalle de champ
const GET_CLASS = "GET_CLASS"; // divide las clases
const ADD_FAV = "ADD_FAV"; //Agrega a Fav
const GET_FAV = "GET_FAV"; //mostrar los Favs
const DEL_FAV = "DEL_FAV"; //los elimina;
const ORDER = "ORDER"; // ordena los campeones en /Champs
const SEARCH = "SEARCH"; //Search para champs
const FILTER = "FILTER"; //Filtra los camp en /Champs

module.exports = {
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
    FILTER
} ;