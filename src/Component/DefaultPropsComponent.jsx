import React from 'react';
import PropTypes from 'prop-types';

class DefaultPropsComponent extends React.Component{
    render(){
        let message1 ='';
        if(this.props.boolValue ===false){
            message1 = 'boolValue의 기본값은 false';
        }
        let message2 = '';
        if(this.props.boolValueWithoutDefault ===false){
            message2 = 'boolValueWithoutDefault의 기본값은 false';
        }
        return(
            <div className='message-container'>
                {message1}<br />
                {message2}
            </div>
        );
    }
}
DefaultPropsComponent.propTypes = {
    boolValue: PropTypes.bool,
    boolValueWithoutDefault : PropTypes.bool,
};

DefaultPropsComponent.defaultProps = {
    boolValue: false,
    boolValueWithoutDefault: false,
};

export default DefaultPropsComponent;