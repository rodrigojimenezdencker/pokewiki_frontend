import React from 'react';
import ReactDOM from 'react-dom';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import './Assets/fonts/Audiowide-Regular.ttf';
import './index.css';
import * as serviceWorker from './serviceWorker';
import Home from './components/Home/Home.jsx';
import Navbar from './components/Navbar/Navbar.jsx';
import PokemonList from './components/PokemonList/PokemonList.jsx';


ReactDOM.render(
  <Router>
    <Route exact path="/">
      <Home />
    </Route>
    <Navbar />
    <Route path="/pokemon">
      <PokemonList />
    </Route>
  </Router>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
