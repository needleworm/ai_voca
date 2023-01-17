import React, { useState } from 'react';
import './selfTest.css';
import axios from 'axios';
import { TextField, MenuItem } from "@mui/material";
import { Doughnut, PolarArea } from 'react-chartjs-2';
import 'chart.js/auto';
import Modal from 'react-modal';
import { CountdownCircleTimer } from "react-countdown-circle-timer";

Modal.setAppElement('#root')


const num_words = [0, 692, 223, 280, 105]


const renderTime_ready = () => {
  return (
    <div className="timer">
      <div className="text">Get Ready!</div>
    </div>
  );
};

const renderTime_60s = () => {
  return (
    <div className="timer">
      <div className="text">GO!</div>
    </div>
  );
};


function SelfTest () {
  type SingleWordDataType = {
    word: string
    meaning: string
    sentence: string[]
    translation: string
    appearance: string
  }

  type WordDataType = {
    [key: string]: SingleWordDataType
  }


  const [mode, setMode] = useState("main")  /*  main  <- default
                                                voca_2022
                                                voca_2022_type_1
                                                voca_2022_type_2
                                            */
  const [question_range, setQuestion_range] = useState([1, 1, 1300, 1300, 60]) // from, min, to, max, maxQ [default : [1, 1, 1300, 1300, 60]]
  const [numQ, setNumQ] = useState(60) // numQ 
  const [select_mode, setSelect_Mode] = useState("total") // total, part, day [default : ["total"]]
  const [word_data, setWord_data] = useState<WordDataType>({})// [default : {}]
  const [sampleNo, setSampleNo] = useState<number[]>([]) // [default : []]
  const [showModal, setShowModal] = useState(false) //false [default : false]
  const [quizStart, setQuizStart] = useState(false) //false [default : false]
  const [countDown_Ready, setCountDown_Ready] = useState(false) //false [default : false]
  const [countDown_60s, setCountDown_60s] = useState(false) //false [default : false]
  const [showResult, setShowResult] = useState(false) //false if test Done? [default : false]
  const [numCorrectAnswer1, setNumCorrectAnswer1] = useState(0) // num correct  [default : 0]
  const [numCorrectAnswer2, setNumCorrectAnswer2] = useState(0) // num correct [default : 0] 
  const [numCorrectAnswer3, setNumCorrectAnswer3] = useState(0) // num correct [default : 0]
  const [currentIdx, setCurrentIdx] = useState(1) // current quiz idx [default : 1]
  

  const closeModal = () => {
    setShowModal(false)
  }

  const openModal = () => {
    setShowModal(true)
  }

  const generate_quiz_set = () => {
    let totalSamples: number[] = [] //전체 범위의 모집합
    // 이거 구해야됨
    
    let range = Array.from({length: question_range[2] - question_range[0] + 1}, (v, i) => i + question_range[0])

    if (select_mode === "total"){
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

      totalSamples = Array.from(
        {length: day_end_idx[question_range[2]] - day_start_idx[question_range[0]] + 1}, (v, i) => i + day_start_idx[question_range[0]]
      )
    }

    totalSamples.sort(() => Math.random() - 0.5);

    if (numQ > question_range[4]) { // numQ > maxQ
      totalSamples = totalSamples.concat(totalSamples.slice(0, numQ - question_range[4]))
    } else {
      totalSamples = totalSamples.slice(0, question_range[4])
    }

    setSampleNo(totalSamples)
  }

  const draw_rangeSelector_2022voca = () => {
    let selector1 = <TextField select label="구분" className="itemSelectorBox" value={select_mode}
      onChange={
        function(e){
          setSelect_Mode(e.target.value)
          if (e.target.value === "total"){
              setQuestion_range([1, 1, 1300, 1300, 60])
          } else if (e.target.value === "index"){
              setQuestion_range([1, 1, 1300, 1300, 60])
          } else if (e.target.value === "part"){
              setQuestion_range([1, 1, 4, 4, 60])
          } else if (e.target.value === "day"){
              setQuestion_range([1, 1, 45, 45, 60])
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
              // from, min, to, max, maxQ
              setQuestion_range([Number(e.target.value), question_range[1], question_range[2], question_range[3], question_range[4]])
            }
          }
        />

    let selector3 =  <TextField type="number" label="~까지" className="itemSelectorBox" value={question_range[2]}
        InputProps={{ inputProps: { min: question_range[1], max: question_range[3] } }}
          onInput={
            function(e){
              var L = Number((e.target as HTMLInputElement).value)
              if (select_mode === "index"){
                  // from, min, to, max, maxQ
                  setQuestion_range([question_range[0], question_range[1], L, question_range[3], L + 1 -question_range[0]])
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
                  // from, min, to, max, maxQ
                  setQuestion_range([question_range[0], question_range[1], L, question_range[3], day_words.slice(question_range[0], L + 1).reduce((a,b) => (a+b))])
              } else if (select_mode === "part"){
                  // from, min, to, max, maxQ
                  setQuestion_range([question_range[0], question_range[1], L, question_range[3], num_words.slice(question_range[0], L + 1).reduce((a,b) => (a+b))])
              } else {
                  // from, min, to, max, maxQ
                  setQuestion_range([question_range[0], question_range[1], L, question_range[3], 0])
              }
            }
          }
        />
    
    let numQSelector = <div className="separ2_single">
      <strong className="col-lg-12 text-center">총 몇 문제를 출제할까요?</strong><br/><br/>
      1회 최대 60개<br/><br/>
      <TextField type="number" className="itemSelectorBox" value={numQ}
          onChange={
            function(e){
              if (Number(e.target.value) > 60 || Number(e.target.value) < 1 ){
                e.preventDefault()
              } else{
                setNumQ(Number(e.target.value))
              }
            }
          }
        />
      <br/><br/><br/><br/>

    </div>

    if (select_mode === "total") {
      return (
        <div className="selectorForTestGen1 text-center">
          <strong className="col-lg-12 text-center">출제 범위를 선택해주세요</strong><br/><br/>
          책에 수록된 1,300단어 전체를 범위로 설정합니다.<br/><br/>
          <div className="separ2_single">
            {selector1}
          </div><br/><br/><br/>
          {numQSelector}
        </div>
      )
    } else {
      return (
        <div className="selectorForTestGen text-center">
          <strong className="col-lg-12 text-center">출제 범위를 선택해주세요</strong><br/><br/>
          {question_range[1]}부터 {question_range[3]}까지 선택하실 수 있습니다.<br/><br/>
          <div className="separ_single">
            {selector1}
            {selector2}
            {selector3}
          </div><br/><br/><br/>
          {numQSelector}
        </div>
      )
    }
  }

  const draw_quiz_setting_modal = () => {
    let modalCloseButton = <button className="submitButton"
        onClick={closeModal}
      >취소</button>

    let quickStartButton = <button className="submitButton"
      onClick={
        function(e){
          setQuizStart(true)
          generate_quiz_set()
          setCountDown_Ready(true)
          closeModal()
        }
      }
    >시작!</button>


    return(
      <div className="modalField">
        {draw_rangeSelector_2022voca()}
        <div className="buttonGridforModal">
          {modalCloseButton}
          {quickStartButton}
        </div>
      </div>
    )
  }

  const sectionTitle = () => {
    if (mode === "voca_2022"){
      return(
        <div className="row">
          <div className="col-lg-12 text-center">
            <h2 className="section-heading subpageHeading">Self Study.</h2>
            <p>AI족집게 수능영단어</p>
            <button className="submitButton"
              onClick={
                function(e){
                    setMode("main")
                    setQuestion_range([1, 1, 1300, 1300, 60]) // from, question_range[1], to, max, question_range[4], numQ  
                    setNumQ(30)
                    setSelect_Mode("total")
                    setWord_data({})
                    setSampleNo([])
                    setShowModal(false)
                    setQuizStart(false)
                    setCountDown_Ready(false)
                    setCountDown_60s(false)
                    setShowResult(false)
                    setNumCorrectAnswer1(0)
                    setNumCorrectAnswer2(0)
                    setNumCorrectAnswer3(0)
                }
              }
            >처음으로</button>
          </div>
        </div>
      )
    } else if (mode === "main"){
      return(
        <div className="row">
          <div className="col-lg-12 text-center">
            <h2 className="section-heading subpageHeading">Self Study.</h2>
            <p>매일매일 퀴즈를 풀며 수능을 정복해요!</p>
          </div>
        </div>
      )
    } else if (mode === "voca_2022_type_1"){
      return(
        <div className="row">
          <div className="col-lg-12 text-center">
            <h2 className="section-heading subpageHeading">1분의 벽</h2>
            <p>1분 동안 최대한 많은 문제를 풀어보세요!</p>
            <button className="submitButton"
              onClick={
                function(e){
                    setMode("voca_2022")
                    setQuizStart(false)
                    setShowResult(false)
                    setQuestion_range([1, 1, 1300, 1300, 60]) // from, question_range[1], to, max, question_range[4], numQ  
                    setNumQ(30)
                    setSelect_Mode("total")
                    setCountDown_Ready(false)
                    setCountDown_60s(false)
                    setShowResult(false)
                    setNumCorrectAnswer1(0)
                    setNumCorrectAnswer2(0)
                    setNumCorrectAnswer3(0)
                }
              }
            >이전으로</button>
          </div>
        </div>
      )
    } else if (mode === "voca_2022_type_2"){
      return(
        <div className="row">
          <div className="col-lg-12 text-center">
            <h2 className="section-heading subpageHeading">무한한 시간</h2>
            <p>{numQ}개의 퀴즈를 시간 제한 없이 풀어보세요!</p>
            <button className="submitButton"
              onClick={
                function(e){
                    setMode("voca_2022")
                    setQuizStart(false)
                    setShowResult(false)
                    setQuestion_range([1, 1, 1300, 1300, 60]) // from, question_range[1], to, max, question_range[4], numQ  
                    setNumQ(30)
                    setSelect_Mode("total")
                    setCountDown_Ready(false)
                    setCountDown_60s(false)
                    setShowResult(false)
                    setNumCorrectAnswer1(0)
                    setNumCorrectAnswer2(0)
                    setNumCorrectAnswer3(0)
                }
              }
            >이전으로</button>
          </div>
        </div>
      )
    }
  }

  const drawMain = () => {
    let soon = <div className="singleProjectContainer">
      <div className="singleProjectCard citation">
        <img className="projectImage" src="https://cdn.jsdelivr.net/gh/needleworm/ai_voca/src/images/books/covers/soon.jpg"  alt="projectimage"/>
        <div className="projectText">
          <h5>Coming Soon</h5>
          <div className="codeBody">
            <p className="bookDescription firstCommitDate">
              Last Update on ????.??.??.
            </p>
            <p className="bookDescription">
              Coning Soon....
            </p>
          </div>
        </div>
      </div>
    </div>

    let project1 = <div className="singleProjectContainer">
      <div className="singleProjectCard citation" 
        onClick={
          function(e){
            setMode("voca_2022")
            axios.get("https://raw.githubusercontent.com/needleworm/ai_voca/main/src/jsonData/2022_voca.json")
              .then(data => {
                  setWord_data(data.data)
                }
              )
            setQuizStart(false)
            setShowResult(false)
          }
        }>
        <img className="projectImage" src="https://cdn.jsdelivr.net/gh/needleworm/ai_voca/src/images/teacher_menu/1.jpg"  alt="projectimage"/>
        <div className="projectText">
          <h5>AI족집게 수능영단어</h5>
          <div className="codeBody">
            <p className="bookDescription firstCommitDate">
              Last Update on 2023.01.16.
            </p>
            <p className="bookDescription">
              AI가 족집게처럼 골라 준 단어만 공부하자!<br/>
              오늘은 몇 문제나 맞출 수 있을까? 조마조마한 단어 퀴즈 타임어택!<br/>
              책에 수록된 단어를 바탕으로 퀴즈 문제가 자동으로 생성됩니다.<br/>
              <strong>제공 모드</strong>: 1분의 벽, 무한한 시간
            </p>
          </div>
        </div>
      </div>
    </div>

    return(
      <div className="codeContainer">
        {project1}
        {soon}
      </div>
    )
  }

  const draw_2022_single_question_type1 = () => { // 문장 내 빈칸 채우기
    let word = word_data[sampleNo[currentIdx-1]]

    let samples = [
      word_data[Math.trunc(Math.random() * Object.keys(word_data).length) + 1].appearance,
      word_data[Math.trunc(Math.random() * Object.keys(word_data).length) + 1].appearance,
      word_data[Math.trunc(Math.random() * Object.keys(word_data).length) + 1].appearance,
      word.appearance
    ]
    
    samples.sort(() => Math.random() - 0.5);
    const correct: number = samples.indexOf(word.appearance) + 1

    return (
      <div className="singleQuiz_selfTest">
        <div className="testText fit_in">{word.translation}</div>
        <div className="testText fit_in">{word.sentence[0]} &nbsp;&nbsp;
        <span className="underlineBox">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span>
          &nbsp;&nbsp;
          {word.sentence[1]}
        </div>
        <div className="hubos_vertical">
          <span className="citation" onClick={
            function(){
              if (correct === 1){
                setNumCorrectAnswer1(numCorrectAnswer1 + 1)
              }
              if (currentIdx >= numQ) {
                setShowResult(true)
                setCountDown_60s(false)
              } else {
                setCurrentIdx(currentIdx + 1)
              }
            }
          }>
            (1) {samples[0]}
          </span>
          <span className="citation" onClick={
            function(){
              if (correct === 2){
                setNumCorrectAnswer1(numCorrectAnswer1 + 1)
              }
              if (currentIdx >= numQ) {
                setShowResult(true)
                setCountDown_60s(false)
              } else {
                setCurrentIdx(currentIdx + 1)
              }            
            }
          }>
            (2) {samples[1]}
          </span>
          <span className="citation" onClick={
            function(){
              if (correct === 3){
                setNumCorrectAnswer1(numCorrectAnswer1 + 1)
              }
              if (currentIdx >= numQ) {
                setShowResult(true)
                setCountDown_60s(false)
              } else {
                setCurrentIdx(currentIdx + 1)
              }
            }
          }>
            (3) {samples[2]}
          </span>
          <span className="citation" onClick={
            function(){
              if (correct === 4){
                setNumCorrectAnswer1(numCorrectAnswer1 + 1)
              }
              if (currentIdx >= numQ) {
                setShowResult(true)
                setCountDown_60s(false)
              } else {
                setCurrentIdx(currentIdx + 1)
              }
            }
          }>
            (4) {samples[3]}
          </span>
        </div>
      </div>
    )
  }

  const draw_2022_single_question_type2 = () => { // 의미 보고 빈 칸 채우기
    let word = word_data[sampleNo[currentIdx-1]]

    let samples = [
      word_data[Math.trunc(Math.random() * Object.keys(word_data).length) + 1].appearance,
      word_data[Math.trunc(Math.random() * Object.keys(word_data).length) + 1].appearance,
      word_data[Math.trunc(Math.random() * Object.keys(word_data).length) + 1].appearance,
      word.appearance
    ]
    
    samples.sort(() => Math.random() - 0.5);
    const correct: number = samples.indexOf(word.appearance) + 1

    return (
      <div className="singleQuiz_selfTest">
        <span className="testText  fit_in">{word.meaning} : &nbsp;&nbsp;
          <span className="underlineBox">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span>
        </span>
        <div className="hubos_vertical">
          <span className="citation" onClick={
            function(){
              if (correct === 1){
                setNumCorrectAnswer2(numCorrectAnswer2 + 1)
              }
              if (currentIdx >= numQ) {
                setShowResult(true)
                setCountDown_60s(false)
              } else {
                setCurrentIdx(currentIdx + 1)
              }
            }
          }>
            (1) {samples[0]}
          </span>
          <span className="citation" onClick={
            function(){
              if (correct === 2){
                setNumCorrectAnswer2(numCorrectAnswer2 + 1)
              }
              if (currentIdx >= numQ) {
                setShowResult(true)
                setCountDown_60s(false)
              } else {
                setCurrentIdx(currentIdx + 1)
              }
            }
          }>
            (2) {samples[1]}
          </span>
          <span className="citation" onClick={
            function(){
              if (correct === 3){
                setNumCorrectAnswer2(numCorrectAnswer2 + 1)
              }
              if (currentIdx >= numQ) {
                setShowResult(true)
                setCountDown_60s(false)
              } else {
                setCurrentIdx(currentIdx + 1)
              }
            }
          }>
            (3) {samples[2]}
          </span>
          <span className="citation" onClick={
            function(){
              if (correct === 4){
                setNumCorrectAnswer2(numCorrectAnswer2 + 1)
              }
              if (currentIdx >= numQ) {
                setShowResult(true)
                setCountDown_60s(false)
              } else {
                setCurrentIdx(currentIdx + 1)
              }
            }
          }>
            (4) {samples[3]}
          </span>
        </div>
      </div>
    )
  }

  const draw_2022_single_question_type3 = () => { // 단어 보고 의미 찾기
    let word = word_data[sampleNo[currentIdx-1]]

    let samples = [
      word_data[Math.trunc(Math.random() * Object.keys(word_data).length) + 1].meaning,
      word_data[Math.trunc(Math.random() * Object.keys(word_data).length) + 1].meaning,
      word_data[Math.trunc(Math.random() * Object.keys(word_data).length) + 1].meaning,
      word.meaning
    ]
    
    samples.sort(() => Math.random() - 0.5);
    const correct: number = samples.indexOf(word.appearance) + 1

    return (
      <div className="singleQuiz_selfTest">
        <span className="testText fit_in">{word.word} : &nbsp;&nbsp;
          <span className="underlineBox">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span>
        </span>
        <div className="hubos_vertical">
          <span className="citation" onClick={
            function(){
              if (correct === 1){
                setNumCorrectAnswer3(numCorrectAnswer3 + 1)
              }
              if (currentIdx >= numQ) {
                setShowResult(true)
                setCountDown_60s(false)
              } else {
                setCurrentIdx(currentIdx + 1)
              }
            }
          }>
            (1) {samples[0]}
          </span>
          <span className="citation" onClick={
            function(){
              if (correct === 2){
                setNumCorrectAnswer3(numCorrectAnswer3 + 1)
              }
              if (currentIdx >= numQ) {
                setShowResult(true)
                setCountDown_60s(false)
              } else {
                setCurrentIdx(currentIdx + 1)
              }
            }
          }>
            (2) {samples[1]}
          </span>
          <span className="citation" onClick={
            function(){
              if (correct === 3){
                setNumCorrectAnswer3(numCorrectAnswer3 + 1)
              }
              if (currentIdx >= numQ) {
                setShowResult(true)
                setCountDown_60s(false)
              } else {
                setCurrentIdx(currentIdx + 1)
              }
            }
          }>
            (3) {samples[2]}
          </span>
          <span className="citation" onClick={
            function(){
              if (correct === 4){
                setNumCorrectAnswer3(numCorrectAnswer3 + 1)
              }
              if (currentIdx >= numQ) {
                setShowResult(true)
                setCountDown_60s(false)
              } else {
                setCurrentIdx(currentIdx + 1)
              }
            }
          }>
            (4) {samples[3]}
          </span>
        </div>
      </div>
    )
  }

  const draw_quiz_series_2022 = () => {
    if (currentIdx % 3 === 0) {
      return (
        <div className="singleQuizOnPage">
          {draw_2022_single_question_type1()}
        </div>
      )
    } else if (currentIdx % 3 === 1) {
      return (
        <div className="singleQuizOnPage">
          {draw_2022_single_question_type2()}
        </div>
      )
    } else if (currentIdx % 3 === 2) {
      return (
        <div className="singleQuizOnPage">
          {draw_2022_single_question_type3()}
        </div>
      )
    }
  }

  const drawToSNSButton = () => {

  }

  const draw_test_result = () => {
    const options1 = {
      legend:{
        display: true,
        position: "bottom"
      },
      elements:{
        arc:{
          borderWidth: 2
        }
      }
    }

    const data1 = {
      labels: [
        '정답', 
        '오답', 
      ],
      datasets: [
        {
          data: [numCorrectAnswer1 + numCorrectAnswer2 + numCorrectAnswer3, currentIdx - (numCorrectAnswer1 + numCorrectAnswer2 + numCorrectAnswer3)],
          backgroundColor: [
            'rgba(255, 206, 86, 0.5)',
            'gray',
          ],
          borderWidth: 5,
        },
      ],
    }

    const options2 = {
      legend:{
        display: true,
        position: "bottom"
      },
      elements:{
        arc:{
          borderWidth: 2
        }
      }
    }

    const data2 = {
      labels: [
        '단어 찾기', 
        '의미 찾기',
        '문장 완성', 
      ],
      datasets: [
        {
          data: [numCorrectAnswer1, numCorrectAnswer2, numCorrectAnswer3],
          borderWidth: 5,
        },
      ],
    }


    const resultChart = <div className="resultChartArea">
      <Doughnut data={data1} options={options1}/>
      정답률 {Math.trunc((numCorrectAnswer1 + numCorrectAnswer2 + numCorrectAnswer3) / currentIdx * 100)}%
    </div>

    const areaChart = <div className="resultChartArea">
      <PolarArea data={data2} options={options2}/>
      유형별 정답 개수
    </div>


    return(
      <div className="quizResultSummary">
        <h4>테스트 종료!</h4>
        <p>60초 동안 {currentIdx -1} 문제를 풀었습니다!</p>
        <div className="chartGrid">
          {resultChart}
          {areaChart}
        </div>
      </div>
    )
  }


  const draw_2022_type_1 = () => {
    let selectOptionButton = <button className="submitButton"
      onClick={
        function(e){
          openModal()
          setQuizStart(false)
          setShowResult(false)
        }
      }
    >Custom Range!</button>

    let quickStartButton = <button className="submitButton"
      onClick={
        function(e){
          setQuizStart(true)
          generate_quiz_set()
          setCountDown_Ready(true)
        }
      }
    >Quick Start!</button>

    const countdown_3s = <div className="countdown_3s">
      <div className="quizHead"></div>
      <CountdownCircleTimer
        isPlaying
        duration={3}
        colors={["#004777", "#F7B801", "#A30000", "#F7B801", "#004777", "#F7B801", "#A30000"]}
        colorsTime={[3, 2.5, 2, 1.5, 1, 0.5, 0]}
        onComplete={() => {
          setCountDown_Ready(false)
          setCountDown_60s(true)
        }}
        size={250}
        strokeWidth={30}
        trailStrokeWidth={30}
      >
        { renderTime_ready }
      </CountdownCircleTimer>
    </div>

    const countdown_60s = <div className="countdown_60s">
      <CountdownCircleTimer
        isPlaying
        duration={60}
        colors={[
          "#004777", "#F7B801", "#A30000", "#F7B801", "#004777", "#F7B801", "#A30000", "#F7B801", "#A30000", "#F7B801", 
          "#A30000", "#F7B801", "#004777", "#F7B801", "#A30000", "#F7B801", "#A30000", "#F7B801", "#004777", "#F7B801", 
          "#004777", "#F7B801", "#A30000", "#F7B801", "#A30000", "#F7B801", "#004777", "#F7B801", "#A30000", "#F7B801", 
          "#A30000", "#F7B801", "#A30000", "#F7B801", "#004777", "#F7B801", "#A30000", "#F7B801", "#A30000", "#F7B801",
          "#004777", "#F7B801", "#A30000", "#F7B801", "#A30000", "#F7B801", "#004777", "#F7B801", "#A30000", "#F7B801", 
          "#A30000", "#F7B801", "#004777", "#F7B801", "#A30000", "#F7B801", "#A30000", "#F7B801", "#004777", "#F7B801", 
          "#004777", "#F7B801", "#A30000", "#F7B801", "#A30000", "#F7B801", "#004777", "#F7B801", "#A30000", "#F7B801", 
          "#A30000", "#F7B801", "#A30000", "#F7B801", "#004777", "#F7B801", "#A30000", "#F7B801", "#A30000", "#F7B801", 
          "#A30000"]}
        colorsTime={[
          60, 59.5,  59, 58.5,  58, 57.5,  57, 56.5,  56, 55.5,
          55, 54.5,  54, 53.5,  53, 52.5,  52, 51.5,  51, 50.5,
          50,   49,  48,   47,  46,   45,  44,   43,  42,   41,
          40,   39,  38,   37,  36,   35,  34,   33,  32,   31,
          30,   29,  28,   27,  26,   25,  24,   23,  22,   21,
          20,   19,  18,   17,  16,   15,  14,   13,  12,   11,
          10,  9.5,   9,  8.5,   8,  7.5,   7,  6.5,   6,  5.5, 
           5,  4.5,   4,  3.5,   3,  2.5,   2,  1.5,   1,  0.5,
           0
        ]}
        onComplete={() => {
          setCountDown_Ready(false)
          setCountDown_60s(false)
          setShowResult(true)
        }}
        size={70}
        strokeWidth={10}
        trailStrokeWidth={10}
      >
        { renderTime_60s }
      </CountdownCircleTimer>
    </div>

    
    if (!quizStart){// 퀴즈 세부값 세팅 모달
      return ( 
        <div className="codeContainer">
          <div className="quizGenerator">
            <div className="col-lg-12 text-center">
              {quickStartButton}<br/><br/><br/>
              {selectOptionButton}
              <Modal id="singleQuizSelectorModal" isOpen={showModal} onRequestClose={closeModal}
                overlayClassName="overlay" className="singleQuizSelectorModal text-center"
              >
                {draw_quiz_setting_modal()}
              </Modal>
            </div>
          </div>
        </div>
      )
    } else if (countDown_Ready) { // 레디!
      return (
        <div className="quizContainer">
          <div className="quizGenerator">
            <div className="col-lg-12 text-center ">
              {countdown_3s}
            </div>
          </div>
        </div>
      )
    } else if (countDown_60s && !showResult) { // 60초동안 퀴즈 푸는화면
      return (
        <div className="quizContainer">
          <div className="quizGenerator">
            <div className="col-lg-12">
              <div className="quizHead">
                {countdown_60s}
              </div>
              {draw_quiz_series_2022()}
            </div>
          </div>
        </div>
      )
    } else if (showResult) { // 결과창
      return (
        <div className="quizHead  text-center ">
          {draw_test_result()}
        </div>
      )
    }
  }


  const draw_2022_type_2 = () => {
    let selectOptionButton = <button className="submitButton"
      onClick={
        function(e){
          openModal()
          setQuizStart(false)
          setShowResult(false)
        }
      }
    >Custom Range!</button>

    let quickStartButton = <button className="submitButton"
      onClick={
        function(e){
          setQuizStart(true)
          generate_quiz_set()
          setCountDown_Ready(true)
        }
      }
    >Quick Start!</button>

    const countdown_3s = <div className="countdown_3s">
      <div className="quizHead"></div>
      <CountdownCircleTimer
        isPlaying
        duration={3}
        colors={["#004777", "#F7B801", "#A30000", "#F7B801", "#004777", "#F7B801", "#A30000"]}
        colorsTime={[3, 2.5, 2, 1.5, 1, 0.5, 0]}
        onComplete={() => {
          setCountDown_Ready(false)
        }}
        size={250}
        strokeWidth={30}
        trailStrokeWidth={30}
      >
        { renderTime_ready }
      </CountdownCircleTimer>
    </div>


    if (!quizStart){// 퀴즈 세부값 세팅 모달
      return ( 
        <div className="codeContainer">
          <div className="quizGenerator">
            <div className="col-lg-12 text-center">
              {quickStartButton}<br/><br/><br/>
              {selectOptionButton}
              <Modal id="singleQuizSelectorModal" isOpen={showModal} onRequestClose={closeModal}
                overlayClassName="overlay" className="singleQuizSelectorModal text-center"
              >
                {draw_quiz_setting_modal()}
              </Modal>
            </div>
          </div>
        </div>
      )
    } else if (countDown_Ready) { // 레디!
      return (
        <div className="quizContainer">
          <div className="quizGenerator">
            <div className="col-lg-12 text-center ">
              {countdown_3s}
            </div>
          </div>
        </div>
      )
    } else if (!showResult) { // 시간제한없이 퀴즈 푸는화면
      return (
        <div className="quizContainer">
          <div className="quizGenerator">
            <div className="col-lg-12">
              <div className="quizHead">
              </div>
              {draw_quiz_series_2022()}
            </div>
          </div>
        </div>
      )
    } else if (showResult) { // 결과창
      return (
        <div className="quizHead  text-center ">
          {draw_test_result()}
        </div>
      )
    } 
  }


  const draw_voca_2022 = () => {


    let typeSelector = <div className="selectorForTestGen">
      <strong className="col-lg-12 text-center">퀴즈 유형을 선택해주세요</strong><br/><br/>
      <div className="testTypeSelector1">
        <div className="text-center checkOptions citation" 
            onClick={
              function(e){
                setMode("voca_2022_type_1")
                setQuizStart(false)
              }
          }>
          <img className="testSelectorItem" src="https://cdn.jsdelivr.net/gh/needleworm/ai_voca/src/images/student_menu/type_1.jpg" alt="quiz_type 1"/>
          <span>1분의 벽</span>
        </div>

        <div className="text-center checkOptions citation"
            onClick={
              function(e){
                setMode("voca_2022_type_2")
                setQuizStart(false)
                setNumQ(30)
              }
          }>
          <img className="testSelectorItem" src="https://cdn.jsdelivr.net/gh/needleworm/ai_voca/src/images/student_menu/type_2.jpg" alt="quiz_type 2"/>
          <span>무한한 시간</span>
        </div>
      </div>
    </div>


    return (
      <div className="codeContainer">
        <div className="quizGenerator">
          <div className="col-lg-12 text-center">
            {typeSelector}
          </div>
        </div>
      </div>
    )
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
    } else if (mode === "voca_2022_type_1"){
      return (
        <div className="quizPrintContainer">
          {draw_2022_type_1()}
        </div>
      )
    } else if (mode === "voca_2022_type_2"){
      return (
        <div className="quizPrintContainer">
          {draw_2022_type_2()}
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
  
export default SelfTest;