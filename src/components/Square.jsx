import React, { Component } from 'react';
class Square extends Component {
   
    render() {
        const {onClick }  = this.props 
        const {value, pos,winpos} = this.props
        return ( 
            <button
            className = "square" 
            type = "button"
            style = { winpos.findIndex( (x) => { return x==pos  }) === -1 ? {} : {color:"red"}  }
            onClick = { () => { onClick(pos) } }>{value }
            </button>
         );
    }
}
 
export default Square;