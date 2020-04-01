import { LISTAR_PREMIO, SET_PROPIEDAD_PREMIO, SET_PREMIO } from "../../actions/premio";

const PREMIO_DEFAULT = {
    premios: [],
    premio:{
        nombre: "",
        descripcion: "",
        cantidad: 0
    }
}

export function PremioReducer(state = PREMIO_DEFAULT, action){
    switch (action.type) {
        case LISTAR_PREMIO:
            return {
                ...state, premios: action.payload
            }
        case SET_PROPIEDAD_PREMIO:
            const premioModificado = {
                ...state.premio, [action.nombrePropiedad]: action.valorPropiedad
            }
            return{
                ...state, premio: premioModificado
            }
        case SET_PREMIO:
            return {
                ...state, premio: action.payload
            }
        default:
            return state;
    }
}