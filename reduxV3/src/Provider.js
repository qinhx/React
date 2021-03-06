import { PropTypes,Component } from 'react'
export default class Provider extends Component{
    getChildContext(){
        return {
            store:this.props.store
        }
    }
    render(){
        return this.props.children;
    }
}
Provider.childContextTypes = {
    store:PropTypes.object
}
Provider.prototypes = {
    store:PropTypes.object.isRequired
}