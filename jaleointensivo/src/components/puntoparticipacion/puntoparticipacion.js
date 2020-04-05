import React from "react"
import { Container, Fab, Icon } from "native-base"

import { createStackNavigator } from "react-navigation-stack"
import { menu, menuStack } from "../../utils"
import { ListaPuntoParticipacion } from "./listapuntoparticipacion"
import { FormularioPuntoParticipacion } from "./formulariopuntoparticipacion"
import servicioPuntoParticipacion from "../../services/serviciosPuntoParticipacion"

function Index(props){

    const ObtenerPuntosParticipacion =()=>{
        servicioPuntoParticipacion.obtenerPuntosParticion()
            .then(puntoParticipacionRespuesta => {
                props.listarPuntosParticipacion(puntoParticipacionRespuesta)
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
            <ListaPuntoParticipacion {... props.navigation}/>
            <Fab 
                position = "bottomRight"
                style={{backgroundColor: "#5067FF"}}
                onPress={()=>{
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
        listarPuntosParticipacion: (puntosParticion)=>{dispatch(actions.ListarPuntosParticipacion(puntosParticion))},
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
        screen: FormularioPuntoParticipacion,
        navigationOptions: menuStack("Formulario")
    }  
  })
  