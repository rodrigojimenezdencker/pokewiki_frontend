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
            </div>
        )
    }
}