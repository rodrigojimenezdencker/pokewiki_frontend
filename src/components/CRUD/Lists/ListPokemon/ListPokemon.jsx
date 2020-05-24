import React, { Component } from 'react';
import { getJSON } from '../../requests';
import './ListPokemon.css';
import { Link } from 'react-router-dom';
import { Input, Container } from 'reactstrap';

function importAll(r) {
    let images = {};
    r.keys().map((item) => { images[item.replace('./', '')] = r(item); });
    return images;
}

const pokemonImages = importAll(require.context('../../../../Assets/img/pokemon', false, /\.(png)$/));
export default class PokemonList extends Component {
    constructor(props) {
        super(props);
        this.state = {
            pokemon: []
        }
    }

    componentDidMount() {
        getJSON('https://localhost:44316/api/pokemon')
            .then(data => this.setState({ pokemon: data }));
    }

    handleChange = (e) => {
        this.setState({ textoBuscador: e.target.value });
    }

    render() {
        const { pokemon } = this.state;

        return (
            <Container>
                <h1>Listado de Pokémon</h1>
                <Link to={`/crearPokemon`}>
                    <input type="submit" className="btn btn-primary" value="Crear" />
                </Link>
                <table class="table table-striped">
                    <thead>
                        <tr>
                        <th scope="col">Num. Pokédex</th>
                        <th scope="col">Nombre</th>
                        <th scope="col">Imagen</th>
                        <th scope="col">Acciones</th>
                        </tr>
                    </thead>
                    <tbody>
                        {pokemon.map(pokemon =>
                            <tr>
                            <th scope="row">{pokemon.numPokedex}</th>
                            <td>{pokemon.name}</td>
                            <td>
                                <img
                                src={pokemonImages[pokemon.image]}
                                alt={pokemon.name}
                                className="img_pokemon"
                                />
                            </td>
                            <td><input type="submit" className="btn btn-primary" value="Modificar" /> | <input type="submit" className="btn btn-danger" value="Borrar" /></td>
                            </tr>
                        )}
                    </tbody>
                </table>
            </Container>
        )
    }
}
