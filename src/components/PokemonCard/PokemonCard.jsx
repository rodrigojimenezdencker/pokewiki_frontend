import React, { Component } from 'react'
import { Link } from 'react-router-dom'

export default class PokemonCard extends Component {
    render() {
        return (
            <Link to={`/pokemon/${this.props.numPokedex}`}>
                <div>
                    <p>#{this.props.numPokedex} - {this.props.name}</p>
                    <img src={this.props.image} />
                    <img src={this.props.type1} />
                    <p>{this.props.type1Color}</p>
                    <img src={this.props.type2} />
                    <p>{this.props.type2Color}</p>
                </div>
            </Link>
        )
    }
}