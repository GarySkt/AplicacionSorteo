export const LISTAR_PREMIO = "LISTAR_PREMIO" //Setear un array
export const SET_PROPIEDAD_PREMIO = "SET_PROPIEDAD_PREMIO" //Setear una propiedad del objeto
export const SET_PREMIO = "SET_PREMIO" //Setear el objeto entero
export const SET_PREMIO_VACIO = "SET_PREMIO_VACIO" //Setear el objeto vacio

export const ListarPremioAction = (premios) => {
    return{
        type: LISTAR_PREMIO,
        payload: premios
    }
}

export const SetearPropiedadPremioAction = (nombrePropiedad, valorPropiedad) => {
    return{
        type: SET_PROPIEDAD_PREMIO,
        nombrePropiedad: nombrePropiedad,
        valorPropiedad: valorPropiedad
    }
}

export const SetearPremio = (premio) => {
    return{
        type: SET_PREMIO,
        payload: premio
    }
}

export const SetearPremioVacio = () => {
    return{
        type: SET_PREMIO_VACIO
    }
}