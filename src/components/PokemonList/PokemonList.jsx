import React, { Component } from 'react';
import { getJSON } from '../CRUD/requests';
import PokemonCard from '../PokemonCard/PokemonCard';
import './PokemonList.css';
import { Link } from 'react-router-dom';
import { SearchBox } from '../SearchBox/SearchBox';
import "react-placeholder/lib/reactPlaceholder.css";
import { PageTitle } from '../PageTitle/PageTitle';
import { RectShape } from 'react-placeholder/lib/placeholders';

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
        const filteredPokemon = pokemon.filter(pokemon => pokemon.name.toLowerCase().includes(this.state.textoBuscador.toLowerCase())
        )

        const SkeletonArray = [];

        for (let i = 0; i < 8; i++) {
            SkeletonArray.push(<RectShape ready={false} className="background_loading" style={{ width: 230, height: 330 }} />)
        }

        return (
            <section id="pokemonlist_page">
                <PageTitle>Lista Pokémon</PageTitle>
                <SearchBox
                    placeholder="Buscar Pokémon"
                    handleChange={this.handleChange}
                />
                <div className="pokemonlist_grid">
                    {isLoading ? (
                        <>
                            {SkeletonArray.map(element => element)}
                        </>
                    ) : (
                            filteredPokemon.map(item => {
                                return (
                                    <Link key={item.numPokedex} to={`/pokemon/${item.numPokedex}`}>
                                        <PokemonCard
                                            numPokedex={item.numPokedex}
                                            name={item.name}
                                            image={item.image}
                                            type1Id={item.type1.typeId}
                                            type1Image={item.type1.secondaryImage}
                                            type1Name={item.type1.name}
                                            type2Image={item.type2 == null ? item.type2 : item.type2.secondaryImage}
                                            type2Name={item.type2 == null ? item.type2 : item.type2.name}
                                        />
                                    </Link>
                                )
                            })
                        )
                    }
                </div>
            </section>
        )
    }
}
