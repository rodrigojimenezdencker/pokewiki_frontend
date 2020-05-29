import React, { Component } from 'react';
import { getJSON } from '../CRUD/requests';
import { Table } from 'reactstrap';
import { PageTitle } from '../PageTitle/PageTitle';
import './TypePage.css';
import { Link } from 'react-router-dom';

export default class TypePage extends Component {
    constructor(props) {
        super(props);
        this.state = {
            type: null
        }
    }

    componentDidMount() {
        const { id, name } = this.props.match.params;
        let typesToFetch = id ? id : name;

        getJSON('https://pokewikiapi.azurewebsites.net/api/types/' + typesToFetch)
            .then(data => this.setState({ type: data }));
    }

    importAllImages = (r) => {
        let images = {};
        r.keys().map((item) => { images[item.replace('./', '')] = r(item); });
        return images;
    }

    render() {
        const pokemonImages = this.importAllImages(require.context('../../Assets/img/pokemon', false, /\.(png)$/));
        const typesImages = this.importAllImages(require.context('../../Assets/svg/types', false, /\.(svg)$/));
        const { type } = this.state;

        if (type == null) return null;

        return (
            <main id="type_page">
                <PageTitle>TIPO {type.name}</PageTitle>
                <div className={`icon typeImage${type.typeId}`}>
                    <img
                        src={typesImages[type.image]}
                        alt={type.name}
                    />
                </div>
                <h2>Lista de Pokémon</h2>
                <Table striped>
                    <thead className="thead-dark">
                        <tr>
                            <th># Pokédex</th>
                            <th>Pokémon</th>
                            <th>Imagen</th>
                        </tr>
                    </thead>
                    <tbody>
                        {type.pokemons.map(pokemon =>
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
                                        alt={pokemon.name}
                                    />
                                    </td>
                            </tr>
                        )}
                    </tbody>
                </Table>
                {type.moves.length !== 0 ?
                    <>
                        <h2>Lista de movimientos</h2>
                        <Table striped>
                            <thead className="thead-dark">
                                <tr>
                                    <th>Ataque</th>
                                    <th>Poder</th>
                                    <th>Precisión</th>
                                    <th>Cantidad</th>
                                </tr>
                            </thead>
                            <tbody>
                                {type.moves.map(move =>
                                    <tr key={move.moveId}>
                                        <td>
                                            <Link to={`/movimientos/${move.name.replace(" ", "_")}`}>
                                                {move.name}
                                            </Link>
                                        </td>
                                        <td>{move.power}</td>
                                        <td>{move.accuracy}</td>
                                        <td>{move.quantity}</td>
                                    </tr>
                                )}
                            </tbody>
                        </Table>
                    </>
                    : null
                }
            </main>
        )
    }
}