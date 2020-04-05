import {LISTAR_PUNTOPARTICIPACION, SET_PROPIEDAD_PUNTOPARTICIPACION, SET_PUNTOPARTICIPACION, SET_PUNTOPARTICIPACION_VACIO} from "../../actions/puntoParticipacion/index";
import { EstadoObjeto } from "../../utils"

const PUNTOPARTICIPACION_DEFAULT ={
    puntosParticipacion: [],
    puntoParticipacion:{
        nombre: "",
        ubicacion: "",
        estado_objeto: EstadoObjeto.Nuevo
    }
}

export function PuntoParticipacionReducer(state = PUNTOPARTICIPACION_DEFAULT, action){
    switch(action.type){
        case LISTAR_PUNTOPARTICIPACION:
            return {
                ...state, puntosParticipacion: action.payload                
            }
        case SET_PROPIEDAD_PUNTOPARTICIPACION:
            const puntoParticipacionModificado = {
                ...state.puntoParticipacion,
                [action.nombrePropiedad]: action.valorPropiedad
            }
            return{
                ...state, puntosParticipacion: puntoParticipacionModificado
            }
        case SET_PUNTOPARTICIPACION:
            return {
                ...state, puntoParticipacion: action.payload
            }
        case SET_PUNTOPARTICIPACION_VACIO:
            return {
                ...state, puntoParticipacion: PUNTOPARTICIPACION_DEFAULT.puntoParticipacion
            }
        default:
            return state;
    }
}