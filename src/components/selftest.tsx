import React, { useRef, useState } from 'react';
import './selfTest.css';
import { TextField, MenuItem } from "@mui/material"
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

const hashCode = (s: string) => {
  return s.replaceAll("-", "").split("").reduce(function(a,b){a=((a<<5)-a)+b.charCodeAt(0);return a&a},0);              
}


const num_words = [0, 692, 223, 280, 105]

function Quizgen () {
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

  type SampleNoType = [
    number[], number[], number[], number[]
  ]


  const [mode, setMode] = useState("main")    /*  main
                                          voca_2022
                                        */
  const [select_mode, setSelect_Mode] = useState("none") // none, type_1, type_2
  const [question_range, setQuestion_range] = useState([1, 1, 1300, 1300, 1300, 30]) // from, min, to, max, maxQ, numQ 
  const [word_data, setWord_data] = useState<WordDataType>({})
  const [options, setOptions] = useState([false, false, false, false]) // false false false false
  const [showModal, setShowModal] = useState(false) //false
  const [title, setTitle] = useState("") // ""
  const [sample_no, setSampleNo] = useState<SampleNoType>([[], [], [], []]) // type 1, 2, 3, 4
  const ref = useRef<HTMLDivElement>(null)
  

  const closeModal = () => {
    setShowModal(false)
  }

  const openModal = () => {
    setShowModal(true)
  }

  const prepare_2022_voca_test = () => {
    let totalSamples: number[] = [] //전체 범위의 모집합
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

      totalSamples = Array.from(
        {length: day_end_idx[question_range[2]] - day_start_idx[question_range[0]] + 1}, (v, i) => i + day_start_idx[question_range[0]]
      )
    }

    let types_1: number[] = []
    let types_2: number[] = []
    let types_3: number[] = []
    let types_4: number[] = []
   
    totalSamples.sort(() => Math.random() - 0.5);

    if (question_range[5] > question_range[4]) { // numQ > maxQ
      totalSamples = totalSamples.concat(totalSamples.slice(0, question_range[5] - question_range[4]))
    } else {
      totalSamples = totalSamples.slice(0, question_range[5])
    }

    let ticket: number[] = []
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
      tk = ticket[Math.trunc(Math.random() * ticket.length)]
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
                    setSelect_Mode("none")
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
            <h2 className="section-heading subpageHeading">Self Study.</h2>
            <p>매일매일 퀴즈를 풀며 수능을 정복해요!</p>
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
              setTitle("AI 족집게 수능영단어")
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
              오늘의 나는 몇 문제나 맞출 수 있을까? 조마조마한 단어 퀴즈 타임어택!<br/>
              책에 수록된 단어를 바탕으로 퀴즈 문제가 자동으로 생성됩니다.<br/>
              <strong>제공 모드</strong>: 1분의 벽, 타임어택 챌린지
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

  const draw_2022_type_1 = (idx: number | string) => {
    let word = word_data[String(idx)]

    return (
      <li className="singleQuiz">
        <span className="testText">{word.word} : &nbsp;&nbsp;
        <span className="underlineBox">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span>
        </span>
      </li>
    )
  }

  const draw_2022_type_2 = (idx: number | string) => {
    let word = word_data[idx]

    return (
      <li className="singleQuiz">
        <span className="testText">{word.meaning} : &nbsp;&nbsp;
        <span className="underlineBox">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span>
        </span>
      </li>
    )
  }


  const draw_voca_2022 = () => {
    const dataUrl = "https://raw.githubusercontent.com/needleworm/ai_voca/main/src/jsonData/2022_voca.json"

    let typeSelector = <div className="selectorForTestGen">
      <strong className="col-lg-12 text-center">퀴즈 유형을 선택해주세요</strong><br/><br/>
      <div className="testTypeSelector1">
        <div className="text-center checkOptions" 
            onClick={
              function(e){
                setSelect_Mode("type_1")
              }
          }>
          <img className="testSelectorItem" src="https://cdn.jsdelivr.net/gh/needleworm/ai_voca/src/images/teacher_menu/type_1.jpg" alt="quiz_type 1"/>
          <span>1분의 벽</span>
        </div>

        <div className="text-center checkOptions"
            onClick={
              function(e){
                setSelect_Mode("type_2")
              }
          }>
          <img className="testSelectorItem" src="https://cdn.jsdelivr.net/gh/needleworm/ai_voca/src/images/teacher_menu/type_2.jpg" alt="quiz_type 2"/>
          <span>타임어택 챌린지</span>
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