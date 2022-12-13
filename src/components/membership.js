import React, {Component} from 'react';
import './lectures.css';


class Membership extends Component {
  constructor(props){
    super(props);
    this.state = {
    }
  }

  sectionTitle(){
    return(
      <div className="row">
        <div className="col-lg-12 text-center">
            <h2 className="section-heading subpageHeading">Membership</h2>
        </div>
      </div>
    )
  }

  drawLectures(){
    var youtube = <i className="fab fa-youtube"></i>
    var link = <i className="fas fa-external-link-alt"></i>

    var aiff = <div className="singleLectureContainer">
      <div className="singleWebsiteCard">
         <img className="websiteImage" src="https://cdn.jsdelivr.net/gh/needleworm/ai_voca/src/images/membership/aiff.jpg" alt="projectimage"/>
        <div className="projectText">
          <h5>AI 미래포럼 (AIFF)</h5><br/>
            <p className="bookDescription">
              <strong>AI for Social Good</strong><br/>
              AI 미래포럼 창립멤버
            </p>
          <div className="lectureIcons">
            <div className="gitIcons">
              <a href="https://www.hankyung.com/it/article/2021031413701" target="_blank"  rel="noreferrer">
                {link}
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>

    var membership1 = <div className="singleLectureContainer">
      <div className="singleWebsiteCard">
         <img className="websiteImage" src="https://cdn.jsdelivr.net/gh/needleworm/ai_voca/src/images/membership/1.jpg" alt="projectimage"/>
        <div className="projectText">
          <h5>League of Perfect Scorers (LPS)</h5><br/>
            <p className="bookDescription">
              <strong>Rarity</strong> &nbsp;&nbsp; 0.000003% ~ 0.003%<br/>
              IQ 만점자 협회, 전 세계 19번째 멤버
            </p>
          <div className="lectureIcons">
            <div className="gitIcons">
              <a href="https://www.youtube.com/watch?v=cEGTZYeTIpg" target="_blank"  rel="noreferrer">
                {youtube}
              </a>
              &nbsp;&nbsp;&nbsp;
              <a href="http://www.opalquestgroup.com/societiestests.html" target="_blank"  rel="noreferrer">
                {link}
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>

    var membership2 = <div className="singleLectureContainer">
      <div className="singleWebsiteCard">
        <img className="websiteImage" src="https://cdn.jsdelivr.net/gh/needleworm/ai_voca/src/images/membership/2.png" alt="projectimage"/>
        <div className="projectText">
          <h5>World Genius Directory</h5><br/>
            <p className="bookDescription">
             최초이자 유일하게 한글로 이름 등재
            </p>
          <div className="lectureIcons">
            <div className="gitIcons">
              <a href="https://www.youtube.com/watch?v=cEGTZYeTIpg" target="_blank"  rel="noreferrer">
                {youtube}
              </a>
              &nbsp;&nbsp;&nbsp;
              <a href="http://www.psiq.org/home.html" target="_blank"  rel="noreferrer">
                {link}
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>

    var membership3 = <div className="singleLectureContainer">
      <div className="singleWebsiteCard">
        <img className="websiteImage" src="https://cdn.jsdelivr.net/gh/needleworm/ai_voca/src/images/membership/3.jpg" alt="projectimage"/>
        <div className="projectText">
          <h5>ISI Society</h5><br/>
            <p className="bookDescription">
              <strong>Rarity</strong> &nbsp;&nbsp; 0.07%
            </p>
          <div className="lectureIcons">
            <div className="gitIcons">
              <a href="https://www.youtube.com/watch?v=cEGTZYeTIpg" target="_blank"  rel="noreferrer">
                {youtube}
              </a>
              &nbsp;&nbsp;&nbsp;
              <a href="http://isi-s.iqsociety.org/" target="_blank"  rel="noreferrer">
                {link}
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>

    var membership4 = <div className="singleLectureContainer">
      <div className="singleWebsiteCard">
        <img className="websiteImage" src="https://cdn.jsdelivr.net/gh/needleworm/ai_voca/src/images/membership/4.jpg" alt="projectimage"/>
        <div className="projectText">
          <h5>Intertel</h5><br/>
            <p className="bookDescription">
              <strong>Rarity</strong> &nbsp;&nbsp; 1%
            </p>
          <div className="lectureIcons">
            <div className="gitIcons">
              <a href="https://www.youtube.com/watch?v=TaiEIC_xJwY" target="_blank"  rel="noreferrer">
                {youtube}
              </a>
              &nbsp;&nbsp;&nbsp;
              <a href="https://www.intertel-iq.org/" target="_blank"  rel="noreferrer">
                {link}
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>

    var membership5 = <div className="singleLectureContainer">
    <div className="singleWebsiteCard">
      <img className="websiteImage" src="https://cdn.jsdelivr.net/gh/needleworm/ai_voca/src/images/membership/5.jpg" alt="projectimage"/>
      <div className="projectText">
        <h5>Glia Society</h5><br/>
          <p className="bookDescription">
            <strong>Rarity</strong> &nbsp;&nbsp; 0.1%
          </p>
        <div className="lectureIcons">
          <div className="gitIcons">
            <a href="https://gliasociety.org/" target="_blank"  rel="noreferrer">
              {link}
            </a>
          </div>
        </div>
      </div>
    </div>
    </div>

    var membership6 = <div className="singleLectureContainer">
    <div className="singleWebsiteCard">
      <img className="websiteImage" src="https://cdn.jsdelivr.net/gh/needleworm/ai_voca/src/images/membership/6.jpg" alt="projectimage"/>
      <div className="projectText">
        <h5>CIVIQ Society</h5><br/>
          <p className="bookDescription">
            <strong>Rarity</strong> &nbsp;&nbsp; 0.135%
          </p>
        <div className="lectureIcons">
          <div className="gitIcons">
            <a href="https://gliasociety.org/" target="_blank"  rel="noreferrer">
              {link}
            </a>
          </div>
        </div>
      </div>
    </div>
    </div>


    var cheesecake = <div className="singleLectureContainer">
      <div className="singleWebsiteCard">
        <img className="websiteImage" src="https://cdn.jsdelivr.net/gh/needleworm/ai_voca/src/images/membership/cheesecake.jpg" alt="projectimage"/>
        <div className="projectText">
          <h5>Cheesecake Studio</h5><br/>
            <p className="bookDescription">
              아트워크 그룹 "치즈케익 스튜디오"
            </p>
          <div className="lectureIcons">
            <div className="gitIcons">
              <a href="https://cheesecake.quv.kr" target="_blank"  rel="noreferrer">
                {link}
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>



    var jihak = <div className="singleLectureContainer">
      <div className="singleWebsiteCard">
        <img className="websiteImage" src="https://cdn.jsdelivr.net/gh/needleworm/ai_voca/src/images/membership/jihak.png" alt="projectimage"/>
        <div className="projectText">
          <h5>고교독서평설</h5><br/>
            <p className="bookDescription">
              고교독서평설 필진. "지금이야, 4차산업혁명" 코너 연재중.
            </p>
          <div className="lectureIcons">
            <div className="gitIcons">
              <a href="https://www.jihak.co.kr/dp/board/contents_list.asp?bid=dhv_list" target="_blank"  rel="noreferrer">
                {link}
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>

    return (
      <div className="websitesContainer">
        {cheesecake}
        {membership1}
        {membership2}
        {membership3}
        {membership4}
        {membership5}
        {membership6}
        {aiff}
        {jihak}

      </div>
    )
  }

  render() {
    return (
      <section id="membership" className="animated bounceInDown">
          {this.sectionTitle()}
          {this.drawLectures()}
      </section>
    );
  }
}
  
export default Membership;