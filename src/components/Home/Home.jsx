import React, { Component } from 'react';
import ReactFullpage from '@fullpage/react-fullpage';
import './Home.css';
import Logo from '../../Assets/img/logo_pokewiki.png';
import Arrow from '../../Assets/down-arrow.svg';


export default class Home extends Component {
    render() {
        return (
            <ReactFullpage
                scrollingSpeed={1000}
                render={({ state, fullpageApi }) => {
                    return (
                        <ReactFullpage.Wrapper>
                            <div className="section homepage">
                                <section className="main_logo">
                                    <img src={Logo} className="img_logo" alt="" />
                                    <h1 className="title">PokéWiki</h1>
                                </section>
                                <img src={Arrow} alt="" className="arrow_down" onClick={() => fullpageApi.moveSectionDown()}/>
                            </div>
                            <div className="section">
                                <h1>Pokémon</h1>
                            </div>
                            <div className="section">
                                <h1>Movimientos</h1>
                            </div>
                            <div className="section">
                                <h1>Tipos</h1>
                            </div>
                        </ReactFullpage.Wrapper>
                    );
                }}
            />
        )
    }
}
