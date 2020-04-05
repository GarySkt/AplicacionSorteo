import React from "react"
import { Container, Content } from "native-base"
import {ItemListaPuntoParticipacion} from "./itemlistapuntoparticipacion"

export function ListaPuntoParticipacion(props){
    return (
        <Container>
            <Content>
                {
                    puntosparticipacion.map(puntosparticipacion=>{
                        return(
                            <ItemListaPuntoParticipacion key={puntosparticipacion.id}{...puntosparticipacion}{... props}/>
                        )
                    })
                }
            </Content>
        </Container>
    )
}
function mapStateToProps(state){
    return{
        puntoParticipacion: state.puntoParticipacion
    }
}

export default connect(mapStateToProps)(ListaPuntoParticipacion)