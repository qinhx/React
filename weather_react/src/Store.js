import thunkMiddleware from 'redux-thunk'
import {createStore, combineReducers, applyMiddleware, compose} from 'redux';
import Wreducer from './reducer' 
 
const reducer = combineReducers({
    weather:Wreducer
})
const middleware=[thunkMiddleware]
const storeEnchancers = compose(
    applyMiddleware(...middleware)
)
export default createStore(reducer,{},storeEnchancers)