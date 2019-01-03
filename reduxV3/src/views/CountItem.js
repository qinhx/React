import React, { Component } from 'react'
export default class CountItem extends Component{
    render(){
        const {onIncrement,onDecrement,value} = this.props;
        return(
            <div>
                <button onClick={onIncrement}>+</button>
                <button onClick={onDecrement}>-</button>
                <span>{value}</span>
            </div>
        )
    }
}
 