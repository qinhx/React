import * as ActionTpyes from './actionType'
export default (state,action)=>{
    switch (action.type){
        case ActionTpyes.INCREMENT :
            return{
                ...state,
                value:state['value']+1
            };
        case ActionTpyes.DECREMENT :
            return {
                ...state,
                value:state['value']-1
            };
        default:
            return state
    }
}
