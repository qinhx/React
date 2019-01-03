import React,{Component} from 'react'
import store from '../Store/Store'
import * as Actions from '../Store/action'
import CountItem from './CountItem'
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
        return(
            <CountItem onIncrement={this.onIncrement} onDecrement={this.onDerement} value={this.state.value}></CountItem>
        )
    }
}
export default Counter;