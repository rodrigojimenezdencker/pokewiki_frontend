import React, { Component } from 'react'

export default class PokemonPage extends Component {
    constructor(props){
        super(props);
        this.state = {
            pokemon: null
        }
    }

    componentDidMount() {
        fetch('https://localhost:44316/api/pokemon/3')
        .then(response => response.json())
        .then(data => {
            this.setState({pokemon: data});
            console.log(this.state.pokemon);
        } )
    }
    render() {
        const {pokemon} = this.state;
        if (pokemon == null) return null;
        return (
            <div>
                <p>#{pokemon.numPokedex} - {pokemon.name}</p>
                <img src={pokemon.image}></img>
                <img src={pokemon.type1.secondaryImage}></img>
                <p>{pokemon.type1.name}</p>
                <img src={pokemon.type2 ? pokemon.type2.secondaryImage : pokemon.type2}></img>
                <p>{pokemon.type2 ? pokemon.type2.name : pokemon.type2}</p>
                <p>{pokemon.description}</p>
                <p>{pokemon.ability}</p>
                <p>{pokemon.secondaryAbility}</p>
                <p>{pokemon.hiddenAbility}</p>
                <p>{pokemon.weight}</p>
                <p>{pokemon.height}</p>
                <p>{pokemon.ps}</p>
                <p>{pokemon.attack}</p>
                <p>{pokemon.defense}</p>
                <p>{pokemon.spAttack}</p>
                <p>{pokemon.spDefense}</p>
                <p>{pokemon.speed}</p>
                <img src={pokemon.prevolution ? pokemon.prevolution.image : pokemon.prevolution}></img>
                <p>{pokemon.prevolution ? pokemon.prevolution.name : pokemon.prevolution}</p>
                <p>{pokemon.prevolution ? pokemon.prevolution.evolutionRequirements : pokemon.prevolution}</p>
                <img src={pokemon.evolution ? pokemon.evolution.image : pokemon.evolution}></img>
                <p>{pokemon.evolution ? pokemon.evolution.name : pokemon.evolution}</p>
                <p>{pokemon.evolutionRequirements}</p>
            </div>
        )
    }
}