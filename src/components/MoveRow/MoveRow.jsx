import React, { Component } from 'react';
import './MoveRow.css';

export default class MoveRow extends Component {
    render() {
        function importAll(r) {
            let images = {};
            r.keys().map((item) => { images[item.replace('./', '')] = r(item); });
            return images;
        }

        const secondaryTypesImages = importAll(require.context('../../Assets/img/secondaryTypes', false, /\.(png)$/));
        return (
            <tr>
                <td>{this.props.name}</td>
                <td><img src={secondaryTypesImages[this.props.type]} ></img>{this.props.color}</td>
            </tr>
        )
    }
}