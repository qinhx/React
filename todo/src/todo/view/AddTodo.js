import React, { Component } from 'react'
import PropTypes from 'prop-types'
import {addTodo} from '../action'
import {connect} from 'react-redux'
class AddTodo extends Component{
    constructor(props,context){
        super(props,context)
        this.onSubmit = this.onSubmit.bind(this)
        this.refInput = this.refInput.bind(this)
        this.state = {
            value:''
        }
        this.onInputChange = this.onInputChange.bind(this)
    }
    onInputChange(event){
        this.setState({
            value:event.target.value
        })
    }
    onSubmit(ev){
        ev.preventDefault();
        const input = this.state.value;
        if(!input.trim()){
            return;
        }
        this.props.onAdd(input)
        this.setState({
            value:''
        })
    }
    refInput(node){
        this.input=node
    }
    render(){
        return(
            <div className='AddTodo'>
                <form onSubmit={this.onSubmit}>
                    <input className="new-todo" onChange={this.onInputChange} value={this.state.value}/>
                    <button className="add-btn" type="submit">添加</button>
                </form>
            </div>
        )
    }
}
const mapDispatchToProps = (dispatch)=>{
    return {
        onAdd:(text)=>{
            dispatch(addTodo(text))
        }
    }
}
AddTodo.PropTypes = {
    onAdd:PropTypes.func.isRequired
}
export default connect(null,mapDispatchToProps)(AddTodo);