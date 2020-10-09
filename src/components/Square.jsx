import React, { Component } from 'react';
class Square extends Component {
   
    render() {
        const {onClick }  = this.props 
        const {value, pos} = this.props
        return ( 
            <button
            className = "square" 
            type = "button"
            onClick = { () => { onClick(pos) } }>{value }
            </button>
         );
    }
}
 
export default Square;