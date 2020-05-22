import React, { Component } from 'react';
import './TypeCard.css';

export default class TypeCard extends Component {
    render() {
        function importAll(r) {
            let images = {};
            r.keys().map((item) => { images[item.replace('./', '')] = r(item); });
            return images;
        }
        
        const typesImages = importAll(require.context('../../Assets/svg/types', false, /\.(svg)$/));
        const secondaryTypesImages = importAll(require.context('../../Assets/img/secondaryTypes', false, /\.(png)$/));

        return (
            <div>
                <p>{this.props.typeId}</p>
                <p>{this.props.name}</p>
                <p>{this.props.color}</p>
                <div className={`icon typeImage${this.props.typeId}`}>
                    <img src={typesImages[this.props.image]} />
                </div>
                <img src={secondaryTypesImages[this.props.secondaryImage]} />
            </div>
        )
    }
}