import React, { Component } from 'react';
import { putJSON, getJSON } from '../../requests';
import './UpdateMove.css';
import {checkInputs} from './validateUpdateMoveForm.js';
import { Input, Form, FormGroup, Label, Container, Row, Col } from 'reactstrap';

export default class UpdateMove extends Component {
    constructor(props) {
        super(props);
        this.state = {
            moveId: 0,
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

        const { id, name } = this.props.match.params;
        let moveToFetch = id ? id : name;

        getJSON('https://localhost:44316/api/moves/' + moveToFetch)
            .then(data => this.setState({ ...this.state, ...data}));
    }

    submitForm = (event) => {
        if (checkInputs(event)) {
            this.modifyMove();
        }
    }

    modifyMove = () => {
        putJSON('https://localhost:44316/api/moves/' + this.state.moveId, this.state)
            .catch(error => error)
    }

    handleChangeInput = event => {
        this.setState({ typeId: this.state.type.typeId });
        const { name, value, type } = event.target;
        this.setState({
            [name]: type === 'number' || type === 'select-one' ? parseInt(value) : value
        });
    }

    render() {
        const { types } = this.state;
        return (
        <Container className="create_container">
            <h1>Editando {this.state.name}</h1>
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
                            value={this.state.name}
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
                            value={this.state.description}
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
                                    value={this.state.power}
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
                                    value={this.state.accuracy}
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
                                    value={this.state.quantity}
                                    required
                                />
                            </Col>
                        </Row>
                    </FormGroup>
                    <FormGroup>
                        <Label for="typeId">Tipo</Label>
                        <Input disabled type="select" name="typeId" id="typeId" data-hook="typeId" required value={this.state.type == null ? "DEFAULT" : this.state.type.typeId} onChange={this.handleChangeInput}>
                            <option value="DEFAULT" disabled>Selecciona el tipo</option>
                            {types.map(type =>
                                <option key={type.typeId} value={type.typeId}>{type.name}</option>
                            )}
                        </Input>
                    </FormGroup>
                    <input type="submit" className="btn btn-success" onClick={this.submitForm} value="Modificar" />
                </Form>
            </Container>
        )
    }
}
