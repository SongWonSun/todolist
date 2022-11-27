import {Component} from 'react'
class MyComponent extends Component{
    render(){
        const name = this.props.name;
        return <span>{name}</span>
    }
}


export default MyComponent;