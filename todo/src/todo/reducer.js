import {ADD_TODO,TOGGLE_TODO,REMOVE_TODO} from './actionType'
export default(state=[],action)=>{
    switch(action.type){
        case ADD_TODO:
            return [
                {
                    id:action.id,
                    text:action.text,
                    completed:false
                },
                ...state
            ];
        case TOGGLE_TODO:
            return state.map((todoItem)=>{
                if(todoItem.id === action.id){
                    return {...todoItem,completed:!todoItem.completed}
                }else{
                    return todoItem
                }
            });
        case REMOVE_TODO:
            return state.filter((item)=>{
                return item.id !== action.id
            })
        default :   
            return state
    }
}