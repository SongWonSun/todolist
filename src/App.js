// import logo from './logo.svg';
import './App.css';

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

let arr = [1,2,3];
let res1 =[];
arr.map(function(v,i,a){
 console.log(`1번째 arr[${i}]번째 아이템값은 : ${v} 현재배열값 : ${a}`);
 res1[i] = v+1;
});
let res2 = [];
arr.map((v, i, a) => {
  console.log(`2번째 arr[${i}]번째 아이템값은 : ${v+i} 현재배열값 : ${a}`);
  res2[i] = v+i;
});
console.log("arr객체 값");
console.log(arr);

console.log("res1객체 값");
console.log(res1);

console.log("res2객체 값");
console.log(res2);
function App(){
  return(
    <div className="App">
      <div className="black-nav">
        <div>map() 함수</div>
      </div><br />
    </div>
  );
}
export default App;
