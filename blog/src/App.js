/*eslint-disable*/
import { useState } from "react";
import "./App.css";

function App() {
  let [글제목, 글제목변경] = useState([
    "남자코트 추천",
    "강남 우동맛집",
    "파이썬 독학",
  ]);

  // 글제목.sort();

  let [좋아요, 좋아요변경] = useState([0, 0, 0]);
  let [modal, setModal] = useState(false);
  let [title, setTitle] = useState(0);
  let [입력값, 입력값변경] = useState('');
  let today = new Date(); 
  let month = today.getMonth() + 1;
  let date = today.getDate();


  return (
    <div className="App">
      <div className="black-nav">
        <div>
          개발 blog
        </div>
      </div>

      {글제목.map(function (a, i) {
        return (
          <div className="list" key={i}>
            <h4 onClick={()=>{setModal(!modal); setTitle(i);}}>{글제목[i]} <span onClick={(e) => {
                  e.stopPropagation();
                  let copy = [...좋아요];
                  copy[i] = copy[i] + 1;
                  좋아요변경(copy);
                }}>👍</span>{좋아요[i]}
            </h4>
            <div className="side">
              <p>{month}월 {date}일 발행</p>
              <button onClick={()=>{let change = [...글제목]; change.splice(i, 1); 글제목변경(change);}}>삭제</button>
            </div>
          </div>
        );
      })}
      
      <input onChange={(e)=>{입력값변경(e.target.value)}}/>
      <button onClick={()=>{let change = [입력값, ...글제목]; 글제목변경(change); let like = [...좋아요]; like.unshift(0); 좋아요변경(like);}}>등록</button>

      {modal == true ? <Modal title={title} 글제목변경={글제목변경} 글제목={글제목}/> : null}
    </div>
  );
}

function Modal(props) {
  return (
    <div className="modal">
      <h4>{props.글제목[props.title]}</h4>
      <p>날짜</p>
      <p>상세내용</p>
      <button onClick={()=>{props.글제목변경(["여자코트 추천", "강남 우동맛집", "파이썬 독학"])}}>글수정</button>
    </div>
  );
}

export default App;