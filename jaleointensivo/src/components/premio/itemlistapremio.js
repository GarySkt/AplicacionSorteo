import React from "react"
import { Card, Body, CardItem, Left, Text, Right, Button, Icon } from "native-base"
import { styles } from "../../styles/style"
import servicioPremio from "../../services/serviciosPremio/serviciosPremio"
import { connect } from "react-redux"
import * as actions from "../../actions/premio"

function ItemListaPremio(props){
  const EliminarPremio = (id) => {
    servicioPremio.eliminarPremio(id).then(response => {
      servicioPremio.obtenerPremios().then(premios => {
        props.listarPremios(premios);
      })
    })
  }
    return(
        <Card style={styles.card}>
            <CardItem>
                <Left>
                    <Body>
                        <Text>{props.nombre}</Text>
                        <Text>{props.descripcion}</Text>
                    </Body>
                </Left>
            </CardItem>
            <CardItem>
              <Right style={styles.positionButtonsCard}>
                <Button transparent style={styles.tamanioButtonsCard} onPress={() => EliminarPremio(props.id)}>
                  <Icon active name="remove-circle" style={{color: 'red'}}/>
                </Button>
                <Button transparent style={styles.tamanioButtonsCard} onPress={() => alert("editar")}>
                  <Icon active name="build" style={{color: 'orange'}}/>
                </Button>
              </Right>
            </CardItem>
        </Card>
    )
}


function mapDispatchToProps(dispatch){
  return{
    listarPremios: (premios) => { dispatch(actions.ListarPremioAction(premios)) }
  }
}
export default connect(null,mapDispatchToProps)(ItemListaPremio);
