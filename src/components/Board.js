import React, { Component } from 'react';
import Square from './Square'
class Board extends Component {
    
    state = {
        dddd: Array(9).fill(null),
        turn: true,
        finish: false,
        btnclicked: false,
        click: true
        
    }
    renderSquare = (pos) => {
        return(
    <Square 
    pos = {pos}
    value = { this.state.dddd[pos] } 
    onClick = {this.handleClick}/>
        )}
    handleClick = (pos)=>{
    if(this.state.finish) return;
    let dddd = [...this.state.dddd]
    if(dddd[pos] !== null) return
    dddd[pos] = this.state.turn === true ? 'X': 'O';
    let turn = !this.state.turn
    this.setState({dddd, turn})
    }
    checkwinner(){

        const c = this.state.turn ? 'O': 'X';
        let dddd = [...this.state.dddd]
        if(dddd[0] === c && dddd[1] === c && dddd[2] === c) return true;
        if(dddd[3] === c && dddd[4] === c && dddd[5] === c) return true;
        if(dddd[6] === c && dddd[7] === c && dddd[8] === c) return true;
        if(dddd[0] === c && dddd[3] === c && dddd[6] === c) return true;
        if(dddd[1] === c && dddd[4] === c && dddd[7] === c) return true;
        if(dddd[2] === c && dddd[5] === c && dddd[8] === c) return true;
        if(dddd[0] === c && dddd[4] === c && dddd[8] === c) return true;
        if(dddd[2] === c && dddd[4] === c && dddd[6] === c) return true;
        return false;
        

    }
    componentDidUpdate(){
        
        if(this.state.finish || this.state.turn ===this.state.click) return;
        if(this.checkwinner())
        {   
            const winner = this.state.turn ? 'O is winner' : 'X is winner';
            this.props.handlemsg(winner)
            this.setState({finish: true})
            return;
        }
        let dddd = [...this.state.dddd]
      let index =  dddd.findIndex((val) => {
            return val === null
        })
        if(index === -1){
            this.props.handlemsg("Tie")
            this.setState({finish: true})
        }
        else{
            let msg = "Next Player is ";
            this.state.turn ? msg+='X':msg+='O';
            this.setState({click : this.state.turn})
            this.props.handlemsg(msg)
        }
    }
    render() { 
        
        return ( 
            <div className = "board">
                <div className = "board-row">
                    {this.renderSquare(0) }
                    {this.renderSquare(1)}
                    {this.renderSquare(2)}
                </div>
                <div className = "board-row">
                    {this.renderSquare(3) }
                    {this.renderSquare(4)}
                    {this.renderSquare(5)}
                </div>
                <div className = "board-row">
                    {this.renderSquare(6) }
                    {this.renderSquare(7)}
                    {this.renderSquare(8)}
                </div>

            </div>
         );
    }
}
 
export default Board;