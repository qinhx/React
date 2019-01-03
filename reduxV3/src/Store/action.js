import * as ActionTypes from './actionType'
export const increment = ()=>{
    return {
        type:ActionTypes.INCREMENT
    }
}
export const decrement = ()=>{
    return {
        type:ActionTypes.DECREMENT
    }
}