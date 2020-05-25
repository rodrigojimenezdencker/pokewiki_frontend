import React, { Component } from 'react';
import { postJSON, getJSON } from '../../requests';
import './CreateMove.css';
import {checkInputs} from './validateCreateMoveForm.js';
import { Input, Form, FormGroup, Label, Container, Row, Col } from 'reactstrap';

export default class CreateType extends Component {
    constructor(props) {
        super(props);
        this.state = {
            name: "",
            description: "",
            power: 0,
            accuracy: 0,
            quantity: 0,
            typeId: 0,
            types: []
        }
    }

    componentDidMount() {
        getJSON('https://localhost:44316/api/types')
            .then(data => this.setState({ types: data }));
    }

    submitForm = (event) => {
        if (checkInputs(event)) {
            this.addMove();
        }
    }

    addMove = () => {
        postJSON('https://localhost:44316/api/moves', this.state);
    }

    handleChangeInput = event => {
        const { name, value, type } = event.target;
        this.setState({
            [name]: type == 'number' || type == 'select-one' ? parseInt(value) : value
        });
    }

    render() {
        const { types } = this.state;
        return (
        <Container className="create_container">
            <h1>Crear Movimiento</h1>
                <Form className="form bg-light" id="createForm" data-widget="create_form">
                    <FormGroup>
                        <Label for="name">Nombre</Label>
                        <Input
                            type="text"
                            id="name"
                            name="name"
                            onChange={this.handleChangeInput}
                            placeholder="Inserta el nombre del movimiento"
                            data-hook="name"
                            required
                        />
                    </FormGroup>
                    <FormGroup>
                        <Label for="description">Descripción</Label>
                        <Input
                            type="textarea"
                            id="description"
                            name="description"
                            onChange={this.handleChangeInput}
                            placeholder="Inserta la descripción del movimiento"
                            data-hook="description"
                            required
                        />
                    </FormGroup>
                    <FormGroup>
                        <Row form>
                            <Col md={4}>
                                <Label for="power">Poder</Label>
                                <Input
                                    type="number"
                                    id="power"
                                    name="power"
                                    onChange={this.handleChangeInput}
                                    placeholder="Inserta el poder del movimiento"
                                    data-hook="power"
                                />
                            </Col>
                            <Col md={4}>
                                <Label for="accuracy">Precisión</Label>
                                <Input
                                    type="number"
                                    id="accuracy"
                                    name="accuracy"
                                    onChange={this.handleChangeInput}
                                    placeholder="Inserta la precisión del movimiento"
                                    data-hook="accuracy"
                                />
                            </Col>
                            <Col md={4}>
                                <Label for="quantity">Cantidad</Label>
                                <Input
                                    type="number"
                                    id="quantity"
                                    name="quantity"
                                    onChange={this.handleChangeInput}
                                    placeholder="Inserta la cantidad del movimiento"
                                    data-hook="quantity"
                                    required
                                />
                            </Col>
                        </Row>
                    </FormGroup>
                    <FormGroup>
                        <Label for="typeId">Tipo</Label>
                        <Input type="select" name="typeId" id="typeId" data-hook="typeId" required defaultValue={'DEFAULT'} onChange={this.handleChangeInput}>
                            <option value="DEFAULT" disabled>Selecciona el tipo</option>
                            {types.map(type =>
                                <option key={type.typeId} value={type.typeId}>{type.name}</option>
                            )}
                        </Input>
                    </FormGroup>
                        
                    <input type="submit" className="btn btn-success" onClick={this.submitForm} value="Crear" />
                    {/* <input type="button" onClick={() => console.log(JSON.stringify(this.state))} value="ESTADO" /> */}
                </Form>
            </Container>
        )
    }
}
