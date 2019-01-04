import React from 'react'
import {toggleTodo,removeTodo} from '../action'
import PropTypes from 'prop-types'
import {connect} from 'react-redux';
import TodoItem from './TodoItem'
import {FilterTypes} from '../../constants'
const TodoList = ({todos,onToggle,onRemove})=>{
        return(
            <ul className="item-list">{
                todos.map((item)=>{
                    return (<TodoItem
                    onToggle={()=>{
                        onToggle(item.id)
                    }}
                    onRemove={()=>{
                        onRemove(item.id)
                    }}
                    completed={item.completed}
                    text={item.text}/>)
                })
            }
            </ul>
        )
}
TodoList.PropTypes = {
    todos:PropTypes.array.isRequired
}
const mapDispatchToProps = (dispatch)=>{
    return {
        onToggle:(id)=>{
            dispatch(toggleTodo(id))
        },
        onRemove:(id)=>{
            dispatch(removeTodo(id))
        }
    }
}
const slectVisibleTodos = (todos,filter)=>{
    switch(filter){
        case FilterTypes.ALL:
            return todos
        case FilterTypes.COMPLETED:
            return todos.filter(item=>item.completed)
        case FilterTypes.UNCOMPLETED:
            return todos.filter(item=>!item.completed)
        default:
            return todos
    }
}
const mapStateToProps = (state)=>{
    return{
        todos:slectVisibleTodos(state.todos,state.filter)
    }
}
export default connect(mapStateToProps,mapDispatchToProps)(TodoList);