import React, { Component } from 'react';
import { putJSON, getJSON } from '../../requests';
import './UpdateType.css';
import {checkInputs} from './validateUpdateTypeForm.js';
import { Input, Form, FormGroup, Label, Container, Row, Col } from 'reactstrap';

export default class UpdateType extends Component {
    constructor(props) {
        super(props);
        this.state = {
            typeId: 0,
            name: "",
            color: "",
            image: "",
            secondaryImage: ""
        }
    }

    componentDidMount() {
        const { id, name } = this.props.match.params;
        let typesToFetch = id ? id : name;

        getJSON('https://localhost:44316/api/types/' + typesToFetch)
            .then(data => this.setState({ ...this.state, ...data}));
    }

    submitForm = (event) => {
        if (checkInputs(event)) {
            this.updateType();
        }
    }

    updateType = () => {
        putJSON('https://localhost:44316/api/types/' + this.state.typeId, this.state)
        .catch(error => error);
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
            <h1>Modificando {this.state.name}</h1>
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
                                    value={this.state.name}
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
                                    value={this.state.color}
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
                                    value={this.state.image}
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
                                    value={this.state.secondaryImage}
                                    required
                                />
                            </FormGroup>
                        </Col>
                    </Row>  
                    <input type="submit" className="btn btn-success" onClick={this.submitForm} value="Modificar" />
                </Form>
            </Container>
        )
    }
}
