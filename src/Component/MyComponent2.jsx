import React from 'react';
class MyComponent2 extends React.Component{
    componentDidUpdate(){console.log('MyComponent 새로고침');}
    render(){
        console.log('MyComponent2 render');
        return null;
    }
}
export default MyComponent2;