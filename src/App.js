// import logo from './logo.svg';
// import roomhaha from './img/room.jpg';
import './App.css';
import $ from 'jquery';
// // 함수형 컴포넌트 App
// function App() {
//   let str = "내가 해야할 일";
//   let cnm = "hStyle";
//   //태그로 이용하는것
//   let imgStyle ={width: '200px', height:'200px', borderRadius:'5px', border: '1px solid #4545'};

//   function btn(){
//     return "클릭버튼";
//   }

//   return(
//     <div className="App">
//       <div className="black-nav">
//         <div>Todo 리스트</div>
//       </div>
//       <h4 className={cnm}>{str}</h4>
//       <img src={roomhaha} style={imgStyle} />
//       {/* {<img src={logo} style={{width: '200px', height: '200px', borderRadius: '5px', border: '1px solid #4545'}} />} */}
//     </div>
//   );
  
// }

// function App(){
//   // 템플릿 문자열 : ` (백틱)과 ${}를 이용하여 문자열을 결합시키는 방식
//   let str1 = '안녕~ ';
//   let str2 = '리액트!!!';
//   let strconcat = `${str1} ${str2}`;

//   let pobj = {fruit: '사과', price: '1,200원'};
//   let pstr = `${pobj.fruit}의 가격은 ${pobj.price}입니다.`;

//   let lnum = 5;
//   let rnum = 7;
//   let mul = `${lnum} X ${rnum} = ${lnum * rnum}`;

//   let bl = false;
//   let opr = `bl변수의 값은 '${bl ? '참' : '거짓'}'입니다.`;

//   return (
//     <div className="App">
//       <div className="black-nav">
//         <div>템플릿문자열</div>
//       </div><br />
//       {strconcat}<br />
//       {pstr}<br />
//       {mul}<br />
//       {opr}<br />
//     </div>
//   );
// }

// let arr1 = ['one', 'two'];
// let arr2 = ['three', 'four'];
// // let arr2 = [, 'four'];
// let arrconcat = [arr1, arr2]; // [['one','two'], ['three', 'four']];
// let arrconcat2 = [...arr1, ...arr2, 'hahaha']; // ...arr1 => 펼쳐서 보여줘라 // ['one', 'two', 'three', 'four', 'hahaha']
// let [a, b, c = 5, ...etc] = arrconcat2; // c=5 => 변수값에 값이 있으면 그값으로 없으면 5로 표시함
//       // arrconcat2[one,two,three,four,hahaha]

// let obj1 = {ft: 1, sd: 2, od: 3};
// let obj2 = {te: 4, fh: 5, od: -1};

// //{} 중괄호는 중복값이 있으면 없앰 중복값이 있으면 뒤에 값으로 표시
// // ft: 1, sd: 2, od: 3 te: 4, fh: 5, od: -1 => od가 같은 값으로 있어서 od: -1이 설정됨
// let com1 = Object.assign({}, obj1, obj2); 
// let com2 = Object.assign({}, obj2, obj1);
// console.log("obj1: ");
// console.log(obj1);
// console.log("obj2: ");
// console.log(obj2);
// console.log("com1: ");
// console.log(com1);
// console.log("com2: ");
// console.log(com2);
// console.log("obj1: ");
// console.log(obj1);
// console.log("obj2: ");
// console.log(obj2);
// console.log("=====================");
// console.log("obj2: ");
// console.log(obj2);
// console.log("=====================");
// //let obj1 = {ft: 1, sd: 2, od: 3};
// //let obj2 = {te: 4, fh: 5, od: -1};
// // 중괄호가 없으면 중복값을 뒤에있던 값으로 수정하면서 원래있던 값도 변경함
// //com3 = {te: 4, fh: 5, , od: 3 , ft: 1, sd: 2}, obj2 = {te: 4, fh: 5, , od: 3 , ft: 1, sd: 2}
// let com3 = Object.assign(obj2, obj1);
// let abc = "aa";
// console.log("obj1: ");
// console.log(obj1);
// console.log("obj2: ");
// console.log(obj2);
// console.log("com3: ");
// console.log(com3);

// function App(){
//   return(
//     <div className="App">
//       <div className="black-nav">
//         <div>전개 연산자</div>
//       </div><br />
//     {arrconcat}<br />
//     {arrconcat[0]}<br />
//     {arrconcat[1]}<br />
//     {arrconcat2}<br />
//     {arrconcat2[0]}<br />
//     {arrconcat2[1]}<br /><hr />
//     {a}, {b}, {c}, {etc}, {etc[0]}, {etc[1]}<br />
//     {com3.fh}<br />
//     {abc}<br />
//     </div>
//   );
// }
// function App(){
//   let sum = (a,b) => a+b;
//   function sum1(a,b){
//     return a+b;
//   }
//   const addAndMultiple = (a,b) => ({
//     add : a+b,
//     mul : a*b
//   });

//   function addAndMul(a,b){
//     return {add: a+b, mul: a*b};
//   }

//   return (
//     <div className="App">
//       <div className="black-nav">
//         <div>화살표 함수</div>
//       </div><br />
//       {sum(5,2)}<br />
//       {sum1(9,7)}<br />
//       {addAndMultiple(3,3).add}, {addAndMultiple(3,3).mul}<br />
//       {addAndMul(5,3).add}, {addAndMul(5,3).mul}<br />
//     </div>
//   );
// }
// function App(){
//   let a = 1;
//   let b = 5;
//   let obj = { a, b}; // { a : a, b : b} => 오브젝트는 key : value 인데 key: value 표시가없으면 확장시켜서 표시
//   let addstr = 'Id';
//   let obj2 = {['one'+ addstr] : '키 이름 변경하기'};
//   let obj3 = {
//     obj2,
//     md1 : function(a,b){return `md1메소드 실행: ${a+b}`;},
//     md2(){return "md2메소드 실행";}
//   };
//   // let obj3 = {
//   //   obj2,
//   //   md1(){return "md1메소드 실행";},
//   //   md2(){return "md2메소드 실행";}
//   // };
//   return (
//     <div className="App">
//       <div className="black-nav">
//         <div>객체확장 표현</div>
//       </div><br />
//       obj객체 확장 표현값: {obj.a}, {obj.b}<br />
//       obj2객체의 요소 값: {obj2['one' + addstr]}<br />
//       obj3객체의 md1(): {obj3.md1(5,3)}<br />
//       obj3객체의 md2(): {obj3.md2()}<br />
//       obj3객체의 obj2객체의 요소 값: {obj3.obj2['one'+addstr]}<br />
//     </div>
//   );
// }

// function App(){
//   let a = [1, 2];
//   let [i1, i2=7, i3=5] = a; //[1, 2]

//   let [b,c] = [[5, 10], [3, 9]];

//   let obj = {k1: 'one', k2: 'two'};
//   // let obj = {k1: 'one', k2: 'two', k3: 'hahaha'};

//   let { k1 : nkey, k2, k3 = 'k3값'} = obj; //{nkey: 'one', k2: 'two'}

//   var [it1, ...ods] = [0,1,2]; //it1 = 0 , ...ods = 1,2
//   var {y1, ...others} = {y1: 'x', x2: 'y', x3: 'z'};

//   return(
//     <div className="App">
//       <div className="black-nav">
//         <div>구조분해할당</div>
//       </div><br />
//       i1: {i1}<br />
//       i2: {i2}<br />
//       i3: {i3}<br />
//       [b,c]: {b} {c} <br />
//       [b,c]: {b[0]} {b[1]} {c[0]} {c[1]}<hr />
//       obj.k1 , obj.k2: {obj.k1} {obj.k2}<br />
//       nkey: {nkey}<br />
//       {/* k1: {k1}<br /> */}
//       k2: {k2}<br />
//       k3: {k3}<hr />
//       it1: {it1} , ods[0]: {ods[0]}, ods[1]: {ods[1]}<br />
//       y1: {y1}, others.x2: {others.x2}, others.x3: {others.x3}<br />
//     </div>
//   );
// }
$("#pival").text(`2PI = ${Math.PI * Math.PI}`);
function App(){
  return (
    <div className="App">
      <div className="black-nav">
        <div>라이브러리 의존성 관리</div>
      </div><br />
      <a href="https://www.naver.com">네이버</a><br />
      <span id='pival'></span><br /> <br />
      1. 리액트앱 폴더로 작업디렉토리 위치 이동<br />
      2. npm install jquery 실행하여 라이브러리 설치<br />
      3. 설치한 라이브러리를 이용할 때 모듈명으로 가져오기<br />
      형식: import 엘리아스명 from '모듈명';<br />
      예시: import $ from 'jquery';
      import 에는 모듈이나,js만 가능
    </div>
  );
}
//내보내는 역할 export defualt App : => 변수나 함수 를 내보낼수있음
export default App;
