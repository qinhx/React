import { createStore, combineReducers } from 'redux'
import { reducer as todoReducer } from './todo'
import { reducer as filterReducer } from './filter'
const Reducer = combineReducers({
    todos:todoReducer,
    filter:filterReducer
})
export default createStore(Reducer);
