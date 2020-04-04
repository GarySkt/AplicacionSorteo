import { API} from '../config';
import {AsyncStorage} from 'react-native'
import axios from 'axios';

export async function execRequest(parametroObjeto){
    return await axios({
        url: API+parametroObjeto.url,
        method: parametroObjeto.metodo,
        data: parametroObjeto.body,
        headers: {
            'Authorization': 'Bearer ' + (await AsyncStorage.getItem("@token")).toString(),
            'Content-Type':'application/json'
        }
    })
    .then(respuesta => ProcesarDatos(respuesta.data))
    .catch(error => {
        if(error.response === undefined) alert("No se encuentra el servicio.")
        else if(error.response.status === 401) GenerarToken().then(response => execRequest(parametroObjeto))
        else alert(error.message)
    })
}
function ProcesarDatos(datos){
    if(!datos.data){
        return datos
    }
    return datos.data
}
export async function GenerarToken(){
    await axios.post(API + "login?usu_codigo=admin&password=admin", null, {
        headers: {
            'Content-Type':'application/json'
        }
    })
    .then(response => SetearToken(response.data.token))
    .catch(error => {
        alert("No se pudo generar el token.")
    })
}

async function SetearToken(token){
    await AsyncStorage.setItem("@token", token);
}