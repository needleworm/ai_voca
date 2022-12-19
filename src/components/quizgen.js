import React, { useRef, useState } from 'react';
import './quizgen.css';
import { TextField, MenuItem } from "@material-ui/core"
import axios from 'axios';
import Modal from 'react-modal';
import LOGOFILE from "../images/logo.png";
import ReactToPrint from "react-to-print";

/*  
  할 일
  1. 단어장 json 만들어서 jsonData/ 폴더에 넣기
  2. prepare_2022_voca_test 함수 만들기
*/

Modal.setAppElement('#root')

const hashCode = (s) => {
  return s.replaceAll("-", "").split("").reduce(function(a,b){a=((a<<5)-a)+b.charCodeAt(0);return a&a},0);              
}




const num_words = [0, 692, 223, 280, 105]

function Quizgen () {
  const [mode, setMode] = useState("main")    /*  main
                                          voca_2022
                                        */
  const [logged_in, setLogged_in] = useState(false)// false
  const [select_mode, setSelect_Mode] = useState("index") // index, total, part, day
  const [question_range, setQuestion_range] = useState([1, 1, 1300, 1300, 1300, 30]) // from, min, to, max, maxQ, numQ 
  const [word_data, setWord_data] = useState({})
  const [options, setOptions] = useState([false, false, false, false]) // false false false false
  const [showModal, setShowModal] = useState(false) //false
  const [title, setTitle] = useState("") // ""
  const [sample_no, setSampleNo] = useState([[], [], [], []]) // type 1, 2, 3, 4
  const ref = useRef()
  

  const closeModal = () => {
    setShowModal(false)
  }

  const openModal = () => {
    setShowModal(true)
  }

  const prepare_2022_voca_test = () => {
    let totalSamples = [] //전체 범위의 모집합
    // 이거 구해야됨
    
    let range = Array.from({length: question_range[2] - question_range[0] + 1}, (v, i) => i + question_range[0])

    if (select_mode === "total" || select_mode === 'index'){
      totalSamples = range
    } else if (select_mode === "part"){
      const part_word_idx = [
        Array.from({length: 692}, (v, i) => i + 1),
        Array.from({length: 223}, (v, i) => i + 1 + 692),
        Array.from({length: 280}, (v, i) => i + 1 + 692 + 223),
        Array.from({length: 105}, (v, i) => i + 1 + 692 + 223 + 280),
      ]

      range.map(function(idx){
        totalSamples = totalSamples.concat(part_word_idx[idx])
        return null
      })
    } else if (select_mode === "day"){
      const day_start_idx = [0, 
        // Part 1 : day 1 ~ 23
        1, 31, 61, 91, 121, 151, 181, 211, 241, 271,
        301, 331, 361, 391, 421, 451, 481, 511, 541, 571,
        601, 631, 661,
        // Part 2 : day 24 ~ 31
        693, 723, 753, 783, 813, 843, 873, 903,
        // Part 3 : day 32 ~ 41
        916, 946, 976, 1006, 1036, 1066, 1096, 1126, 1156, 1186,
        // Part 4 : day 42 ~ 45
        1196, 1226, 1256, 1286
      ]

      const day_end_idx = [0,
        // Part 1 : day 1 ~ 23
        30, 60, 90, 120, 150, 180, 210, 240, 270, 300,
        330, 360, 390, 420, 450, 480, 510, 540, 570, 600,
        630, 660, 692,
        // Part 2 : day 24 ~ 31
        722, 752, 782, 812, 842, 872, 902, 915,
        // Part 3 : day 32 ~ 41
        945, 975, 1005, 1035, 1065, 1095, 1125, 1155, 1185, 1195,
        // Part 4 : day 42 ~ 45
        1225, 1255, 1285, 1300
      ]

      totalSamples = Array.from({length: day_end_idx[question_range[2]] - day_start_idx[question_range[0]] + 1}, (v, i) => i + day_start_idx[question_range[0]])
    }

    let types_1 = []
    let types_2 = []
    let types_3 = []
    let types_4 = []
   
    totalSamples.sort(() => Math.random() - 0.5);

    if (question_range[5] > question_range[4]) { // numQ > maxQ
      totalSamples = totalSamples.concat(totalSamples.slice(0, question_range[5] - question_range[4]))
    } else {
      totalSamples = totalSamples.slice(0, question_range[5])
    }

    let ticket = []
    if (options[0]){
      ticket.push(1)
    }if (options[1]){
      ticket.push(2)
    }if (options[2]){
      ticket.push(3)
    }if (options[3]){
      ticket.push(4)
    }
    
    let tk = 0
    totalSamples.map(function(idx){
      tk = ticket[parseInt(Math.random() * ticket.length)]
      console.log(tk)
      if (tk === 1){
        types_1.push(idx)
      } else if (tk === 2){
        types_2.push(idx)
      }  else if (tk === 3){
        types_3.push(idx)
      }  else if (tk === 4){
        types_4.push(idx)
      } 
      return null
    })

    setSampleNo([types_1, types_2, types_3, types_4])
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
                    setQuestion_range([1, 1, 1300, 1300, 1300, 30]) // from, question_range[1], to, max, question_range[4], question_range[5]  
                    setWord_data({})
                    setOptions([false, false, false, false])
                    setShowModal(false)
                    setTitle("")
                    setSampleNo([[], [], [], []])
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
          setSelect_Mode(e.target.value)
          if (e.target.value === "total"){
              setQuestion_range([1, question_range[1], 1300, question_range[3], 1300, question_range[5]])
          } else if (e.target.value === "index"){
              setQuestion_range([question_range[0], 1, question_range[2], 1300, question_range[4], question_range[5]])
          } else if (e.target.value === "part"){
              setQuestion_range([1, 1, 4, 4, question_range[4], question_range[5]])
          } else if (e.target.value === "day"){
              setQuestion_range([1, 1, 45, 45, question_range[4], question_range[5]])
          }
        }
      }
    >
      <MenuItem value={"day"} key={"day"}>Day</MenuItem>
      <MenuItem value={"part"} key={"part"}>Part</MenuItem>
      <MenuItem value={"index"} key={"index"}>Index</MenuItem>
      <MenuItem value={"total"} key={"total"}>책 전체</MenuItem>
    </TextField>

    let selector2 = <TextField type="number" label="~부터" className="itemSelectorBox" value={question_range[0]}
          InputProps={{ inputProps: { min: question_range[1], max: question_range[3] } }}
          onChange={
            function(e){
              // from, min, to, max, maxQ, numQ 
              setQuestion_range([Number(e.target.value), question_range[1], question_range[2], question_range[3], question_range[4], question_range[5]])
            }
          }
        />

    let selector3 =  <TextField type="number" label="~까지" className="itemSelectorBox" value={question_range[2]}
        InputProps={{ inputProps: { min: question_range[1], max: question_range[3] } }}
          onInput={
            function(e){
              var L = Number(e.target.value)
              if (select_mode === "index"){
                  // from, min, to, max, maxQ, numQ 
                  setQuestion_range([question_range[0], question_range[1], L, question_range[3], L + 1 -question_range[0], question_range[5]])
              } else if (select_mode === "day"){
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
                  // from, min, to, max, maxQ, numQ 
                  setQuestion_range([question_range[0], question_range[1], L, question_range[3], day_words.slice(question_range[0], L + 1).reduce((a,b) => (a+b)), question_range[5]])
              } else if (select_mode === "part"){
                  // from, min, to, max, maxQ, numQ 
                  setQuestion_range([question_range[0], question_range[1], L, question_range[3], num_words.slice(question_range[0], L + 1).reduce((a,b) => (a+b)), question_range[5]])
              } else {
                  // from, min, to, max, maxQ, numQ 
                  setQuestion_range([question_range[0], question_range[1], L, question_range[3], 0, question_range[5]])
              }
            }
          }
        />
    
    let numQSelector = <div className="separ2">
      <strong className="col-lg-12 text-center">총 몇 문제를 출제할까요?</strong><br/><br/>
      최대 <u>{question_range[4]}</u> 개의 문제를 출제할 수 있습니다.
      <TextField type="number" label="문항 개수" className="itemSelectorBox" value={question_range[5]}
          onChange={
            function(e){
              // from, min, to, max, maxQ, numQ 
              setQuestion_range([question_range[0], question_range[1], question_range[2], question_range[3], question_range[4], Number(e.target.value)])
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
          {question_range[1]}부터 {question_range[3]}까지 선택하실 수 있습니다.<br/><br/>
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
    let word = word_data[String(idx)]

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
      word_data[parseInt(Math.random() * Object.keys(word_data).length) + 1].appearance,
      word_data[parseInt(Math.random() * Object.keys(word_data).length) + 1].appearance,
      word_data[parseInt(Math.random() * Object.keys(word_data).length) + 1].appearance,
      word.appearance
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
      <p>인쇄 기능은 PC 버전 <a href="https://www.google.com/chrome/" target="_blank"  rel="noreferrer">Chrome 브라우저</a>에 최적화되어 있습니다.</p>
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

    if (options[0]){
      Q1 = <div>
        <strong className="singleQuiz"><br/><br/><br/>주어진 단어의 의미를 빈칸에 적어주세요.<br/><br/><br/></strong>
        {sample_no[0].map(
          function(idx){
            return draw_2022_type_1(idx)
          })
        }
      </div>
    }

    if (options[1]){
      Q2 = <div>
        <strong className="singleQuiz"><br/><br/><br/>주어진 의미에 해당하는 단어를 빈칸에 적어주세요.<br/><br/><br/></strong>
        {sample_no[1].map(
          function(idx){
            return draw_2022_type_2(idx)
          })
        }
      </div>
    }

    if (options[2]){
      Q3 = <div>
        <strong className="singleQuiz"><br/><br/><br/>주어진 문장의 빈칸에 가장 알맞는 단어를 고르세요.<br/><br/><br/></strong>
        {sample_no[2].map(
          function(idx){
            return draw_2022_type_3(idx)
          })
        }
      </div>
    }

    if (options[3]){
      Q4 = <div>
        <strong className="singleQuiz"><br/><br/><br/>주어진 문장의 빈칸에 가장 알맞는 단어를 적으세요.<br/><br/><br/></strong>
        {sample_no[3].map(
          function(idx){
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
    const dataUrl = "https://raw.githubusercontent.com/needleworm/ai_voca/main/src/jsonData/2022_voca.json"

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
                  setWord_data(data.data)
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
          <img className="testSelectorItem" src="https://cdn.jsdelivr.net/gh/needleworm/needleworm.github.io/src/images/books/covers/1.jpg" alt="quiz_type 1"
            onClick={
              function(e){
                setOptions([!options[0], options[1], options[2], options[3]])
              }
          }/>
          <input type="checkbox" name="checker1" id="checker1_1" checked={options[0]} onChange={
            function(e){
              e.preventDefault()
              setOptions([!options[0], options[1], options[2], options[3]])
            }
          }/>
          <label htmlFor="checker1_1">영단어와 빈칸</label>
        </div>
        <div className="text-center checkOptions">
          <img className="testSelectorItem" src="https://cdn.jsdelivr.net/gh/needleworm/needleworm.github.io/src/images/books/covers/2.jpg" alt="quiz_type 2"
            onClick={
              function(e){
                setOptions([options[0], !options[1], options[2], options[3]])
              }
          }/>
          <input type="checkbox" name="checker1" id="checker1_2" checked={options[1]} onChange={
            function(e){
              e.preventDefault()
              setOptions([options[0], !options[1], options[2], options[3]])
            }
          }/>
          <label htmlFor="checker1_2">빈칸과 한글 의미</label>
        </div>
        <div className="text-center checkOptions">
          <img className="testSelectorItem" src="https://cdn.jsdelivr.net/gh/needleworm/needleworm.github.io/src/images/books/covers/3.jpg" alt="quiz_type 3"
            onClick={
              function(e){
                setOptions([options[0], options[1], !options[2], options[3]])
              }
          }/>
          <input type="checkbox" name="checker1" id="checker1_3" checked={options[2]} onChange={
            function(e){
              e.preventDefault()
              setOptions([options[0], options[1], !options[2], options[3]])
            }
          }/>
          <label htmlFor="checker1_3">문장 내 빈칸채우기 (객관식)</label>
        </div>
        <div className="text-center checkOptions">
          <img className="testSelectorItem" src="https://cdn.jsdelivr.net/gh/needleworm/needleworm.github.io/src/images/books/covers/4.jpg" alt="quiz_type 4"
            onClick={
              function(e){
                setOptions([options[0], options[1], options[2], !options[3]])
              }
          }/>
          <input type="checkbox" name="checker1" id="checker1_4" checked={options[3]} onChange={
            function(e){
              e.preventDefault()
              setOptions([options[0], options[1], options[2], !options[3]])
            }
          }/>
          <label htmlFor="checker1_4">문장 내 빈칸채우기 (주관식)</label>
        </div>
      </div>
    </div>

    let test_gen_button = <div className="col-lg-12 text-center">
      <button className="submitButton"
        onClick={
          function(e){
            e.preventDefault()
            if (! (options[0] || options[1] || options[2] || options[3])){
              alert("1개 이상의 시험 유형을 선택해주세요.")
            } else if (question_range[0] < question_range[1]){
              alert("출제 시작값이 너무 작습니다.")
            } else if (question_range[2] > question_range[3]){
              alert("출제 종료값이 너무 큽니다.")
            } else if (question_range[0] >= question_range[2]){
              alert("출제 시작값보다 종료값이 커야 합니다.")
            } else{
              openModal()
              prepare_2022_voca_test()
            }
          }
        }
      >시험지 생성</button>
    </div>


    if (logged_in){
      if (! (options[0] || options[1] || options[2] || options[3])){
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
      else if (question_range[5] <= 0){
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