import React, { Component } from 'react';
import ReactFullpage from '@fullpage/react-fullpage';
import './Home.css';
import Logo from '../../Assets/img/logo_pokewiki.png';
import Arrow from '../../Assets/svg/down-arrow.svg';

export default class Home extends Component {
    render() {
        return (
            <ReactFullpage
            //Se puede usar gratuitamente, pero si no tienes licencia comprada, saldrá un "error" en la consola.
                licenseKey = {'OPEN-SOURCE-GPLV3-LICENSE'}
                scrollingSpeed={1000}
                render={({ state, fullpageApi }) => {
                    return (
                        <ReactFullpage.Wrapper>
                            <div className="section homepage">
                                <section className="main_logo">
                                    <img src={Logo} className="img_logo" alt="" />
                                    <h1 className="title">PokéWiki</h1>
                                </section>
                                <p>Bienvenidos a PokéWiki, una enciclopedia online dedicada al universo Pokémon. En ella encontrarás información detallada de cada Pokémon, de los tipos y de los movimientos.</p>
                                <img src={Arrow} alt="Ir abajo automáticamente" tabIndex="0"
                                    role="button" className="arrow_down" onClick={() => fullpageApi.moveSectionDown()} />
                            </div>
                            <div className="section">
                                
                                <h1>Pokémon</h1>
                                <p>Pokémon es un videojuego que salió el 1995 y este ha ido evolucionando hasta ser al día de hoy uno de los juegos más populares del mundo. 
                                    En este apartado encontrarás toda la información general de los 151 Pokémon que existen en la primera generación.</p>
                                <button>Ver la lista completa</button>
                            </div>
                            <div className="section">
                                <h1>Movimientos</h1>
                                <p>Los Pokémon combaten entre ellos en los videojuegos usando movimientos poderosos para dejar a su contrincante fuera de combate.
                                    En este apartado encontrarás toda la información de los diferentes movimientos que existen y los Pokémon que los aprenden.</p>
                                <button>Ver la lista completa</button>
                            </div>
                            <div className="section">
                                <h1>Tipos</h1>
                                <p>En los juegos tendrás que usar la estrategia de tipos para llegar lejos, para ello, te damos toda la información que necesitas sobre cada tipo,
                                    que tipos son buenos contra otras y débiles y los tipos de cada Pokémon y movimientos.</p>
                                <button>Ver la lista completa</button>
                            </div>
                        </ReactFullpage.Wrapper>
                    );
                }}
            />
        )
    }
}
