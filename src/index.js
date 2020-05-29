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
import PokemonList from './components/ListPages/PokemonList/PokemonList.jsx';
import PokemonPage from './components/PokemonPage/PokemonPage.jsx';
import TypesList from './components/ListPages/TypesList/TypesList.jsx';
import TypePage from './components/TypePage/TypePage.jsx';
import MovesList from './components/ListPages/MovesList/MovesList';
import MovePage from './components/MovePage/MovePage';
import { NotFound } from './components/NotFound/NotFound';
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
import DeleteMove from './components/CRUD/Delete/DeleteMove/DeleteMove';

ReactDOM.render(
  <Router>
    <Navbar />
    <Switch>
      <Route exact path={process.env.PUBLIC_URL + "/"} component={Home} />
      <Route exact path={process.env.PUBLIC_URL + "/pokemon"} component={PokemonList} />
      <Route path={process.env.PUBLIC_URL + "/pokemon/:id"} component={PokemonPage} />
      <Route path={process.env.PUBLIC_URL + "/pokemon/:name"} component={PokemonPage} />
      <Route exact path={process.env.PUBLIC_URL + "/tipos"} component={TypesList} />
      <Route path={process.env.PUBLIC_URL + "/tipos/:id"} component={TypePage} />
      <Route path={process.env.PUBLIC_URL + "/tipos/:name"} component={TypePage} />
      <Route exact path={process.env.PUBLIC_URL + "/movimientos"} component={MovesList} />
      <Route path={process.env.PUBLIC_URL + "/movimientos/:id"}component={MovePage} />
      <Route path={process.env.PUBLIC_URL + "/movimientos/:name"} component={MovePage} />
      <Route exact path={process.env.PUBLIC_URL + "/dashboard"} component={Dashboard} />
      <Route exact path={process.env.PUBLIC_URL + "/dashboard/:objectName"} component={List} />
      <Route path={process.env.PUBLIC_URL + "/dashboard/pokemon/crear"} component={CreatePokemon} />
      <Route path={process.env.PUBLIC_URL + "/dashboard/pokemon/modificar/:id"} component={UpdatePokemon} />
      <Route path={process.env.PUBLIC_URL + "/dashboard/pokemon/modificar/:name"} component={UpdatePokemon} />
      <Route path={process.env.PUBLIC_URL + "/dashboard/pokemon/eliminar/:id"} component={DeletePokemon} />
      <Route path={process.env.PUBLIC_URL + "/dashboard/pokemon/eliminar/:name"} component={DeletePokemon} />
      <Route path={process.env.PUBLIC_URL + "/dashboard/types/crear"} component={CreateType} />
      <Route path={process.env.PUBLIC_URL + "/dashboard/types/modificar/:id"} component={UpdateType} />
      <Route path={process.env.PUBLIC_URL + "/dashboard/types/modificar/:name"} component={UpdateType} />
      <Route path={process.env.PUBLIC_URL + "/dashboard/types/eliminar/:id"} component={DeleteType} />
      <Route path={process.env.PUBLIC_URL + "/dashboard/types/eliminar/:name"} component={DeleteType} />
      <Route path={process.env.PUBLIC_URL + "/dashboard/moves/crear"} component={CreateMove} />
      <Route path={process.env.PUBLIC_URL + "/dashboard/moves/modificar/:id"} component={UpdateMove} />
      <Route path={process.env.PUBLIC_URL + "/dashboard/moves/modificar/:name"} component={UpdateMove} />
      <Route path={process.env.PUBLIC_URL + "/dashboard/moves/eliminar/:id"} component={DeleteMove} />
      <Route path={process.env.PUBLIC_URL + "/dashboard/moves/eliminar/:name"} component={DeleteMove} />
      <Route path="*" component={NotFound} />
    </Switch>
  </Router>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
