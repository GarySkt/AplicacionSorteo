import React, { Component } from "react"
import { Container, Content, Text, Header, Form, Item, Label, Input, Button } from "native-base"

export function FormularioPuntoParticipacion() {

    return (
        <Container>
            <Content>
                <Form>
                    <Item floatingLabel>
                        <Label>Nombre</Label>
                        <Input />
                    </Item>
                    <Item floatingLabel last>
                        <Label>Ubicacion</Label>
                        <Input />
                    </Item>
                    <Button>
                        <Text>Guardar</Text>
                    </Button>
                </Form>
            </Content>
        </Container>
    );      
}