import React, { useEffect, useRef } from "react"
import { Container, Fab, Icon, Text } from "native-base"

import { createStackNavigator } from "react-navigation-stack"
import { menu, menuStack } from "../../utils"
import ListaPremio from "./listapremio"
import { FormularioPremio } from "./formulariopremio"
import servicioPremio from "../../services/serviciosPremio/serviciosPremio"
import * as actions from "../../actions/premio"
import { connect } from "react-redux"

function Index(props){
  const didRun = useRef(false)
  useEffect(()=>{
    if(!didRun.current){
      servicioPremio.obtenerPremios()
        .then(premios => {
          props.listarPremios(premios)
        })
    }
  }, [])
    return(
        <Container>
            <ListaPremio/>
            <Fab
              position="bottomRight"
              style={{ backgroundColor: "#5067FF" }}
              onPress={() => {
                  return props.navigation.navigate("FormularioPremio")
                }}>
              <Icon name="add" />
            </Fab>
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
    listarPremios: (premios) => { dispatch(actions.ListarPremioAction(premios)) }
  }
}

const PremioContainer = connect(mapStateToProps, mapDispatchToProps)(Index);

export const PremioStackNavigator = createStackNavigator({
    Premios:{
      screen: (navigation) => <PremioContainer {...navigation } />,
      navigationOptions: ({navigation}) =>  menu(navigation, "Premios")
    },
    FormularioPremio:{
      screen: FormularioPremio,
      navigationOptions: menuStack("Formulario")
    }
  })