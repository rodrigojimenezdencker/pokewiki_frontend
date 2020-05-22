import React, { Component } from 'react';
import { Input } from 'reactstrap';

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
            evolutionRequirements: null
        }
    }

    enviar = () => {
        const params = {
            method: 'POST',
            body: JSON.stringify(this.state),
            headers: {
                "Content-type": "application/json; charset=UTF-8"
            }
        };

        fetch('https://localhost:44316/api/pokemon', params)
            .then(response => response.json())
            .then(json => {
                this.props.history.push('/');
            }
            )
            .catch(error => {
                console.log(error);
            });
    }

    handleChangeInput = event => {
        const { name, value } = event.target;
        this.setState({
            [name]: value
        })
    }

    handleChangeInputNumber = event => {
        const { name, value } = event.target;
        this.setState({
            [name]: parseInt(value)
        })
    }

    render() {
        console.log(this.state.name)
        return (
            <form>
                <Input
                    type="number"
                    name="numPokedex"
                    onChange={this.handleChangeInputNumber}
                    placeholder="Inserta numPokédex"
                />
                <input onChange={this.handleChangeInputNumber} type="number" name="numPokedex" />
                <input onChange={this.handleChangeInput} type="text" name="name" />
                <input onChange={this.handleChangeInput} type="text" name="description" />
                <input onChange={this.handleChangeInput} type="text" name="ability" />
                <input onChange={this.handleChangeInput} type="text" name="secondaryAbility" />
                <input onChange={this.handleChangeInput} type="text" name="hnamedenAbility" />
                <input onChange={this.handleChangeInput} type="text" name="image" />
                <input onChange={this.handleChangeInput} type="text" name="weight" />
                <input onChange={this.handleChangeInput} type="text" name="height" />
                <input onChange={this.handleChangeInputNumber} type="number" name="ps" />
                <input onChange={this.handleChangeInputNumber} type="number" name="attack" />
                <input onChange={this.handleChangeInputNumber} type="number" name="defense" />
                <input onChange={this.handleChangeInputNumber} type="number" name="spAttack" />
                <input onChange={this.handleChangeInputNumber} type="number" name="spDefense" />
                <input onChange={this.handleChangeInputNumber} type="number" name="speed" />
                <input onChange={this.handleChangeInputNumber} type="number" name="prevolution" />
                <input onChange={this.handleChangeInputNumber} type="number" name="evolution" />
                <input onChange={this.handleChangeInput} type="text" name="evolutionRequirements" />
                <input type="button" onClick={this.enviar} value="Enviar" />
                <input type="button" onClick={() => console.log(JSON.stringify(this.state))} value="ESTADO" />

            </form>
        )
    }
}
