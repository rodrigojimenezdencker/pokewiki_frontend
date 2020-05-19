import React, { Component } from 'react'

export default class PokemonCard extends Component {
    render() {
        return (
            <div>
                <p>{this.props.name}</p>
                <img src={this.props.image} alt=""/>
            </div>
        )
    }
}