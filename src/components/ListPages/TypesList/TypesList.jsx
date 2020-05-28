import React, { Component } from 'react'
import { TypeCard } from '../../TypeCard/TypeCard';
import { PageTitle } from '../../PageTitle/PageTitle';
import './TypesList.css';
import { CardGrid } from '../../CardGrid/CardGrid';
import { Link } from 'react-router-dom';
import { SearchBox } from '../../SearchBox/SearchBox';
import { RectShape } from 'react-placeholder/lib/placeholders';
import { getJSON } from '../../CRUD/requests';

export default class TypesList extends Component {
    constructor(props) {
        super(props);
        this.state = {
            types: [],
            textoBuscador: '',
            isLoading: true
        }
    }

    componentDidMount() {
        getJSON('http://pokewikiapi.eu-west-3.elasticbeanstalk.com/api/types')
            .then(data => {
                this.setState({ types: data });
                setTimeout(() =>
                    this.setState({ isLoading: false })
                    , 1000)
            })
    }

    handleChange = (e) => {
        this.setState({ textoBuscador: e.target.value });
    }

    render() {
        const { isLoading, types } = this.state;

        const filteredTypes = types.filter(type =>
            type.name.toLowerCase().includes(this.state.textoBuscador.toLowerCase())
        )

        const skeletonArray = [];
        const repeatedSkeletons = 8;
        for (let i = 0; i < repeatedSkeletons; i++) {
            skeletonArray.push(
                <RectShape
                    key={i}
                    ready={false}
                    className="background_loading"
                    style={{ width: 230, height: 330 }}
                />
            )
        }

        return (
            <main id="typelist_page" className="list_page">
                <PageTitle>Lista de tipos</PageTitle>
                <SearchBox
                    placeholder="Buscar tipo"
                    handleChange={this.handleChange}
                />
                <CardGrid>
                    {isLoading ?
                        <>
                            {skeletonArray.map(element => element)}
                        </>
                        :
                        filteredTypes.map(type =>
                            <Link key={type.typeId} to={`/tipos/${type.name}`}>
                                <TypeCard
                                    typeId={type.typeId}
                                    name={type.name}
                                    color={type.color}
                                    image={type.image}
                                />
                            </Link>
                        )
                    }
                </CardGrid>
            </main>
        )
    }
}