import React, { Component } from 'react'
class CountItem extends Component{
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
export default CountItem;