import React from "react"
import { Container, Content } from "native-base"
import ItemListaPuntoParticipacion from "./itemlistapuntoparticipacion"
import { connect } from "react-redux"
export function ListaPuntoParticipacion(props){
    return (
        <Container>
            <Content>
                {
                    props.puntoParticipacion.puntosParticipacion.map(puntoParticipacion=>{
                        return(
                            <ItemListaPuntoParticipacion key={puntoParticipacion.id}{...puntoParticipacion}{... props}/>
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