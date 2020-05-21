import React, { Component } from 'react';
import './MoveRow.css';

export default class MoveRow extends Component {
    render() {
        return (
            <tr>
                <td>{this.props.name}</td>
                <td><img src={this.props.type} ></img>{this.props.color}</td>
            </tr>
        )
    }
}