import React, { Component } from "react";
import Board from './components/Board'
import './styles/root.css'
class App extends Component {

  
  state = {
    dddd: Array(9).fill(null),
    turn: true,
    finish: false,
    msg: "Next Player is X"
    
}

  handlemsg = (msg)=>{
    this.setState({msg})
  }
  render() {
    const {msg} = this.state
    return (
        <div className = "app">
          
          TIC TOC TOE
          <h1> {msg}</h1>
        <Board handlemsg = {this.handlemsg}/>
      </div>
    );
  }
}

export default App;
