import React, { Component } from 'react';
import './MovePage.css'

export default class MovePage extends Component {
    constructor(props) {
        super(props);
        this.state = {
            move: null,
            isLoading: true
        }
    }

    componentDidMount() {
        const { id } = this.props.match.params;
        const { name } = this.props.match.params;

        let movesToFetch = id ? id : name;

        fetch('https://localhost:44316/api/moves/' + movesToFetch)
            .then(response => response.json())
            .then(data => {
                this.setState({ move: data });
                setTimeout(() => {
                    this.setState({ isLoading: false })
                }, 2500);
            })
    }
    render() {
        function importAll(r) {
            let images = {};
            r.keys().map((item) => { images[item.replace('./', '')] = r(item); });
            return images;
        }
        
        const pokemonImages = importAll(require.context('../../Assets/img/pokemon', false, /\.(png)$/));
        const secondaryTypesImages = importAll(require.context('../../Assets/img/secondaryTypes', false, /\.(png)$/));
        const { move, isLoading } = this.state;
        if (move == null) return null;
        
        return (
            <div>
                <p>{move.moveId}</p>
                <p>{move.name}</p>
                <p>{move.description}</p>
                <p>{move.power}</p>
                <p>{move.accuracy}</p>
                <p>{move.quantity}</p>
                <img src={secondaryTypesImages[move.type.secondaryImage]}></img>
                <table>
                    <tr>
                        <th>Num Pokedex</th>
                        <th>Pokemon</th>
                        <th>Imagen</th>
                    </tr>
                    {move.pokemons.map(pokemon => {
                        return <tr>
                            <td>{pokemon.numPokedex}</td>
                            <td>{pokemon.name}</td>
                            <td><img src={pokemonImages[pokemon.image]} /></td>
                        </tr>
                    })}
                </table>
            </div>
        )
    }
}