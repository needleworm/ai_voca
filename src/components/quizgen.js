import React, {Component} from 'react';
import './codes.css';
import { TextField } from "@material-ui/core"


const hashCode = function(s){
  return s.replaceAll("-", "").split("").reduce(function(a,b){a=((a<<5)-a)+b.charCodeAt(0);return a&a},0);              
}

class Quizgen extends Component {
  constructor(props){
    super(props);
    this.state = {
      mode: "voca_2022",
      /*
        main
        voca_2022
      */
     logged_in: true,
     serial : ""
    }
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
                    serial: ""
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
              mode:"voca_2022"
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

  draw_voca_2022(){
    const hashed = -1693770398

    let login = <div className="quizGenerator">
      <div className="col-lg-12 text-center">
      <p>
        도서와 함께 제공된 시리얼을 입력하세요<br/>
        <TextField label="XXXX-XXXX-XXXX-XXXX" fullwidth={true} className="getSerial"
          onChange={
            function(e){
              this.setState({
                serial: e.target.value
              })
            }.bind(this)
          }
        />
      </p>
      <button className="submitButton"
        onClick={
          function(e){
            e.preventDefault()
            if (hashed !== hashCode(this.state.serial)){
              alert("올바른 인증키가 아닙니다!")
            } else {
              this.setState({
                logged_in : true
              })
            }
          }.bind(this)
        }
      >Access</button>
      </div>
    </div>

    let quiz_2022 = <div className="quizGenerator">
      <div className="col-lg-12 text-center">
        <p>퀴즈 생성을 위한 옵션을 설정해주세요</p>
      </div>
    </div>

    if (this.state.logged_in){
      return(
        <div className="codeContainer">
          {quiz_2022}
        </div>
      )
    } else{
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
        <div className="websitesContainer">
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