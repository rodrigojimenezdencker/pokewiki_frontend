import React, { Component } from 'react';
import './Navbar.css';
import arrow_icon from '../../Assets/svg/flechas.svg'
import pokeball_icon from '../../Assets/svg/pokeball.svg';
import types_icon from '../../Assets/svg/types.svg';
import moves_icon from '../../Assets/svg/moves.svg';
import { Link } from 'react-router-dom';

export default class Menu extends Component {
    render() {
        return (
            <nav className="navbar">
                <ul className="navbar-nav">
                    <li className="logo">
                        <Link to="/" className="nav-link">
                            <span className="link-text">PokéWiki</span>
                            <img src={arrow_icon} alt="" />
                        </Link>
                    </li>
                    <li className="nav-item">
                        <Link to="/pokemon" className="nav-link">
                            <img src={pokeball_icon} alt=""/>
                            <span className="link-text">Pokémon</span>
                        </Link>
                    </li>
                    <li className="nav-item">
                        <Link to="/tipos" className="nav-link">
                            <img src={types_icon} alt=""/>
                            <span className="link-text">Tipos</span>
                        </Link>
                    </li>
                    <li className="nav-item">
                        <Link to="/movimientos" className="nav-link">
                            <img src={moves_icon} alt=""/>
                            <span className="link-text">Movimientos</span>
                        </Link>
                    </li>
                </ul>
            </nav>
        )
    }
}
