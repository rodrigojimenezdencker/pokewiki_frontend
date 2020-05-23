import React from 'react';
import './PokemonCard.css';

// Importar todas las imágenes a la vez dentro de una carpeta.
function importAll(r) {
    let images = {};
    r.keys().map((item) => { images[item.replace('./', '')] = r(item); });
    return images;
}

const pokemonImages = importAll(require.context('../../Assets/img/pokemon', false, /\.(png)$/));
const secondaryTypesImages = importAll(require.context('../../Assets/img/secondaryTypes', false, /\.(png)$/));

const PokemonCard = ({ pokemon }) => (
    <div className={`card type${pokemon.type1.typeId}`}>
        <p className="numpokedex">#{pokemon.numPokedex}</p>
        <img
            src={pokemonImages[pokemon.image]}
            alt={pokemon.name}
            className="img_pokemon"
        />
        <div className="name-type_container">
            <p>{pokemon.name}</p>
            <img
                src={secondaryTypesImages[pokemon.type1.secondaryImage]}
                alt={pokemon.type1Name}
                className="type_image"
            />
            <img
                src={secondaryTypesImages[pokemon.type2 == null ? pokemon.type2 : pokemon.type2.secondaryImage]}
                alt={pokemon.type2Name}
                className="type_image"
            />
        </div>
    </div>
)

export default PokemonCard;