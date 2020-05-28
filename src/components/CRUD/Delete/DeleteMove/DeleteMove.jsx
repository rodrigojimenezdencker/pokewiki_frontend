import React, { Component } from 'react';
import { deleteJSON, getJSON } from '../../requests';
import './DeleteMove.css';
import { Link } from 'react-router-dom';
import { Container, ListGroup, ListGroupItem } from 'reactstrap';
import Swal from 'sweetalert2';

export default class DeleteMove extends Component {
    constructor(props) {
        super(props);
        this.state = {
            moveId: 0,
            name: "",
            description: "",
            power: 0,
            accuracy: 0,
            quantity: 0,
            typeId: 0
        }
    }

    componentDidMount() {
        const { id, name } = this.props.match.params;
        let moveToFetch = id ? id : name;

        getJSON('http://pokewikiapi.eu-west-3.elasticbeanstalk.com/api/moves/' + moveToFetch)
            .then(data => this.setState({ ...this.state, ...data}));
    }

    deleteMove = () => {
        deleteJSON('http://pokewikiapi.eu-west-3.elasticbeanstalk.com/api/moves/' + this.state.moveId, this.state)
            .catch(error => console.log(error))

        Swal.fire({
            icon: 'success',
            title: 'Correcto',
            text: 'Movimiento ' + this.state.name + ' eliminado correctamente'
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
                        <ListGroupItem>Descripción: {this.state.description}</ListGroupItem>
                        <ListGroupItem>Tipo: {this.state.type == null ? "" : this.state.type.name}</ListGroupItem>
                        <ListGroupItem>Poder: {this.state.power}</ListGroupItem>
                        <ListGroupItem>Precisión: {this.state.accuracy}</ListGroupItem>
                        <ListGroupItem>Cantidad: {this.state.quantity}</ListGroupItem>
                    </ListGroup>
                </Container>
                <br />
                <p>Cuidado! Vas eliminar completamente el movimiento {this.state.name} de la web, ¿estas seguro?</p>
                <Link to="/dashboard/moves">
                    <input type="button" className="btn btn-primary mr-2" value="Cancelar" />
                </Link>
                <input type="button" className="btn btn-danger" onClick={this.deleteMove} value="Eliminar" />
            </Container>
        )
    }
}