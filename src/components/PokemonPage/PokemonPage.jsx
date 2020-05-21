import React, { Component } from 'react';
import './PokemonPage.css'
import PokemonCard from '../PokemonCard/PokemonCard';

export default class PokemonPage extends Component {
    constructor(props) {
        super(props);
        this.state = {
            pokemon: null,
            isLoading: true
        }
    }

    componentDidMount() {
        const { id, name } = this.props.match.params;
        let pokemonToFetch = id ? id : name;

        fetch('https://localhost:44316/api/pokemon/' + pokemonToFetch)
            .then(response => response.json())
            .then(data => {
                this.setState({ pokemon: data });
                setTimeout(() => {
                    this.setState({ isLoading: false })
                }, 2500);
            })
    }
    render() {
        const { pokemon, isLoading } = this.state;
        if (pokemon == null) return null;
        if (isLoading) {
            return (
                <div className="loading_container">
                    <div className="card_container">
                        <div className="card_container_inner">
                            <PokemonCard
                                numPokedex={pokemon.numPokedex}
                                name={pokemon.name}
                                image={pokemon.image}
                                type1Id={pokemon.type1.typeId}
                                type1Image={pokemon.type1.secondaryImage}
                                type1Name={pokemon.type1.name}
                                type2Image={pokemon.type2 == null ? pokemon.type2 : pokemon.type2.secondaryImage}
                                type2Name={pokemon.type2 == null ? pokemon.type2 : pokemon.type2.name}
                            />
                            <div className="card card_backside"></div>
                        </div>
                    </div>
                </div>
            );
        }
        return (
            <div>
                <p>#{pokemon.numPokedex} - {pokemon.name}</p>
                <img src={pokemon.image} className="img_pkm"></img>
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
                <table>
                    <tr>
                        <th>Nivel</th>
                        <th>Movimiento</th>
                        <th>Tipo</th>
                    </tr>
                    {pokemon.moves.map(move => {
                        return <tr>
                            <td>{move.level}</td>
                            <td>{move.name}</td>
                            <td><img src={move.typeImage} /></td>
                        </tr>
                    })}
                </table>
            </div>
        )
    }
}