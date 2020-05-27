import React, { Component } from 'react'
import { TypeCard } from '../../TypeCard/TypeCard';
import { PageTitle } from '../../PageTitle/PageTitle';
import './TypesList.css';
import { CardGrid } from '../../CardGrid/CardGrid';
import { Link } from 'react-router-dom';
import { SearchBox } from '../../SearchBox/SearchBox';

export default class TypesList extends Component {
    constructor(props) {
        super(props);
        this.state = {
            types: [],
            textoBuscador: ''
        }
    }

    componentDidMount() {
        fetch('https://localhost:44316/api/types')
            .then(response => response.json())
            .then(data => {
                this.setState({ types: data });
                console.log(this.state.typeslist);
            })
    }

    handleChange = (e) => {
        this.setState({ textoBuscador: e.target.value });
    }

    render() {
        const filteredTypes = this.state.types.filter(pokemon =>
            pokemon.name.toLowerCase().includes(this.state.textoBuscador.toLowerCase())
        )
        return (
            <div id="typelist_page" className="list_page">
                <PageTitle>Lista de tipos</PageTitle>
                <SearchBox
                    placeholder="Buscar tipo"
                    handleChange={this.handleChange}
                />
                <CardGrid>
                    {filteredTypes.map(type =>
                        <Link key={type.typeId} to={`/tipos/${type.name}`}>
                            <TypeCard
                                typeId={type.typeId}
                                name={type.name}
                                color={type.color}
                                image={type.image}
                            />
                        </Link>
                    )}
                </CardGrid>
            </div >
        )
    }
}