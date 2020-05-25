import React, { Component } from 'react';
import { deleteJSON, getJSON } from '../../requests';
import './DeleteType.css';
import { Link } from 'react-router-dom';
import { Input, Form, FormGroup, Label, Container, Row, Col, ListGroup, ListGroupItem } from 'reactstrap';
import Swal from 'sweetalert2';

export default class Delete extends Component {
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
        let pokemonToFetch = id ? id : name;

        getJSON('https://localhost:44316/api/types/' + pokemonToFetch)
            .then(data => this.setState({ ...this.state, ...data}));
    }

    deleteType = () => {
        deleteJSON('https://localhost:44316/api/types/' + this.state.typeId, this.state)
            .catch(error => console.log(error))

        Swal.fire({
            icon: 'success',
            title: 'Correcto',
            text: 'Tipo ' + this.state.name + ' eliminado correctamente'
        }).then((result) => {
            window.history.back();
          })
    }

    render() {
        return (
            <Container>
                <h1 className="d-flex justify-content-center">Eliminando {this.state.name}</h1>
                <h2>Datos:</h2>
                <Container>
                    <ListGroup flush>
                        <ListGroupItem>Nombre: {this.state.name}</ListGroupItem>
                        <ListGroupItem>Color: {this.state.color}</ListGroupItem>
                        <ListGroupItem>Imagen primaria: {this.state.image}</ListGroupItem>
                        <ListGroupItem>Imagen Secundaria: {this.state.secondaryImage}</ListGroupItem>
                    </ListGroup>
                </Container>
                <br />
                <p>Cuidado! Vas eliminar completamente el tipo {this.state.name} de la web, ¿estas seguro?</p>
                <Link to="/dashboard/types/eliminar">
                    <input type="button" className="btn btn-primary mr-2" value="Cancelar" />
                </Link>
                <input type="button" className="btn btn-danger" onClick={this.deleteType} value="Eliminar" />
            </Container>
        )
    }
}