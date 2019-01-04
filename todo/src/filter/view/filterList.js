import React, { Component } from 'react'
import Link from './Link'
import {FilterTypes} from '../../constants'
class FilterList extends Component{
    render(){
        return(
            <p className="FilterList">
                <Link filter={FilterTypes.ALL}>{FilterTypes.ALL}</Link>
                <Link filter={FilterTypes.COMPLETED}>{FilterTypes.COMPLETED}</Link>
                <Link filter={FilterTypes.UNCOMPLETED}>{FilterTypes.UNCOMPLETED}</Link>
            </p>
        )
    }
}
export default FilterList
