import React from 'react';
import PropTypes from 'prop-types';

class ChildComponent2 extends React.Component{
    render(){
        const{
            objValue,
        } = this.props;
        return(
            <div>
                객체값: {String(Object.entries(objValue))}
            </div>
        );

    }
}
ChildComponent2.propTypes = {
    objValue : PropTypes.shape({
         name : PropTypes.string,
         age: PropTypes.number,
    }),
}

export default ChildComponent2;