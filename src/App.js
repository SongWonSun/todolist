// import logo from './logo.svg';
import './App.css';

function App(){
  let a = [1,2]; // eslint-disable-line no-unused-vars
  let [i1, i2=7, i3=5] = a; // eslint-disable-line no-unused-vars

  return(
    <div className="App">
       <div className="black-nav">
         <div>구조분해할당</div>
       </div><br />
       i1: {i1}<br />
    </div>
  );
}
export default App;
