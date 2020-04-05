export const LISTAR_PUNTOPARTICIPACION ="LISTAR_PUNTOPARTICIPACION"
export const SET_PROPIEDAD_PUNTOPARTICIPACION="SET_PROPIEDAD_PUNTOPARTICIPACION"
export const SET_PUNTOPARTICIPACION = "SET_PUNTOPARTICIPACION"
export const SET_PUNTOPARTICIPACION_VACIO = "SET_PUNTOPARTICIPACION_VACIO"

export const ListarPuntoParticipacionAction = (puntosParticipacion) => {
    return{
        type: LISTAR_PUNTOPARTICIPACION,
        payload: puntosParticipacion
    }
}

export const SetearPropiedadPuntoParticipacionAction = (nombrePropiedad, valorPropiedad) => {
    return{
        type: SET_PROPIEDAD_PUNTOPARTICIPACION,
        nombrePropiedad: nombrePropiedad,
        valorPropiedad: valorPropiedad
    }
}

export const SetearPuntoParticipacion = (puntoParticipacion) => {
    return{
        type: SET_PUNTOPARTICIPACION,
        payload: puntoParticipacion
    }
}

export const SetearPuntoParticipacionVacio =()=>{
    return{
        type: SET_PUNTOPARTICIPACION_VACIO
    }
}