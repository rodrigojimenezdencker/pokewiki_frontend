import React, { Component } from 'react'
import PokemonCard from '../PokemonCard/PokemonCard';

export default class PokemonList extends Component {
    constructor(props) {
        super(props);
        this.state = {
            pokemonlist: []
        }
    }

    componentDidMount() {
        fetch('https://localhost:44316/api/pokemon')
            .then(response => response.json())
            .then(data => {
                this.setState({ pokemonlist: data });
                console.log(this.state.pokemonlist);
            })
    }
    render() {
        return (
            <div>
                {this.state.pokemonlist.map(item => {
                    return (
                        <PokemonCard
                            numPokedex={item.numPokedex}
                            name={item.name}
                            image={item.image}
                            type1Image={item.type1.image}
                            type1Color={item.type1.color}
                            type1Name={item.type1.name}
                            type2Image={item.type2 == null ? item.type2 : item.type2.image}
                            type2Color={item.type2 == null ? item.type2 : item.type2.color}
                            type2Name={item.type2 == null ? item.type2 : item.type2.name}
                        />
                    )
                })}
            </div>
        )
    }
}
