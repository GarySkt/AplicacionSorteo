import React from "react"
import { Container, Content } from "native-base"
import  ItemListaPremio  from "./itemlistapremio"
import { connect } from "react-redux"

function ListaPremio(props){
    return(
        <Container>
            <Content>
                {
                    props.premio.premios.map(premio => {
                        return(
                            <ItemListaPremio  key={ premio.id } { ...premio } {... props}/>
                        )
                    })
                }
            </Content>
        </Container>
    )
}

function mapStateToProps(state){
    return{
      premio: state.premio
    }
}

export default connect(mapStateToProps)(ListaPremio);