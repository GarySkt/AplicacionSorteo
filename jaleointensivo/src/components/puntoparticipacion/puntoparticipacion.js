import React from "react"
import { Container, Fab, Icon } from "native-base"

import { createStackNavigator } from "react-navigation-stack"
import { menu, menuStack } from "../../utils"
import { ListaPuntoParticipacion } from "./listapuntoparticipacion"
import { FormularioPuntoParticipacion } from "./formulariopuntoparticipacion"

function Index(props){
    return(
        <Container>
            <ListaPuntoParticipacion/>
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

export const PuntoParticipacionStackNavigator = createStackNavigator({
    "Puntos de Participación":{
      screen: Index,
      navigationOptions: ({navigation}) =>  menu(navigation, "Puntos de Participación")
    },
    FormularioPuntoParticipacion:{
        screen: FormularioPuntoParticipacion,
        navigationOptions: menuStack("Formulario")
    }  
  })
  