import React from 'react'
import {connect} from 'react-redux'
import setFilter from '../action'
const Link = ({active,children,onClick})=>{
    if(active) return(<b className="filter selected">{children}</b>)
    else{
        return(
            <a href="#" className="filter note-selected" onClick={(ev)=>{
                    ev.preventDefault();
                    onClick();
            }}>{children}</a>
        )
    }
}
const mapStateToProps = (state,ownProps)=>{
    return{
        active:state.filter === ownProps.filter
    }
}
const mapDispatchToProps=(dispatch,ownProps)=>({
    onClick: () => {
        dispatch(setFilter(ownProps.filter));
      }
})
export default connect(mapStateToProps,mapDispatchToProps)(Link)