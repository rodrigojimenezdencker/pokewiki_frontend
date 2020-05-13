import React, { Component } from 'react';
import ReactFullpage from '@fullpage/react-fullpage';
import './Home.css';
import Menu from '../Menu/Menu';


export default class Home extends Component {
    render() {
        return (
            <ReactFullpage
                //fullpage options
                licenseKey={'YOUR_KEY_HERE'}
                scrollingSpeed={1000} /* Options here */

                render={({ state, fullpageApi }) => {
                    return (
                        <ReactFullpage.Wrapper>
                            <div className="section homepage">
                                <p>PokéWiki</p>
                                <button onClick={() => fullpageApi.moveSectionDown()}>
                                    Click me to move down
            </button>
                            </div>
                            <div className="section">
                                <h1>Pokémon</h1>
                            </div>
                        </ReactFullpage.Wrapper>
                    );
                }}
            />
        )
    }
}
