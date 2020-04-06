import React from "react"
import { styles } from "../../styles/style"
import { Card, CardItem, Left, Body, Text, Right, Button, Icon } from "native-base"
import { connect } from "react-redux"
import * as actions from "../../actions/puntoParticipacion"
import servicioPuntoParticipacion from "../../services/serviciosPuntoParticipacion/serviciosPuntoParticipacion"

function ItemListaPuntoParticipacion(props){
    const EliminarPuntoParticipacion = (id) => {
        servicioPuntoParticipacion.eliminarPuntoParticipacion(id).then(response => {
            servicioPuntoParticipacion.obtenerPuntoParticipacion().then(puntosParticipacion => {
                props.listarPuntosParticipacion(puntosParticipacion);
            })
        })
    }
    const ObtenerPuntoParticipacion=(id) => {
        servicioPuntoParticipacion.obtenerPuntoParticipacion(id).then(puntoParticipacion => {
            props.setearPuntoParticipacion(puntoParticipacion)
            props.navigate("FormularioPuntoParticipacion")
        })
    }
    return (
        <Card style = {styles.card}>
            <CardItem>
                <Left>
                    <Body>
                        <Text>{puntosparticipacion.nombre}</Text>
                        <Text>{puntosparticipacion.ubicacion}</Text>
                    </Body>
                </Left>
            </CardItem>
            <CardItem>
                <Right style = {styles.positionButtonsCard}>
                    <Button transparent style = {styles.tamanioButtonsCard} onPress={() => EliminarPuntoParticipacion(props.id)}>
                        <Icon active name = "remove-circle" style = {{color: 'black'}}/>
                    </Button>
                    <Button transparent style = {styles.tamanioButtonsCard} onPress = { () => ObtenerPuntoParticipacion(props.id)}>
                        <Icon active name = "build" style = {{color: 'black'}}/>
                    </Button>
                </Right>
            </CardItem>
        </Card>
    )
}

function mapDispatchToProps(dispatch){
    return{
        listarPuntosParticipacion: (puntosParticipacion) => {dispatch(actions.ListarPuntoParticipacionAction(puntosparticipacion))},
        setearPuntoParticipacion: (puntoParticipacion) => { dispatch(actions.SetearPuntoParticipacion(puntoParticipacion))}
    }
}

export default connect(null, mapDispatchToProps)(ItemListaPuntoParticipacion);