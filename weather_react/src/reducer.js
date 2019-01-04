import * as ActionTypes from './actionTypes'
import * as Status from './status'
export default(state=[Status.Loading],action)=>{
    switch (action.type){
        case ActionTypes.FETCH_STARTED:
            return {status:Status.Loading}
        case ActionTypes.FETCH_SUCCESS:
            return {...state,status:Status.Success,...action.result}
        case ActionTypes.FETCH_FAIL:
            return {status:Status.Fail}
        
        default:
            return state
    }
}