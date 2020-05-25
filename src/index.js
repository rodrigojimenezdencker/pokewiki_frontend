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
import CreatePokemon from './components/CRUD/Create/CreatePokemon/CreatePokemon';
import { Dashboard } from './components/CRUD/Dashboard/Dashboard';
import List from './components/CRUD/List/List';
import UpdatePokemon from './components/CRUD/Update/UpdatePokemon/UpdatePokemon';
import DeletePokemon from './components/CRUD/Delete/DeletePokemon/DeletePokemon';
import CreateType from './components/CRUD/Create/CreateType/CreateType';
import UpdateType from './components/CRUD/Update/UpdateType/UpdateType';
import DeleteType from './components/CRUD/Delete/DeleteType/DeleteType';
import CreateMove from './components/CRUD/Create/CreateMove/CreateMove';
import UpdateMove from './components/CRUD/Update/UpdateMove/UpdateMove';

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
      <Route exact path="/dashboard" component={Dashboard} />
      <Route exact path="/dashboard/:objectName" component={List} />
      <Route path="/dashboard/pokemon/crear" component={CreatePokemon} />
      <Route path="/dashboard/pokemon/modificar/:id" component={UpdatePokemon} />
      <Route path="/dashboard/pokemon/modificar/:name" component={UpdatePokemon} />
      <Route path="/dashboard/pokemon/eliminar/:id" component={DeletePokemon} />
      <Route path="/dashboard/pokemon/eliminar/:name" component={DeletePokemon} />
      <Route path="/dashboard/types/crear" component={CreateType} />
      <Route path="/dashboard/types/modificar/:id" component={UpdateType} />
      <Route path="/dashboard/types/modificar/:name" component={UpdateType} />
      <Route path="/dashboard/types/eliminar/:id" component={DeleteType} />
      <Route path="/dashboard/types/eliminar/:name" component={DeleteType} />
      <Route path="/dashboard/moves/crear" component={CreateMove} />
      <Route path="/dashboard/moves/modificar/:id" component={UpdateMove} />
      <Route path="/dashboard/moves/modificar/:name" component={UpdateMove} />

      <Route path="/" component={Home} />
    </Switch>
  </Router>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
