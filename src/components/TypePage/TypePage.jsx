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
        const { type, isLoading } = this.state;
        if (type == null) return null;
        
        return (
            <div>
                <p>{type.typeId}</p>
                <p>{type.name}</p>
                <p>{type.color}</p>
                <img src={type.image}></img>
                <img src={type.secondaryImage}></img>
            </div>
        )
    }
}