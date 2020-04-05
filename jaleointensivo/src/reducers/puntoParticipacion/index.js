import {LISTAR_PUNTOPARTICIPACION, SET_PROPIEDAD_PUNTOPARTICIPACION, SET_PUNTOPARTICIPACION, SET_PUNTOPARTICIPACION_VACIO} from "../../actions/puntoParticipacion/index";
import { EstadoObjeto } from "../../utils"

const PUNTOPARTICIPACION_DEFAULT ={
    puntoParticipacion: [],
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
                ...state.puntoParticipacion,
                [action.nombrePropiedad]: action.valorPropiedad
            }
        case SET_PROPIEDAD_PUNTOPARTICIPACION:
            const puntoParticipacion = {}
    }
}