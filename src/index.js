import React from 'react';
import ReactDOM from 'react-dom';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import './index.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import * as serviceWorker from './serviceWorker';
import Home from './components/Home/Home.jsx';
import Navbar from './components/Navbar/Navbar.jsx';
import PokemonList from './components/PokemonList/PokemonList.jsx';
import PokemonPage from './components/PokemonPage/PokemonPage.jsx';
import TypesList from './components/TypesList/TypesList.jsx';
import TypePage from './components/TypePage/TypePage.jsx';
import MovesList from './components/MovesList/MovesList';
import MovePage from './components/MovePage/MovePage';
import NotFound from './components/NotFound/NotFound';
import Create from './components/CRUD/Create/Create';

ReactDOM.render(
  <Router>
    <Navbar />
    <Switch>
      <Route exact path="/pokemon" component={PokemonList} />
      <Route path="/pokemon/:id" component={PokemonPage} />
      <Route path="/pokemon/:name" component={PokemonPage} />
      <Route exact path="/tipos" component={TypesList} />
      <Route path="/tipos/:id" component={TypePage} />
      <Route path="/tipos/:name" component={TypePage} />
      <Route exact path="/movimientos" component={MovesList} />
      <Route path="/movimientos/:id" component={MovePage} />
      <Route path="/movimientos/:name" component={MovePage} />
      <Route path="/notfound" component={NotFound} />
      <Route path="/crear" component={Create} />

      <Route path="/" component={Home} />
    </Switch>
  </Router>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
