import React, {Component}from 'react';
import PropTypes from 'prop-types';

class ChildApp extends Component{
    redner(){
        const { boolVal, numVal, arrval, nodeVal, obVal} = this.props;
        return(
          <div className='ChildApp'>
            <span>불리언값: {boolVal}</span>
            <span>숫자형값: {numVal}</span>
            <span>배열형값: {arrVal}</span>
            <span>노드형값: {nodeVal}</span>
            <span>객체형값: {obVal.k}</span>
          </div>
        );
    }
}

ChildApp.propTypes={
    boolVal: PropTypes.bool,
    numVal: PropTypes.number,
    arrVal: PropTypes.arrayOf(PropTypes.number),
    nodeVal: PropTypes.node,
    obVal: PropTypes.object
}
export default ChildApp;