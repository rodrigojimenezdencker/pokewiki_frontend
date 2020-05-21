import React, { Component } from 'react';
import './TypeCard.css';

export default class TypeCard extends Component {
    render() {
        return (
            <div>
                <p>{this.props.typeId}</p>
                <p>{this.props.name}</p>
                <p>{this.props.color}</p>
                <img src={this.props.image} />
                <img src={this.props.secondaryImage} />
            </div>
        )
    }
}