/*eslint-disable*/
import { useState } from "react";
import "./App.css";

function App() {
  let [글제목, 글제목변경] = useState([
    "남자코트 추천",
    "강남 우동맛집",
    "파이썬 독학",
  ]);

  글제목.sort();

  let [좋아요, 좋아요변경] = useState([0, 0, 0]);
  let [modal, setModal] = useState(false);
  let [title, setTitle] = useState(0);


  return (
    <div className="App">
      <div className="black-nav">
        <div>
          개발 blog{" "}
          <span
            onClick={() => {
              let copy = [...글제목];
              copy[0] = "여자코트 추천";
              글제목변경(copy);
            }}
          >
            변경
          </span>
        </div>
      </div>

      {글제목.map(function (a, i) {
        return (
          <div className="list" key={i}>
            <h4 onClick={()=>{setModal(!modal); setTitle(i);}}>{글제목[i]}{" "} <span onClick={() => {
                  let copy = [...좋아요];
                  copy[i] = copy[i] + 1;
                  좋아요변경(copy);
                }}>👍</span>{좋아요[i]}
            </h4>
            <p>2월 17일 발행</p>
          </div>
        );
      })}

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
