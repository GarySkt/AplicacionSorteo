import React from "react"
import { Container, Content, Text, Header, Form, Item, Label, Input, Button } from "native-base"
import{ connect } from "react-redux"
import * as actions from "../../actions/premio"
import { EstadoObjeto } from "../../utils"
import servicioPremio from "../../services/serviciosPremio/serviciosPremio"

function FormularioPremio(props){
    const GuardarPremio = ()=> {
        if(props.premio.premio.estado_objeto == EstadoObjeto.Nuevo){
            servicioPremio.guardarPremio(props.premio.premio).then(respuesta => {
                props.navigation.navigate("Premios")
            })
        }else{
            servicioPremio.modificarPremio(props.premio.premio).then(respuesta => {
                props.navigation.navigate("Premios")
            })
        }
    }
    return(
        <Container>
        <Content>
            <Form>
                <Item floatingLabel>
                    <Label>Nombre</Label>
                    <Input value={props.premio.premio.nombre}
                            onChangeText={valor=>props.setearPropiedadPremio("nombre",valor)}
                    />
                </Item>
                <Item floatingLabel last>
                    <Label>Descripcion</Label>
                    <Input value={props.premio.premio.descripcion}
                             onChangeText={valor=>props.setearPropiedadPremio("descripcion",valor)}
                    />
                </Item>
                <Item floatingLabel last>
                    <Label>Cantidad</Label>
                    <Input keyboardType="number-pad" value={String(props.premio.premio.cantidad_maxima)}
                             onChangeText={valor=>props.setearPropiedadPremio("cantidad_maxima",valor)}
                    />
                </Item>
                <Text/>
                <Button onPress={()=> GuardarPremio()} style={{ alignSelf:"center"}}>
                    <Text>Guardar</Text>
                </Button>
            </Form>
        </Content>
    </Container>
    )
}
function mapStateToProps(state){
    return{
      premio: state.premio
    }
}
function mapDispatchToProps(dispatch){
    return{
        setearPropiedadPremio: (campo,valor) => {dispatch(actions.SetearPropiedadPremioAction(campo,valor))}
    }
}
const FormularioPremioContainer = connect(mapStateToProps,mapDispatchToProps)(FormularioPremio);
export default FormularioPremioContainer;