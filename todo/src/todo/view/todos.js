import React, { Component } from 'react'
import AddTodo from './AddTodo'
import TodoList from './TodoList'
class Todos extends Component{
    render(){
        return(
            <div className='Todos'>
                <AddTodo/>
                <TodoList/>
            </div>
        )
    }
}
export default Todos;