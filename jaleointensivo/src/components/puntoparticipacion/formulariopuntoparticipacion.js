import React, { Component } from "react"
import { Container, Content, Text, Header, Form, Item, Label, Input, Button } from "native-base"
import{ connect } from "react-redux"
import * as actions from "../../actions/puntoParticipacion"
import { EstadoObjeto } from "../../utils"
import servicioPuntoParticipacion from "../../services/serviciosPuntoParticipacion/serviciosPuntoParticipacion"

export function FormularioPuntoParticipacion(props) {
    const GuardarPuntoParticipacion = ()=>{
        if(props.puntoParticipacion.puntoParticipacion.estado_objeto == EstadoObjeto.Nuevo){
            servicioPuntoParticipacion.guardarPuntoParticipacion(props.puntoParticipacion.puntoParticipacion).then(respuesta => {
                props.navigation.navigate("Punto de Participacion")
            })
        }else{
            servicioPuntoParticipacion.modificarPuntoParticipacion(props.puntoParticipacion.puntoParticipacion).then(respuesta => {
                props.navigation.navigate("Punto de Participacion")
            })
        }
    }

    return (
        <Container>
            <Content>
                <Form>
                    <Item floatingLabel>
                        <Label>Nombre</Label>
                        <Input value={props.puntoParticipacion.puntoParticipacion.nombre}
                                onChangeText={valor => props.setearPropiedadPuntoParticipacion("nombre", valor)}
                        />
                    </Item>
                    <Item floatingLabel last>
                        <Label>Ubicacion</Label>
                        <Input value={props.puntoParticipacion.puntoParticipacion.ubicacion}
                                onChangeText={valor => props.setearPropiedadPuntoParticipacion("ubicacion",valor)}
                        />
                    </Item>
                    <Button onPress={()=> GuardarPuntoParticipacion()} style={{alignSelf:"center"}}>
                        <Text>Guardar</Text>
                    </Button>
                </Form>
            </Content>
        </Container>
    );      
}

function mapStateToProps(state){
    return{
        puntoParticipacion: state.puntoParticipacion
    }
}

function mapDispatchToProps(dispatch){
    return{
        setearPropiedadPuntoParticipacion: (campo, valor) => {dispatch(actions.SetearPropiedadPuntoParticipacionAction(campo,valor))}
    }
}
const FormularioPuntoParticipacionContainer = connect(mapStateToProps, mapDispatchToProps)(FormularioPuntoParticipacion);
export default FormularioPuntoParticipacionContainer;