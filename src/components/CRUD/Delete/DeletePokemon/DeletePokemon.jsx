import React, { Component } from 'react';
import { deleteJSON, getJSON } from '../../requests';
import './DeletePokemon.css';
import { Link } from 'react-router-dom';
import { Container, ListGroup, ListGroupItem } from 'reactstrap';
import Swal from 'sweetalert2';

export default class Delete extends Component {
    constructor(props) {
        super(props);
        this.state = {
            pokemonId: 0,
            numPokedex: 0,
            name: '',
            description: '',
            ability: '',
            secondaryAbility: null,
            hiddenAbility: null,
            image: '',
            weight: '',
            height: '',
            ps: 0,
            attack: 0,
            defense: 0,
            spAttack: 0,
            spDefense: 0,
            speed: 0,
            prevolution: 0,
            evolution: 0,
            evolutionRequirements: null,
            typeId: 0,
            typeId2: null,
            subtype: false,
            type1: null,
            type2: null,
            types: [],
            pokemons: []
        }
    }

    componentDidMount() {
        const { id, name } = this.props.match.params;
        let pokemonToFetch = id ? id : name;

        getJSON('http://pokewikiapi.eu-west-3.elasticbeanstalk.com/api/pokemon/' + pokemonToFetch)
            .then(data => this.setState({ ...this.state, ...data}));
    }

    deletePokemon = () => {
        deleteJSON('http://pokewikiapi.eu-west-3.elasticbeanstalk.com/api/pokemon/' + this.state.pokemonId, this.state)
            .catch(error => console.log(error))

        Swal.fire({
            icon: 'success',
            title: 'Correcto',
            text: 'Pokémon ' + this.state.name + ' eliminado correctamente'
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
                        <ListGroupItem>Num. Pokédex: {this.state.numPokedex}</ListGroupItem>
                        <ListGroupItem>Nombre: {this.state.name}</ListGroupItem>
                        <ListGroupItem>Habilidad: {this.state.ability}</ListGroupItem>
                        {this.state.secondaryAbility === null || this.state.hiddenAbility === "" ? null : <ListGroupItem>Habilidad secundaria: {this.state.secondaryAbility}</ListGroupItem>}
                        {this.state.hiddenAbility === null || this.state.hiddenAbility === "" ? null : <ListGroupItem>Habilidad oculta: {this.state.hiddenAbility}</ListGroupItem>}
                        <ListGroupItem>Tipo primario: {this.state.type1 === null ? "" : this.state.type1.name}</ListGroupItem>
                        {this.state.type2 === null ? null : <ListGroupItem> Tipo secundario: {this.state.type2.name} </ListGroupItem>}
                    </ListGroup>
                </Container>
                <br />
                <p>Cuidado! Vas eliminar completamente a {this.state.name} de la web, ¿estas seguro?</p>
                <Link to="/dashboard/pokemon">
                    <input type="button" className="btn btn-primary mr-2" value="Cancelar" />
                </Link>
                <input type="button" className="btn btn-danger" onClick={this.deletePokemon} value="Eliminar" />
            </Container>
        )
    }
}