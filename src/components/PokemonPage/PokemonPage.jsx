import React, { Component } from 'react';
import './PokemonPage.css'
import { getJSON } from '../CRUD/requests';
import { PokemonCard } from '../PokemonCard/PokemonCard';
import { LoadingCardContainer } from '../LoadingCardContainer/LoadingCardContainer';
import Chart from "chart.js";
import { Link } from 'react-router-dom';

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
            isLoading: false,
            id: params.id
        }
    }
    statsChart = React.createRef();


    componentDidMount() {
        this.getPokemon();
    }

    getPokemon = () => {
        const { id, name } = this.props.match.params;
        let pokemonToFetch = id ? id : name;

        getJSON('https://localhost:44316/api/pokemon/' + pokemonToFetch)
            .then(async data => {
                this.setState({ pokemon: data });
                setTimeout(() => {
                    this.setState({ isLoading: false })
                    this.loadChart(this.state.pokemon);
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
            this.Chart.destroy();
            this.getPokemon();
        }
    }

    loadChart = (pokemon) => {
        this.Chart = new Chart(this.statsChart.current, {
            type: 'bar',
            data: {
                labels: ['PS', 'Attack', 'Defense', 'Sp. Attack', 'Sp. Defense', 'Speed'],
                datasets: [{
                    label: "Stats",
                    data: [pokemon.ps, pokemon.attack, pokemon.defense, pokemon.spAttack, pokemon.spDefense, pokemon.speed],
                    backgroundColor: [
                        'rgba(255, 99, 132, 0.2)',
                        'rgba(54, 162, 235, 0.2)',
                        'rgba(255, 206, 86, 0.2)',
                        'rgba(75, 192, 192, 0.2)',
                        'rgba(153, 102, 255, 0.2)',
                        'rgba(255, 159, 64, 0.2)'
                    ],
                    borderColor: [
                        'rgba(255, 99, 132, 1)',
                        'rgba(54, 162, 235, 1)',
                        'rgba(255, 206, 86, 1)',
                        'rgba(75, 192, 192, 1)',
                        'rgba(153, 102, 255, 1)',
                        'rgba(255, 159, 64, 1)'
                    ],
                    borderWidth: 1
                }]
            },
            options: {
                scales: {
                    yAxes: [{
                        ticks: {
                            beginAtZero: true
                        }
                    }]
                }
            }
        })
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
                            <canvas
                                ref={this.statsChart}
                            />
                        </div>
                        {pokemon.prevolution || pokemon.evolution ?
                            <div className="component_section evolutions">
                                {pokemon.prevolution ?
                                    <>
                                        {pokemon.prevolution.prevolution ?
                                            <>
                                                <Link to={`${pokemon.prevolution.prevolution.numPokedex}`}>
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
                                        <Link to={`${pokemon.prevolution.numPokedex}`}>
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
                                    <img src={pokemonImages[pokemon.image]} alt={pokemon.name} />
                                    <p>{pokemon.name}</p>
                                </div>
                                {pokemon.evolution ?
                                    <>
                                        <p className="evolution_requirements">{pokemon.evolutionRequirements}</p>
                                        <Link to={`${pokemon.evolution.numPokedex}`}>
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
                                                <Link to={`${pokemon.evolution.evolution.numPokedex}`}>
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
                                                    <Link to={`../../movimientos/${move.moveId}`}>
                                                        {move.name}
                                                    </Link>
                                                </td>
                                                <td>
                                                    <Link to={`../../tipos/${move.typeId}`}>
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
                        </div>
                    </div>
                </main>
            }
        </>
    }
}