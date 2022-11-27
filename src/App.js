// import logo from './logo.svg';
// import './App.css';
import React, {Component} from 'react';
import Count from './Component/Count';
import NewCounter from './Component/NewCounter';
// import LifecycleExample from './Component/LifecycleExample';
// import ForceUpdateExample from './Component/ForceUpdateExample';
// import StateExample from './Component/StateExample';
// import ChildProperty from './Component/ChildProperty';
// import DefaultPropsComponent from './Component/DefaultPropsComponent';
// import ChildComponent2 from './Component/ChildComponent2';
// import ChildComponent3 from './Component/ChildComponent3';
// import BooleanComponent from './BooleanComponent';
// import ProsComponent from './ProsComponent';
// import MyComponent from './MyComponent';

// function App(){
//   let a= 1;
//   let b = 5;
//   let obj = {a,b};
//   let addstr = 'Id';
//   let obj2 = {['one'+ addstr] : '키 이름 변경하기'};
//   let obj3 = {
//     obj2,
//     md1 : function(a,b){return `md1메소드 실행: ${a+b}`;},
//     md2(){return "md2메소드 실행";}
//   }
//   return(
//     <div className="App">
//        <div className="black-nav">
//          <div>객체확장 표현</div>
//        </div><br />
//        obj객체 확장 표현값: {obj.a}, {obj.b}<br />
//        obj2객체의 요소 값: {obj2['one'+addstr]}<br />
//        obj3객체의 md1(): {obj3.md1(5,3)}<br />
//        obj3객체의 md2(): {obj3.md2()}<br />
//        obj3객체의 obj2객체의 요소 값: {obj3.obj2['one'+addstr]}<br />
//     </div>
//   );
// }

// function App(){
//   let a = [1,2]; // eslint-disable-line no-unused-vars
//   let [i1, i2=7, i3=5] = a; // eslint-disable-line no-unused-vars
//   let [b,c] = [[5, 10], [3,9]];

//   console.log(typeof a);
//   let obj = {k1: 'one', k2: 'two'};
//   // let obj = {k1: 'one', k2:'two', k3:'hahaha'};
//   let { k1:nkey, k2, k3='k3값'} = obj;

//   let [it1, ...ods] = [0,1,2];
//   let {y1, ...others} = {y1: 'x', x2: 'y', x3: 'z'};
//   return(
//     <div className="App">
//        <div className="black-nav">
//          <div>구조분해할당</div>
//        </div><br />
//        a: {a}
//        i1: {i1}<br />
//        i2: {i2}<br />
//        i3: {i3}<br />
//        [b,c]: {b} {c}<br />
//        [b,c]: {b[0]} {b[1]} {c[0]} {c[1]}<hr />
//        obj.k1, obj.k2, obj.k3: {obj.k1} {obj.k2} {obj.k3}<br />
//        nkey: {nkey}<br />
//        k2: {k2}<br />
//        k3: {k3}<hr />
//        it1: {it1}, ods[0]: {ods[0]}, ods[1]: {ods[1]}<br />
//        y1: {y1}, others.x2: {others.x2}, others.x3: {others.x3}<br />
//     </div>
//   );
// }

// let arr = [1,2,3]; // eslint-disable-line no-unused-vars
// let res1 =[]; // eslint-disable-line no-unused-vars
// arr.forEach(function(v,i,a){ 
//  console.log(`1번째 arr[${i}]번째 아이템값은 : ${v} 현재배열값 : ${a}`);
//  res1[i] = v+1;
// });
// let res2 = [];
// // arr.map((v, i, a) => { 
// //   console.log(`2번째 arr[${i}]번째 아이템값은 : ${v+i} 현재배열값 : ${a}`);
// //   res2[i] = v+i;
// // });
// arr.forEach((v, i, a) => { 
//   console.log(`2번째 arr[${i}]번째 아이템값은 : ${v+i} 현재배열값 : ${a}`);
//   res2[i] = v+i;
// });
// console.log("arr객체 값");
// console.log(arr);

// console.log("res1객체 값");
// console.log(res1);

// console.log("res2객체 값");
// console.log(res2);

// function App(){
//   return(
//     <div className="App">
//       <div className="black-nav">
//         <div>map() 함수</div>
//       </div><br />
//     </div>
//   );
// }


// function App(){
//   if('0'){
//     console.log("aa");
//   }else{
//     console.log("bb");
//   }
  
//   let [a, b] = useState(["아이디를 입력하세요", "비밀번호를 입력하세요"]);

//   let [cnt, cntchk] = useState(0);
//   let st = {color: 'red', fontSize: '20pt', cursor: 'pointer'};
//   let[htitle, htitlefnc] = useState(['수난이대', '김약국의 딸들', '태백산맥']);
//   let[modal, setModal] = useState(0);

//   return(
//     <div className="App">
//       <h2>onClick이벤트와 State</h2>
//       <input type='text' id='id' placeholder={a[0]}/>
//       <input type='text' id='pw' placeholder={a[1]}/>
//       <button onClick={() => b([$('#id').val(), $('#pw').val()]) }>클릭</button><br /><br />
//       {`아이디: ${a[0]} / 비번: ${a[1]}`}<br /><hr />
//       <span style={st} onClick={ () => cntchk(++cnt)}>♥ 좋아요 {cnt}개</span><br /><br /><hr />
//       <button onClick={() =>{
//         let copy = [...htitle];
//         copy.sort();
//         htitlefnc(copy);
//       }}>클릭</button><br /><hr />
//       {htitle.join(", ")}
//       <br /><br />
//       <button onClick={() => setModal(!modal)}>모달창 제어</button>
//       {
//         modal === true ? <Modal modaltest ={htitle.join("/ ")} /> : null
//       }
//     </div>
//   );
// }
// function Modal(props){
//   return(
//     <div className='modal'>
//       <h3>모달창 띄우기(상세보기)</h3><br /><hr />
//       {props.modaltest}
//     </div>
//   );
// }
// class App extends Component{
//   render(){
//     return(
      
//         <div className="App">
//           <div className="black-nav">
//             <div>라이브러리 의존성 관리</div>
//           </div><br />
//           <UserJquery />
//         </div>
//     );
//   }
// }

// class App extends Component{
//   render(){
//     return(
//       <div className='body'>
//         <MyComponent name="messsage"/>
//       </div>
//     );
//   }
// }


// class App extends Component{
//   render(){
//     return(
//       <div className='body'>
//         <ProsComponent name="리액트테스트문장"/>
//       </div>
//     );
//   }
// }

// class App extends Component{
//   render(){
//     return(
//       <div className='body'>
//         <BooleanComponent bored/>
//         <BooleanComponent />
//       </div>
//     );
//   }
// }

// class App extends Component{
//   render(){
//     return(
//       <div>
//         <ChildComponent2
//           objValue={{name:'송원선',age: 20}}
//         />
//       </div>
//     );
//   }
// }

// const test = {age:20};
// class App extends Component{
//   render(){
//     return(
//       <div>
//         <ChildComponent3
//           objValue={test}
//           requiredStringValue="필수"
//         />
//       </div>
//     );
//   }
// }

// class App extends Component{
//     render(){
//       return(
//         <div>
//           <DefaultPropsComponent />
//         </div>
//       );
//     }
// }

// class App extends Component{
//   render(){
//     return(
//       <div>
//         {/* <ChildProperty>
//           <div><span>자식노드</span></div>
//         </ChildProperty> */}
//         <ChildProperty children={<div><span>자식노드</span></div>}/>
//       </div>
//     );
//   }
// }

// class App extends Component{
//   render(){
//     return(
//       <div>
//         <StateExample />
//       </div>
//     );
//   }
// }
// class App extends Component{
//   render(){
//     return(
//       <div>
//         {/* <ForceUpdateExample /> */}
//         <Count />
//       </div>
//     );
//   }
// }

// class App extends Component{
//   render(){
//     return(
//       <div>
//         <LifecycleExample />
//       </div>
//     );
//   }
// }
class App extends Component{
  constructor(props){
    super(props);
    this.state = {count: 10};
    this.resetCount = this.resetCount.bind(this);
  }
  resetCount(){
    this.setState( ({count}) => ({ count: count+10}));
  }
  render(){
    return(
      <div>
        <div><Count count={this.state.count} /></div>
        <div><NewCounter count={this.state.count} /></div>
        <button onClick={this.resetCount}>{this.state.count + 10}으로 초기화</button>
      </div>
    );
  }
}

export default App;
