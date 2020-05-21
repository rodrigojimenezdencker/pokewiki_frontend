import React, { Component } from 'react';
import './PokemonCard.css';

export default class PokemonCard extends Component {
    render() {
        function importAll(r) {
            let images = {};
            r.keys().map((item) => { images[item.replace('./', '')] = r(item); });
            return images;
        }
        
        const pokemonImages = importAll(require.context('../../Assets/img/pokemon', false, /\.(png)$/));
        
        return (
            <div className={`card type${this.props.type1Id}`}>
                <p className="numpokedex">#{this.props.numPokedex}</p>
                <img src={pokemonImages[this.props.image]} alt={this.props.name} className="img_pokemon" />
                <div className="name-type_container">
                    <p>{this.props.name}</p>
                    <img src={this.props.type1Image} alt={this.props.type1Name} className="type_image" />
                    <img src={this.props.type2Image} alt={this.props.type2Name} className="type_image" />
                </div>
            </div>
        )
    }
}