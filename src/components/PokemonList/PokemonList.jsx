import React, { Component } from 'react';
import PokemonCard from '../PokemonCard/PokemonCard';
import './PokemonList.css';
import { Link } from 'react-router-dom';

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
            <section id="pokemonlist_page">
                <h1 className="page_title">Lista Pokémon</h1>
                <div className="pokemonlist_grid">
                    {this.state.pokemonlist.map(item => {
                        return (
                            <Link to={`/pokemon/${item.numPokedex}`}>
                                <PokemonCard
                                    numPokedex={item.numPokedex}
                                    name={item.name}
                                    image={item.image}
                                    type1Id={item.type1.typeId}
                                    type1Image={item.type1.image}
                                    type1Name={item.type1.name}
                                    type2Image={item.type2 == null ? item.type2 : item.type2.image}
                                    type2Name={item.type2 == null ? item.type2 : item.type2.name}
                                />
                            </Link>
                        )
                    })}
                </div>
            </section>
        )
    }
}
