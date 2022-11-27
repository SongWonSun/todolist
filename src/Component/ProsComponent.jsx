import React from 'react';
import PropTypes from 'prop-types';

class ProsComponent extends React.Component{
    render(){
        return(
            <div className='message-container'>
                {this.props.name}
            </div>
        );
    }
}
ProsComponent.prop = {
    name : PropTypes.string
}
export default ProsComponent;