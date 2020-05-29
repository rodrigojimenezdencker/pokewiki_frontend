import React, { Component } from 'react';
import { postJSON } from '../../requests';
import './CreateType.css';
import {checkInputs} from './validateCreateTypeForm.js';
import { Input, Form, FormGroup, Label, Container, Row, Col } from 'reactstrap';

export default class CreateType extends Component {
    constructor(props) {
        super(props);
        this.state = {
            name: "",
            color: "",
            image: "",
            secondaryImage: ""
        }
    }

    submitForm = (event) => {
        if (checkInputs(event)) {
            this.addType();
        }
    }

    addType = () => {
        postJSON('https://pokewikiapi.azurewebsites.net/api/types', this.state);
    }

    handleChangeInput = event => {
        const { name, value, type } = event.target;
        this.setState({
            [name]: type === 'number' || type === 'select-one' ? parseInt(value) : value
        });
    }

    render() {
        return (
        <Container className="create_container">
            <h1>Crear Tipo</h1>
                <Form className="form bg-light" id="createForm" data-widget="create_form">
                    <Row form>
                        <Col md={6}>
                            <FormGroup>
                                <Label for="name">Nombre</Label>
                                <Input
                                    type="text"
                                    id="name"
                                    name="name"
                                    onChange={this.handleChangeInput}
                                    placeholder="Inserta el nombre del tipo"
                                    data-hook="name"
                                    required
                                />
                            </FormGroup>
                        </Col>
                        <Col md={6}>
                            <FormGroup>
                                <Label for="color">Color</Label>
                                <Input
                                    type="text"
                                    id="color"
                                    name="color"
                                    onChange={this.handleChangeInput}
                                    placeholder="Inserta el color del tipo"
                                    data-hook="color"
                                    required
                                />
                            </FormGroup>
                        </Col>
                    </Row>
                    <Row form>
                        <Col md={6}>
                            <FormGroup>
                                <Label for="image">Imagen Primaria</Label>
                                <Input
                                    type="text"
                                    id="image"
                                    name="image"
                                    onChange={this.handleChangeInput}
                                    placeholder="Inserta la imagen primaria"
                                    data-hook="image"
                                    required
                                />
                            </FormGroup>
                        </Col>
                        <Col md={6}>
                            <FormGroup>
                                <Label for="secondaryImage">Imagen Secundaria</Label>
                                <Input
                                    type="text"
                                    id="secondaryImage"
                                    name="secondaryImage"
                                    onChange={this.handleChangeInput}
                                    placeholder="Inserta la habilidad secundaria"
                                    data-hook="secondaryImage"
                                    required
                                />
                            </FormGroup>
                        </Col>
                    </Row>  
                    <input type="submit" className="btn btn-success" onClick={this.submitForm} value="Crear" />
                </Form>
            </Container>
        )
    }
}
