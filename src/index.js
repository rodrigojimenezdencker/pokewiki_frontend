import React from 'react';
import ReactDOM from 'react-dom';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import './index.css';
import * as serviceWorker from './serviceWorker';
import Home from './components/Home/Home.jsx';
import Navbar from './components/Navbar/Navbar.jsx';
import PokemonList from './components/PokemonList/PokemonList.jsx';
import PokemonPage from './components/PokemonPage/PokemonPage.jsx';
import TypesList from './components/TypesList/TypesList.jsx'

ReactDOM.render(
  <Router>
    <Navbar />
    <Switch>
      <Route exact path="/" component={Home} />
      <Route exact path="/pokemon" component={PokemonList} />
      <Route path="/pokemon/:id" component={PokemonPage} />
      <Route path="/tipos" component={TypesList} />
    </Switch>
  </Router>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
