import React, { Component } from "react";
import Board from './components/Board'
import './styles/root.css'
class App extends Component {

  
  state = {
    dddd: Array(9).fill(null),
    turn: true,
    finish: false,
    msg: "Next Player is X",
    winpos : [null,null,null]
    
}
checkwinner(dddd){

  console.log("state is ")
  console.log(dddd)
  const c = this.state.turn ? 'X': 'O';
  if(dddd[0] === c && dddd[1] === c && dddd[2] === c){
    [0,1,2]
  } 
  if(dddd[3] === c && dddd[4] === c && dddd[5] === c)
  {
    return [3,4,5]
 }
  if(dddd[6] === c && dddd[7] === c && dddd[8] === c) {
   
    return  [6,7,8];
  }
  if(dddd[0] === c && dddd[3] === c && dddd[6] === c) {
    return [0,3,6]
   
  }
  if(dddd[1] === c && dddd[4] === c && dddd[7] === c) {
   return [1,4,7]
    
  }
  if(dddd[2] === c && dddd[5] === c && dddd[8] === c) {
    return [2,5,8]
    
  }
  if(dddd[0] === c && dddd[4] === c && dddd[8] === c) {
    return [0,4,8]
  }
  if(dddd[2] === c && dddd[4] === c && dddd[6] === c) {
    return [2,4,6]
    
  }
  

}
handleClick = (pos)=>{
  if(this.state.finish) return;
  let dddd = [...this.state.dddd]
  if(dddd[pos] !== null) return
  dddd[pos] = this.state.turn === true ? 'X': 'O';
  this.setState({dddd})
  
  let ar = this.checkwinner(dddd)
  if(ar)
  {   
      const winner = this.state.turn ? 'X is winner' : 'O is winner';
      this.handlemsg(winner, ar)
      return;
  }
 
let index =  dddd.findIndex((val) => {
      return val === null
  })
  if(index === -1){
      this.handlemsg("Tie")
      return
  }
  
      let msg = "Next Player is ";
      this.state.turn ? msg+='O':msg+='X';
      
  this.setState({dddd:dddd, turn : !this.state.turn, msg})
  
  }
  handlemsg = (msg, ar)=>{
    if(ar)
    this.setState({msg, finish:true,winpos:ar})
    else 
    this.setState({msg, finish:true})
    
  }
  reset = () =>{
    this.setState({
      dddd: Array(9).fill(null),
      turn: true,
      finish: false,
      msg: "Next Player is X",
      winpos : [null,null,null]
    })
  }
  render() {
    const {msg} = this.state
    return (
        <div className = "app">
          
          TIC TOC TOE
          <h1> {msg}</h1>
        <Board 
        handlemsg = {this.handlemsg}
        dddd = {this.state.dddd}
        finish = {this.state.finish}
        handleClick = {this.handleClick}
        winpos  = {this.state.winpos}
        />
        <button 
        style = {{marginTop: 20,backgroundColor:"green" ,color:"white"}}
        onClick ={this.reset} >ReStart</button>
      </div>
    );
  }
}

export default App;
