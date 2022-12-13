import React, {Component} from 'react';
import './App.css';
import Books from "./components/books"
import Websites from "./components/websites"
import Quizgen from "./components/quizgen"
import Reading from "./components/reading"
import Papers from "./components/papers"
import Contact from "./components/contact"


class App extends Component {
  constructor(props){
    super(props);
    
    this.state = {
      latestButton:"none",
      /* 
        content
          none
          books
          websites
          codes
          research
          lectures
          designs
          news
          contact
          media
          socialContribution
          collections
      */
      content:"none",
    }
    this.closeSideMenu = this._closeSideMenu.bind(this)
    this.openSideMenu = this._openSideMenu.bind(this)
  }

  _closeSideMenu(){
    var contentWrapper = document.querySelector('.content-wrapper')
    if (!contentWrapper.classList.contains('showing')){
      return
    }

    var panelCover = document.querySelector('.panel-cover')
    panelCover.classList.remove('panel-cover--collapsed')
    panelCover.style.maxWidth = '100%'

    var window = document.querySelector('html')

    var currentWidth = window.clientWidth
    if (currentWidth > 800){
      panelCover.animate(
        [ // Keyframes
          {'max-width': '530px', 'width': '40%'}, // from
          {'width': '100%'}, // to
        ], { // options
          duration: 400,
          easing: 'ease-in-out'
        } 
      )
    } else {
      panelCover.animate(
        [ // Keyframes
          {'height': '40%'}, // from
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
    var contentWrapper = document.querySelector('.content-wrapper')
    if (contentWrapper.classList.contains('showing')){
      return
    }

    var panelCover = document.querySelector('.panel-cover')
    panelCover.classList.add('panel-cover--collapsed')

    var window = document.querySelector('html')

    var currentWidth = window.clientWidth
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

    var profilePicButton = <a href="#home" title="Home">
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

    var books = <li className="navigation__item">
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
              var navigationWrapper = document.querySelector('.navigation-wrapper')
              var btnMobileMenuIcon = document.querySelector('.btn-mobile-menu__icon')
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

    var websites = <li className="navigation__item">
      <a href="#websites" title="Websites" className="panel-button projects-button"
        onClick={
          function(e){
            if (this.state.latestButton === "websites"){
              this.closeSideMenu()
            } else{
              this.setState({
                content: "websites",
                latestButton: "websites"
              })
              this.openSideMenu()
              var navigationWrapper = document.querySelector('.navigation-wrapper')
              var btnMobileMenuIcon = document.querySelector('.btn-mobile-menu__icon')
              navigationWrapper.classList.toggle('visible')
              btnMobileMenuIcon.classList.toggle('fa-caret-square-down')
              btnMobileMenuIcon.classList.toggle('fa-caret-square-up')
              btnMobileMenuIcon.classList.toggle('animated')
              btnMobileMenuIcon.classList.toggle('fadeIn')
            }
          }.bind(this)
        }
      >
        <i class="fa-regular fa-pencil"></i>&nbsp;도전 단어퀴즈
      </a>
    </li>


    var reading = <li className="navigation__item">
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
              var navigationWrapper = document.querySelector('.navigation-wrapper')
              var btnMobileMenuIcon = document.querySelector('.btn-mobile-menu__icon')
              navigationWrapper.classList.toggle('visible')
              btnMobileMenuIcon.classList.toggle('fa-caret-square-down')
              btnMobileMenuIcon.classList.toggle('fa-caret-square-up')
              btnMobileMenuIcon.classList.toggle('animated')
              btnMobileMenuIcon.classList.toggle('fadeIn')
            }
          }.bind(this)
        }
      >
        <i class="fa-solid fa-chalkboard-user"></i>&nbsp;AI 영어독해(체험판)
      </a>
    </li>


    var quizgen = <li className="navigation__item">
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
              var navigationWrapper = document.querySelector('.navigation-wrapper')
              var btnMobileMenuIcon = document.querySelector('.btn-mobile-menu__icon')
              navigationWrapper.classList.toggle('visible')
              btnMobileMenuIcon.classList.toggle('fa-caret-square-down')
              btnMobileMenuIcon.classList.toggle('fa-caret-square-up')
              btnMobileMenuIcon.classList.toggle('animated')
              btnMobileMenuIcon.classList.toggle('fadeIn')
            }
          }.bind(this)
        }
      >
        <i class="fa-solid fa-chalkboard-user"></i>&nbsp;시험지 생성
      </a>
    </li>

    var papers = <li className="navigation__item">
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
              var navigationWrapper = document.querySelector('.navigation-wrapper')
              var btnMobileMenuIcon = document.querySelector('.btn-mobile-menu__icon')
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

    var contact = <li className="navigation__item">
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
              var navigationWrapper = document.querySelector('.navigation-wrapper')
              var btnMobileMenuIcon = document.querySelector('.btn-mobile-menu__icon')
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

    var mobileButtenMenu =  <span className="mobile btn-mobile-menu"
      onClick={
        function(e){
          var navigationWrapper = document.querySelector('.navigation-wrapper')
          var btnMobileMenuIcon = document.querySelector('.btn-mobile-menu__icon')
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
      <div>
        {mobileButtenMenu}
        <header className="panel-cover">
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
                      {websites}
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
      </div>
    )
  }

  drawBody(){
    var footer = <footer className="footer">
        <span className="footer__copyright">&copy; 2022. Proj. Sense of Balance All rights reserved.</span>
    </footer>
    

    return (
      <div className="content-wrapper">
        <div className="content-wrapper__inner">
          {this.drawContents()}
          {footer}
        </div>
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
    } else if (this.state.content === "websites"){
      return (
        <Websites/>
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