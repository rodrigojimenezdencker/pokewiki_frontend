import React, { Component } from 'react';
import './Navbar.css';
import arrow_icon from '../../Assets/svg/flechas.svg'
import pokeball_icon from '../../Assets/svg/pokeball.svg';
import types_icon from '../../Assets/svg/types.svg';
import moves_icon from '../../Assets/svg/moves.svg';

export default class Menu extends Component {
    render() {
        return (
            <nav class="navbar">
                <ul class="navbar-nav">
                    <li class="logo">
                        <a href="#" class="nav-link">
                            <span className="link-text">PokéWiki</span>
                            <img src={arrow_icon} alt="" />
                        </a>
                    </li>
                    <li class="nav-item">
                        <a href="#" class="nav-link">
                            <img src={pokeball_icon} alt=""/>
                            <span class="link-text">Pokémon</span>
                        </a>
                    </li>
                    <li class="nav-item">
                        <a href="#" class="nav-link">
                            <img src={types_icon} alt=""/>
                            <span class="link-text">Tiapos</span>
                        </a>
                    </li>
                    <li class="nav-item">
                        <a href="#" class="nav-link">
                            <img src={moves_icon} alt=""/>
                            <span class="link-text">Movimientos</span>
                        </a>
                    </li>
                </ul>
            </nav>
        )
    }
}
