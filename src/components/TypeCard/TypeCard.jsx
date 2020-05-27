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

        return (
            <div
                className="custom_card types"
                style={{ borderColor: this.props.color, borderStyle: "solid", borderWidth: 5 }}
            >
                <p>{this.props.name}</p>
                <div className={`icon typeImage${this.props.typeId}`}>
                    <img
                        src={typesImages[this.props.image]}
                        alt={this.props.name}
                    />
                </div>
            </div>
        )
    }
}