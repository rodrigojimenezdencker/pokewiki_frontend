import React, { Component } from 'react';
import './PokemonPage.css'
import { getJSON } from '../CRUD/requests';
import { PokemonCard } from '../PokemonCard/PokemonCard';
import { LoadingCardContainer } from '../LoadingCardContainer/LoadingCardContainer';
import { Link } from 'react-router-dom';
import { Table } from 'reactstrap';

function importAll(r) {
    let images = {};
    r.keys().map((item) => { return images[item.replace('./', '')] = r(item); });
    return images;
}

const pokemonImages = importAll(require.context('../../Assets/img/pokemon', false, /\.(png)$/));
const secondaryTypesImages = importAll(require.context('../../Assets/img/secondaryTypes', false, /\.(png)$/));

export default class PokemonPage extends Component {
    constructor(props) {
        super(props);
        const {
            match: { params }
        } = this.props;

        this.state = {
            pokemon: null,
            isLoading: true,
            id: params.id
        }
    }

    componentDidMount() {
        this.getPokemon();
    }

    getPokemon = () => {
        const { id, name } = this.props.match.params;
        let pokemonToFetch = id ? id : name;

        getJSON('https://pokewikiapi.azurewebsites.net/api/pokemon/' + pokemonToFetch)
            .then(async data => {
                this.setState({ pokemon: data });
                setTimeout(() => {
                    this.setState({ isLoading: false })
                }, 2500);
            })
    }

    componentDidUpdate(prevProps) {
        const { id } = this.props.match.params;
        if (id !== this.state.id) {
            this.setState({
                id
            });
        }
        if (prevProps.match.params.id !== id) {
            this.getPokemon();
        }
    }


    render() {
        const { pokemon, isLoading } = this.state;

        if (pokemon === null) return null;
        return <>
            {isLoading ?
                <LoadingCardContainer id="loading_container">
                    <PokemonCard pokemon={pokemon} />
                </LoadingCardContainer>
                :
                <main id="pokemon_page">
                    <div className="container">
                        <div className="pokemon_header">
                            <div className="pokemon_basic-info">
                                <p className="num_pokedex">#{pokemon.numPokedex}</p>
                                <h1>{pokemon.name}</h1>
                                <p><span style={{ color: pokemon.type1.color }}>{pokemon.type1.name}</span><span>{pokemon.type2 ? " / " : null}</span><span style={{ color: pokemon.type2 ? pokemon.type2.color : null }}>{pokemon.type2 ? pokemon.type2.name : pokemon.type2}</span></p>
                            </div>
                            <img
                                src={pokemonImages[pokemon.image]}
                                alt={pokemon.name}
                            />
                        </div>
                        <p className="component_section description">{pokemon.description}</p>
                        <div className="component_section abilities_container">
                            <p>Habilidad: {pokemon.ability}</p>
                            {pokemon.secondaryAbility ? <p>Habilidad secundaria: {pokemon.secondaryAbility}</p> : null}
                            {pokemon.hiddenAbility ? <p>Habilidad oculta: {pokemon.hiddenAbility}</p> : null}
                        </div>
                        <div className="component_section characteristics">
                            <p>Peso: {pokemon.weight}</p>
                            <p>Altura: {pokemon.height}</p>
                            <Table bordered>
                                <thead className="thead-dark">
                                    <tr>
                                        <th>PS</th>
                                        <th>Ataque</th>
                                        <th>Defensa</th>
                                        <th>Ataque especial</th>
                                        <th>Defensa especial</th>
                                        <th>Velocidad</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td>{pokemon.ps}</td>
                                        <td>{pokemon.attack}</td>
                                        <td>{pokemon.defense}</td>
                                        <td>{pokemon.spAttack}</td>
                                        <td>{pokemon.spDefense}</td>
                                        <td>{pokemon.speed}</td>
                                    </tr>
                                </tbody>
                            </Table>
                        </div>
                        {pokemon.prevolution || pokemon.evolution ?
                            <div className="component_section evolutions">
                                {pokemon.prevolution ?
                                    <>
                                        {pokemon.prevolution.prevolution ?
                                            <>
                                                <Link to={`${pokemon.prevolution.prevolution.name}`}>
                                                    <div>
                                                        <img
                                                            src={pokemonImages[pokemon.prevolution.prevolution.image]}
                                                            alt={pokemon.prevolution.prevolution.name}
                                                        />
                                                        <p>{pokemon.prevolution.prevolution.name}</p>
                                                    </div>
                                                </Link>
                                                <p className="evolution_requirements">{pokemon.prevolution.prevolution.evolutionRequirements}</p>
                                            </>
                                            : null
                                        }
                                        <Link to={`${pokemon.prevolution.name}`}>
                                            <div>
                                                <img
                                                    src={pokemonImages[pokemon.prevolution.image]}
                                                    alt={pokemon.prevolution.name}
                                                />
                                                <p>{pokemon.prevolution.name}</p>
                                            </div>
                                        </Link>
                                        <p className="evolution_requirements">{pokemon.prevolution.evolutionRequirements}</p>
                                    </>
                                    : null
                                }
                                <div>
                                    <img
                                        src={pokemonImages[pokemon.image]}
                                        alt={pokemon.name}
                                    />
                                    <p>{pokemon.name}</p>
                                </div>
                                {pokemon.evolution ?
                                    <>
                                        <p className="evolution_requirements">{pokemon.evolutionRequirements}</p>
                                        <Link to={`${pokemon.evolution.name}`}>
                                            <div>
                                                <img
                                                    src={pokemonImages[pokemon.evolution.image]}
                                                    alt={pokemon.evolution.name}
                                                />
                                                <p>{pokemon.evolution.name}</p>
                                            </div>
                                        </Link>
                                        {pokemon.evolution.evolution ?
                                            <>
                                                <p className="evolution_requirements">{pokemon.evolution.evolutionRequirements}</p>
                                                <Link to={`${pokemon.evolution.evolution.name}`}>
                                                    <div>
                                                        <img
                                                            src={pokemonImages[pokemon.evolution.evolution.image]}
                                                            alt={pokemon.evolution.evolution.name}
                                                        />
                                                        <p>{pokemon.evolution.evolution.name}</p>
                                                    </div>
                                                </Link>
                                            </>
                                            : null
                                        }
                                    </>
                                    :
                                    null
                                }
                            </div>
                            :
                            null
                        }
                        <div className="component_section movements">
                            {pokemon.moves.length !== 0 ?
                                <table id="moves_table" className="table table-striped">
                                    <thead>
                                        <tr>
                                            <th>Nivel</th>
                                            <th>Movimiento</th>
                                            <th>Tipo</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {pokemon.moves.map(move =>
                                            (
                                                <tr key={move.moveId}>
                                                    <td>{move.level}</td>
                                                    <td>
                                                        <Link to={`../../movimientos/${move.name.replace(/ /g, "_")}`}>
                                                            {move.name}
                                                        </Link>
                                                    </td>
                                                    <td>
                                                        <Link to={`../../tipos/${move.typeName}`}>
                                                            <img
                                                                src={secondaryTypesImages[move.typeImage]}
                                                                alt={move.name}
                                                            />
                                                        </Link>
                                                    </td>
                                                </tr>
                                            )
                                        )}
                                    </tbody>
                                </table>
                                :
                                <p>{pokemon.name} no aprende ningún movimiento.</p>
                            }
                        </div>
                    </div>
                </main>
            }
        </>
    }
}