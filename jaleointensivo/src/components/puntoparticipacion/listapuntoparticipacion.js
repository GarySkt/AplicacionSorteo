import React from "react"
import { Container, Content } from "native-base"
import {ItemListaPuntoParticipacion} from "./itemlistapuntoparticipacion"

var puntosparticipacion = [
    {id: 1, nombre: "Mesa nro1", ubicacion: "av. pinto"},
    {id: 2, nombre: "Mesa nro1", ubicacion: "av. pinto"},
    {id: 3, nombre: "Mesa nro1", ubicacion: "av. pinto"},
    {id: 4, nombre: "Mesa nro1", ubicacion: "av. pinto"},
    {id: 5, nombre: "Mesa nro1", ubicacion: "av. pinto"},
    {id: 6, nombre: "Mesa nro1", ubicacion: "av. pinto"},
    {id: 7, nombre: "Mesa nro1", ubicacion: "av. pinto"},
    {id: 8, nombre: "Mesa nro1", ubicacion: "av. pinto"},
    {id: 9, nombre: "Mesa nro1", ubicacion: "av. pinto"},
]

export function ListaPuntoParticipacion(){
    return (
        <Container>
            <Content>
                {
                    puntosparticipacion.map(puntosparticipacion=>{
                        return(
                            <ItemListaPuntoParticipacion key={puntosparticipacion.id}{...puntosparticipacion}/>
                        )
                    })
                }
            </Content>
        </Container>
    )
}