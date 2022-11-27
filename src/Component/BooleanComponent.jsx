import React from 'react';

class BooleanComponent extends React.Component{
    render(){
        const message = this.props.bored ? 'a' : 'b';
        return(
            <div className='message-container'>
                {message}
            </div>
        );
    }
}
export default  BooleanComponent;