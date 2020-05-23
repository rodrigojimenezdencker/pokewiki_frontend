import React, { Component } from 'react';
import { getJSON } from '../CRUD/requests';
import { PokemonCard } from '../PokemonCard/PokemonCard';
import './PokemonList.css';
import { Link } from 'react-router-dom';
import { SearchBox } from '../SearchBox/SearchBox';
import "react-placeholder/lib/reactPlaceholder.css";
import { PageTitle } from '../PageTitle/PageTitle';
import { RectShape } from 'react-placeholder/lib/placeholders';
import { CardGrid } from '../CardGrid/CardGrid';

export default class PokemonList extends Component {
    constructor(props) {
        super(props);
        this.state = {
            pokemon: [],
            isLoading: true,
            textoBuscador: ''
        }
    }

    componentDidMount() {
        getJSON('https://localhost:44316/api/pokemon')
            .then(data => {
                this.setState({ pokemon: data });
                setTimeout(() =>
                    this.setState({ isLoading: false })
                    , 1500)
            })

    }

    handleChange = (e) => {
        this.setState({ textoBuscador: e.target.value });
    }

    render() {
        const { isLoading, pokemon } = this.state;
        const filteredPokemon = pokemon.filter(pokemon =>
            pokemon.name.toLowerCase().includes(this.state.textoBuscador.toLowerCase())
        )

        const skeletonArray = [];
        const repeatedSkeletons = 8;
        for (let i = 0; i < repeatedSkeletons; i++) {
            skeletonArray.push(
                <RectShape ready={false} className="background_loading" style={{ width: 230, height: 330 }}
                />
            )
        }

        return (
            <section id="pokemonlist_page">
                <PageTitle>Lista Pokémon</PageTitle>
                <SearchBox
                    placeholder="Buscar Pokémon"
                    handleChange={this.handleChange}
                />
                <CardGrid>
                    {isLoading ?
                        <>
                            {skeletonArray.map(element => element)}
                        </>
                        :
                        filteredPokemon.map(pokemon =>
                            <Link key={pokemon.numPokedex} to={`/pokemon/${pokemon.numPokedex}`}>
                                <PokemonCard pokemon={pokemon} />
                            </Link>
                        )
                    }
                </CardGrid>
            </section>
        )
    }
}
