import React,{useEffect, useState} from "react"
import { Container, Fab, Icon } from "native-base"

import { createStackNavigator } from "react-navigation-stack"
import { menu, menuStack } from "../../utils"
import ListaPuntoParticipacion from "./listapuntoparticipacion"
import FormularioPuntoParticipacionContainer from "./formulariopuntoparticipacion"
import servicioPuntoParticipacion from "../../services/serviciosPuntoParticipacion/serviciosPuntoParticipacion"
import * as actions from "../../actions/puntoParticipacion"
import { connect } from "react-redux"
import { ScrollView } from "react-native-gesture-handler"
import { RefreshControl } from "react-native"

function Index(props){
    const [refrescar, setRefrescar] = useState(false)
    const RefrescarLista = () => {
        setRefrescar(true)
        ObtenerPuntosParticipacion()
    }
    const ObtenerPuntosParticipacion =()=>{
        servicioPuntoParticipacion.obtenerPuntosParticion()
            .then(puntosParticipacion => {
                setRefrescar(false)
                props.listarPuntosParticipacion(puntosParticipacion)
            })
    }
    useEffect(() => {
        ObtenerPuntosParticipacion()
        props.navigation.addListener('didFocus',()=>{
            ObtenerPuntosParticipacion()
        })        
    }, [])
    return(
        <Container>
            <ScrollView refreshControl={
                <RefreshControl refreshing={refrescar} onRefresh={()=> RefrescarLista()}/>
            }>
                <ListaPuntoParticipacion {... props.navigation}/>    
            </ScrollView>
            <Fab 
                position = "bottomRight"
                style={{backgroundColor: "#5067FF"}}
                onPress={()=>{
                    props.setearPuntoParticipacionVacio()
                    return props.navigation.navigate("FormularioPuntoParticipacion")
                }}
            >
                <Icon name="add"/>
            </Fab>
        </Container>
    )
}
function mapDispatchToProps(dispatch){
    return{
        listarPuntosParticipacion: (puntosParticipacion)=>{dispatch(actions.ListarPuntoParticipacionAction(puntosParticipacion))},
        setearPuntoParticipacionVacio:()=>{dispatch(actions.SetearPuntoParticipacionVacio())}
    }
}
const PuntoParticipacionContainer = connect(null, mapDispatchToProps)(Index);

export const PuntoParticipacionStackNavigator = createStackNavigator({
    "Puntos de Participación":{
      screen: (navigation)=><PuntoParticipacionContainer {...navigation}/>,
      navigationOptions: ({navigation}) =>  menu(navigation, "Puntos de Participación")
    },
     FormularioPuntoParticipacion:{
         screen: FormularioPuntoParticipacionContainer,
         navigationOptions: menuStack("Formulario")
     }  
  })
  