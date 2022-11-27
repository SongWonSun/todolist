import React from 'react'
class Count extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            count : props.count,
        };
        this.increaseCount = this.increaseCount.bind(this);
    }
    increaseCount(){
        this.setState(({count}) =>({
                count: count+1
            }));
    }
    render(){
        return(
            <div>
                Count 현재 카운트: {this.state.count}
                <button
                    onClick={this.increaseCount}
                > 
                카운트 증가
                </button>
            </div>
        );
    }
}
export default Count;