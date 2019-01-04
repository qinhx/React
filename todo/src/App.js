import React, { Component } from 'react'
import {todos as Todos} from './todo'
import {filterList as FilterList} from './filter'
class App  extends Component{
    
    render(){
        return(
            <div>
                <Todos/>
                <FilterList/>
            </div>
        )
    }
}
export default App