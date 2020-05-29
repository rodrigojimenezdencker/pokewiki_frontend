import React, { Component } from 'react'
import { MoveRow } from '../../MoveRow/MoveRow.jsx';
import { PageTitle } from '../../PageTitle/PageTitle.jsx';
import { SearchBox } from '../../SearchBox/SearchBox.jsx';
import { Table } from 'reactstrap';
import { getJSON } from '../../CRUD/requests.js';
import '../index.css';
import './MovesList.css';

export default class MovesList extends Component {
    constructor(props) {
        super(props);
        this.state = {
            moves: [],
            textoBuscador: ''
        }
    }

    componentDidMount() {
        getJSON('https://pokewikiapi.azurewebsites.net/api/moves')
            .then(data => {
                this.setState({ moves: data });
            })
    }

    handleChange = (e) => {
        this.setState({ textoBuscador: e.target.value });
    }

    render() {
        const filteredMovements = this.state.moves.filter(move =>
            move.name.toLowerCase().includes(this.state.textoBuscador.toLowerCase())
        )

        return (
            <main id="typelist_page" className="list_page">
                <PageTitle>Lista de movimientos</PageTitle>
                <SearchBox
                    placeholder="Buscar movimiento"
                    handleChange={this.handleChange}
                />
                <Table striped className="bg-light moves_table">
                    <thead className="thead-dark">
                        <tr>
                            <th>Nombre</th>
                            <th>Descripción</th>
                            <th>Tipo</th>
                        </tr>
                    </thead>
                    <tbody>
                        {filteredMovements.map(move => (
                            <MoveRow
                                key={move.moveId}
                                name={move.name}
                                description={move.description}
                                typeName={move.type.name}
                                typeImage={move.type.secondaryImage}
                                color={move.type.color}
                            />
                        )
                        )}
                    </tbody>
                </Table>
            </main>
        )
    }
}