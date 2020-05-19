import React, { Component } from 'react'

export default class PokemonCard extends Component {
    render() {
        return (
            <div>
                <p>#{this.props.numPokedex} - {this.props.name}</p>
                <img src={this.props.image} />
                <img src={this.props.type1} />
                <p>COLOR: {this.props.type1Color}</p>
                <img src={this.props.type2} />
                <p>COLOR: {this.props.type2Color}</p>
            </div>
        )
    }
}