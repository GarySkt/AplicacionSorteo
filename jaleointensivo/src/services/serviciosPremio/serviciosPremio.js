import {execRequest} from '../api';

export default class servicioPremio{
    static async obtenerPremios(){
        return execRequest({
            url:'premio',
            metodo: 'GET',
            body: null
        }).then(respuesta => respuesta);
    }
    static async obtenerPremio(id){
        return execRequest({
            url: 'premio/'+id,
            metodo: 'GET',
            body:null
        }).then(respuesta => respuesta);
    }
    static async guardarPremio(premio){
        return execRequest({
            url:'premio',
            metodo: 'POST',
            body: premio
        }).then(respuesta => respuesta);
    }
    static async modificarPremio(premio){
        return execRequest({
            url:'premio/'+premio.id,
            metodo: 'PUT',
            body: premio
        }).then(respuesta => respuesta);
    }
    static async eliminarPremio(id){
        return execRequest({
            url:'premio/'+id,
            metodo:'DELETE',
            body: null
        }).then(respuesta=>respuesta);
    }
}