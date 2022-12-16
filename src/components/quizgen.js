import React, { Component, useRef, useState } from 'react';
import './codes.css';
import { TextField, MenuItem } from "@material-ui/core"
import axios from 'axios';
import Modal from 'react-modal';
import html2canvas from 'html2canvas';
import jsPDF from "jspdf";
import LOGOFILE from "../images/logo.png";
import ReactToPrint from "react-to-print";

Modal.setAppElement('#root')

const hashCode = function(s){
  return s.replaceAll("-", "").split("").reduce(function(a,b){a=((a<<5)-a)+b.charCodeAt(0);return a&a},0);              
}

const day_words = [0, 
  // Part 1 : day 1 ~ 23
  30, 30, 30, 30, 30, 30, 30, 30, 30, 30,
  30, 30, 30, 30, 30, 30, 30, 30, 30, 30,
  30, 30, 32,
  // Part 2 : day 24 ~ 31
  30, 30, 30, 30, 30, 30, 30, 13,
  // Part 3 : day 32 ~ 41
  30, 30, 30, 30, 30, 30, 30, 30, 30, 10,
  // Part 4 : day 42 ~ 45
  30, 30, 30, 15
]

let word_data = {
  1:{
    word: "apple",
    meaning: "사과",
    sentence:[
      "I ate an",
      "pie for dinner"
    ],
    translatioin: [
      "나는 저녁으로 애플파이를 먹었어요."
    ]
  }, 
  2:{
    word: "approve",
    meaning: "승인하다",
    sentence:[
      "I'd like to ask you to",
      "our plan for 2023."
    ],
    translatioin: [
      "2023년도 계획안을 승인해주십사 요청드리고 싶습니다."
    ]
  }
}

const num_words = [0, 692, 223, 280, 105]

function Quizgen (props) {
  const [mode, setMode] = useState("voca_2022")    /*  main
                                          voca_2022
                                        */
  const [logged_in, setLogged_in] = useState(true)// false
  const [select_mode, setSelect_Mode] = useState("index") // index
  const [from, setFrom] = useState(1)
  const [min, setMin] = useState(1)
  const [to, setTo] = useState(1300)
  const [max, setMax] = useState(1300)
  const [maxQ, setMaxQ] = useState(1300)
  const [numQ, setNumQ] = useState(30)
  const [option1, setOption1] = useState(true) //false
  const [option2, setOption4] = useState(true) //false
  const [option3, setOption3] = useState(true) //false
  const [option4, setOption2] = useState(true) //false
  const [showModal, setShowModal] = useState(true) //false
  const [title, setTitle] = useState("수능 영단어 퀴즈") // ""
  const [sample_no, setSampleNo] = useState(
        [
        [1, 2, 1, 2, 1, 1],
        [1, 2, 2, 2, 2, 2,],
        [1, 1, 2, 1, 1, 1,],
        [2, 1, 2, 2, 2, 2,]
      ]
    )

  const closeModal = () => {
    setShowModal(false)
  }

  const openModal = () => {
    setShowModal(true)
  }

  const prepare_2022_voca_test = () => {

  }

  const sectionTitle = () => {
    if (mode !== "main"){
      return(
        <div className="row">
          <div className="col-lg-12 text-center">
            <h2 className="section-heading subpageHeading">Test Gen.</h2>
            <p>시험문제 자동 출제 시스템</p>
            <button className="submitButton"
              onClick={
                function(e){
                    setMode("main")
                    setLogged_in(false)
                    setSelect_Mode("index")
                    setFrom(1)
                    setTo(1300)
                    setMin(1)
                    setMax(1300)
                    setMaxQ(1300)
                    setNumQ(0)
                }
              }
            >처음으로</button>
          </div>
        </div>
      )
    } else {
      return(
        <div className="row">
          <div className="col-lg-12 text-center">
            <h2 className="section-heading subpageHeading">Test Gen.</h2>
            <p>시험문제 자동 출제 시스템</p>
          </div>
        </div>
      )
    }
  }

  const drawMain = () => {
    let project1 = <div className="singleProjectContainer">
      <div className="singleProjectCard citation" 
        onClick={
          function(e){
              setMode("voca_2022")
              setLogged_in(false)
              setTitle("수능 영단어 퀴즈")
          }
        }>
        <img className="projectImage" src="https://cdn.jsdelivr.net/gh/needleworm/needleworm.github.io/src/images/books/covers/1.jpg"  alt="projectimage"/>
        <div className="projectText">
          <h5>AI족집게 수능영단어</h5>
          <div className="codeBody">
            <p className="bookDescription firstCommitDate">
              Last Update on 2022.12.14.
            </p>
            <p className="bookDescription">
              AI족집게 수능영단어 도서에 수록된 단어들을 바탕으로 단어시험을 자동으로 생성하는 메뉴입니다.<br/>
              현재 총 4가지 유형의 시험지를 제공합니다.
            </p>
          </div>
        </div>
      </div>
    </div>

    return(
      <div className="codeContainer">
        {project1}
      </div>
    )
  }

  const draw_rangeSelector_2022voca = () => {
    let selector1 = <TextField select label="구분" className="itemSelectorBox" value={select_mode}
      onChange={
        function(e){
          if (e.target.value === "total"){
              setSelect_Mode("total")
              setFrom(1)
              setTo(1300)
              setMaxQ(1300)
          } else if (e.target.value === "index"){
              setSelect_Mode(e.target.value)
              setMin(1)
              setMax(1300)
          } else if (e.target.value === "part"){
              setSelect_Mode(e.target.value)
              setMin(1)
              setMax(4)
              setFrom(1)
              setTo(4)
          } else if (e.target.value === "day"){
              setSelect_Mode(e.target.value)
              setMin(1)
              setMax(45)
              setFrom(1)
              setTo(45)
          }
        }
      }
    >
      <MenuItem value={"day"} key={"day"}>Day</MenuItem>
      <MenuItem value={"part"} key={"part"}>Part</MenuItem>
      <MenuItem value={"index"} key={"index"}>Index</MenuItem>
      <MenuItem value={"total"} key={"total"}>책 전체</MenuItem>
    </TextField>

    let selector2 = <TextField type="number" label="~부터" className="itemSelectorBox" value={from}
          InputProps={{ inputProps: { min: min, max: max } }}
          onChange={
            function(e){
              setFrom(Number(e.target.value))
            }
          }
        />

    let selector3 =  <TextField type="number" label="~까지" className="itemSelectorBox" value={to}
        InputProps={{ inputProps: { min: min, max: max } }}
          onInput={
            function(e){
              var L = Number(e.target.value)
              if (select_mode === "index"){
                  setTo(L)
                  setMaxQ(L + 1 - from)
              } else if (select_mode === "day"){
                  setTo(L)
                  setMaxQ(day_words.slice(from, L + 1).reduce((a,b) => (a+b)))
              } else if (select_mode === "part"){
                  setTo(L)
                  setMaxQ(num_words.slice(from, L + 1).reduce((a,b) => (a+b)))
              } else {
                  setTo(L)
                  setMaxQ(0)
              }
            }
          }
        />
    
    let numQSelector = <div className="separ2">
      <strong className="col-lg-12 text-center">총 몇 문제를 출제할까요?</strong><br/><br/>
      최대 <u>{maxQ}</u> 개의 문제를 출제할 수 있습니다.
      <TextField type="number" label="문항 개수" className="itemSelectorBox" value={numQ}
          onChange={
            function(e){
              setNumQ(Number(e.target.value))
            }
          }
        />
      <br/><br/><br/><br/>

      <strong className="col-lg-12 text-center">시험지 제목을 입력해주세요</strong><br/><br/>
      <TextField type="text" label="시험지 제목" className="itemSelectorBox" value={title}
          onChange={
            function(e){
              setTitle(e.target.value)
            }
          }
        />
    </div>

    if (select_mode === "total") {
      return (
        <div className="selectorForTestGen1">
          <strong className="col-lg-12 text-center">출제 범위를 선택해주세요</strong><br/><br/>
          책에 수록된 1,300단어 전체를 범위로 설정합니다.<br/><br/>
          <div className="separ2">
            {selector1}
          </div><br/><br/><br/>
          {numQSelector}
        </div>
      )
    } else {
      return (
        <div className="selectorForTestGen">
          <strong className="col-lg-12 text-center">출제 범위를 선택해주세요</strong><br/><br/>
          {min}부터 {max}까지 선택하실 수 있습니다.<br/><br/>
          <div className="separ">
            {selector1}
            {selector2}
            {selector3}
          </div><br/><br/><br/>
          {numQSelector}
        </div>
      )
    }
  }

  const draw_2022_type_1 = (idx) => {
    let word = word_data[idx]

    return (
      <li className="singleQuiz">
        <span className="testText">{word.word} : &nbsp;&nbsp;
        <span className="underlineBox">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span>
        </span>
      </li>
    )
  }

  const draw_2022_type_2 = (idx) => {
    let word = word_data[idx]

    return (
      <li className="singleQuiz">
        <span className="testText">{word.meaning} : &nbsp;&nbsp;
        <span className="underlineBox">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span>
        </span>
      </li>
    )
  }

  const draw_2022_type_3 = (idx) => {
    let word = word_data[idx]

    let samples = [
      word_data[parseInt(Math.random() * Object.keys(word_data).length) + 1].word,
      word_data[parseInt(Math.random() * Object.keys(word_data).length) + 1].word,
      word_data[parseInt(Math.random() * Object.keys(word_data).length) + 1].word,
      word.word
    ]
    
    samples.sort(() => Math.random() - 0.5);

    return (
      <li className="singleQuiz">
        <div className="testText">{word.translatioin}</div>
        <div className="testText">{word.sentence[0]} &nbsp;&nbsp;
        <span className="underlineBox">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span>
          &nbsp;&nbsp;
          {word.sentence[1]}
        </div>
        <div className="hubos">
          <span>(a) {samples[0]}</span>
          <span>(b) {samples[1]}</span>
          <span>(c) {samples[2]}</span>
          <span>(d) {samples[3]}</span>
        </div>
      </li>
    )
    
  }

  const draw_2022_type_4 = (idx) => {
    let word = word_data[idx]

    return (
      <li className="singleQuiz">
        <div className="testText">{word.translatioin}</div>
        <div className="testText">{word.sentence[0]} &nbsp;&nbsp;
          <span className="underlineBox">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span>
          &nbsp;&nbsp;
          {word.sentence[1]}
        </div>
      </li>
    )
  }

  const Draw_2022_voca_printable_page = () => {
    let modalCloseButton = <button className="submitButton mdbutton"
        onClick={closeModal}
      >창 닫기</button>

    const ref = useRef()

    let today = new Date()
    let year = today.getFullYear()
    let month = ('0' + (today.getMonth() + 1)).slice(-2)
    let day = ('0' + today.getDate()).slice(-2)
    let dateString = year + '-' + month  + '-' + day

    let filename = dateString + " 수능영단어 시험지.pdf"
    
    let testPDF = <ReactToPrint
      trigger={() => <button className="submitButton mdbutton">시험지 인쇄</button>}
      content={() => ref.current}
      documentTitle={filename}
    />

    let infogrid = <div className="infoGrid">
      <p>인쇄 기능은 PC 버전 Chrome 브라우저에 최적화되어 있습니다.</p>
      <div className="buttonArrayGrid">
        {testPDF}
        {modalCloseButton}
      </div>
    </div>

    let headerGrid = <div className="testHeaderGrid">
      <img src={LOGOFILE} className="linear_logo" alt="균형감각"/>
      <span className="text-center testTitle">{title}</span>
      <div className="studentInfo">
        학반 : <span className="underlineBox">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span><br/>
        번호 : <span className="underlineBox">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span><br/>
        이름 : <span className="underlineBox">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span>
      </div>
    </div>

    let Q1 = <div></div>
    let Q2 = <div></div>
    let Q3 = <div></div>
    let Q4 = <div></div>

    if (option1){
      Q1 = <div>
        <strong className="singleQuiz"><br/><br/><br/>주어진 단어의 의미를 빈 칸에 적어주세요.<br/><br/><br/></strong>
        {sample_no[0].map(function(idx){
                    return draw_2022_type_1(idx)
                  })
        }
      </div>
    }

    if (option2){
      Q2 = <div>
        <strong className="singleQuiz"><br/><br/><br/>주어진 의미에 해당하는 단어를 빈 칸에 적어주세요.<br/><br/><br/></strong>
        {sample_no[1].map(function(idx){
                    return draw_2022_type_2(idx)
                  })
        }
      </div>
    }

    if (option3){
      Q3 = <div>
        <strong className="singleQuiz"><br/><br/><br/>주어진 문장의 빈칸에 가장 알맞는 단어를 고르세요.<br/><br/><br/></strong>
        {sample_no[2].map(function(idx){
                    return draw_2022_type_3(idx)
                  })
        }
      </div>
    }

    if (option4){
      Q4 = <div>
        <strong className="singleQuiz"><br/><br/><br/>주어진 문장의 빈칸에 가장 알맞는 단어를 적으세요.<br/><br/><br/></strong>
        {sample_no[3].map(function(idx){
                    return draw_2022_type_4(idx)
                  })
        }
      </div>
    }

    return(
      <div className="modalField">
        {infogrid}
        <div className="insideModalField" ref={ref}>
          <div id="printable">
            {headerGrid}
            <ol className="orderedTest">
              {Q1}
              {Q2}
              {Q3}
              {Q4}
            </ol>
          </div>
        </div>
      </div>
    )
  }

  const draw_voca_2022 = () => {
    const hashed = -1693770398
    const dataUrl = "https://cdn.jsdelivr.net/gh/needleworm/needleworm.github.io/package.json"

    let serial = ""

    let login = <div className="quizGenerator">
      <div className="col-lg-12 text-center">
        <p>도서와 함께 제공된 시리얼을 입력하세요</p>
        <TextField label="XXXX-XXXX-XXXX-XXXX" className="getSerial"
          onChange={
            function(e){
              serial = e.target.value
            }
          }
        />
        <br/><br/>
        <button className="submitButton"
          onClick={
            function(e){
              e.preventDefault()
              if (hashed !== hashCode(serial)){
                alert("올바른 인증키가 아닙니다!")
              } else {
                axios.get(dataUrl)
                .then(data => {
                  setLogged_in(true)
                  word_data(data)
                })
              }
            }
          }
        >Access</button>
      </div>
    </div>

    let typeSelector = <div className="selectorForTestGen">
      <strong className="col-lg-12 text-center">문제 유형을 1개 이상 선택해주세요</strong><br/><br/>
      <div className="testTypeSelector1">
        <div className="text-center checkOptions" >
          <img className="testSelectorItem" src="https://cdn.jsdelivr.net/gh/needleworm/needleworm.github.io/src/images/books/covers/1.jpg" alt="quiz_type[0]"/>
          <input type="checkbox" name="checker1" id="checker1_1" onClick={
            function(e){
              setOption1(!option1)
            }
          }/>
          <label for="checker1_1">영단어와 빈칸</label>
        </div>
        <div className="text-center checkOptions">
          <img className="testSelectorItem" src="https://cdn.jsdelivr.net/gh/needleworm/needleworm.github.io/src/images/books/covers/2.jpg" alt="quiz_type[0]"/>
          <input type="checkbox" name="checker1" id="checker1_2" onClick={
            function(e){
              setOption2(!option2)
            }
          }/>
          <label for="checker1_2">빈칸과 한글 의미</label>
        </div>
        <div className="text-center checkOptions">
          <img className="testSelectorItem" src="https://cdn.jsdelivr.net/gh/needleworm/needleworm.github.io/src/images/books/covers/3.jpg" alt="quiz_type[0]"/>
          <input type="checkbox" name="checker1" id="checker1_3" onClick={
            function(e){
              setOption3(!option3)
            }
          }/>
          <label for="checker1_3">문장 내 빈칸채우기 (객관식)</label>
        </div>
        <div className="text-center checkOptions">
          <img className="testSelectorItem" src="https://cdn.jsdelivr.net/gh/needleworm/needleworm.github.io/src/images/books/covers/4.jpg" alt="quiz_type[0]"/>
          <input type="checkbox" name="checker1" id="checker1_4" onClick={
            function(e){
              setOption4(!option4)
            }
          }/>
          <label for="checker1_4">문장 내 빈칸채우기 (주관식)</label>
        </div>
      </div>
    </div>

    let test_gen_button = <div className="col-lg-12 text-center">
      <button className="submitButton"
        onClick={
          function(e){
            e.preventDefault()
            if (! (option1 || option2 || option3 || option4)){
              alert("1개 이상의 시험 유형을 선택해주세요.")
            } else if (from < min){
              alert("출제 시작값이 너무 작습니다.")
            } else if (to > max){
              alert("출제 종료값이 너무 큽니다.")
            } else if (from >= to){
              alert("출제 시작값보다 종료값이 커야 합니다.")
            } else{
              setShowModal(true)
              prepare_2022_voca_test()
            }
          }
        }
      >시험지 생성</button>
    </div>

    if (logged_in){
      if (! (option1 || option2 || option3 || option4)){
        return (
          <div className="codeContainer">
            <div className="quizGenerator">
              <div className="col-lg-12 text-center">
                {typeSelector}
                <div className="separator"/>
              </div>
            </div>
          </div>
        )
      }
      else if (numQ <= 0){
        return(
          <div className="codeContainer">
            <div className="quizGenerator">
              <div className="col-lg-12 text-center">
                {typeSelector}
                <div className="separator"/>
                {draw_rangeSelector_2022voca()}
                <div className="separator"/>
              </div>
            </div>
          </div>
        )
      } else {
        return(
          <div className="codeContainer">
            <div className="quizGenerator">
              <div className="col-lg-12 text-center">
                {typeSelector}
                <div className="separator"/>
                {draw_rangeSelector_2022voca()}
                <div className="separator"/>
              </div>
            </div>
            {test_gen_button}
            <Modal id="modalForTest" isOpen={showModal} onRequestClose={closeModal}
              overlayClassName="overlay" className="ModalPrintPage"
            >
              {Draw_2022_voca_printable_page()}
            </Modal>
          </div>
        )
      }
    } else {
      return(
        <div className="codeContainer">
          {login}
        </div>
      )
    }
  }

  const drawWebsites = () => {
    if (mode === "main"){
      return (
        <div className="websitesContainer">
          {drawMain()}
        </div>
      )
    } else if (mode === "voca_2022"){
      return (
        <div className="quizPrintContainer">
          {draw_voca_2022()}
        </div>
      )
    }
  }

  return (
    <section id="quizgen" className="animated bounceInDown">
        {sectionTitle()}
        {drawWebsites()}
    </section>
  );
}
  
export default Quizgen;