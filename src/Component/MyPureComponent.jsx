import React from 'react';
class MyPureComponent extends React.Component{
    componentDidUpdate(){console.log('MyPureComponent 새로고침');}
    render(){
        console.log('MyPure render');
        return null;
    }
} 
export default MyPureComponent;