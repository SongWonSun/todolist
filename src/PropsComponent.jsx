// import React, {Component} from 'react';
// import PropTypes from 'prop-types';

//함수형 컴포넌트 선언
// 펑션형은 this가 없음 => props를 이용해 매개변수 가져오는 this가 없어서 this사용을 못함 
// 펑션함수는 자식에서 PropsComponent를 쓸 수 없기때문에 자기자신에서 PropsComponent (pro)이렇게 해결함.
function PropsComponent(pro){
        return(
            <div className="message-container">
                {pro.test}
                {pro.str}
            </div>
        )
}

// class PropsComponent extends Component{
//     render(){
//         return(
//             <div className="message-container">
//                 {this.props.test}
//                 {this.props.str}
//             </div>
//         );
//     }
// }

// PropsComponent.propTypes = {
//     test : PropTypes.string,
//     str : PropTypes.string,
// };
export default PropsComponent;