import React, { Component } from 'react';
import { postJSON } from '../requests';
import { Input, Form, FormGroup, Label } from 'reactstrap';

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
            subtype: false
        }
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

    handleChangeInput = event => {
        const { name, value, type} = event.target;
        this.setState({
            [name]: type === 'number' ? parseInt(value) : value
        });
    }

    render() {
        return (
            <Form>
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
                <FormGroup>
                    <Label for="description">Descricpión</Label>
                    <Input
                        type="textarea"
                        id="description"
                        name="description"
                        onChange={this.handleChangeInput}
                        placeholder="Inserta la descripción"
                        required
                    />
                </FormGroup>
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
                        placeholder="Inserta la imagen"
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
                    <Input
                        type="number"
                        id="type1"
                        name="typeId"
                        onChange={this.handleChangeInput}
                        placeholder="Inserta el tipo primario"
                    />
                </FormGroup>
                <FormGroup>
                    <Label for="type2">Tipo 2</Label>
                    <Input
                        type="number"
                        id="type2"
                        name="typeId2"
                        onChange={this.handleChangeInput}
                        placeholder="Inserta el tipo primario"
                    />
                </FormGroup>
                <input type="button" onClick={this.addPokemon} value="Enviar" />
                <input type="button" onClick={() => console.log(JSON.stringify(this.state))} value="ESTADO" />
            </Form>
        )
    }
}
