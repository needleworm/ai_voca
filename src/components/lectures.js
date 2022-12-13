import React, {Component} from 'react';
import './lectures.css';


class Lectures extends Component {
  constructor(props){
    super(props);
    this.state = {
    }
  }

  sectionTitle(){
    return(
      <div className="row">
        <div className="col-lg-12 text-center">
            <h2 className="section-heading subpageHeading">Lectures</h2>
        </div>
      </div>
    )
  }

  drawLectures(){
    var youtube = <i className="fab fa-youtube"></i>
    var lectureLogo = <i className="fas fa-chalkboard-teacher"></i>
    var newsIcon = <i className="far fa-newspaper"></i>
    var book = <i className="fas fa-book"></i>
    var edulogo = <i className="fas fa-chalkboard-teacher"></i>
    

    var lecture1 = <div className="singleLectureContainer">
      <div className="singleWebsiteCard">
         <img className="websiteImage" src="https://cdn.jsdelivr.net/gh/needleworm/ai_voca/src/images/lectures/1.jpg" alt="projectimage"/>
        <div className="projectText">
          <h5>6개월치 업무를 하루만에 끝내는 업무자동화 (2020, 2022)</h5><br/>
            <p className="bookDescription">
              패스트캠퍼스 온라인강좌<br/>
              파이썬 기초부터 엑셀파일 활용 자동화, 디자인 자동화, 매크로 제작 및 크롤링 과정.<br/>
              6개 대주제, 약 20시간 분량, 총 77여개 강의 영상
            </p>
          <div className="lectureIcons">
            <div className="gitIcons">
              <a href="https://www.youtube.com/watch?v=_5JAXsYKef0&t=86s" target="_blank"  rel="noreferrer">
                {youtube} Intro
              </a>
              &nbsp;&nbsp;&nbsp;
              <a href="https://youtu.be/5IfJ3JdNwB0" target="_blank"  rel="noreferrer">
                {youtube} Vlog
              </a>
              &nbsp;&nbsp;&nbsp;
              <a href="https://fastcampus.co.kr/dev_online_bbh" target="_blank"  rel="noreferrer">
                {lectureLogo} Lecture
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
 
    
    var lecture2 = <div className="singleLectureContainer">
      <div className="singleWebsiteCard">
         <img className="websiteImage" src="https://cdn.jsdelivr.net/gh/needleworm/ai_voca/src/images/lectures/2.jpg" alt="projectimage"/>
        <div className="projectText">
          <h5>스마트팜 교육 프로그램 (2020)</h5><br/>
            <p className="bookDescription">
              대구 서구 도시재생지원센터 인동촌 백년마을 도시재생뉴딜사업, 마을관리 사회적협동조합 교육과정<br/>
              4주 교육과정
            </p>
          <div className="lectureIcons">
            <div className="gitIcons">
              <a href="https://youtu.be/hX54rCG6y8A" target="_blank"  rel="noreferrer">
                {youtube}
              </a>
              &nbsp;&nbsp;&nbsp;
              <a href="https://youtu.be/tNCUIX0viY0" target="_blank"  rel="noreferrer">
                {youtube}
              </a>
              &nbsp;&nbsp;&nbsp;
              <a href="https://youtu.be/fKMSZN8Nn1M" target="_blank"  rel="noreferrer">
                {lectureLogo} 
              </a>
              &nbsp;&nbsp;&nbsp;
              <a href="https://youtu.be/ic6mrUtuPLE" target="_blank"  rel="noreferrer">
                {lectureLogo} 
              </a>
              &nbsp;&nbsp;&nbsp;
              <a href="https://youtu.be/6LwcQzAXa6I" target="_blank"  rel="noreferrer">
                {lectureLogo} 
              </a>
              &nbsp;&nbsp;&nbsp;
              <a href="https://youtu.be/lgIYRQZAFJE" target="_blank"  rel="noreferrer">
                {lectureLogo} 
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
    
    var lecture3 = <div className="singleLectureContainer">
      <div className="singleWebsiteCard">
         <img className="websiteImage" src="https://cdn.jsdelivr.net/gh/needleworm/ai_voca/src/images/lectures/3.jpg" alt="projectimage"/>
        <div className="projectText">
          <h5>IoT 연수 (2020)</h5><br/>
            <p className="bookDescription">
              한국생명과학고등학교 교사 연수<br/>
              이론강좌 및 실습지도방안
            </p>
          <div className="lectureIcons">
            <div className="gitIcons">
              <a href="https://www.youtube.com/watch?v=6inTfyrhueE" target="_blank"  rel="noreferrer">
                {lectureLogo} 
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
    
    var lecture4 = <div className="singleLectureContainer">
      <div className="singleWebsiteCard">
         <img className="websiteImage" src="https://cdn.jsdelivr.net/gh/needleworm/ai_voca/src/images/lectures/4.jpg" alt="projectimage"/>
        <div className="projectText">
          <h5>농업경영체, 경작이 아닌 경영을 기획하라 (2020)</h5><br/>
            <p className="bookDescription">
              한국생명과학고등학교 고교학점제 교수<br/>
            </p>
        </div>
      </div>
    </div>

    var lecture5 = <div className="singleLectureContainer">
    <div className="singleWebsiteCard">
      <img className="websiteImage" src="https://cdn.jsdelivr.net/gh/needleworm/ai_voca/src/images/lectures/5.jpg" alt="projectimage"/>
      <div className="projectText">
        <h5>선도농가 멘토링 - 스마트팜 (2020)</h5><br/>
          <p className="bookDescription">
            한국생명과학고등학교 선도농가 멘토링 현장교수<br/>
            4주 교육과정
          </p>
      </div>
    </div>
    </div>

    var lecture6 = <div className="singleLectureContainer">
      <div className="singleWebsiteCard">
        <img className="websiteImage" src="https://cdn.jsdelivr.net/gh/needleworm/ai_voca/src/images/lectures/6.jpg" alt="projectimage"/>
        <div className="projectText">
          <h5>리더십3: 리스크 없는 학생창업 (2017)</h5><br/>
            <p className="bookDescription">
              KAIST 가을학기 학부 교양필수 강사
            </p>
          <div className="lectureIcons">
            <div className="gitIcons">
              <a href="https://brunch.co.kr/@needleworm/13" target="_blank"  rel="noreferrer">
              <i className="fas fa-external-link-alt"></i> 수강생 후기
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>

    var lecture7 = <div className="singleLectureContainer">
    <div className="singleWebsiteCard">
      <img className="websiteImage" src="https://cdn.jsdelivr.net/gh/needleworm/ai_voca/src/images/lectures/7.jpg" alt="projectimage"/>
      <div className="projectText">
        <h5>스마트팜과 파생 직업, 잡을 수 있는 기회들 (2020)</h5><br/>
          <p className="bookDescription">
            KB 희망진로콘서트 "꿈꾸는 대로"
          </p>
        <div className="lectureIcons">
          <div className="gitIcons">
            <a href="https://www.youtube.com/watch?v=wKvUT208qao&t=10s" target="_blank"  rel="noreferrer">
              {lectureLogo} Lecture
            </a>
          </div>
        </div>
      </div>
    </div>
    </div>

    var lecture8 = <div className="singleLectureContainer">
    <div className="singleWebsiteCard">
      <img className="websiteImage" src="https://cdn.jsdelivr.net/gh/needleworm/ai_voca/src/images/lectures/8.jpg" alt="projectimage"/>
      <div className="projectText">
        <h5>스마트팜과 수경재배 (2020)</h5><br/>
          <p className="bookDescription">
            안동대학교 농업마이스터과정
          </p>
      </div>
    </div>
    </div>

    var lecture9 = <div className="singleLectureContainer">
    <div className="singleWebsiteCard">
      <img className="websiteImage" src="https://cdn.jsdelivr.net/gh/needleworm/ai_voca/src/images/lectures/9.jpg" alt="projectimage"/>
      <div className="projectText">
        <h5>AI개발을 위한 프레임워크 (2020)</h5><br/>
          <p className="bookDescription">
            동서울대학교 LINK+ AI입문 특강
          </p>
        <div className="lectureIcons">
          <div className="gitIcons">
            <a href="http://www.kdpress.co.kr/news/articleView.html?idxno=99797" target="_blank"  rel="noreferrer">
              {newsIcon} News
            </a>
            &nbsp;&nbsp;&nbsp;
            <a href="https://www.slideshare.net/ssuserd66df4/ai-ai-251373482" target="_blank"  rel="noreferrer">
              {lectureLogo} Slides
            </a>
            &nbsp;&nbsp;&nbsp;
            <a href="https://youtu.be/4uSN6mEBdNo" target="_blank"  rel="noreferrer">
              {youtube} Vlog
            </a>
          </div>
        </div>
      </div>
    </div>
    </div>

    var lecture10 = <div className="singleLectureContainer">
    <div className="singleWebsiteCard">
      <img className="websiteImage" src="https://cdn.jsdelivr.net/gh/needleworm/ai_voca/src/images/lectures/10.jpg" alt="projectimage"/>
      <div className="projectText">
        <h5>가장 오래된 산업에 첨단기술 끼얹기 (2020)</h5><br/>
          <p className="bookDescription">
            넥슨 NYPC 토크콘서트
          </p>
        <div className="lectureIcons">
          <div className="gitIcons">
            <a href="http://gamefocus.co.kr/detail.php?number=108335" target="_blank"  rel="noreferrer">
              {newsIcon} News
            </a>
            &nbsp;&nbsp;&nbsp;
            <a href="https://youtu.be/lu4UOpEnHyY" target="_blank"  rel="noreferrer">
              {lectureLogo} YouTube
            </a>
            &nbsp;&nbsp;&nbsp;
            <a href="https://www.slideshare.net/ssuserd66df4/nexon-nypc-2020" target="_blank"  rel="noreferrer">
              {lectureLogo} Slides
            </a>
          </div>
        </div>
      </div>
    </div>
    </div>

    var lecture11 = <div className="singleLectureContainer">
    <div className="singleWebsiteCard">
      <img className="websiteImage" src="https://cdn.jsdelivr.net/gh/needleworm/ai_voca/src/images/lectures/11.jpg" alt="projectimage"/>
      <div className="projectText">
        <h5>농촌체험상품 개발 브랜딩, 상표출원 교육 특강 (2020)</h5><br/>
          <p className="bookDescription">
            한국생명과학고등학교 고교학점제 초청강연
          </p>
      </div>
    </div>
    </div>

    var lecture12 = <div className="singleLectureContainer">
      <div className="singleWebsiteCard">
        <img className="websiteImage" src="https://cdn.jsdelivr.net/gh/needleworm/ai_voca/src/images/lectures/12.jpg" alt="projectimage"/>
        <div className="projectText">
          <h5>호프스테더 권력거리 이론 관점에서 본 고용노동부 행정혁신 성공사례 (2020)</h5><br/>
            <p className="bookDescription">
              농촌진흥청 혁신역량향상 교육<br/>
            </p>
          <div className="lectureIcons">
            <div className="gitIcons">
              <a href="https://brunch.co.kr/@needleworm/209" target="_blank"  rel="noreferrer">
                {book} 
              </a>
              &nbsp;&nbsp;&nbsp;
              <a href="https://brunch.co.kr/@needleworm/210" target="_blank"  rel="noreferrer">
                {book} 
              </a>
              &nbsp;&nbsp;&nbsp;
              <a href="https://brunch.co.kr/@needleworm/211" target="_blank"  rel="noreferrer">
                {book} Notes
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>

    var lecture13 = <div className="singleLectureContainer">
    <div className="singleWebsiteCard">
      <img className="websiteImage" src="https://cdn.jsdelivr.net/gh/needleworm/ai_voca/src/images/lectures/13.jpg" alt="projectimage"/>
      <div className="projectText">
        <h5>잔머리로 시스템을 가지고 노는 방법 (2019)</h5><br/>
          <p className="bookDescription">
            경안고등학교 초청강연
          </p>
      </div>
    </div>
    </div>

    var lecture14 = <div className="singleLectureContainer">
    <div className="singleWebsiteCard">
      <img className="websiteImage" src="https://cdn.jsdelivr.net/gh/needleworm/ai_voca/src/images/lectures/14.jpg" alt="projectimage"/>
      <div className="projectText">
        <h5>혁신의 장벽을 개발자스럽게 부수기 (2019)</h5><br/>
          <p className="bookDescription">
            마소콘 2019 기조연설
          </p>
        <div className="lectureIcons">
          <div className="gitIcons">
            <a href="http://it.chosun.com/site/data/html_dir/2019/11/23/2019112301220.html" target="_blank"  rel="noreferrer">
              {newsIcon} News
            </a>
          </div>
        </div>
      </div>
    </div>
    </div>

    var lecture15 = <div className="singleLectureContainer">
    <div className="singleWebsiteCard">
      <img className="websiteImage" src="https://cdn.jsdelivr.net/gh/needleworm/ai_voca/src/images/lectures/15.jpg" alt="projectimage"/>
      <div className="projectText">
        <h5>수필 두 편으로 50일만에 대한민국 움직이기 (2019)</h5><br/>
          <p className="bookDescription">
            계명대학교 초청강연
          </p>
      </div>
    </div>
    </div>

    var lecture16 = <div className="singleLectureContainer">
    <div className="singleWebsiteCard">
      <img className="websiteImage" src="https://cdn.jsdelivr.net/gh/needleworm/ai_voca/src/images/lectures/16.jpg" alt="projectimage"/>
      <div className="projectText">
        <h5>실패하는 스타트업 (2019)</h5><br/>
          <p className="bookDescription">
            POSTECH 영재기업인 교육원 온라인 마이 멘토 초청강연
          </p>
      </div>
    </div>
    </div>

    var lecture17 = <div className="singleLectureContainer">
      <div className="singleWebsiteCard">
        <img className="websiteImage" src="https://cdn.jsdelivr.net/gh/needleworm/ai_voca/src/images/lectures/17.jpg" alt="projectimage"/>
        <div className="projectText">
          <h5>파이썬과 함께라는 마음가짐만 있으면 못 할 것은 없다는 마음가짐만 있으면 정말로 못 할 것은 없다 (2019)</h5><br/>
            <p className="bookDescription">
              2019 PyconKR 기조연설
            </p>
          <div className="lectureIcons">
            <div className="gitIcons">
              <a href="https://bhban.tistory.com/9" target="_blank"  rel="noreferrer">
                {lectureLogo} Lecture
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
    
    var lecture18 = <div className="singleLectureContainer">
    <div className="singleWebsiteCard">
      <img className="websiteImage" src="https://cdn.jsdelivr.net/gh/needleworm/ai_voca/src/images/lectures/18.jpg" alt="projectimage"/>
      <div className="projectText">
        <h5>그로스해킹을 통한 행정혁신 사례 (2019)</h5><br/>
          <p className="bookDescription">
            2019 제16회 워크 스마트 포럼 - 로보틱 프로세스 자동화 (RPA), 행정안전부 초청
          </p>
        <div className="lectureIcons">
          <div className="gitIcons">
            <a href="https://www.youtube.com/watch?v=c0w4oTZ41zY" target="_blank"  rel="noreferrer">
            <i className="fas fa-external-link-alt"></i> Blog
            </a>
          </div>
        </div>
      </div>
    </div>
    </div>
    
    var lecture19 = <div className="singleLectureContainer">
    <div className="singleWebsiteCard">
      <img className="websiteImage" src="https://cdn.jsdelivr.net/gh/needleworm/ai_voca/src/images/lectures/19.jpg" alt="projectimage"/>
      <div className="projectText">
        <h5>행정혁신 성공사례 강연 (2019)</h5><br/>
          <p className="bookDescription">
            2019, 정부혁신 담당관 워크숍, 행정안전부 초청
          </p>
        <div className="lectureIcons">
          <div className="gitIcons">
            <a href="https://blog.naver.com/mopaspr/221516836663" target="_blank"  rel="noreferrer">
            <i className="fas fa-external-link-alt"></i> Blog
            </a>
              &nbsp;&nbsp;&nbsp;
            <a href="https://www.news1.kr/articles/?3585452" target="_blank"  rel="noreferrer">
            {newsIcon} News
            </a>
          </div>
        </div>
      </div>
    </div>
    </div>
    
    var lecture20 = <div className="singleLectureContainer">
    <div className="singleWebsiteCard">
      <img className="websiteImage" src="https://cdn.jsdelivr.net/gh/needleworm/ai_voca/src/images/lectures/20.jpg" alt="projectimage"/>
      <div className="projectText">
        <h5>코딩하는 공익 - 아직 세상을 바꾸고 싶은 개발자에게 (2019)</h5><br/>
          <p className="bookDescription">
            KCD2019, [코딩이랑무관합니다만] 세션
          </p>
        <div className="lectureIcons">
          <div className="gitIcons">
            <a href="https://brunch.co.kr/@needleworm/59" target="_blank"  rel="noreferrer">
            <i className="fas fa-external-link-alt"></i>
            </a>
              &nbsp;&nbsp;&nbsp;
            <a href="https://brunch.co.kr/@needleworm/61" target="_blank"  rel="noreferrer">
            <i className="fas fa-external-link-alt"></i> Blog
            </a>
          </div>
        </div>
      </div>
    </div>
    </div>
    
    var lecture21 = <div className="singleLectureContainer">
    <div className="singleWebsiteCard">
      <img className="websiteImage" src="https://cdn.jsdelivr.net/gh/needleworm/ai_voca/src/images/lectures/21.jpg" alt="projectimage"/>
      <div className="projectText">
        <h5>학생창업과 KAIST (2018)</h5><br/>
          <p className="bookDescription">
            2018 상반기, E5-KAIST 시니어 멘토 초청강연
          </p>
      </div>
    </div>
    </div>
    
    var lecture22 = <div className="singleLectureContainer">
    <div className="singleWebsiteCard">
      <img className="websiteImage" src="https://cdn.jsdelivr.net/gh/needleworm/ai_voca/src/images/lectures/22.jpg" alt="projectimage"/>
      <div className="projectText">
        <h5>학생신분으로 스타트업 세우기 (2016)</h5><br/>
          <p className="bookDescription">
            2016 KLC 벤처포럼 at KAIST
          </p>
      </div>
    </div>
    </div>
    
    var lecture23 = <div className="singleLectureContainer">
      <div className="singleWebsiteCard">
        <img className="websiteImage" src="https://cdn.jsdelivr.net/gh/needleworm/ai_voca/src/images/lectures/23.jpg" alt="projectimage"/>
        <div className="projectText">
          <h5>아이디어에서 사업화까지 (2012)</h5><br/>
            <p className="bookDescription">
              제 2회 KAIST 전국 발명대회 시상식 워크숍 초청강연
            </p>
        </div>
      </div>
    </div>
    
    var lecture24 = <div className="singleLectureContainer">
      <div className="singleWebsiteCard">
        <img className="websiteImage" src="https://cdn.jsdelivr.net/gh/needleworm/ai_voca/src/images/lectures/24.jpg" alt="projectimage"/>
        <div className="projectText">
          <h5>뇌과학에 발을 들이면서 (2012)</h5><br/>
            <p className="bookDescription">
              경안고등학교 과학동아리 초청강연
            </p>
        </div>
      </div>
    </div>

    var lecture25 = <div className="singleLectureContainer">
    <div className="singleWebsiteCard">
      <img className="websiteImage" src="https://cdn.jsdelivr.net/gh/needleworm/ai_voca/src/images/lectures/25.jpg" alt="projectimage"/>
      <div className="projectText">
        <h5>학습법 멘토링 강연 (2012)</h5><br/>
          <p className="bookDescription">
            대전만년고등학교 
          </p>
      </div>
    </div>
    </div>   

    var lecture26 = <div className="singleLectureContainer">
      <div className="singleWebsiteCard">
         <img className="websiteImage" src="https://cdn.jsdelivr.net/gh/needleworm/ai_voca/src/images/lectures/26.jpg" alt="projectimage"/>
        <div className="projectText">
          <h5>스마트팜 교육 프로그램 (2021)</h5><br/>
            <p className="bookDescription">
              대구 서구 도시재생지원센터 원고개마을 조성사업, 4차산업혁명과 스마트팜 경영방법<br/>
              5주 교육과정
            </p>
          <div className="lectureIcons">
            <a href="http://seoguurc.or.kr/open_content/biz/biz_02.php" target="_blank"  rel="noreferrer">
                {edulogo} Lecture
              </a>
          </div>
        </div>
      </div>
    </div>
    
    var lecture27 = <div className="singleLectureContainer">
      <div className="singleWebsiteCard">
         <img className="websiteImage" src="https://cdn.jsdelivr.net/gh/needleworm/ai_voca/src/images/lectures/27.png" alt="projectimage"/>
        <div className="projectText">
          <h5>스마트팜 교육 (2021)</h5><br/>
            <p className="bookDescription">
              대구한의대학교 교수진 및 시설팀 관계자들 대상 스마트팜 강의
            </p>
          <div className="lectureIcons">
            <a href="http://www.dhu.ac.kr/pages/index.htm" target="_blank"  rel="noreferrer">
                {edulogo} Lecture
              </a>
          </div>
        </div>
      </div>
    </div>

    var lecture28 = <div className="singleLectureContainer">
    <div className="singleWebsiteCard">
      <img className="websiteImage" src="https://cdn.jsdelivr.net/gh/needleworm/ai_voca/src/images/lectures/28.jpg" alt="lectureimage"/>
      <div className="projectText">
        <h5>코스콤 임직원 대상 교육 (2021)</h5><br/>
          <p className="bookDescription">
            비개발자를 위한 파이썬과 엑셀/한글 RPA 실습 (24차시)<br></br>
            비전공자 사무직 수강생 전원이 자신만의 업무 자동화 소프트웨어를 개발하고, 윈도우용 응용 프로그램으로 빌드하여 배포까지 달성
          </p>
        <div className="lectureIcons">
          <a href="https://www.koscom.co.kr/portal/main.do" target="_blank"  rel="noreferrer">
              {edulogo} Lecture
            </a>
        </div>
      </div>
    </div>
    </div>

    var lecture29 = <div className="singleLectureContainer">
    <div className="singleWebsiteCard">
      <img className="websiteImage" src="https://cdn.jsdelivr.net/gh/needleworm/ai_voca/src/images/lectures/29.jpg" alt="projectimage"/>
      <div className="projectText">
        <h5>전북 청년창업사관학교 교육 (2021)</h5><br/>
          <p className="bookDescription">
            PMF와 그로스해킹, PDI와 스타트업의 조직구성, 공동창업계약과 자금조달 (3차시)
          </p>
        <div className="lectureIcons">
          <a href="https://www.koscom.co.kr/portal/main.do" target="_blank"  rel="noreferrer">
              {edulogo} Lecture
          </a>
        </div>
      </div>
    </div>
    </div>

    var lecture30 = <div className="singleLectureContainer">
      <div className="singleWebsiteCard">
        <img className="websiteImage" src="https://cdn.jsdelivr.net/gh/needleworm/ai_voca/src/images/lectures/30.png" alt="projectimage"/>
        <div className="projectText">
          <h5>쉬운 딥러닝 (2021)</h5><br/>
            <p className="bookDescription">
              <a href="https://book.naver.com/bookdb/book_detail.nhn?bid=19007726" target="_blank" rel="noreferrer">수학 통계를 몰라도 이해할 수 있는 쉬운 딥러닝</a> 도서 저자직강<br/>
              비전공자도 딥러닝을 배울 수 있다! <br/>
              총 17차시, 8시간 53분 분량의 강의영상 <br/>
              천재교육 내부 임직원교육 등 활용중
            </p>
        </div>
      </div>
    </div>

    var lecture31 = <div className="singleLectureContainer">
      <div className="singleWebsiteCard">
        <img className="websiteImage" src="https://cdn.jsdelivr.net/gh/needleworm/ai_voca/src/images/lectures/31.png" alt="projectimage"/>
        <div className="projectText">
          <h5>코꼬마를 위한 코딩유치원 (2021)</h5><br/>
            <p className="bookDescription">
              패스트캠퍼스 온라인강좌<br/>
              개발자가 될 건 아니지만 코딩은 배우고 싶은 코꼬마를 위한 코딩유치원
            </p>
          <div className="lectureIcons">
            <div className="gitIcons">
              <a href="https://fastcampus.co.kr/dev_online_codingschool" target="_blank"  rel="noreferrer">
                {lectureLogo} Lecture
              </a>
            </div>
          </div>
        </div>
      </div>  
    </div>

    var lecture32 = <div className="singleLectureContainer">
      <div className="singleWebsiteCard">
        <img className="websiteImage" src="https://cdn.jsdelivr.net/gh/needleworm/ai_voca/src/images/lectures/32.png" alt="projectimage"/>
        <div className="projectText">
          <h5>미래 사법의 과제 - AI 임팩트 (2022)</h5><br/>
            <p className="bookDescription">
              대법원 사법정책연구원<br/>
              미래 사법 Round Table<br/>
              AI기술과 관련하여, 미래의 사법부가 추구해야 할 바람직한 모습을 연구하고 설계하기 위한 방향에 대하여 논의.
            </p>
          <div className="lectureIcons">
            <div className="gitIcons">

              <a href="https://www.slideshare.net/ssuserd66df4/2022-ai" target="_blank"  rel="noreferrer">
                {lectureLogo} Slides
              </a>
              &nbsp;&nbsp;&nbsp;
              <a href="https://jpri.scourt.go.kr/main.do" target="_blank"  rel="noreferrer">
                <i className="fas fa-external-link-alt"></i> 사법정책연구원
              </a>
            </div>
          </div>
        </div>
      </div>  
    </div>
    
    var lecture33 = <div className="singleLectureContainer">
      <div className="singleWebsiteCard">
        <img className="websiteImage" src="https://cdn.jsdelivr.net/gh/needleworm/ai_voca/src/images/lectures/33.jpeg" alt="projectimage"/>
        <div className="projectText">
          <h5>뇌과학에 발을 들이면서 (2022)</h5><br/>
            <p className="bookDescription">
              경안고등학교 인공지능 프로젝트 자문위원
            </p>
        </div>
      </div>
    </div>
    
    var lecture34 = <div className="singleLectureContainer">
      <div className="singleWebsiteCard">
        <img className="websiteImage" src="https://cdn.jsdelivr.net/gh/needleworm/ai_voca/src/images/lectures/34.jpeg" alt="projectimage"/>
        <div className="projectText">
          <h5>진로특강 (2022)</h5><br/>
            <p className="bookDescription">
              영양여자고등학교 진로특강 특강강사 초청
            </p>
        </div>
      </div>
    </div>

    var lecture35 = <div className="singleLectureContainer">
      <div className="singleWebsiteCard">
        <img className="websiteImage" src="https://cdn.jsdelivr.net/gh/needleworm/ai_voca/src/images/lectures/35.jpg" alt="projectimage"/>
        <div className="projectText">
          <h5>비전공자를 위한 쉬운 딥러닝 (2022)</h5><br/>
            <p className="bookDescription">
              WiseHRD<br/>
              파이썬 기초부터 딥러닝 기초, CNN과 LSTM까지
              21종의 인공지능을 만들면서 배우는 쉬운 딥러닝 강의
            </p>
          <div className="lectureIcons">
            <div className="gitIcons">
              <a href="http://wisehrd.com" target="_blank"  rel="noreferrer">
                {lectureLogo} Lecture
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>

    var lecture36 = <div className="singleLectureContainer">
      <div className="singleWebsiteCard">
        <img className="websiteImage" src="https://cdn.jsdelivr.net/gh/needleworm/ai_voca/src/images/lectures/36.png" alt="projectimage"/>
        <div className="projectText">
          <h5>한국인이 좋아하는 속도로 때려넣는 파이썬 (2022)</h5><br/>
            <p className="bookDescription">
              인프런 온라인강좌<br/>
              모두가 배워야 한다고 호들갑인 파이썬! 한국인이 좋아하는 속도로! 3시간 안에! 때려넣어 드립니다!
            </p>
          <div className="lectureIcons">
            <div className="gitIcons">
              <a href="https://inf.run/yyKd" target="_blank"  rel="noreferrer">
                {lectureLogo} Lecture
              </a>
            </div>
          </div>
        </div>
      </div>  
    </div>

    var lecture37 = <div className="singleLectureContainer">
      <div className="singleWebsiteCard">
        <img className="websiteImage" src="https://cdn.jsdelivr.net/gh/needleworm/ai_voca/src/images/lectures/37.png" alt="projectimage"/>
        <div className="projectText">
          <h5>6개월 치 업무를 하루 만에 끝내는 업무자동화 Renual (2022)</h5><br/>
            <p className="bookDescription">
              패스트캠퍼스 온라인강좌<br/>
              업무자동화 분야 국내 1위 강의의 리뉴얼 버젼!
            </p>
          <div className="lectureIcons">
            <div className="gitIcons">
              <a href="https://fastcampus.co.kr/dev_online_bbh" target="_blank"  rel="noreferrer">
                {lectureLogo} Lecture
              </a>
            </div>
          </div>
        </div>
      </div>  
    </div>    

    var lecture38 = <div className="singleLectureContainer">
      <div className="singleWebsiteCard">
        <img className="websiteImage" src="https://cdn.jsdelivr.net/gh/needleworm/ai_voca/src/images/lectures/38.jpg" alt="projectimage"/>
        <div className="projectText">
          <h5>인공지능 시대를 준비하는 전문가의 마음가짐 (2022)</h5><br/>
            <p className="bookDescription">
              안동경안고등학교, 인공지능(AI) 교육선도학교 인공지능 전문가 특강
            </p>
        </div>
      </div>
    </div>


    var lecture39 = <div className="singleLectureContainer">
      <div className="singleWebsiteCard">
        <img className="websiteImage" src="https://cdn.jsdelivr.net/gh/needleworm/ai_voca/src/images/lectures/39.png" alt="projectimage"/>
        <div className="projectText">
          <h5>돈이 복사되는 가상자산 수업 (2022)</h5><br/>
            <p className="bookDescription">
              아트엑스캠퍼스 온라인강좌<br/>
              <a href="https://needleworm.github.io/tech3/" target="_blank" rel="noreferrer">
                돈이 복사되는 가상자산 수업
              </a>
              도서를 바탕으로 제작된 온라인 강의입니다. 
            </p>
          <div className="lectureIcons">
            <div className="gitIcons">
              <a href="https://www.artxcampus.co.kr/lecture.php?action=package&uid=66" target="_blank"  rel="noreferrer">
                {lectureLogo} Lecture
              </a>
            </div>
          </div>
        </div>
      </div>  
    </div>

    var lecture40 = <div className="singleLectureContainer">
      <div className="singleWebsiteCard">
        <img className="websiteImage" src="https://cdn.jsdelivr.net/gh/needleworm/ai_voca/src/images/lectures/40.png" alt="projectimage"/>
        <div className="projectText">
          <h5>한국인이 좋아하는 속도로 때려넣는 워드프레스 (2022)</h5><br/>
            <p className="bookDescription">
              인프런 온라인강좌<br/>
              영상을 따라하기만 해도 나만의 웹 페이지가 뚝딱! 성능과 마케팅 최적화까지 알려드려요!
            </p>
          <div className="lectureIcons">
            <div className="gitIcons">
              <a href="https://inf.run/Jqkj" target="_blank"  rel="noreferrer">
                {lectureLogo} Lecture
              </a>
            </div>
          </div>
        </div>
      </div>  
    </div>

    var lecture41 = <div className="singleLectureContainer">
      <div className="singleWebsiteCard">
        <img className="websiteImage" src="https://cdn.jsdelivr.net/gh/needleworm/ai_voca/src/images/lectures/41.png" alt="projectimage"/>
        <div className="projectText">
          <h5>기술이 하는 일, 사람이 하는 일 (2022)</h5><br/>
            <p className="bookDescription">
              한림대학교 초청강연<br/>
              디지털인문예술전공 교수, 학생대상 초청강연. 
            </p>
          <div className="lectureIcons">
          </div>
        </div>
      </div>  
    </div>


    return (
      <div className="websitesContainer">
        {/* 상업강의 */}
        {lecture40}
        {lecture39}
        {lecture37}
        {lecture36}
        {lecture35}
        {lecture31}
        {lecture1}

        {/* 자랑스러운 강의 */}
        {lecture6}
        {lecture32}
        {lecture17}
        {lecture14}
        {lecture10}
        {lecture20}
        {lecture7}

        {/* 기업 강의 */}
        {lecture30}
        {lecture28}

        {/* 공공기관 강의 */}
        {lecture26}
        {lecture29}
        {lecture19}
        {lecture18}
        {lecture12}
        {lecture2}

        {/* 대학 강의 */}
        {lecture41}
        {lecture27}
        {lecture23}
        {lecture22}
        {lecture21}
        {lecture16}
        {lecture15}
        {lecture9}
        {lecture8}

        {/* 고교 강의 */}
        {lecture38}
        {lecture34}
        {lecture33}
        {lecture25}
        {lecture24}
        {lecture13}
        {lecture11}
        {lecture5}
        {lecture4}
        {lecture3}
      </div>
    )
  }

  render() {
    return (
      <section id="lectures" className="animated bounceInDown">
          {this.sectionTitle()}
          {this.drawLectures()}
      </section>
    );
  }
}
  
export default Lectures;
