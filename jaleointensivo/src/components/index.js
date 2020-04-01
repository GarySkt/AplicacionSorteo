import  React from "react"
import { Container, Icon, Text } from "native-base"

import { createStackNavigator } from "react-navigation-stack"
import { styles } from "../styles/style"
import { menu } from "../utils"

function Index(){
    return(
        <Container style={styles.container}>
            <Text>Dashboard</Text>
        </Container>
    )
}

export const DashboardStackNavigator = createStackNavigator({
    Dashboard:{
      screen: Index
    }
  },{
    defaultNavigationOptions: ({ navigation }) => {
        return menu(navigation, "Dashboard")
    }
  })