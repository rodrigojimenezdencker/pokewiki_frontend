import React, { Component } from 'react';
import { getJSON } from '../CRUD/requests';
import { PageTitle } from '../PageTitle/PageTitle';
import './MovePage.css';
import { Table } from 'reactstrap';
import { Link } from 'react-router-dom';

export default class MovePage extends Component {
    constructor(props) {
        super(props);
        this.state = {
            move: null
        }
    }

    componentDidMount() {
        const { id, name } = this.props.match.params;
        let movesToFetch = id ? id : name;

        getJSON('https://pokewikiapi.azurewebsites.net/api/moves/' + movesToFetch)
            .then(data => this.setState({ move: data }));
    }

    importAllImages = (r) => {
        let images = {};
        r.keys().map((item) => { images[item.replace('./', '')] = r(item); });
        return images;
    }

    render() {
        const pokemonImages = this.importAllImages(require.context('../../Assets/img/pokemon', false, /\.(png)$/));
        const secondaryTypesImages = this.importAllImages(require.context('../../Assets/img/secondaryTypes', false, /\.(png)$/));
        const { move } = this.state;
        if (move == null) return null;

        return (
            <main id="move_page">
                <PageTitle>Movimiento {move.name}</PageTitle>
                <p>{move.description}</p>
                <Table bordered>
                    <thead className="thead-dark">
                        <tr>
                            <th>Poder</th>
                            <th>Precisión</th>
                            <th>Cantidad</th>
                            <th>Tipo</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>{move.power}</td>
                            <td>{move.accuracy}</td>
                            <td>{move.quantity}</td>
                            <td>
                                <Link to={`/tipos/${move.type.name}`}>
                                    <img
                                        src={secondaryTypesImages[move.type.secondaryImage]}
                                        alt={move.type.name}
                                    />
                                </Link>
                            </td>
                        </tr>
                    </tbody>
                </Table>
                <h2>Pokémon que pueden aprender {move.name}</h2>
                {move.pokemons.length !== 0 ? 
                    <table className="table table-striped">
                        <thead className="thead-dark">
                            <tr>
                                <th># Pokédex</th>
                                <th>Pokémon</th>
                                <th>Imagen</th>
                            </tr>
                        </thead>
                        <tbody>
                            {move.pokemons.map(pokemon =>
                                <tr key={pokemon.numPokedex}>
                                    <td>{pokemon.numPokedex}</td>
                                    <td>
                                        <Link to={`/pokemon/${pokemon.name}`}>
                                            {pokemon.name}
                                        </Link>
                                    </td>
                                    <td>
                                        <img
                                            src={pokemonImages[pokemon.image]}
                                            alt={pokemon.name} />
                                    </td>
                                </tr>
                            )}
                        </tbody>
                    </table>
                :
                <p>{move.name} no es aprendido por ningún Pokémon.</p>
            }
            </main>
        )
    }
}