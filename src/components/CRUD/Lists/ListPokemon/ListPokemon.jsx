import React, { Component } from 'react';
import { getJSON } from '../../requests';
import './ListPokemon.css';
import { Link } from 'react-router-dom';
import { Container, Table, Button } from 'reactstrap';
import { SearchBox } from '../../../SearchBox/SearchBox';

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
            pokemon: [],
            textoBuscador: ''
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
        const filteredPokemon = pokemon.filter(pokemon =>
            pokemon.name.toLowerCase().includes(this.state.textoBuscador.toLowerCase())
        )

        return (
            <Container>
                <h1>Listado de Pokémon</h1>
                <Link to={`/dashboard/pokemon/crear`}>
                    <Button color="success" className="mr-2">Nuevo</Button>
                </Link>
                <SearchBox
                    placeholder="Filtrar Pokémon"
                    handleChange={this.handleChange}
                />
                <Table striped>
                    <thead>
                        <tr>
                            <th scope="col">Num. Pokédex</th>
                            <th scope="col">Nombre</th>
                            <th scope="col">Imagen</th>
                            <th scope="col">Acciones</th>
                        </tr>
                    </thead>
                    <tbody>
                        {filteredPokemon.map(pokemon =>
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
                                <td><Button color="primary">Modificar</Button> | <Button color="danger">Borrar</Button></td>
                            </tr>
                        )}
                    </tbody>
                </Table>
            </Container>
        )
    }
}
