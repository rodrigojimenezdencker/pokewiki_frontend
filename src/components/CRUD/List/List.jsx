import React, { Component } from 'react';
import { getJSON } from '../requests';
import './List.css';
import { Link } from 'react-router-dom';
import { Container, Table, Button } from 'reactstrap';
import { SearchBox } from '../../SearchBox/SearchBox';

function importAll(r) {
    let images = {};
    r.keys().map((item) => { images[item.replace('./', '')] = r(item); });
    return images;
}

const pokemon = importAll(require.context('../../../Assets/img/pokemon', false, /\.(png)$/));
// const movements = importAll(require.context('../../../../Assets/img/movements', false, /\.(svg)$/));
const types = importAll(require.context('../../../Assets/svg/types', false, /\.(svg)$/));



export default class CRUDList extends Component {
    constructor(props) {
        super(props);
        this.state = {
            object: [],
            textoBuscador: ''
        }
    }

    componentDidMount() {
        const { objectName } = this.props.match.params;
        getJSON('https://localhost:44316/api/' + objectName)
            .then(data => this.setState({ object: data }));
    }

    handleChange = (e) => {
        this.setState({ textoBuscador: e.target.value });
    }

    render() {
        const { object } = this.state;
        let id = '';

        if (this.props.match.params.objectName === 'pokemon') {
            id = 'pokemon'
        } else if (this.props.match.params.objectName === 'types') {
            id = 'types'
        } else if (this.props.match.params.objectName === 'moves') {
            id = 'moves'
        }

        // console.log(objectName)
        const filteredObject = object.filter(obj =>
            obj.name.toLowerCase().includes(this.state.textoBuscador.toLowerCase())
        )

        return (
            <Container>
                <Button color="secondary">Back to dashboard</Button>
                <h1>Tabla de datos</h1>
                <Link to={`/dashboard/${id}/crear`}>
                    <Button color="success" className="mr-2">Nuevo</Button>
                </Link>
                <SearchBox
                    placeholder="Filtrar"
                    handleChange={this.handleChange}
                />
                <Table striped>
                    <thead>
                        <tr>
                            <th scope="col">ID</th>
                            <th scope="col">Nombre</th>
                            <th scope="col">Acciones</th>
                        </tr>
                    </thead>
                    <tbody>
                        {filteredObject.map(obj =>
                            <tr>
                                <th scope="row">
                                    {id === 'pokemon' ? obj.numPokedex : id === 'types' ? obj.typeId : id === 'moves' ? obj.moveId : undefined}
                                </th>
                                <td>{obj.name}</td>
                                <td>
                                    <Link to={`${window.location.pathname}/modificar/${id === 'pokemon' ? obj.numPokedex : id === 'types' ? obj.typeId : id === 'moves' ? obj.moveId : undefined}`}>
                                        <Button color="primary" className="mr-2">Modificar</Button>
                                    </Link>
                                    <Link to={`${window.location.pathname}/eliminar/${id === 'pokemon' ? obj.numPokedex : id === 'types' ? obj.typeId : id === 'moves' ? obj.moveId : undefined}`}>
                                        <Button color="danger">Eliminar</Button>
                                    </Link>
                                </td>
                            </tr>
                        )}
                    </tbody>
                </Table>
            </Container>
        )
    }
}
