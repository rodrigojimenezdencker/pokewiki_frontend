import React, { Component } from 'react'
import PokemonCard from '../PokemonCard/PokemonCard';

export default class PokemonList extends Component {
    constructor(props){
        super(props);
        this.state = {
            pokemonlist: []
        }
    }

    componentDidMount() {
        fetch('https://localhost:44316/api/pokemon')
        .then(response => response.json())
        .then(data => {
            this.setState({pokemonlist: data})
        } )
    }
    render() {
        return (
            <div>
                {this.state.pokemonlist.map(item => {
                    return <PokemonCard name={item.name} image={item.image} />
                })}
            </div>
        )
    }
}
