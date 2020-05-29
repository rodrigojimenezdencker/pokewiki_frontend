import React, { Component } from 'react';
import { putJSON, getJSON } from '../../requests';
import './UpdatePokemon.css';
import {checkInputs} from './validateUpdatePokemonForm.js';
import { Input, Form, FormGroup, Label, Container, Row, Col } from 'reactstrap';

export default class UpdatePokemon extends Component {
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
            types: [],
            pokemons: []
        }
    }

    componentDidMount() {
        getJSON('https://pokewikiapi.azurewebsites.net/api/types')
            .then(data => this.setState({ types: data }));
        getJSON('https://pokewikiapi.azurewebsites.net/api/pokemon')
            .then(data => this.setState({ pokemons: data }));

        const { id, name } = this.props.match.params;
        let pokemonToFetch = id ? id : name;

        getJSON('https://pokewikiapi.azurewebsites.net/api/pokemon/' + pokemonToFetch)
            .then(data => this.setState({ ...this.state, ...data}));
    }

    submitForm = (event) => {
        if (checkInputs(event)) {
            this.modifyPokemon();
        }
    }

    modifyPokemon = () => {
        putJSON('https://pokewikiapi.azurewebsites.net/api/pokemon/' + this.state.pokemonId, this.state)
            .catch(error => error)
    }

    handleChangeAbility = event => {
        const { name, value, type} = event.target;

        if (value !== "" && name === "ability") {
            document.getElementById("secondaryAbility").disabled = false;
            document.getElementById("hiddenAbility").disabled = false;
        } else {
            document.getElementById("secondaryAbility").disabled = true;
            document.getElementById("secondaryAbility").value = "";
            document.getElementById("hiddenAbility").disabled = true;
            document.getElementById("hiddenAbility").value = "";
        }

        this.setState({
            [name]:  type === 'number' || type === 'select-one' ? parseInt(value) : value
        });
    }

    handleChangeEvolution = event => {
        const { name, value, type} = event.target;

        if (value !== "DEFAULT" && name === "evolution") {
            document.getElementById("evolutionRequirements").disabled = false;
        } else {
            document.getElementById("evolutionRequirements").disabled = true;
            document.getElementById("evolutionRequirements").value = "";
        }

        this.setState({
            [name]:  type === 'number' || type === 'select-one' ? parseInt(value) : value
        });
    }

    handleChangeType = event => {
        const { name, value, type} = event.target;

        if (value !== "DEFAULT" && name === "typeId") {
            document.getElementById("typeId2").disabled = false;
        } else {
            document.getElementById("typeId2").disabled = true;
            document.getElementById("typeId2").value = "DEFAULT";
        }

        this.setState({
            [name]:  type === 'number' || type === 'select-one' ? parseInt(value) : value
        });
    }

    handleChangeInput = event => {
        const { name, value, type } = event.target;
        this.setState({
            [name]:  type === 'number' || type === 'select-one' ? parseInt(value) : value
        });
    }

    render() {
        const { types, pokemons } = this.state;
        return (
        <Container className="create_container">
            <h1>Modificando {this.state.name}</h1>
                <Form className="form bg-light" id="createForm" data-widget="create_form">
                    <Row form>
                        <Col md={6}>
                            <FormGroup>
                                <Label for="numPokedex">Num. Pokédex</Label>
                                <Input
                                    type="number"
                                    id="numPokedex"
                                    name="numPokedex"
                                    onChange={this.handleChangeInput}
                                    placeholder="Inserta el Num. Pokédex"
                                    data-hook="numPokedex"
                                    value={this.state.numPokedex}
                                    required
                                />
                            </FormGroup>
                        </Col>
                        <Col md={6}>
                            <FormGroup>
                                <Label for="name">Nombre</Label>
                                <Input
                                    type="text"
                                    id="name"
                                    name="name"
                                    onChange={this.handleChangeInput}
                                    placeholder="Inserta el nombre del Pokémon"
                                    data-hook="name"
                                    value={this.state.name}
                                    required
                                />
                            </FormGroup>
                        </Col>
                    </Row>
                    <FormGroup>
                        <Label for="description">Descripción</Label>
                        <Input
                            type="textarea"
                            id="description"
                            name="description"
                            onChange={this.handleChangeInput}
                            placeholder="Inserta la descripción"
                            data-hook="description"
                            value={this.state.description}
                            required
                        />
                    </FormGroup>
                    <Row form>
                        <Col md={6}>
                            <FormGroup>
                                <Label for="ability">Habilidad</Label>
                                <Input
                                    type="text"
                                    id="ability"
                                    name="ability"
                                    onChange={this.handleChangeAbility}
                                    placeholder="Inserta la habilidad"
                                    data-hook="ability"
                                    value={this.state.ability}
                                    required
                                />
                            </FormGroup>
                        </Col>
                        <Col md={6}>
                            <FormGroup>
                                <Label for="secondaryAbility">Habilidad secundaria</Label>
                                <Input
                                    type="text"
                                    id="secondaryAbility"
                                    name="secondaryAbility"
                                    onChange={this.handleChangeInput}
                                    placeholder="Inserta la habilidad secundaria"
                                    data-hook="secondaryAbility"
                                    value={this.state.secondaryAbility == null ? "" : this.state.secondaryAbility}
                                />
                            </FormGroup>
                        </Col>
                    </Row>  
                    <FormGroup>
                        <Label for="hiddenAbility">Habilidad oculta</Label>
                        <Input
                            type="text"
                            id="hiddenAbility"
                            name="hiddenAbility"
                            onChange={this.handleChangeInput}
                            placeholder="Inserta la habilidad oculta"
                            data-hook="hiddenAbility"
                            value={this.state.hiddenAbility == null ? "" : this.state.hiddenAbility}
                        />
                    </FormGroup>
                    <FormGroup>
                        <Label for="image">Imagen</Label>
                        <Input
                            type="text"
                            id="image"
                            name="image"
                            onChange={this.handleChangeInput}
                            placeholder="Inserta la imagen"
                            data-hook="image"
                            value={this.state.image}
                            required
                        />
                    </FormGroup>
                    <FormGroup>
                        <Label for="weight">Peso</Label>
                        <Input
                            type="text"
                            id="weight"
                            name="weight"
                            onChange={this.handleChangeInput}
                            placeholder="Inserta el peso del Pokémon"
                            data-hook="weight"
                            value={this.state.weight}
                            required
                        />
                        <Label for="height">Altura</Label>
                        <Input
                            type="text"
                            id="height"
                            name="height"
                            onChange={this.handleChangeInput}
                            placeholder="Inserta la altura del Pokémon"
                            data-hook="height"
                            value={this.state.height}
                            required
                        />
                    </FormGroup>
                    <FormGroup>
                        <Label for="ps">PS</Label>
                        <Input
                            type="number"
                            id="ps"
                            name="ps"
                            onChange={this.handleChangeInput}
                            placeholder="Inserta la vida del Pokémon"
                            data-hook="ps"
                            value={this.state.ps}
                            required
                        />
                        <Label for="attack">Ataque</Label>
                        <Input
                            type="number"
                            id="attack"
                            name="attack"
                            onChange={this.handleChangeInput}
                            placeholder="Inserta el ataque del Pokémon"
                            data-hook="attack"
                            value={this.state.attack}
                            required
                        />
                        <Label for="defense">Defensa</Label>
                        <Input
                            type="number"
                            id="defense"
                            name="defense"
                            onChange={this.handleChangeInput}
                            placeholder="Inserta la defensa del Pokémon"
                            data-hook="defense"
                            value={this.state.defense}
                            required
                        />
                        <Label for="spAttack">Ataque especial</Label>
                        <Input
                            type="number"
                            id="spAttack"
                            name="spAttack"
                            onChange={this.handleChangeInput}
                            placeholder="Inserta el ataque especial del Pokémon"
                            data-hook="spAttack"
                            value={this.state.spAttack}
                            required
                        />
                        <Label for="spDefense">Defensa Especial</Label>
                        <Input
                            type="number"
                            id="spDefense"
                            name="spDefense"
                            onChange={this.handleChangeInput}
                            placeholder="Inserta la defensa especial del Pokémon"
                            data-hook="spDefense"
                            value={this.state.spDefense}
                            required
                        />
                        <Label for="speed">Velocidad</Label>
                        <Input
                            type="number"
                            id="speed"
                            name="speed"
                            onChange={this.handleChangeInput}
                            placeholder="Inserta la velocidad del Pokémon"
                            data-hook="speed"
                            value={this.state.speed}
                            required
                        />
                    </FormGroup>
                    <FormGroup>
                        <Label for="prevolution">Preevolución</Label>
                        <Input type="select" name="prevolution" id="prevolution" data-hook="prevolution" value={this.state.prevolution == null ? "DEFAULT" : this.state.prevolution.numPokedex} onChange={this.handleChangeEvolution}>
                            <option value="DEFAULT">Selecciona la evolución</option>
                            {pokemons.map(pokemon =>
                                <option key={pokemon.numPokedex} value={pokemon.numPokedex}>{pokemon.name}</option>
                            )}
                        </Input>
                    </FormGroup>
                    <FormGroup>
                    <Label for="evolution">Evolución</Label>
                        <Input type="select" name="evolution" id="evolution" data-hook="evolution" value={this.state.evolution == null ? "DEFAULT" : this.state.evolution.numPokedex} onChange={this.handleChangeEvolution}>
                            <option value="DEFAULT">Selecciona la evolución</option>
                            {pokemons.map(pokemon =>
                                <option key={pokemon.numPokedex} value={pokemon.numPokedex}>{pokemon.name}</option>
                            )}
                        </Input>
                        <Label for="evolutionRequirements">Requerimiento para Evolucionar</Label>
                        <Input
                            type="text"
                            id="evolutionRequirements"
                            name="evolutionRequirements"
                            onChange={this.handleChangeInput}
                            placeholder="Requerimiento para evolucionar Pokémon"
                            data-hook="evolutionRequirements"
                            value={this.state.evolutionRequirements == null ? "" : this.state.evolutionRequirements}
                        />
                    </FormGroup>
                    <FormGroup>
                        <Label for="typeId">Tipo 1</Label>
                        <Input disabled type="select" name="typeId" id="typeId" data-hook="type1" required value={this.state.type1 == null ? "DEFAULT" : this.state.type1.typeId} onChange={this.handleChangeType}>
                            <option value="DEFAULT" disabled>Selecciona el primer tipo</option>
                            {types.map(type =>
                                <option key={type.typeId} value={type.typeId}>{type.name}</option>
                            )}
                        </Input>
                    </FormGroup>
                    <FormGroup>
                        <Label for="typeId2">Tipo 2</Label>
                        <Input disabled type="select" name="typeId2" id="typeId2" data-hook="type2" value={this.state.type2 == null ? "DEFAULT" : this.state.type2.typeId} onChange={this.handleChangeInput}>
                            <option value="DEFAULT">Selecciona el segundo tipo</option>
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