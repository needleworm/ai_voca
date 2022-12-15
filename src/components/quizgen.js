import React, {Component} from 'react';
import './codes.css';
import { TextField, MenuItem } from "@material-ui/core"
import axios from 'axios';
import Modal from 'react-modal';
import html2canvas from 'html2canvas';
import jsPDF from "jspdf";
import LOGOFILE from "../images/logo.png";

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

const sample_words = {
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

class Quizgen extends Component {
  constructor(props){
    super(props);
    this.state = {
      mode: "voca_2022",  /*  main
                              voca_2022
                          */
      logged_in: true,
      select_mode: "index",
      from: 1,
      to:1300,
      min: 1,
      max: 1300,
      maxQ: 1300,
      numQ: 30, //0,
      option1: true,
      option2: true,
      option3: true,
      option4: true,
      gen_result: true, //false
      title: "수능 영단어 퀴즈",
      showModal: true,
      sample_no: [
        [1, 2, 1, 2, 1, 1],
        [1, 2, 2, 2, 2, 2,],
        [1, 1, 2, 1, 1, 1,],
        [2, 1, 2, 2, 2, 2,]
      ]
    }

    this.handleCloseModal = this.closeModal.bind(this)
    this.handleOpenModal = this.openModal.bind(this)
  }

  closeModal(){
    this.setState({
      showModal: false
    })
  }

  openModal(){
    this.setState({
      showModal: true
    })
  }

  prepare_2022_voca_test () {

  }


  sectionTitle(){
    if (this.state.mode !== "main"){
      return(
        <div className="row">
          <div className="col-lg-12 text-center">
            <h2 className="section-heading subpageHeading">Test Gen.</h2>
            <p>시험문제 자동 출제 시스템</p>
            <button className="submitButton"
              onClick={
                function(e){
                  this.setState({
                    mode: "main",
                    logged_in: false,
                    select_mode: "index",
                    from: 1,
                    to:1300,
                    min: 1,
                    max: 1300,
                    maxQ: 1300,
                    numQ: 0,
                    options: "",
                    gen_result: false
                  })           
                }.bind(this)
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

  drawMain(){
    let project1 = <div className="singleProjectContainer">
      <div className="singleProjectCard citation" 
        onClick={
          function(e){
            this.setState({
              mode:"voca_2022",
              logged_in: false,
              title:"수능 영단어 퀴즈"
            })
            this.closeSideMenu()
          }.bind(this)
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

  draw_rangeSelector_2022voca(){
    let selector1 = <TextField select label="구분" className="itemSelectorBox" value={this.state.select_mode}
      onChange={
        function(e){
          if (e.target.value === "total"){
            this.setState({
              select_mode: "total",
              from: 1,
              to: 1300,
              maxQ: 1300
            })
          } else if (e.target.value === "index"){
            this.setState({
              select_mode: e.target.value,
              min:1,
              max:1300,
            })
          } else if (e.target.value === "part"){
            this.setState({
              select_mode: e.target.value,
              min:1,
              max:4,
              from:1,
              to:4
            })
          } else if (e.target.value === "day"){
            this.setState({
              select_mode: e.target.value,
              min:1,
              max:45,
              from:1,
              to:45
            })
          }
        }.bind(this)
      }
    >
      <MenuItem value={"day"} key={"day"}>Day</MenuItem>
      <MenuItem value={"part"} key={"part"}>Part</MenuItem>
      <MenuItem value={"index"} key={"index"}>Index</MenuItem>
      <MenuItem value={"total"} key={"total"}>책 전체</MenuItem>
    </TextField>

    let selector2 = <TextField type="number" label="~부터" className="itemSelectorBox" value={this.state.from}
          InputProps={{ inputProps: { min: this.state.min, max: this.state.max } }}
          onChange={
            function(e){
              this.setState({
                from: Number(e.target.value)
              })
            }.bind(this)
          }
        />

    let selector3 =  <TextField type="number" label="~까지" className="itemSelectorBox" value={this.state.to}
        InputProps={{ inputProps: { min: this.state.min, max: this.state.max } }}
          onInput={
            function(e){
              var L = Number(e.target.value)
              if (this.state.select_mode === "index"){
                this.setState({
                  to: L,
                  maxQ: L + 1 - this.state.from
                })
              } else if (this.state.select_mode === "day"){
                this.setState({
                  to: L,
                  maxQ: day_words.slice(this.state.from, L + 1).reduce((a,b) => (a+b))
                })
              } else if (this.state.select_mode === "part"){
                this.setState({
                  to: L,
                  maxQ: num_words.slice(this.state.from, L + 1).reduce((a,b) => (a+b))
                })
              } else {
                this.setState({
                  to: L,
                  maxQ: 0
                })
              }
            }.bind(this)
          }
        />
    
    let numQSelector = <div className="separ2">
      <strong className="col-lg-12 text-center">총 몇 문제를 출제할까요?</strong><br/><br/>
      최대 <u>{this.state.maxQ}</u> 개의 문제를 출제할 수 있습니다.
      <TextField type="number" label="문항 개수" className="itemSelectorBox" value={this.state.numQ}
          onChange={
            function(e){
              this.setState({
                numQ: Number(e.target.value)
              })
            }.bind(this)
          }
        />
      <br/><br/><br/><br/>

      <strong className="col-lg-12 text-center">시험지 제목을 입력해주세요</strong><br/><br/>
      <TextField type="text" label="시험지 제목" className="itemSelectorBox" value={this.state.title}
          onChange={
            function(e){
              this.setState({
                title: e.target.value
              })
            }.bind(this)
          }
        />
    </div>

    if (this.state.select_mode === "total") {
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
          {this.state.min}부터 {this.state.max}까지 선택하실 수 있습니다.<br/><br/>
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

  draw_2022_type_1(idx) {
    let word = sample_words[idx]

    return (
      <li className="singleQuiz">
        <span className="testText">{word.word} : &nbsp;&nbsp;
        <span className="underlineBox">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span>
        </span>
      </li>
    )
  }

  draw_2022_type_2(idx) {
    let word = sample_words[idx]

    return (
      <li className="singleQuiz">
        <span className="testText">{word.meaning} : &nbsp;&nbsp;
        <span className="underlineBox">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span>
        </span>
      </li>
    )
  }

  draw_2022_type_3(idx) {
    let word = sample_words[idx]

    let samples = [
      sample_words[parseInt(Math.random() * Object.keys(sample_words).length) + 1].word,
      sample_words[parseInt(Math.random() * Object.keys(sample_words).length) + 1].word,
      sample_words[parseInt(Math.random() * Object.keys(sample_words).length) + 1].word,
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

  draw_2022_type_4(idx) {
    let word = sample_words[idx]

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

  draw_2022_voca_printable_page() {
    let modalCloseButton = <button className="submitButton mdbutton"
        onClick={this.handleCloseModal}
      >창 닫기</button>

    let testPDF = <button className="submitButton mdbutton"
        onClick={
          function(e){
            html2canvas(document.querySelector(".insideModalField"))
              .then(canvas => {
                let today = new Date()
                let year = today.getFullYear()
                let month = ('0' + (today.getMonth() + 1)).slice(-2)
                let day = ('0' + today.getDate()).slice(-2)
                let dateString = year + '-' + month  + '-' + day
                let imgData = canvas.toDataURL('image/png')

                let filename = dateString + " 수능영단어 시험지.pdf"
                let doc = new jsPDF('p', 'mm', 'a4')

                let pageWidth = 210
                let pageHeight = 297

                let padding = 75 * pageWidth / canvas.width

                let imgHeight = canvas.height * pageWidth / canvas.width
                var heightLeft = imgHeight

                let currentPageHeight = 0 

                let elementHeights = []
                elementHeights = elementHeights.concat(padding)
                elementHeights = elementHeights.concat(266 * pageWidth / canvas.width * 2690/1245)

                // 문제의 높이만큼 삽입
                if (this.state.option1){
                  elementHeights = elementHeights.concat(80 * pageWidth / canvas.width * 2690/1245)
                  this.state.sample_no[0].map(function(){
                    elementHeights = elementHeights.concat(75 * pageWidth / canvas.width * 2690/1245)
                    return NaN
                  })
                }if (this.state.option2){
                  elementHeights = elementHeights.concat(80 * pageWidth / canvas.width * 2690/1245)
                  this.state.sample_no[1].map(function(){
                    elementHeights = elementHeights.concat(75 * pageWidth / canvas.width * 2690/1245)
                    return NaN
                  })
                }if (this.state.option3){
                  elementHeights = elementHeights.concat(80 * pageWidth / canvas.width * 2690/1245)
                  this.state.sample_no[2].map(function(){
                    elementHeights = elementHeights.concat(180 * pageWidth / canvas.width * 2690/1245)
                    return NaN
                  })
                }if (this.state.option4){
                  elementHeights = elementHeights.concat(80 * pageWidth / canvas.width * 2690/1245)
                  this.state.sample_no[3].map(function(){
                    elementHeights = elementHeights.concat(80 * pageWidth / canvas.width * 2690/1245)
                    return NaN
                  })
                }

                elementHeights.reverse()

                // 무한루프 생겼음
                while (heightLeft >= 0){
                  while (currentPageHeight + padding * 2 < pageHeight){
                    if (elementHeights.length === 0){
                      break
                    } else if (currentPageHeight + elementHeights[elementHeights.length-1] < pageHeight - padding * 2){
                      currentPageHeight += elementHeights.pop()
                    } else {
                      currentPageHeight = 0
                      break
                    }
                  }

                  if (currentPageHeight === 0){
                    break
                  }
                  currentPageHeight = parseInt(currentPageHeight)
                  doc.addImage(imgData, "PNG", padding, heightLeft - imgHeight, pageWidth - padding * 2, imgHeight)
                  heightLeft -= currentPageHeight
                  if (heightLeft > 0){
                    doc.addPage()
                  }
                }
                doc.save(filename); 
              }
            )
          }.bind(this)
        }
      >시험지 PDF</button>

    let infogrid = <div className="infoGrid">
      <p>데스크톱 컴퓨터 또는 태블릿 PC 사용을 권장합니다.</p>
      <div className="buttonArrayGrid">
        {testPDF}
        {modalCloseButton}
      </div>
    </div>

    let headerGrid = <div className="testHeaderGrid">
      <img src={LOGOFILE} className="linear_logo" alt="균형감각"/>
      <span className="text-center testTitle">{this.state.title}</span>
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

    if (this.state.option1){
      Q1 = <div>
        <strong className="singleQuiz"><br/><br/><br/>주어진 단어의 의미를 빈 칸에 적어주세요.<br/><br/><br/></strong>
        {this.state.sample_no[0].map(function(idx){
                    return this.draw_2022_type_1(idx)
                  }.bind(this))
        }
      </div>
    }

    if (this.state.option2){
      Q2 = <div>
        <strong className="singleQuiz"><br/><br/><br/>주어진 의미에 해당하는 단어를 빈 칸에 적어주세요.<br/><br/><br/></strong>
        {this.state.sample_no[1].map(function(idx){
                    return this.draw_2022_type_2(idx)
                  }.bind(this))
        }
      </div>
    }

    if (this.state.option3){
      Q3 = <div>
        <strong className="singleQuiz"><br/><br/><br/>주어진 문장의 빈칸에 가장 알맞는 단어를 고르세요.<br/><br/><br/></strong>
        {this.state.sample_no[2].map(function(idx){
                    return this.draw_2022_type_3(idx)
                  }.bind(this))
        }
      </div>
    }

    if (this.state.option4){
      Q4 = <div>
        <strong className="singleQuiz"><br/><br/><br/>주어진 문장의 빈칸에 가장 알맞는 단어를 적으세요.<br/><br/><br/></strong>
        {this.state.sample_no[3].map(function(idx){
                    return this.draw_2022_type_4(idx)
                  }.bind(this))
        }
      </div>
    }

    return(
      <div className="modalField">
        {infogrid}
        <div className="insideModalField">
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

  draw_voca_2022(){
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
                  this.setState({
                    logged_in: true,
                    word_data: data,
                    totalRange: false
                  })
                })
              }
            }.bind(this)
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
              this.setState({
                option1: !this.state.option1
              })
            }.bind(this)
          }/>
          <label for="checker1_1">영단어와 빈칸</label>
        </div>
        <div className="text-center checkOptions">
          <img className="testSelectorItem" src="https://cdn.jsdelivr.net/gh/needleworm/needleworm.github.io/src/images/books/covers/2.jpg" alt="quiz_type[0]"/>
          <input type="checkbox" name="checker1" id="checker1_2" onClick={
            function(e){
              this.setState({
                option2: !this.state.option2
              })
            }.bind(this)
          }/>
          <label for="checker1_2">빈칸과 한글 의미</label>
        </div>
        <div className="text-center checkOptions">
          <img className="testSelectorItem" src="https://cdn.jsdelivr.net/gh/needleworm/needleworm.github.io/src/images/books/covers/3.jpg" alt="quiz_type[0]"/>
          <input type="checkbox" name="checker1" id="checker1_3" onClick={
            function(e){
              this.setState({
                option3: !this.state.option3
              })
            }.bind(this)
          }/>
          <label for="checker1_3">문장 내 빈칸채우기 (객관식)</label>
        </div>
        <div className="text-center checkOptions">
          <img className="testSelectorItem" src="https://cdn.jsdelivr.net/gh/needleworm/needleworm.github.io/src/images/books/covers/4.jpg" alt="quiz_type[0]"/>
          <input type="checkbox" name="checker1" id="checker1_4" onClick={
            function(e){
              this.setState({
                option4: !this.state.option4
              })
            }.bind(this)
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
            if (! (this.state.option1 || this.state.option2 || this.state.option3 || this.state.option4)){
              alert("1개 이상의 시험 유형을 선택해주세요.")
            } else if (this.state.from < this.state.min){
              alert("출제 시작값이 너무 작습니다.")
            } else if (this.state.to > this.state.max){
              alert("출제 종료값이 너무 큽니다.")
            } else if (this.state.from >= this.state.to){
              alert("출제 시작값보다 종료값이 커야 합니다.")
            } else{
              this.setState({
                gen_result: true,
                showModal: true
              })
              this.prepare_2022_voca_test()
            }
          }.bind(this)
        }
      >시험지 생성</button>
    </div>

    if (this.state.logged_in){
      if (! (this.state.option1 || this.state.option2 || this.state.option3 || this.state.option4)){
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
      else if (this.state.numQ <= 0){
        return(
          <div className="codeContainer">
            <div className="quizGenerator">
              <div className="col-lg-12 text-center">
                {typeSelector}
                <div className="separator"/>
                {this.draw_rangeSelector_2022voca()}
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
                {this.draw_rangeSelector_2022voca()}
                <div className="separator"/>
              </div>
            </div>
            {test_gen_button}
            <Modal id="modalForTest" isOpen={this.state.showModal} onRequestClose={this.handleCloseModal}
              overlayClassName="overlay" className="ModalPrintPage"
            >
              {this.draw_2022_voca_printable_page()}
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

  drawWebsites(){
    if (this.state.mode === "main"){
      return (
        <div className="websitesContainer">
          {this.drawMain()}
        </div>
      )
    } else if (this.state.mode === "voca_2022"){
      return (
          <div className="quizPrintContainer">
            {this.draw_voca_2022()}
          </div>
        )
    }
  }

  render() {
    return (
      <section id="quizgen" className="animated bounceInDown">
          {this.sectionTitle()}
          {this.drawWebsites()}
      </section>
    );
  }
}
  
export default Quizgen;