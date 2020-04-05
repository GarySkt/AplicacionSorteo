import {execRequest} from '../api';

export default class servicioPuntoParticipacion{
    static async obtenerPuntosParticion(){
        return execRequest({
            url:'punto-participacion',
            metodo:'GET',
            body: null
        }).then(respuesta => respuesta);
    }
    static async obtenerPuntoParticipacion(id){
        return execRequest({
            url:'punto-participacion/'+id,
            metodo: 'GET',
            body: null
        }).then(respuesta => respuesta);
    }
    static async guardarPuntoParticipacion(puntoParticipacion){
        return execRequest({
            url:'punto-participacion',
            metodo:'PUT',
            body: puntoParticipacion
        }).then(respuesta => respuesta);
    }
    static async modificarPuntoParticipacion(puntoParticipacion){
        return execRequest({
            url:'punto-participacion/'+puntoParticipacion.id,
            metodo:'PUT',
            body: puntoParticipacion
        }).then(respueta => respuesta);
    }
    static async eliminarPuntoParticipacion(id){
        return execRequest({
            url:'punto-participacion/'+id,
            metodo:'DELETE',
            body:null
        }).then(respuesta => respuesta);
    }
}