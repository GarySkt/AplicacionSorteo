import React, { useEffect, useState } from "react"
import { Container, Fab, Icon } from "native-base"

import { createStackNavigator } from "react-navigation-stack"
import { menu, menuStack } from "../../utils"
import ListaPremio from "./listapremio"
import FormularioPremioContainer from "./formulariopremio"
import servicioPremio from "../../services/serviciosPremio/serviciosPremio"
import * as actions from "../../actions/premio"
import { connect } from "react-redux"
import { ScrollView, RefreshControl } from "react-native"

function Index(props){
  const [refrescar, setRefrescar] = useState(false)
  const RefrescarLista = () => {
    setRefrescar(true)
    ObtenerPremios()
  }
  const ObtenerPremios = () => {
    servicioPremio.obtenerPremios()
        .then(premios => {
          setRefrescar(false)
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
          <ScrollView refreshControl={
            <RefreshControl refreshing={refrescar} onRefresh={() => RefrescarLista()}/>
          }>
            <ListaPremio {... props.navigation}/>
          </ScrollView>
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