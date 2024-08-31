import React from 'react'
import PokeTable from './PokeTable'
import PokeChat from './PokeChat'
import  {v4 as uuid} from 'uuid'

export default class PokeApp extends React.Component{

  constructor(props){
    super(props);
    this.state={ messages : []};
  }

  onGrowl(name){
    let text = `${name} , ${name}!`;
    let message = {id:uuid(), text: text };
    this.state.messages.push(message) ;
    let messages = this.state.messages;
    this.setState({messages: messages})
  }

  render(){
    var pokemons = [
      {number: 1 , name: 'Bulbasour'},
      {number: 2 , name: 'Ivysour'},
      {number: 3 , name: 'Venusaur'}
    ];
    return <div className="pokeapp">
    <PokeTable pokemons={pokemons} onGrowl={this.onGrowl.bind(this )}/>
    <PokeChat messages={this.state.messages}/>
    </div>
  }
}
