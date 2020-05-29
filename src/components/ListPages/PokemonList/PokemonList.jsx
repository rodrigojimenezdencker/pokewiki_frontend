import React, { Component } from 'react';
import { getJSON } from '../../CRUD/requests';
import { PokemonCard } from '../../PokemonCard/PokemonCard';
import { Link } from 'react-router-dom';
import { SearchBox } from '../../SearchBox/SearchBox';
import { PageTitle } from '../../PageTitle/PageTitle';
import { RectShape } from 'react-placeholder/lib/placeholders';
import { CardGrid } from '../../CardGrid/CardGrid';
import './PokemonList.css';
import '../index.css';

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
        getJSON('https://pokewikiapi.azurewebsites.net/api/pokemon')
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
                <RectShape
                    key={i}
                    ready={false}
                    className="background_loading"
                    style={{ width: 230, height: 330 }}
                />
            )
        }

        return (
            <main id="pokemonlist_page" className="list_page">
                <PageTitle>Lista Pokémon</PageTitle>
                <SearchBox
                    placeholder="Buscar pokémon"
                    handleChange={this.handleChange}
                />
                <CardGrid>
                    {isLoading ?
                        <>
                            {skeletonArray.map(element => element)}
                        </>
                        :
                        filteredPokemon.map(pokemon =>
                            <Link key={pokemon.numPokedex} to={`/pokemon/${pokemon.name}`}>
                                <PokemonCard pokemon={pokemon} />
                            </Link>
                        )
                    }
                </CardGrid>
            </main>
        )
    }
}
