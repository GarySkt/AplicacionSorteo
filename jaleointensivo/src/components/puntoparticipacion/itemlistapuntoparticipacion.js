import React from "react"
import { styles } from "../../styles/style"
import { Card, CardItem, Left, Body, Text, Right, Button, Icon } from "native-base"
import { connect } from "react-redux"
import * as actions from "../../actions/puntoParticipacion"
export function ItemListaPuntoParticipacion(puntosparticipacion){
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
                    <Button transparent style = {styles.tamanioButtonsCard} onPress={() => alert("eliminar")}>
                        <Icon active name = "remove-circle" style = {{color: 'black'}}/>
                    </Button>
                    <Button transparent style = {styles.tamanioButtonsCard} onPress = { () => alert("editar")}>
                        <Icon active name = "build" style = {{color: 'black'}}/>
                    </Button>
                </Right>
            </CardItem>
        </Card>
    )
}