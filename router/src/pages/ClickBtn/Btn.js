import React,{Component} from 'react'
export default class Btn extends Component{
    constructor(props){
        super(props)
        this.state = {
            num:0
        }
        this.onClickDecrementButton = this.onClickDecrementButton.bind(this)
        this.onClickIncrementButton = this.onClickIncrementButton.bind(this)
    };
    onClickIncrementButton(){
        this.updateCountDev(true)
    }
    onClickDecrementButton(){
        this.updateCountDev(false)
    }
    updateCountDev(IsIncrement){
        const previousData = this.state.num;
        const newvalue = IsIncrement ? previousData+1 : previousData-1
        this.setState({
            num: newvalue
        })
        this.props.updateCount(newvalue - previousData)
    }

    render(){
        return (
            <div>
                <p>{this.state.num}</p>
                <button onClick = {this.onClickDecrementButton}>-</button>
                <button onClick = {this.onClickIncrementButton}>+</button>
            </div>
        )
    }
}