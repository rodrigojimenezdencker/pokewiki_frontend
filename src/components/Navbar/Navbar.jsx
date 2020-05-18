import React, { Component } from 'react';
import './Navbar.css';
import pokeball_icon from '../../Assets/svg/pokeball.svg';
import types_icon from '../../Assets/svg/types.svg';
import moves_icon from '../../Assets/svg/moves.svg';

export default class Menu extends Component {
    render() {
        return (
            <nav>
                <img src={pokeball_icon} alt=""/>
                <img src={types_icon} alt=""/>
                <img src={moves_icon} alt=""/>
            </nav>
        )
    }
}
