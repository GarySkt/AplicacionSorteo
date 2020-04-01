import React from "react"
import { Container, Content, Text, Header, Form, Item, Label, Input, } from "native-base"
import { styles } from "../../styles/style"

export function FormularioPremio(){
    return(
        <Container>
        <Content>
            <Form>
                <Item floatingLabel>
                    <Label>Nombre</Label>
                    <Input />
                </Item>
                <Item floatingLabel last>
                    <Label>Descripcion</Label>
                    <Input />
                </Item>
                <Item floatingLabel last>
                    <Label>Cantidad</Label>
                    <Input keyboardType="number-pad"/>
                </Item>
            </Form>
        </Content>
    </Container>
    )
}