import React,{Component} from 'react'
export default class Btn extends Component{
    constructor(props){
        super(props)
        this.state = {
            num:0
        }
        this.handleClick = this.handleClick.bind(this)
    };
    handleClick(event){
        event.stopPropagation()
        var count = this.state.num;
        count++;
        this.setState({
            num:count
        })
    }
    render(){
        return (
            <div>
                <i>Click Times :{this.state.num}</i>
                <button onClick = {this.handleClick}>Click Me</button>
            </div>
        )
    }
}