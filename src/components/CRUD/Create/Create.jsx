import React, { Component } from 'react';
import { postJSON, getJSON } from '../requests';
import './Create.css';
import  Swal from 'sweetalert2';
import { Input, Form, FormGroup, Label, Container, Row, Col } from 'reactstrap';

export default class Create extends Component {
    constructor(props) {
        super(props);
        this.state = {
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
            prevolution: null,
            evolution: null,
            evolutionRequirements: null,
            pokemonId: 0,
            typeId: 0,
            typeId2: null,
            subtype: false,
            types: []
        }
    }

    componentDidMount() {
        getJSON('https://localhost:44316/api/types')
            .then(data => this.setState({ types: data }));
    }

    addPokemon = () => {
        postJSON('https://localhost:44316/api/pokemon', this.state)
            .then(() => this.addPrimaryType());
    }

    addPrimaryType = () => {
        let type1 = {
            pokemonId: this.state.numPokedex,
            typeId: this.state.typeId,
            subtype: false
        }

        postJSON('https://localhost:44316/api/typepokemon', type1)
            .then(() => {
                if (document.getElementById("type2").value !== "") this.addSecondaryType();
            })
            .catch(error => console.log(error));
    }

    addSecondaryType = () => {
        let type2 = {
            pokemonId: this.state.numPokedex,
            typeId: this.state.typeId2,
            subtype: true
        }

        postJSON('https://localhost:44316/api/typepokemon', type2);
    }

    handleChangeAbility = event => {
        const { name, value, type} = event.target;

        if (value != "" && name == "ability") {
            document.getElementById("secondaryAbility").disabled = false;
            document.getElementById("hiddenAbility").disabled = false;
        } else {
            document.getElementById("secondaryAbility").disabled = true;
            document.getElementById("secondaryAbility").value = "";
            document.getElementById("hiddenAbility").disabled = true;
            document.getElementById("hiddenAbility").value = "";
        }

        this.setState({
            [name]: type === 'number' ? parseInt() : value
        });
    }

    handleChangeEvolution = event => {
        const { name, value, type} = event.target;

        if (value != "" && name == "evolution") {
            document.getElementById("evolutionRequirements").disabled = false;
        } else {
            document.getElementById("evolutionRequirements").disabled = true;
            document.getElementById("evolutionRequirements").value = "";
        }

        this.setState({
            [name]: type === 'number' ? parseInt() : value
        });
    }

    handleChangeInput = event => {
        const { name, value, type } = event.target;
        this.setState({
<<<<<<< HEAD
            [name]: type === 'number' ? parseInt() : value
=======
            [name]: type === 'number' || 'select' ? parseInt(value) : value
>>>>>>> 7cadb7845dc324453dd20080d9ee8c525113a610
        });
    }

    render() {
        const { types } = this.state;
        return (
<<<<<<< HEAD
            <Form data-widget="create_form">
                <FormGroup>
                    <Label for="numPokedex">Num. Pokédex</Label>
                    <Input
                        type="number"
                        id="numPokedex"
                        name="numPokedex"
                        onChange={this.handleChangeInput}
                        placeholder="Inserta el número de la Pokédex"
                        data-hook="numPokedex"
                        required
                    />
                </FormGroup>
                <FormGroup>
                    <Label for="name">Nombre</Label>
                    <Input
                        type="text"
                        id="name"
                        name="name"
                        onChange={this.handleChangeInput}
                        placeholder="Inserta el nombre del Pokémon"
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
                        placeholder="Inserta la descripción"
                        data-hook="description"
                        required
                    />
                </FormGroup>
                <FormGroup>
                    <Label for="ability">Habilidad</Label>
                    <Input
                        type="text"
                        id="ability"
                        name="ability"
                        onChange={this.handleChangeAbility}
                        placeholder="Inserta la habilidad"
                        data-hook="ability"
                        required
                    />
                </FormGroup>
                <FormGroup>
                    <Label for="secondaryAbility">Habilidad secundaria</Label>
                    <Input
                        type="text"
                        id="secondaryAbility"
                        name="secondaryAbility"
                        onChange={this.handleChangeInput}
                        placeholder="Inserta la habilidad secundaria"
                        data-hook="secondaryAbility"
                        disabled
                    />
                </FormGroup>
                <FormGroup>
                    <Label for="hiddenAbility">Habilidad oculta</Label>
                    <Input
                        type="text"
                        id="hiddenAbility"
                        name="hiddenAbility"
                        onChange={this.handleChangeInput}
                        placeholder="Inserta la habilidad oculta"
                        data-hook="hiddenAbility"
                        disabled
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
                        required
                    />
                </FormGroup>
                <FormGroup>
                    <Label for="prevolution">Preevolución</Label>
                    <Input
                        type="number"
                        id="prevolution"
                        name="prevolution"
                        onChange={this.handleChangeInput}
                        placeholder="Inserta la preevolución del Pokémon"
                        data-hook="prevolution"
                    />
                </FormGroup>
                <FormGroup>
                    <Label for="evolution">Evolución</Label>
                    <Input
                        type="number"
                        id="evolution"
                        name="evolution"
                        onChange={this.handleChangeEvolution}
                        placeholder="Inserta la evolución del Pokémon"
                        data-hook="evolution"
                    />
                    <Label for="evolutionRequirements">Requerimiento para Evolucionar</Label>
                    <Input
                        type="text"
                        id="evolutionRequirements"
                        name="evolutionRequirements"
                        onChange={this.handleChangeInput}
                        placeholder="Requerimiento para evolucionar Pokémon"
                        data-hook="evolutionRequirements"
                        disabled
                    />
                </FormGroup>
                <FormGroup>
                    <Label for="type1">Tipo primario</Label>
                    <Input
                        type="number"
                        id="type1"
                        name="typeId"
                        onChange={this.handleChangeInput}
                        placeholder="Inserta el tipo primario"
                        data-hook="type1"
                        required
                    />
                </FormGroup>
                <FormGroup>
                    <Label for="type2">Tipo secundario</Label>
                    <Input
                        type="number"
                        id="type2"
                        name="typeId2"
                        onChange={this.handleChangeInput}
                        placeholder="Inserta el tipo secundario"
                        data-hook="type2"
                    />
                </FormGroup>
                <input type="button" onClick={() => checkInputs()} value="Enviar" />
                <input type="button" onClick={() => console.log(JSON.stringify(this.state))} value="ESTADO" />
            </Form>
=======
            <Container className="create_container">
                <h1>Crear Pokémon</h1>
                <Form className="form bg-light">
                    <Row form>
                        <Col md={6}>
                            <FormGroup>
                                <Label for="numPokedex">Num. Pokédex</Label>
                                <Input
                                    type="number"
                                    id="numPokedex"
                                    name="numPokedex"
                                    onChange={this.handleChangeInput}
                                    placeholder="Inserta el número de la Pokédex"
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
                                    onChange={this.handleChangeInput}
                                    placeholder="Inserta la habilidad"
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
                        />
                    </FormGroup>
                    <FormGroup>
                        <Label for="image">Imagen</Label>
                        <Input
                            type="text"
                            id="image"
                            name="image"
                            onChange={this.handleChangeInput}
                            placeholder="Inserta el nombre de la imagen"
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
                            required
                        />
                        <Label for="height">Altura</Label>
                        <Input
                            type="text"
                            id="height"
                            name="height"
                            onChange={this.handleChangeInput}
                            placeholder="Inserta la altura del Pokémon"
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
                            required
                        />
                        <Label for="attack">Ataque</Label>
                        <Input
                            type="number"
                            id="attack"
                            name="attack"
                            onChange={this.handleChangeInput}
                            placeholder="Inserta el ataque del Pokémon"
                            required
                        />
                        <Label for="defense">Defensa</Label>
                        <Input
                            type="number"
                            id="defense"
                            name="defense"
                            onChange={this.handleChangeInput}
                            placeholder="Inserta la defensa del Pokémon"
                            required
                        />
                        <Label for="spAttack">Ataque especial</Label>
                        <Input
                            type="number"
                            id="spAttack"
                            name="spAttack"
                            onChange={this.handleChangeInput}
                            placeholder="Inserta el ataque especial del Pokémon"
                            required
                        />
                        <Label for="spDefense">Defensa Especial</Label>
                        <Input
                            type="number"
                            id="spDefense"
                            name="spDefense"
                            onChange={this.handleChangeInput}
                            placeholder="Inserta la defensa especial del Pokémon"
                            required
                        />
                        <Label for="speed">Velocidad</Label>
                        <Input
                            type="number"
                            id="speed"
                            name="speed"
                            onChange={this.handleChangeInput}
                            placeholder="Inserta la velocidad del Pokémon"
                            required
                        />
                    </FormGroup>
                    <FormGroup>
                        <Label for="prevolution">Preevolución</Label>
                        <Input
                            type="number"
                            id="prevolution"
                            name="prevolution"
                            onChange={this.handleChangeInput}
                            placeholder="Inserta la preevolución del Pokémon"
                        />
                    </FormGroup>
                    <FormGroup>
                        <Label for="evolution">Evolución</Label>
                        <Input
                            type="number"
                            id="evolution"
                            name="evolution"
                            onChange={this.handleChangeInput}
                            placeholder="Inserta  del Pokémon"
                        />
                        <Label for="evolutionRequirements">Requerimiento para Evolucionar</Label>
                        <Input
                            type="text"
                            id="evolutionRequirements"
                            name="evolutionRequirements"
                            onChange={this.handleChangeInput}
                            placeholder="Requerimiento para evolucionar Pokémon"
                        />
                    </FormGroup>
                    <FormGroup>
                        <Label for="type1">Tipo 1</Label>
                        <Input type="select" name="typeId" id="typeId" defaultValue={'DEFAULT'} onChange={this.handleChangeInput}>
                            <option value="DEFAULT" disabled>Selecciona el primer tipo</option>
                            {types.map(type =>
                                <option key={type.typeId} value={type.typeId}>{type.name}</option>
                            )}
                        </Input>
                    </FormGroup>
                    <FormGroup>
                        <Label for="type2">Tipo 2</Label>
                        <Input type="select" name="typeId2" id="typeId2" defaultValue={'DEFAULT'} onChange={this.handleChangeInput}>
                            <option value="DEFAULT">Selecciona el segundo tipo</option>
                            {types.map(type =>
                                <option key={type.typeId} value={type.typeId}>{type.name}</option>
                            )}
                        </Input>
                    </FormGroup>
                    <input type="button" onClick={this.addPokemon} value="Enviar" />
                    <input type="button" onClick={() => console.log(JSON.stringify(this.state))} value="ESTADO" />
                </Form >
            </Container >
>>>>>>> 7cadb7845dc324453dd20080d9ee8c525113a610
        )
    }
}
