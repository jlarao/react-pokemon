import React, {Component} from 'react'
import PokeApp from './components/PokeApp';

import logo from './logo.svg';
import './App.css';

var pokemons = [
  {number: 1 , name: 'Bulbasour'},
  {number: 2 , name: 'Ivysour'},
  {number: 3 , name: 'Venusaur'}
]

class App extends Component{
  render(){
    return (
        <PokeApp pokemons={pokemons} />
    );
  }
}

export default App;
