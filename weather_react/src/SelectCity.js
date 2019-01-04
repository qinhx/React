import React, { Component } from 'react'
import PropTypes from 'prop-types'
import * as Actions from './action'
const CITY_CODES = {
    '北京': 101010100,
    '上海': 101020100,
    '广州': 101280101,
    '深圳': 101280601
  };

class SelectCity extends Component{
    constructor(){
        super(...arguments)
        this.onChange = this.onChange.bind(this)
    }
    onChange(ev){
        const cityCode = ev.target.value;
        this.props.onSelectCity(cityCode)
    }
    componentDidMount(){
        const defaultCode = Object.keys(CITY_CODES)[0]
        this.props.onSelectCity(CITY_CODES[defaultCode])
    }
    render(){
        return(
            <select onChange={this.onChange}>
                {
                    Object.keys.map(name=>(
                        <option key={name} value={CITY_CODES[name]}>{name}</option>
                    ))
                }
            </select>
        )
    }
}
const mapDispatchToProps = (dispatch)=>{
    return{
        onSelectCity:()
    }
}