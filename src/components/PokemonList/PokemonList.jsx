import React, { Component } from 'react';
import PokemonCard from '../PokemonCard/PokemonCard';
import './PokemonList.css';
import { Link } from 'react-router-dom';
import SkeletonLoader from "tiny-skeleton-loader-react";

export default class PokemonList extends Component {
    constructor(props) {
        super(props);
        this.state = {
            pokemonlist: [],
            isLoading: true
        }
    }

    componentDidMount() {
        fetch('https://localhost:44316/api/pokemon')
            .then(response => response.json())
            .then(data => {
                this.setState({ pokemonlist: data });
                setTimeout(() =>
                    this.setState({ isLoading: false })
                ,2000)
            })                
    }

    render() {
        if (this.state.isLoading) {
            return (
                <section id="pokemonlist_page">
                    <SkeletonLoader width="30%" height={83} style={{ margin: 50 }} />
                    <div className="pokemonlist_grid">
                        <SkeletonLoader width={230} height={330} style={{ margin: 10 }} />
                        <SkeletonLoader width={230} height={330} style={{ margin: 10 }} />
                        <SkeletonLoader width={230} height={330} style={{ margin: 10 }} />
                        <SkeletonLoader width={230} height={330} style={{ margin: 10 }} />
                        <SkeletonLoader width={230} height={330} style={{ margin: 10 }} />
                        <SkeletonLoader width={230} height={330} style={{ margin: 10 }} />
                        <SkeletonLoader width={230} height={330} style={{ margin: 10 }} />
                        <SkeletonLoader width={230} height={330} style={{ margin: 10 }} />
                    </div>
                </section>

            )
        }
        return (
            <section id="pokemonlist_page">
                <h1 className="page_title">Lista Pokémon</h1>
                <div className="pokemonlist_grid">
                    {this.state.pokemonlist.map(item => {
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
                    })}
                </div>
            </section>
        )
    }
}
