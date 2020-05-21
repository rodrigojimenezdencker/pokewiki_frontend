import React, { Component } from 'react';
import ReactFullpage from '@fullpage/react-fullpage';
import './Home.css';
import Logo from '../../Assets/img/logo_pokewiki.png';
import Arrow from '../../Assets/svg/down-arrow.svg';
import { Link } from 'react-router-dom';

export default class Home extends Component {
    render() {
        return (
            <ReactFullpage
                //Se puede usar gratuitamente, pero si no tienes licencia comprada, saldrá un "error" en la consola.
                licenseKey={'OPEN-SOURCE-GPLV3-LICENSE'}
                scrollingSpeed={1000}
                render={({ state, fullpageApi }) => {
                    return (
                        <ReactFullpage.Wrapper>
                            <div className="section homepage">
                                <div className="content_container">
                                    <section id="logo_container">
                                        <img src={Logo} className="img_logo" alt="" />
                                        <h1 id="project_title">PokéWiki</h1>
                                    </section>
                                    <p className="section_description">Bienvenidos a PokéWiki, una enciclopedia online dedicada al universo Pokémon. En ella encontrarás información detallada de cada Pokémon, de los tipos y de los movimientos.</p>
                                    <img src={Arrow} alt="Ir abajo automáticamente" tabIndex="0"
                                        role="button" className="arrow_down" onClick={() => fullpageApi.moveSectionDown()} />
                                </div>
                            </div>
                            <div className="section pokemon_section">
                                <h2 className="section_title">Pokémon</h2>
                                <p className="section_description">Pokémon es un videojuego que salió el 1995 y este ha ido evolucionando hasta ser al día de hoy uno de los juegos más populares del mundo.
                                    En este apartado encontrarás toda la información general de los 151 Pokémon que existen en la primera generación.</p>
                                <div id="button_container">
                                    <Link to="/pokemon">
                                        <button aria-label="Ver la lista completa" className="complete_list">
                                            <span className="circle" aria-hidden="true">
                                                <span className="icon arrow"></span>
                                            </span>
                                            <span className="button-text">Ver la lista completa</span>
                                        </button>
                                    </Link>
                                </div>
                            </div>
                            <div className="section movimientos_section">
                                <h2 className="section_title">Movimientos</h2>
                                <p className="section_description">Los Pokémon combaten entre ellos en los videojuegos usando movimientos poderosos para dejar a su contrincante fuera de combate.
                                    En este apartado encontrarás toda la información de los diferentes movimientos que existen y los Pokémon que los aprenden.</p>
                                <div id="button_container">
                                    <Link to="/movimientos">
                                        <button aria-label="Ver la lista completa" className="complete_list">
                                            <span className="circle" aria-hidden="true">
                                                <span className="icon arrow"></span>
                                            </span>
                                            <span className="button-text">Ver la lista completa</span>
                                        </button>
                                    </Link>
                                </div>
                            </div>
                            <div className="section tipos_section">
                                <h2 className="section_title">Tipos</h2>
                                <p className="section_description">En los juegos tendrás que usar la estrategia de tipos para llegar lejos, para ello, te damos toda la información que necesitas sobre cada tipo,
                                    que tipos son buenos contra otras y débiles y los tipos de cada Pokémon y movimientos.</p>
                                <div id="button_container">
                                    <Link to="/tipos">
                                        <button aria-label="Ver la lista completa" className="complete_list">
                                            <span className="circle" aria-hidden="true">
                                                <span className="icon arrow"></span>
                                            </span>
                                            <span className="button-text">Ver la lista completa</span>
                                        </button>
                                    </Link>
                                </div>
                            </div>
                        </ReactFullpage.Wrapper>
                    );
                }}
            />
        )
    }
}
