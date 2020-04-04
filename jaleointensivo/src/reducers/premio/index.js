import { LISTAR_PREMIO, SET_PROPIEDAD_PREMIO, SET_PREMIO, SET_PREMIO_VACIO } from "../../actions/premio";
import { EstadoObjeto } from "../../utils"

const PREMIO_DEFAULT = {
    premios: [],
    premio:{
        nombre: "",
        descripcion: "",
        cantidad_maxima: "",
        estado_objeto: EstadoObjeto.Nuevo
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
        case SET_PREMIO_VACIO:
            return {
                ...state, premio: PREMIO_DEFAULT.premio
            }
        default:
            return state;
    }
}