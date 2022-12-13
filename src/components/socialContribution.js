import React, {Component} from 'react';
import './websites.css';


class SocialContribution extends Component {
  constructor(props){
    super(props);
    this.state = {
    }
  }

  sectionTitle(){
    return(
      <div className="row">
        <div className="col-lg-12 text-center">
            <h2 className="section-heading subpageHeading">Social Contribution</h2>
        </div>
      </div>
    )
  }

  drawWebsites(){
    var socialContribution2 = <div className="singleProjectContainer">
      <div className="singleWebsiteCard">
        <a className="tempa" href="https://needleworm.github.io/dream2022" target="_blank"  rel="noreferrer">
         <img className="websiteImage" src="https://cdn.jsdelivr.net/gh/needleworm/ai_voca/src/images/socialContributions/dream2022.png" alt="projectimage"/>
        </a>
        <div className="projectText">
          <a className="tempa" href="https://needleworm.github.io/dream2022" target="_blank"  rel="noreferrer">
            <h5 className="text-center textMarginBottom">2022 제1회 꿈꾸는 청소년 공모전 <i className="fas fa-external-link-alt"></i></h5><br/>
          </a>
          <div className="codeBody">
            <p className="bookDescription">
              비수도권 지역의 청소년들을 후원하기 위하여 개최한 공모전입니다.<br/>
              처음에는 상금 120만원과 운영비용 등 사비 200여만원으로 공모전을 기획하였습니다. 
              추후 정규민 디자이너와 <a href="https://www.booksr.co.kr" target="_blank" rel="noreferrer">생능출판사</a>, 그리고 <a href="https://geekble.co" target="_blank" rel="noreferrer">(주) 긱블</a>이 도움을 주셔서 총상금 330만 원 규모로 대회가 진행되었습니다.<br/>
              총 18명의 학생을 발굴하여 상금과 상패를 지급하였으며, 학생들의 이야기를 담은 <a href="https://search.shopping.naver.com/book/catalog/34370748635" target="_blank" rel="noreferrer">별처럼 찬란히 빛나는 꿈으로</a>를 출간했습니다. 도서 판매 수익 전액은 한국소아암재단에 기부됩니다.
            </p>
          </div>
          <div className="socialContributionGrid">
          </div>
        </div>
      </div>
    </div>

    var socialContribution1 = <div className="singleProjectContainer">
      <div className="singleWebsiteCard">
        <img className="websiteImage" src="https://cdn.jsdelivr.net/gh/needleworm/ai_voca/src/images/socialContributions/busking.gif" alt="projectimage"/>
        <div className="projectText">
          <h5 className="text-center textMarginBottom">버스킹팀 교회오빠들 - 소아암 환우 후원공연</h5><br/>
          <div className="codeBody">
            <p className="bookDescription">
              2019년 11월부터 이어진 정기 버스킹 공연입니다. 매주 화요일과 목요일 공연이 진행되었고, 안타깝게도 코로나 판데믹이 심화되는 바람에 2020년 봄이 오기 전 중단된 프로젝트입니다.
              프로젝트 기간 동안 90만 원 가량의 후원금을 모금하였으며, 후원금 전액을 한국소아암재단에 기부하였습니다.
            </p>
          </div>
          <div className="projectIcons">
          </div>
        </div>
      </div>
    </div>

    return (
      <div className="websitesContainer">
        {socialContribution2}
        {socialContribution1}
      </div>
    )
  }

  render() {
    return (
      <section id="socialContribution" className="animated bounceInDown">
          {this.sectionTitle()}
          {this.drawWebsites()}
      </section>
    );
  }
}
  
export default SocialContribution;