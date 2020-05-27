import React, { Component } from 'react';
import { getJSON } from '../CRUD/requests';
import {PageTitle} from '../PageTitle/PageTitle';
import './MovePage.css';

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

        getJSON('https://localhost:44316/api/moves/' + movesToFetch)
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
                <p>{move.power}</p>
                <p>{move.accuracy}</p>
                <p>{move.quantity}</p>
                <img
                    src={secondaryTypesImages[move.type.secondaryImage]}
                />
                <table className="table table-striped">
                    <thead>
                        <tr>
                            <th>Num Pokedex</th>
                            <th>Pokemon</th>
                            <th>Imagen</th>
                        </tr>
                    </thead>
                    <tbody>
                        {move.pokemons.map(pokemon =>
                            <tr key={pokemon.numPokedex}>
                                <td>{pokemon.numPokedex}</td>
                                <td>{pokemon.name}</td>
                                <td><img src={pokemonImages[pokemon.image]} /></td>
                            </tr>
                        )}
                    </tbody>
                </table>
            </main>
        )
    }
}