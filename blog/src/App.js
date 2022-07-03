/*eslint-disable*/
import { useState } from "react";
import "./App.css";

function App() {
  let [글제목, title] = useState([
    "남자코트 추천",
    "강남 우동맛집",
    "파이썬 독학",
  ]);

  글제목.sort();

  let [좋아요, 좋아요변경] = useState([0, 0, 0]);
  let [modal, setModal] = useState(false);

  return (
    <div className="App">
      <div className="black-nav">
        <div>
          개발 blog{" "}
          <span
            onClick={() => {
              let copy = [...글제목];
              copy[0] = "여자코트 추천";
              title(copy);
            }}
          >
            변경
          </span>
        </div>
      </div>

      {/* <div className="list">
        <h4>{글제목[0]} <span onClick={()=>{좋아요변경(좋아요+1)}}>👍</span> {좋아요}</h4>
        <p>2월 17일 발행</p>
      </div>
      <div className="list">
        <h4>{글제목[1]}</h4>
        <p>2월 17일 발행</p>
      </div>
      <div className="list">
        <h4 onClick={()=>{setModal(!modal)}}>{글제목[2]}</h4>
        <p>2월 17일 발행</p>
      </div> */}

      {글제목.map(function (a, i) {
        return (
          <div className="list">
            <h4>
              {글제목[i]}{" "}
              <span
                onClick={() => {
                  좋아요변경(좋아요[i] + 1);
                }}
              >
                👍
              </span>{" "}
              {좋아요[i]}
            </h4>
            <p>2월 17일 발행</p>
          </div>
        );
      })}

      {modal == true ? <Modal></Modal> : null}
    </div>
  );
}

function Modal() {
  return (
    <div className="modal">
      <h4>제목</h4>
      <p>날짜</p>
      <p>상세내용</p>
    </div>
  );
}

export default App;
