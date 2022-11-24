import logo from './logo.svg';
import roomhaha from './img/room.jpg';
import './App.css';

// 함수형 컴포넌트 App
function App() {
  let str = "내가 해야할 일";
  let cnm = "hStyle";
  //태그로 이용하는것
  let imgStyle ={width: '200px', height:'200px;', borderRadius:'5px', border: '1px solid #4545'};

  function btn(){
    return "클릭버튼";
  }

  return(
    <div className="App">
      <div className="black-nav">
        <div>Todo 리스트</div>
      </div>
      <h4 className={cnm}>{str}</h4>
      <img src={roomhaha} style={imgStyle} />
      {/* <img src={logo} style={{width: '200px', height: '200px;', borderRadius: '5px', border: '1px solid #4545'}} /> */}
    </div>
  );
  
}
//내보내는 역할 export defualt App : => 변수나 함수 를 내보낼수있음
export default App;
