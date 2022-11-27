import React from 'react';
import PropTypes from 'prop-types';


class ChildComponent3 extends React.Component{
    render(){
        const{
            objValue, requiredStringValue,
        } =this.props;
        return(
            <>
            <div>객체값: {String(Object.entries(objValue))}</div>
            <div>필수값: {requiredStringValue}</div>
            </>
        );
    }
}

ChildComponent3.propTypes ={
    objValue: PropTypes.shape({
        name: PropTypes.string,
        age: PropTypes.number,
    }),
    requiredStringValue: PropTypes.string.isRequired,
}
export default ChildComponent3;