import React, { Component } from 'react'
import MoveRow from '../../MoveRow/MoveRow.jsx';

export default class MovesList extends Component {
    constructor(props){
        super(props);
        this.state = {
            moveslist: []
        }
    }

    componentDidMount() {
        fetch('https://localhost:44316/api/moves')
        .then(response => response.json())
        .then(data => {
            this.setState({moveslist: data});
            console.log(this.state.moveslist);
        } )
    }
    render() {
        return (
            <div>
                <table>
                    {this.state.moveslist.map(item => {
                        return (
                                <MoveRow 
                                    key={item.moveId}
                                    moveId={item.moveId}
                                    name={item.name}
                                    type={item.type.secondaryImage}
                                    color={item.type.color}
                                />
                        )
                    })}
                </table>
            </div>
        )
    }
}