import React, { useState } from 'react';
import './App.css';
import Books from "./components/books"
import Selftest from "./components/selftest"
import Quizgen from "./components/quizgen"
import Reading from "./components/reading"
import Papers from "./components/papers"
import Contact from "./components/contact"


function App() {
  const [latestButton, setLatestButton] = useState("none")  /*  none
                                                                books
                                                                selftest
                                                                codes
                                                                research
                                                                contact   
                                                            */
  const [content, setContent] = useState("none")

  const closeSideMenu = () => {
    const contentWrapper = document.querySelector('.content-wrapper') as HTMLElement
    if (!contentWrapper.classList.contains('showing')){
      return
    }

    const panelCover = document.querySelector('.panel-cover') as HTMLElement
    panelCover.classList.remove('panel-cover--collapsed')
    panelCover.style.maxWidth = '100%'

    const window = document.querySelector('html') as HTMLElement

    const currentWidth = window.clientWidth
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
    setLatestButton("none")
    setContent("none")
  }

  const bouncing = () => {
    const navigationWrapper = document.querySelector('.navigation-wrapper')  as HTMLElement
    const btnMobileMenuIcon = document.querySelector('.btn-mobile-menu__icon') as HTMLElement
    navigationWrapper.classList.toggle('visible')
    btnMobileMenuIcon.classList.toggle('fa-caret-square-down')
    btnMobileMenuIcon.classList.toggle('fa-caret-square-up')
    btnMobileMenuIcon.classList.toggle('animated')
    btnMobileMenuIcon.classList.toggle('fadeIn')
  }

  const openSideMenu = () => {
    const contentWrapper = document.querySelector('.content-wrapper') as HTMLElement
    if (contentWrapper.classList.contains('showing')){
      return
    }

    const panelCover = document.querySelector('.panel-cover') as HTMLElement
    panelCover.classList.add('panel-cover--collapsed')

    const window = document.querySelector('html') as HTMLElement

    const currentWidth = window.clientWidth
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

  const drawHeader = () => {
    let profilePicButton = <a href="#home" title="Home">
      <img src="https://cdn.jsdelivr.net/gh/needleworm/ai_voca/src/images/profile_pic.gif" className="user-image" alt="My Profile"
        onClick={
          function(e){
            setLatestButton("none")
            setContent("none")
            closeSideMenu()
          }
        }
      />
    </a>

    let books = <li className="navigation__item">
      <a href="#books" title="Books" className="panel-button projects-button"
        onClick={
          function(e){
            if (latestButton === "books"){
              closeSideMenu()
            } else{
              setContent("books")
              setLatestButton("books")
              openSideMenu()
              bouncing()
            }
          }
        }
      >
        <i className="fas fa-book"></i>&nbsp;Books
      </a>
    </li>

    let selftest = <li className="navigation__item">
      <a href="#selftest" title="Selftest" className="panel-button projects-button"
        onClick={
          function(e){
            if (latestButton === "selftest"){
              closeSideMenu()
            } else{
              setContent("selftest")
              setLatestButton("selftest")
              openSideMenu()
              bouncing()
            }
          }
        }
      >
        <i className="fa-solid fa-pencil"></i>&nbsp;매일매일 Quiz Quiz!
      </a>
    </li>

    let reading = <li className="navigation__item">
      <a href="#Reading" title="Reading" className="panel-button projects-button"
        onClick={
          function(e){
            if (latestButton === "reading"){
              closeSideMenu()
            } else{
              setContent("reading")
              setLatestButton("reading")
              openSideMenu()
              bouncing()
            }
          }
        }
      >
        <i className="fa-solid fa-robot"></i>&nbsp;AI 수능독해
      </a>
    </li>

    let quizgen = <li className="navigation__item">
      <a href="#Quizgen" title="Quizgen" className="panel-button projects-button"
        onClick={
          function(e){
            if (latestButton === "quizgen"){
              closeSideMenu()
            } else{
              setContent("quizgen")
              setLatestButton("quizgen")
              openSideMenu()
              bouncing()
            }
          }
        }
      >
        <i className="fa-solid fa-chalkboard-user"></i>&nbsp;교사용 메뉴
      </a>
    </li>

    let papers = <li className="navigation__item">
      <a href="#papers" title="Papers" className="panel-button projects-button"
        onClick={
          function(e){
            if (latestButton === "papers"){
              closeSideMenu()
            } else{
              setContent("papers")
              setLatestButton("papers")
              openSideMenu()
              bouncing()
            }
          }
        }>
        <i className="fas fa-graduation-cap"></i>&nbsp;연구성과
      </a>
    </li>

    let contact = <li className="navigation__item">
      <a href="#contact" title="Contact Me"
        onClick={
          function(e){
            if (latestButton === "contact"){
              closeSideMenu()
            } else{
              setContent("contact")
              setLatestButton("contact")
              openSideMenu()
              bouncing()
            }
          }
        }>
        <i className="far fa-envelope"></i>&nbsp;Contact
      </a>
    </li>

    let mobileButtenMenu =  <span className="mobile btn-mobile-menu"
      onClick={
        function(e){
          const navigationWrapper = document.querySelector('.navigation-wrapper')
          const btnMobileMenuIcon = document.querySelector('.btn-mobile-menu__icon')
          navigationWrapper?.classList.toggle('visible')
          navigationWrapper?.classList.toggle('bounceInDown')
          navigationWrapper?.classList.toggle('animated')
          btnMobileMenuIcon?.classList.toggle('fa-caret-square-down')
          btnMobileMenuIcon?.classList.toggle('fa-caret-square-up')
          btnMobileMenuIcon?.classList.toggle('animated')
          btnMobileMenuIcon?.classList.toggle('fadeIn')
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
                    {/*selftest*/}
                    {quizgen}
                    {books}
                    {papers}
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

  const drawBody = () => {
    let footer = <footer className="footer">
        <span className="footer__copyright">&copy; 2022. Proj. Sense of Balance All rights reserved.</span>
    </footer>

    return (
      <div className="content-wrapper">
        <div className="content-wrapper__inner">
          {drawContents()}
        </div>
        {footer}

    </div>
    )
  }

  const drawContents = () => {
    if (content === "none"){
      return (
        <div></div>
      )
    } else if (content === "books"){
        return (
          <Books/>
        )
    } else if (content === "selftest"){
      return (
        <Selftest/>
      )
    } else if (content === "papers"){
      return (
        <Papers/>
      )
    } else if (content === "contact"){
      return (
        <Contact/>
      )
    } else if (content === "quizgen"){
      return (
        <Quizgen/>
      )
    } else if (content === "reading"){
      return (
        <Reading/>
      )
    }
  }


  return (
    <div className="App">
      {drawHeader()}
      {drawBody()}
    </div>
  );
}

export default App;