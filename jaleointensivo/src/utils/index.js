import  React from "react"
import { Icon } from "native-base"
import { styles } from "../styles/style"

export const menu = (navigation, titulo) => {
    return {
        headerTitle: titulo,
        headerLeft: () => <Icon
            style={styles.menu}
            onPress={() => navigation.openDrawer()}
            name="menu"/>
    }
}

export const menuStack = (titulo) => {
    return{
        headerTitle: titulo,
        headerBackTitle: "Atrás"
    }
}