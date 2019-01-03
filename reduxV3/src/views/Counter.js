import React,{PropTypes,Component} from 'react'
import * as Actions from '../Store/action'
import CountItem from './CountItem'
class Counter extends Component{
    static contextTypes = {
        store: PropTypes.object,
    };
    constructor(props,context){
        super(props,context);
        this.state = this.getCounterState()
        this.onDerement = this.onDerement.bind(this)
        this.onIncrement = this.onIncrement.bind(this)
        this.onChange = this.onChange.bind(this)
    }
    getCounterState(){
        return this.context.store.getState()
    }
    onIncrement(){
        this.context.store.dispatch(Actions.increment())
    }
    onDerement(){
        this.context.store.dispatch(Actions.decrement())
    }
    onChange(){
        this.setState(this.getCounterState())
    }
    componentDidMount(){
        this.context.store.subscribe(this.onChange)
    }
    componentWillUnmount(){
        this.context.store.unsubscribe(this.onChange)
    }
    render(){
        return(
            <CountItem onIncrement={this.onIncrement} onDecrement={this.onDerement} value={this.state.value}></CountItem>
        )
    }
}
export default Counter;