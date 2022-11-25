import React, {Component} from 'react';
import PropTypes from 'prop-types';

class ChildApp extends Component{
    render(){
        const { boolVal, numVal, arrVal, nodeVal, obVal} = this.props;
        return(
          <div className='ChildApp'>
            {/* 값이 문자열이 아니면 중괄호를 사용 */}
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
    // 안쓴다고 오류나지 않음.
    // 파라미터로 들어올때 잘못된 값이 들어오는 확인하기 위해 설정함.
    boolVal: PropTypes.bool,
    numVal: PropTypes.number,
    arrVal: PropTypes.arrayOf(PropTypes.number),
    nodeVal: PropTypes.node,
    obVal: PropTypes.object
}
export default ChildApp;