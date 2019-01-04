import React, { Component } from 'react'
import PropTypes from 'prop-types'
import {addTodo} from '../action'
import {connect} from 'react-redux'
class AddTodo extends Component{
    constructor(props,context){
        super(props,context)
        this.onSubmit = this.onSubmit.bind(this)
        this.refInput = this.refInput.bind(this)
    }
    onSubmit(ev){
        ev.preventDefault();
        const input = this.input;
        if(!input.value.trim()){
            return
        }
        this.props.onAdd(input.value)
        input.value=''
    }
    refInput(node){
        this.input=node
    }
    render(){
        return(
            <div className='AddTodo'>
                <form onSubmit={this.onSubmit}>
                    <input className="new-todo" ref={this.refInput}/>
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