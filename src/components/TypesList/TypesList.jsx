import React, { Component } from 'react'
import TypeCard from '../TypeCard/TypeCard';

export default class TypesList extends Component {
    constructor(props){
        super(props);
        this.state = {
            typeslist: []
        }
    }

    componentDidMount() {
        fetch('https://localhost:44316/api/types')
        .then(response => response.json())
        .then(data => {
            this.setState({typeslist: data});
            console.log(this.state.typeslist);
        } )
    }
    render() {
        return (
            <div>
                {this.state.typeslist.map(item => {
                    return (
                            <TypeCard 
                                key = {item.typeId}
                                typeId = {item.typeId} 
                                name = {item.name}
                                color = {item.color}
                                image = {item.image}
                                secondaryImage = {item.secondaryImage}
                            />
                    )
                })}
            </div>
        )
    }
}