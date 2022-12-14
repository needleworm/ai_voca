import React, {Component} from 'react';
import './App.css';
import Books from "./components/books"
import Selftest from "./components/selftest"
import Quizgen from "./components/quizgen"
import Reading from "./components/reading"
import Papers from "./components/papers"
import Contact from "./components/contact"


class App extends Component {
  constructor(props){
    super(props);
    
    this.state = {
      latestButton:"none",  /*  none
                                books
                                selftest
                                codes
                                research
                                contact   
                            */
      content:"none",
    }
    this.closeSideMenu = this._closeSideMenu.bind(this)
    this.openSideMenu = this._openSideMenu.bind(this)
  }

  _closeSideMenu(){
    let contentWrapper = document.querySelector('.content-wrapper')
    if (!contentWrapper.classList.contains('showing')){
      return
    }

    let panelCover = document.querySelector('.panel-cover')
    panelCover.classList.remove('panel-cover--collapsed')
    panelCover.style.maxWidth = '100%'

    let window = document.querySelector('html')

    let currentWidth = window.clientWidth
    if (currentWidth > 800){
      panelCover.animate(
        [ // Keyframes
          {'max-width': '530px', 'width': '30%'}, // from
          {'width': '100%'}, // to
        ], { // options
          duration: 400,
          easing: 'ease-in-out'
        } 
      )
    } else {
      panelCover.animate(
        [ // Keyframes
          {'height': '30%'}, // from
          {'height': '100%'}, // to
        ], { // options
          duration: 400,
          easing: 'ease-in-out'
        } 
      )
    }
    contentWrapper.classList.remove('showing')
    this.setState({
      latestButton: "none",
      content: "none"
    })
  }

  _openSideMenu(){
    let contentWrapper = document.querySelector('.content-wrapper')
    if (contentWrapper.classList.contains('showing')){
      return
    }

    let panelCover = document.querySelector('.panel-cover')
    panelCover.classList.add('panel-cover--collapsed')

    let window = document.querySelector('html')

    let currentWidth = window.clientWidth
    if (currentWidth > 800){
      panelCover.animate(
        [ // Keyframes
          {'width': '100%'}, // from
          {'max-width': '530px', 'width': '40%'}, // to
        ], { // options
          duration: 400,
          easing: 'ease-in-out'
        } 
      )
    } else {
      panelCover.animate(
        [ // Keyframes
          {'height': '100%'}, // to
          {'height': '40%'}, // from
        ], { // options
          duration: 400,
          easing: 'ease-in-out'
        } 
      )
      
    }
    contentWrapper.classList.add('showing')
  }

  drawHeader(){
    let profilePicButton = <a href="#home" title="Home">
      <img src="https://cdn.jsdelivr.net/gh/needleworm/ai_voca/src/images/profile_pic.gif" className="user-image" alt="My Profile"
        onClick={
          function(e){

            this.setState({
              latestButton: "none",
              content:"none"
            })
            this.closeSideMenu()
          }.bind(this)
        }
      />
    </a>

    let books = <li className="navigation__item">
      <a href="#books" title="Books" className="panel-button projects-button"
        onClick={
          function(e){
            if (this.state.latestButton === "books"){
              this.closeSideMenu()
            } else{
              this.setState({
                content: "books",
                latestButton: "books"
              })
              this.openSideMenu()
              let navigationWrapper = document.querySelector('.navigation-wrapper')
              let btnMobileMenuIcon = document.querySelector('.btn-mobile-menu__icon')
              navigationWrapper.classList.toggle('visible')
              btnMobileMenuIcon.classList.toggle('fa-caret-square-down')
              btnMobileMenuIcon.classList.toggle('fa-caret-square-up')
              btnMobileMenuIcon.classList.toggle('animated')
              btnMobileMenuIcon.classList.toggle('fadeIn')
            }
          }.bind(this)
        }
      >
        <i className="fas fa-book"></i>&nbsp;Books
      </a>
    </li>

    let selftest = <li className="navigation__item">
      <a href="#selftest" title="Selftest" className="panel-button projects-button"
        onClick={
          function(e){
            if (this.state.latestButton === "selftest"){
              this.closeSideMenu()
            } else{
              this.setState({
                content: "selftest",
                latestButton: "selftest"
              })
              this.openSideMenu()
              let navigationWrapper = document.querySelector('.navigation-wrapper')
              let btnMobileMenuIcon = document.querySelector('.btn-mobile-menu__icon')
              navigationWrapper.classList.toggle('visible')
              btnMobileMenuIcon.classList.toggle('fa-caret-square-down')
              btnMobileMenuIcon.classList.toggle('fa-caret-square-up')
              btnMobileMenuIcon.classList.toggle('animated')
              btnMobileMenuIcon.classList.toggle('fadeIn')
            }
          }.bind(this)
        }
      >
        <i class="fa-solid fa-pencil"></i>&nbsp;AI 수능영단어 퀴즈
      </a>
    </li>

    let reading = <li className="navigation__item">
      <a href="#Reading" title="Reading" className="panel-button projects-button"
        onClick={
          function(e){
            if (this.state.latestButton === "reading"){
              this.closeSideMenu()
            } else{
              this.setState({
                content: "reading",
                latestButton: "reading"
              })
              this.openSideMenu()
              let navigationWrapper = document.querySelector('.navigation-wrapper')
              let btnMobileMenuIcon = document.querySelector('.btn-mobile-menu__icon')
              navigationWrapper.classList.toggle('visible')
              btnMobileMenuIcon.classList.toggle('fa-caret-square-down')
              btnMobileMenuIcon.classList.toggle('fa-caret-square-up')
              btnMobileMenuIcon.classList.toggle('animated')
              btnMobileMenuIcon.classList.toggle('fadeIn')
            }
          }.bind(this)
        }
      >
        <i class="fa-solid fa-robot"></i>&nbsp;AI 수능독해
      </a>
    </li>

    let quizgen = <li className="navigation__item">
      <a href="#Quizgen" title="Quizgen" className="panel-button projects-button"
        onClick={
          function(e){
            if (this.state.latestButton === "quizgen"){
              this.closeSideMenu()
            } else{
              this.setState({
                content: "quizgen",
                latestButton: "quizgen"
              })
              this.openSideMenu()
              let navigationWrapper = document.querySelector('.navigation-wrapper')
              let btnMobileMenuIcon = document.querySelector('.btn-mobile-menu__icon')
              navigationWrapper.classList.toggle('visible')
              btnMobileMenuIcon.classList.toggle('fa-caret-square-down')
              btnMobileMenuIcon.classList.toggle('fa-caret-square-up')
              btnMobileMenuIcon.classList.toggle('animated')
              btnMobileMenuIcon.classList.toggle('fadeIn')
            }
          }.bind(this)
        }
      >
        <i class="fa-solid fa-chalkboard-user"></i>&nbsp;교사용 메뉴
      </a>
    </li>

    let papers = <li className="navigation__item">
      <a href="#papers" title="Papers" className="panel-button projects-button"
        onClick={
          function(e){
            if (this.state.latestButton === "papers"){
              this.closeSideMenu()
            } else{
              this.setState({
                content: "papers",
                latestButton: "papers"
              })
              this.openSideMenu()
              let navigationWrapper = document.querySelector('.navigation-wrapper')
              let btnMobileMenuIcon = document.querySelector('.btn-mobile-menu__icon')
              navigationWrapper.classList.toggle('visible')
              btnMobileMenuIcon.classList.toggle('fa-caret-square-down')
              btnMobileMenuIcon.classList.toggle('fa-caret-square-up')
              btnMobileMenuIcon.classList.toggle('animated')
              btnMobileMenuIcon.classList.toggle('fadeIn')
            }
          }.bind(this)
        }>
        <i className="fas fa-graduation-cap"></i>&nbsp;연구성과
      </a>
    </li>

    let contact = <li className="navigation__item">
      <a href="#contact" title="Contact Me"
        onClick={
          function(e){
            if (this.state.latestButton === "contact"){
              this.closeSideMenu()
            } else{
              this.setState({
                content: "contact",
                latestButton: "contact"
              })
              this.openSideMenu()
              let navigationWrapper = document.querySelector('.navigation-wrapper')
              let btnMobileMenuIcon = document.querySelector('.btn-mobile-menu__icon')
              navigationWrapper.classList.toggle('visible')
              btnMobileMenuIcon.classList.toggle('fa-caret-square-down')
              btnMobileMenuIcon.classList.toggle('fa-caret-square-up')
              btnMobileMenuIcon.classList.toggle('animated')
              btnMobileMenuIcon.classList.toggle('fadeIn')
            }
          }.bind(this)
        }>
        <i className="far fa-envelope"></i>&nbsp;협업문의
      </a>
    </li>

    let mobileButtenMenu =  <span className="mobile btn-mobile-menu"
      onClick={
        function(e){
          let navigationWrapper = document.querySelector('.navigation-wrapper')
          let btnMobileMenuIcon = document.querySelector('.btn-mobile-menu__icon')
          navigationWrapper.classList.toggle('visible')
          navigationWrapper.classList.toggle('bounceInDown')
          navigationWrapper.classList.toggle('animated')
          btnMobileMenuIcon.classList.toggle('fa-caret-square-down')
          btnMobileMenuIcon.classList.toggle('fa-caret-square-up')
          btnMobileMenuIcon.classList.toggle('animated')
          btnMobileMenuIcon.classList.toggle('fadeIn')
        }
      }
    >
      <i className="far fa-caret-square-down btn-mobile-menu__icon"></i>
      <i className="far fa-caret-square-up btn-mobile-close__icon hidden"></i>
    </span>

    return(
      <header className="panel-cover">
        {mobileButtenMenu}
        <div className="panel-main">
          <div className="panel-main__inner panel-inverted">
            <div className="panel-main__content">
              {profilePicButton}
              <h1 className="panel-cover__title panel-title">Sense of Balance</h1>
                <h2>프로젝트 균형감각</h2>
              <hr className="panel-cover__divider"/>
              <p className="panel-cover__description">AI, 사교육, 공교육 전문가가 모여</p>
              <p className="panel-cover__description">첨단기술로 교육의 혁신을 꿈꾸는 프로젝트입니다.</p>
              <hr className="panel-cover__divider panel-cover__divider--secondary"/>
              <div className="navigation-wrapper">
                <nav className="cover-navigation navigation--social">
                  <ul className="navigation">
                    {selftest}
                    {reading}
                    {quizgen}
                    {papers}
                    {books}
                    {contact}
                  </ul>
                </nav>
              </div>
            </div>
          </div>
        </div>
        <div className="panel-cover--overlay"></div>
      </header>
    )
  }

  drawBody(){
    let footer = <footer className="footer">
        <span className="footer__copyright">&copy; 2022. Proj. Sense of Balance All rights reserved.</span>
    </footer>

    return (
      <div className="content-wrapper">
        <div className="content-wrapper__inner">
          {this.drawContents()}
        </div>
        {footer}

    </div>
    )
  }

  drawContents(){
    if (this.state.content === "none"){
      return (
        <div></div>
      )
    } else if (this.state.content === "books"){
        return (
          <Books/>
        )
    } else if (this.state.content === "selftest"){
      return (
        <Selftest/>
      )
    } else if (this.state.content === "papers"){
      return (
        <Papers/>
      )
    } else if (this.state.content === "contact"){
      return (
        <Contact/>
      )
    } else if (this.state.content === "quizgen"){
      return (
        <Quizgen/>
      )
    } else if (this.state.content === "reading"){
      return (
        <Reading/>
      )
    }
  }

  render() {
    return (
      <div className="App">
        {this.drawHeader()}
        {this.drawBody()}
      </div>
    );
  }
}

export default App;