import React, { useEffect, useRef } from "react"
import { Container, Fab, Icon, Text } from "native-base"

import { createStackNavigator } from "react-navigation-stack"
import { menu, menuStack } from "../../utils"
import ListaPremio from "./listapremio"
import FormularioPremioContainer from "./formulariopremio"
import servicioPremio from "../../services/serviciosPremio/serviciosPremio"
import * as actions from "../../actions/premio"
import { connect } from "react-redux"

function Index(props){
  
  const ObtenerPremios = () =>{
    servicioPremio.obtenerPremios()
        .then(premios => {
          props.listarPremios(premios)
        })
  }
  useEffect(()=>{
    ObtenerPremios()
    props.navigation.addListener('didFocus',()=>{
      ObtenerPremios()
    })
  }, [])
    return(
        <Container>
            <ListaPremio {... props.navigation}/>
            <Fab
              position="bottomRight"
              style={{ backgroundColor: "#5067FF" }}
              onPress={() => {
                  props.setearPremioVacio()
                  return props.navigation.navigate("FormularioPremio")
                }}>
              <Icon name="add" />
            </Fab>
        </Container>
    )
}

function mapDispatchToProps(dispatch){
  return{
    listarPremios: (premios) => { dispatch(actions.ListarPremioAction(premios)) },
    setearPremioVacio: () => { dispatch(actions.SetearPremioVacio()) }
  }
}

const PremioContainer = connect(null, mapDispatchToProps)(Index);

export const PremioStackNavigator = createStackNavigator({
    Premios:{
      screen: (navigation) => <PremioContainer {...navigation } />,
      navigationOptions: ({navigation}) =>  menu(navigation, "Premios")
    },
    FormularioPremio:{
      screen: FormularioPremioContainer,
      navigationOptions: menuStack("Formulario")
    }
  })