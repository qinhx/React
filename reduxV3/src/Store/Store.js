import {createStore} from 'redux'
import reducer from './Reducer'
const initvalue = {
    value:10
}
export default createStore(reducer,initvalue);