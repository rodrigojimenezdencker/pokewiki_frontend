import React, { Component } from 'react';
import './TypePage.css'

export default class TypePage extends Component {
    constructor(props) {
        super(props);
        this.state = {
            type: null,
            isLoading: true
        }
    }

    componentDidMount() {
        const { id } = this.props.match.params;
        const { name } = this.props.match.params;

        let typesToFetch = id ? id : name;

        fetch('https://localhost:44316/api/types/' + typesToFetch)
            .then(response => response.json())
            .then(data => {
                this.setState({ type: data });
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
        const typesImages = importAll(require.context('../../Assets/svg/types', false, /\.(svg)$/));
        const secondaryTypesImages = importAll(require.context('../../Assets/img/secondaryTypes', false, /\.(png)$/));
        const { type, isLoading } = this.state;
        if (type == null) return null;
        
        return (
            <div>
                <p>{type.typeId}</p>
                <p>{type.name}</p>
                <p>{type.color}</p>
                <div className={`icon typeImage${type.typeId}`}>
                    <img src={typesImages[type.image]}></img>
                </div>
                <img src={secondaryTypesImages[type.secondaryImage]}></img>
                <table className="table table-striped">
                    <thead>
                        <tr>
                            <th>Num Pokedex</th>
                            <th>Pokemon</th>
                            <th>Imagen</th>
                        </tr>
                    </thead>
                    <tbody>
                        {type.pokemons.map(pokemon => 
                            <tr key={pokemon.numPokedex}>
                                <td>{pokemon.numPokedex}</td>
                                <td>{pokemon.name}</td>
                                <td><img src={pokemonImages[pokemon.image]} /></td>
                            </tr>
                        )}
                    </tbody>
                </table>
                <table className="table table-striped">
                    <thead>
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
                                <td>{move.name}</td>
                                <td>{move.power}</td>
                                <td>{move.accuracy}</td>
                                <td>{move.quantity}</td>
                            </tr>
                        )}
                    </tbody>
                </table>
            </div>
        )
    }
}