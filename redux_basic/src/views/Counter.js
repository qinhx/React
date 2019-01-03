import React,{Component} from 'react'
import store from '../Store/Store'
import * as Actions from '../Store/action'
class Counter extends Component{
    constructor(props){
        super(props);
        this.state = this.getCounterState()
        this.onDerement = this.onDerement.bind(this)
        this.onIncrement = this.onIncrement.bind(this)
        this.onChange = this.onChange.bind(this)
    }
    getCounterState(){
        return store.getState()
        
    }
    onIncrement(){
        store.dispatch(Actions.increment())
    }
    onDerement(){
        store.dispatch(Actions.decrement())
    }
    onChange(){
        this.setState(this.getCounterState())
    }
    componentDidMount(){
        store.subscribe(this.onChange)
    }
    componentWillUnmount(){
        store.unsubscribe(this.onChange)
    }
    render(){
        const value = this.state.value;
        return(
            <div>
               <button onClick={this.onIncrement}>ADD</button>
               <button onClick={this.onDerement}>REDUCE</button> 
               <hr/>
               <span>{value}</span>
            </div>
        )
    }
}
export default Counter;