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
            <nav className="navbarPoke">
                <ul className="navbarPoke-nav">
                    <li className="logo">
                        <Link to="/" className="navPoke-link">
                            <span className="Pokelink-text">PokéWiki</span>
                            <img src={arrow_icon} alt="" />
                        </Link>
                    </li>
                    <li className="navPoke-item">
                        <Link to="/pokemon" className="navPoke-link">
                            <img src={pokeball_icon} alt=""/>
                            <span className="Pokelink-text">Pokémon</span>
                        </Link>
                    </li>
                    <li className="navPoke-item">
                        <Link to="/tipos" className="navPoke-link">
                            <img src={types_icon} alt=""/>
                            <span className="Pokelink-text">Tipos</span>
                        </Link>
                    </li>
                    <li className="navPoke-item">
                        <Link to="/movimientos" className="navPoke-link">
                            <img src={moves_icon} alt=""/>
                            <span className="Pokelink-text">Movimientos</span>
                        </Link>
                    </li>
                </ul>
            </nav>
        )
    }
}
