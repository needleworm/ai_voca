import React, {Component} from 'react';
import './lectures.css';


class Media extends Component {
  constructor(props){
    super(props);
    this.state = {
    }
  }

  sectionTitle(){
    return(
      <div className="row">
        <div className="col-lg-12 text-center">
            <h2 className="section-heading subpageHeading">Media</h2>
        </div>
      </div>
    )
  }

  drawLectures(){
    var youtube = <i className="fab fa-youtube"></i>
    
    var media1 = <div className="singleLectureContainer">
      <div className="singleWebsiteCard">
        <a href="https://www.youtube.com/watch?v=fuwZmgKenqs&t=195s" target="_blank"  rel="noreferrer">
          <img className="websiteImage" src="https://cdn.jsdelivr.net/gh/needleworm/ai_voca/src/images/media/1.png" alt="projectimage"/>
        </a>
        <div className="projectText">
          <h5>고무통으로 벼 자동 재배 농장(스마트팜) 만들기... IQ 만점 공대생이 도와주러옴</h5><br/>
            <p className="bookDescription">
              스파트팜의 대가 상상텃밭 CTO의 자동화 농사법 A to Z 강의! 왜 보는지 모르겠는데 빠져들게 됨...
            </p>
          <div className="lectureIcons">
            <a href="https://www.youtube.com/watch?v=fuwZmgKenqs&t=195s" target="_blank"  rel="noreferrer">
              {youtube} EP 1
            </a>
            &nbsp;&nbsp;&nbsp;&nbsp;
            <a href="https://www.youtube.com/watch?v=fzp2fg6CekM" target="_blank"  rel="noreferrer">
              {youtube} Cookie 1
            </a>
            &nbsp;&nbsp;&nbsp;&nbsp;
            <a href="https://www.youtube.com/watch?v=Ni6Q1sENdmI" target="_blank"  rel="noreferrer">
              {youtube} Cookie 2
            </a>
          </div>
        </div>
      </div>
    </div>

    var media2 = <div className="singleLectureContainer">
      <div className="singleWebsiteCard">
        <a href="https://www.youtube.com/watch?v=VJpjk8j6zTM&t=115s" target="_blank"  rel="noreferrer">
          <img className="websiteImage" src="https://cdn.jsdelivr.net/gh/needleworm/ai_voca/src/images/media/2.png" alt="projectimage"/>
        </a>  
        <div className="projectText">
          <h5>안동에서는 대마가 합법? 대마 농장 운영 중인 사람 직접 만나고 옴</h5><br/>
            <p className="bookDescription">
            대마를 심거나 키우는 건 마약류 관리법에 의해 우리나라 전 국토에서 불법입니다. 하지만 딱 한 군데 예외가 있습니다. 바로 경상북도 안동시입니다.
            </p>
          <div className="lectureIcons">
            <a href="https://www.youtube.com/watch?v=VJpjk8j6zTM&t=115s" target="_blank"  rel="noreferrer">
              {youtube} 스브스뉴스
            </a>
          </div>
        </div>
      </div>
    </div>

    var media3 = <div className="singleLectureContainer">
      <div className="singleWebsiteCard">
        <a href="https://www.youtube.com/watch?v=s0skJO5TfAk&t=2s" target="_blank"  rel="noreferrer">
          <img className="websiteImage" src="https://cdn.jsdelivr.net/gh/needleworm/ai_voca/src/images/media/3.png" alt="projectimage"/>
        </a>
        <div className="projectText">
          <h5>★파워 으쓱★ 여러모로 능력 넘치는 카이스트 출신의 대마 농부 [무엇이든 물어보살]</h5><br/>
            <p className="bookDescription">
            미모의 교사 여자친구가 푹~ 빠진 카이스트 출신 농부! 합법 대마 농장주와 알아보는 대마의 모든 것
            </p>
          <div className="lectureIcons">
            <a href="https://www.youtube.com/watch?v=s0skJO5TfAk&t=2s" target="_blank"  rel="noreferrer">
              {youtube} KBS N
            </a>
          </div>
        </div>
      </div>
    </div>

    var media4 = <div className="singleLectureContainer">
      <div className="singleWebsiteCard">
        <a href="https://www.youtube.com/watch?v=_-ugbwhhApI&t=2s" target="_blank"  rel="noreferrer">
          <img className="websiteImage" src="https://cdn.jsdelivr.net/gh/needleworm/ai_voca/src/images/media/4.png" alt="projectimage"/>
        </a>
        <div className="projectText">
          <h5>카이스트 출신 대학원생이 공익이 되면 일어나는 일?! (feat. 코딩) / 스브스뉴스</h5><br/>
            <p className="bookDescription">
            6개월을 해야 겨우 끝낼 수 있는 엄청난 양의 단순 반복 업무를 받는다면 어떨까요? 상상도 하기 싫은 그런 상황. 고용노동부 안동지청에서 사회복무요원(aka.공익)으로 복무하는 반병현 씨에게 얼마 전 닥쳤던 일입니다. 하지만 그는 카이스트에서 인공지능으로 석사 학위를 받은 능력자였습니다. 그 일을 30분 만에 끝내버렸죠. 이런 이야기를 그는 블로그에 올렸습니다. 그런데 그 글 때문에 병현 씨에게 상상도 못 했던 일이 일어나는데요. 무슨 일이 있었던 걸까요?

            </p>
          <div className="lectureIcons">
            <a href="https://www.youtube.com/watch?v=_-ugbwhhApI&t=2s" target="_blank"  rel="noreferrer">
              {youtube} 스브스뉴스
            </a>
          </div>
        </div>
      </div>
    </div>

    var media5 = <div className="singleLectureContainer">
      <div className="singleWebsiteCard">
        <a href="https://www.youtube.com/watch?v=16hsA3CyM7M&t=112s" target="_blank"  rel="noreferrer">
          <img className="websiteImage" src="https://cdn.jsdelivr.net/gh/needleworm/ai_voca/src/images/media/5.jpg" alt="projectimage"/>
        </a>
        <div className="projectText">
          <h5>6개월 걸릴 일을 하루 만에 처리한 공익 인터뷰 해주세요</h5><br/>
            <p className="bookDescription">
            한 1년 반쯤 전에 한 공익이 놀라운 일처리 능력을 보여서 청와대까지 불려갔던 적이 있었다. 주인공은 고용노동부 안동지청에서 근무하던 반병현씨. 그는 상사로부터 “3900개가 넘는 등기우편의 13자리 등기번호를 우체국 홈페이지에 일일이 입력한 뒤 전부 인쇄하라”는 업무 지시를 받았는데, 이 단순 반복 작업을 끝내려면 최소 6개월이 필요했지만 병현씨가 이걸 끝내는데 걸린 시간은 단 하루! 카이스트에서 인공지능으로 석사 학위를 받은 공학도 병현씨는 본인이 직접 자동화 소프트웨어를 개발해 업무 시간을 획기적으로 단축시켜 버린 거다. 당시 병현씨는 ‘대한민국을 바꾼 공익’ ‘코딩하는 공익’ 등으로 불리며 화제가 됐었는데, 그 분의 근황을 취재해 달라는 의뢰가 들어와 수소문 끝에 연락이 닿았다. 최근에 소집해제가 됐다는데 요즘 어떻게 지내는지 여쭤봤더니 이 사람 진짜 혀를 내두르게 만들러어러버러러러러러럴룰ㄹㄹ럴라럴(ㄹㅇ 혀내두름)
            </p>
          <div className="lectureIcons">
            <a href="https://www.youtube.com/watch?v=16hsA3CyM7M&t=112s" target="_blank"  rel="noreferrer">
              {youtube} 취재대행소 왱
            </a>
          </div>
        </div>
      </div>
    </div>

    var media6 = <div className="singleLectureContainer">
      <div className="singleWebsiteCard">
        <a href="https://www.youtube.com/watch?v=km083tSB5DA" target="_blank"  rel="noreferrer">
          <img className="websiteImage" src="https://cdn.jsdelivr.net/gh/needleworm/ai_voca/src/images/media/6.jpg" alt="projectimage"/>
        </a>
        <div className="projectText">
          <h5>인공지능은 정말 인간에게 위협적인 존재일까? 인간은 인공지능을 어떻게 활용하면 좋을까?</h5><br/>
            <p className="bookDescription">
            인공지능을 알고리즘과 자율주행, 알파고 정도로만 알고있었다면? 이 영상을 꼭 확인해보세요! 인공지능의 발전 현황, 활용 범위부터 전문가가 아닌 일반인도 어떻게 활용할 수 있을지 정리해보았습니다.
            </p>
          <div className="lectureIcons">
            <a href="https://www.youtube.com/watch?v=km083tSB5DA" target="_blank"  rel="noreferrer">
              {youtube} 패스트캠퍼스
            </a>
          </div>
        </div>
      </div>
    </div>
    

    return (
      <div className="websitesContainer">
        {media6}
        {media1}
        {media5}
        {media2}
        {media3}
        {media4}
      </div>
    )
  }

  render() {
    return (
      <section id="media" className="animated bounceInDown">
          {this.sectionTitle()}
          {this.drawLectures()}
      </section>
    );
  }
}
  
export default Media;