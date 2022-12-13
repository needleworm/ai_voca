import React, {Component} from 'react';
import './news.css';


class News extends Component {
  constructor(props){
    super(props);
    this.state = {
    }
  }

  sectionTitle(){
    return(
      <div className="row">
        <div className="col-lg-12 text-center">
            <h2 className="section-heading subpageHeading">News</h2>
        </div>
      </div>
    )
  }

  drawNews(){
    var news2 = <div className="singleProjectContainer">
      <div className="singleNewsCard">
        <a className="hideOnDesktop" href="http://gamefocus.co.kr/detail.php?number=108335" target="_blank"  rel="noreferrer">
          <div className="newsThumnail">
            <img className="newsImage" src="https://cdn.jsdelivr.net/gh/needleworm/ai_voca/src/images/news/2.jpg"  alt="projectimage"/>
            <h5>게임포커스</h5>
          </div>
          </a>
        <div className="projectText">
          <a href="http://gamefocus.co.kr/detail.php?number=108335" target="_blank"  rel="noreferrer">
            <h5>코딩은 어떻게 세상을 바꾸나, 넥슨 'NYPC 2020 토크콘서트 ON' 1일차 강연 진행</h5>
          </a>
          <div className="codeBody">
            <p className="bookDescription firstCommitDate">
              2020.08.15.
            </p>
            <p className="bookDescription">
            상상텃밭의 반병현 CTO는 코딩과 인공지능을 활용해 농업 과정에서의 판단 및 예측의 자동화를 시도하고 있다.
            </p>
          </div>
        </div>
        <a className="hideOnMobile" href="http://gamefocus.co.kr/detail.php?number=108335" target="_blank"  rel="noreferrer">
          <div className="newsThumnail">
            <img className="newsImage" src="https://cdn.jsdelivr.net/gh/needleworm/ai_voca/src/images/news/2.jpg"  alt="projectimage"/>
            <h5>게임포커스</h5>
          </div>
          </a>
      </div>
    </div>
    
    var news3 = <div className="singleProjectContainer">
      <div className="singleNewsCard">
        <a className="hideOnDesktop"  href="http://it.chosun.com/site/data/html_dir/2019/11/23/2019112301220.html" target="_blank"  rel="noreferrer">
          <div className="newsThumnail">
            <img className="newsImage" src="https://cdn.jsdelivr.net/gh/needleworm/ai_voca/src/images/news/3.jpg"  alt="projectimage"/>
            <h5>IT조선</h5>
          </div>
          </a>
        <div className="projectText">
          <a href="http://it.chosun.com/site/data/html_dir/2019/11/23/2019112301220.html" target="_blank"  rel="noreferrer">
            <h5>[마소콘 2019] '코딩하는 공익'이 '세상을 바꾸는 공익'으로</h5>
          </a>
          <div className="codeBody">
            <p className="bookDescription firstCommitDate">
              2019.11.23.
            </p>
            <p className="bookDescription">
            반 씨는 마이크로소프트웨어와 IT조선이 23일 서울 마포구 상암동 누리꿈스퀘어에서 개최한 '마소콘(MASOCON) 2019'에 참가해 ‘혁신의 장벽을 개발자스럽게 부수기’를 주제로 강연했다.
            </p>
          </div>
        </div>
        <a className="hideOnMobile"  href="http://it.chosun.com/site/data/html_dir/2019/11/23/2019112301220.html" target="_blank"  rel="noreferrer">
          <div className="newsThumnail">
            <img className="newsImage" src="https://cdn.jsdelivr.net/gh/needleworm/ai_voca/src/images/news/3.jpg"  alt="projectimage"/>
            <h5>IT조선</h5>
          </div>
          </a>
      </div>
    </div>
        
    var news4 = <div className="singleProjectContainer">
      <div className="singleNewsCard">
        <a className="hideOnDesktop"  href="http://www.seoul.co.kr/news/newsView.php?id=20130406025027" target="_blank"  rel="noreferrer">
          <div className="newsThumnail">
            <img className="newsImage" src="https://cdn.jsdelivr.net/gh/needleworm/ai_voca/src/images/news/4.jpg"  alt="projectimage"/>
            <h5>서울신문</h5>
          </div>
          </a>
        <div className="projectText">
          <a href="http://www.seoul.co.kr/news/newsView.php?id=20130406025027" target="_blank"  rel="noreferrer">
            <h5>총장의 말춤 “카이스트를 소통 스타일로”</h5>
          </a>
          <div className="codeBody">
            <p className="bookDescription firstCommitDate">
              2013.04.06.
            </p>
            <p className="bookDescription">
            4일 새벽 1시 40분. 강성모(오른쪽) 한국과학기술원(KAIST) 총장에게 도착한 메일 내용이다. 메일을 보낸 반씨도 “별로 기대하지 않았다”고 말할 정도로 황당한 부탁이었다. 두 시간 뒤 반씨에게 답장이 도착했다.
            </p>
          </div>
        </div>
        <a className="hideOnMobile"  href="http://www.seoul.co.kr/news/newsView.php?id=20130406025027" target="_blank"  rel="noreferrer">
          <div className="newsThumnail">
            <img className="newsImage" src="https://cdn.jsdelivr.net/gh/needleworm/ai_voca/src/images/news/4.jpg"  alt="projectimage"/>
            <h5>서울신문</h5>
          </div>
          </a>
      </div>
    </div>

    var news5 = <div className="singleProjectContainer">
      <div className="singleNewsCard">
        <a className="hideOnDesktop"  href="https://www.kyongbuk.co.kr/news/articleView.html?idxno=518743" target="_blank"  rel="noreferrer">
          <div className="newsThumnail">
            <img className="newsImage" src="https://cdn.jsdelivr.net/gh/needleworm/ai_voca/src/images/news/5.jpg"  alt="projectimage"/>
            <h5>경북일보</h5>
          </div>
          </a>
        <div className="projectText">
          <a href="https://www.kyongbuk.co.kr/news/articleView.html?idxno=518743" target="_blank"  rel="noreferrer">
            <h5>고교 2학년 문과지망생, 카이스트 합격 화제</h5>
          </a>
          <div className="codeBody">
            <p className="bookDescription firstCommitDate">
              2010.12.12.
            </p>
            <p className="bookDescription">
            사실 반 군은 문과 지망생이었다. 어렸을 때 동화와 만화에서 시작된 독서 편력은 중학교를 거치며 무협소설로 이어졌다. 웬만한 무협지는 섭렵하다 보니 학교 성적이 곤두박질 쳤고
            </p>
          </div>
        </div>
        <a className="hideOnMobile"  href="https://www.kyongbuk.co.kr/news/articleView.html?idxno=518743" target="_blank"  rel="noreferrer">
          <div className="newsThumnail">
            <img className="newsImage" src="https://cdn.jsdelivr.net/gh/needleworm/ai_voca/src/images/news/5.jpg"  alt="projectimage"/>
            <h5>경북일보</h5>
          </div>
          </a>
      </div>
    </div>

    var news6 = <div className="singleProjectContainer">
      <div className="singleNewsCard">
        <a className="hideOnDesktop"  href="https://www.edaily.co.kr/news/read?newsId=01315286622583384&mediaCodeNo=257&OutLnkChk=Y" target="_blank"  rel="noreferrer">
          <div className="newsThumnail">
            <img className="newsImage" src="https://cdn.jsdelivr.net/gh/needleworm/ai_voca/src/images/news/6.jpg"  alt="projectimage"/>
            <h5>이데일리</h5>
          </div>
          </a>
        <div className="projectText">
          <a href="https://www.edaily.co.kr/news/read?newsId=01315286622583384&mediaCodeNo=257&OutLnkChk=Y" target="_blank"  rel="noreferrer">
            <h5>[90년대생 리포트]⑤유튜브·코딩도 척척…공직사회에도 새 바람</h5>
          </a>
          <div className="codeBody">
            <p className="bookDescription firstCommitDate">
              2019.08.02.
            </p>
            <p className="bookDescription">
            이 이야기는 조직 내부는 물론 세간에도 알려지면서 유명세를 탔고 반 씨는 고용노동부 고용서비스과를 비롯해 행안부 등 많은 부처에 업무 협조 요청을 받았다.
            </p>
          </div>
        </div>
        <a className="hideOnMobile"  href="https://www.edaily.co.kr/news/read?newsId=01315286622583384&mediaCodeNo=257&OutLnkChk=Y" target="_blank"  rel="noreferrer">
          <div className="newsThumnail">
            <img className="newsImage" src="https://cdn.jsdelivr.net/gh/needleworm/ai_voca/src/images/news/6.jpg"  alt="projectimage"/>
            <h5>이데일리</h5>
          </div>
          </a>
      </div>
    </div>
    
    var news7 = <div className="singleProjectContainer">
      <div className="singleNewsCard">
        <a className="hideOnDesktop"  href="http://weekly.khan.co.kr/khnm.html?mode=view&code=114&artid=201812101537021&pt=nv" target="_blank"  rel="noreferrer">
          <div className="newsThumnail">
            <img className="newsImage" src="https://cdn.jsdelivr.net/gh/needleworm/ai_voca/src/images/news/6.jpg"  alt="projectimage"/>
            <h5>경향신문</h5>
          </div>
          </a>
        <div className="projectText">
          <a href="http://weekly.khan.co.kr/khnm.html?mode=view&code=114&artid=201812101537021&pt=nv" target="_blank"  rel="noreferrer">
            <h5>[언더그라운드 넷]심심해서 프로그램 개발한 ‘카이스트 공익’</h5>
          </a>
          <div className="codeBody">
            <p className="bookDescription firstCommitDate">
              2018.12.17.
            </p>
            <p className="bookDescription">
            반씨는 ‘국정원’ 관계자와 통화를 한 끝에 겨우 차단을 해제받았다. 이후에도 반씨의 프로그래밍 본능은 멈추지 않았다. 한 번은 3900건의 우편물 수신자·발신자 목록 등을 한 번에 정리하는 프로그램을 만들었다.
            </p>
          </div>
        </div>
        <a className="hideOnMobile"  href="http://weekly.khan.co.kr/khnm.html?mode=view&code=114&artid=201812101537021&pt=nv" target="_blank"  rel="noreferrer">
          <div className="newsThumnail">
            <img className="newsImage" src="https://cdn.jsdelivr.net/gh/needleworm/ai_voca/src/images/news/6.jpg"  alt="projectimage"/>
            <h5>경향신문</h5>
          </div>
          </a>
      </div>
    </div>

    var news8 = <div className="singleProjectContainer">
      <div className="singleNewsCard">
        <a className="hideOnDesktop"  href="http://www.dt.co.kr/contents.html?article_no=2016061502101176788001" target="_blank"  rel="noreferrer">
          <div className="newsThumnail">
            <img className="newsImage" src="https://cdn.jsdelivr.net/gh/needleworm/ai_voca/src/images/news/8.jpg"  alt="projectimage"/>
            <h5>디지털타임스</h5>
          </div>
          </a>
        <div className="projectText">
          <a href="http://www.dt.co.kr/contents.html?article_no=2016061502101176788001" target="_blank"  rel="noreferrer">
            <h5>잠자던 공공기술, 청년 만나 `혁신벤처`로</h5>
          </a>
          <div className="codeBody">
            <p className="bookDescription firstCommitDate">
              2016.06.14.
            </p>
            <p className="bookDescription">
            반병현 KAIST 학사과정생의 '치즈케익스튜디오팀'은 사진이나 문장을 입력하면 AI가 자동으로 어울리는 분위기의 곡을 작곡해주는 기술을 창업 아이템으로 제시했다.
            </p>
          </div>
        </div>
        <a className="hideOnMobile"  href="http://www.dt.co.kr/contents.html?article_no=2016061502101176788001" target="_blank"  rel="noreferrer">
          <div className="newsThumnail">
            <img className="newsImage" src="https://cdn.jsdelivr.net/gh/needleworm/ai_voca/src/images/news/8.jpg"  alt="projectimage"/>
            <h5>디지털타임스</h5>
          </div>
          </a>
      </div>
    </div>
    
    var news9 = <div className="singleProjectContainer">
      <div className="singleNewsCard">
        <a className="hideOnDesktop" href="https://newsis.com/view/?id=NISX20190401_0000605040&cID=10301&pID=10300" target="_blank"  rel="noreferrer">
          <div className="newsThumnail">
            <img className="newsImage" src="https://cdn.jsdelivr.net/gh/needleworm/ai_voca/src/images/news/9.jpg"  alt="projectimage"/>
            <h5>뉴시스</h5>
          </div>
          </a>
        <div className="projectText">
          <a href="https://newsis.com/view/?id=NISX20190401_0000605040&cID=10301&pID=10300" target="_blank"  rel="noreferrer">
            <h5>"정부혁신 현 주소 짚는다"…2~3일 담당자 워크숍</h5>
          </a>
          <div className="codeBody">
            <p className="bookDescription firstCommitDate">
              2019.04.01.
            </p>
            <p className="bookDescription">
            회복무요원 반병현씨가 '코딩하는 공익과 업무혁신', 보령시가 '적극행정 보령특별시 선포', 세종시가 '똑똑세종 실험실', 국립공원공단이 '순찰용 드론 공공구매조달'에 대해 각각 발표하게 된다.
            </p>
          </div>
        </div>
        <a className="hideOnMobile" href="https://newsis.com/view/?id=NISX20190401_0000605040&cID=10301&pID=10300" target="_blank"  rel="noreferrer">
          <div className="newsThumnail">
            <img className="newsImage" src="https://cdn.jsdelivr.net/gh/needleworm/ai_voca/src/images/news/9.jpg"  alt="projectimage"/>
            <h5>뉴시스</h5>
          </div>
          </a>
      </div>
    </div>

    var news11 = <div className="singleProjectContainer">
      <div className="singleNewsCard">
        <a className="hideOnDesktop"  href="https://www.news2day.co.kr/149400" target="_blank"  rel="noreferrer">
          <div className="newsThumnail">
            <img className="newsImage" src="https://cdn.jsdelivr.net/gh/needleworm/ai_voca/src/images/news/11.jpg"  alt="projectimage"/>
            <h5>뉴스투데이</h5>
          </div>
          </a>
        <div className="projectText">
          <a href="https://www.news2day.co.kr/149400" target="_blank"  rel="noreferrer">
            <h5>[이태희의 JOB채](44)파이썬의 교훈을 실행한 LG생활건강 차석용 대표, 주가는 오르겠지만</h5>
          </a>
          <div className="codeBody">
            <p className="bookDescription firstCommitDate">
              2020.03.10.
            </p>
            <p className="bookDescription">
            반 씨의 사례는 4차 산업혁명시대에 의미심장한 메시지를 던진다. 단순 반복 노동으로 자신의 가치를 지켜내려는 인간은 이제 설 자리가 없다는 사실이다. 단순 노동 작업자가 6개월 간 걸릴 작업 분량을 반 씨와 같은 혁신가가 반 나절만에 뚝딱 처리해버린다. 
            </p>
          </div>
        </div>
        <a className="hideOnMobile"  href="https://www.news2day.co.kr/149400" target="_blank"  rel="noreferrer">
          <div className="newsThumnail">
            <img className="newsImage" src="https://cdn.jsdelivr.net/gh/needleworm/ai_voca/src/images/news/11.jpg"  alt="projectimage"/>
            <h5>뉴스투데이</h5>
          </div>
          </a>
      </div>
    </div>

    var news12 = <div className="singleProjectContainer">
      <div className="singleNewsCard">
        <a className="hideOnDesktop"  href="https://www.donga.com/news/article/all/20181218/93346855/1" target="_blank"  rel="noreferrer">
          <div className="newsThumnail">
            <img className="newsImage" src="https://cdn.jsdelivr.net/gh/needleworm/ai_voca/src/images/news/12.jpg"  alt="projectimage"/>
            <h5>동아일보</h5>
          </div>
          </a>
        <div className="projectText">
          <a href="https://www.donga.com/news/article/all/20181218/93346855/1" target="_blank"  rel="noreferrer">
            <h5>‘6개월치 잡무’ 하루 만에 끝… 사회복무요원의 행정혁명</h5>
          </a>
          <div className="codeBody">
            <p className="bookDescription firstCommitDate">
              2018.12.18.
            </p>
            <p className="bookDescription">
            반 씨는 17일 본보와의 통화에서 “스스로 ‘가성비(가격 대비 성능)’가 떨어지는 걸 못 견디는 편이라 단순 반복 업무가 싫어 자동화 프로그램을 개발했다”며 “일개 사회복무요원이 정부 행정 시스템을 바꾸는 데 기여할 수 있다는 게 놀라웠다”고 말했다.
            </p>
          </div>
        </div>
        <a className="hideOnMobile"  href="https://www.donga.com/news/article/all/20181218/93346855/1" target="_blank"  rel="noreferrer">
          <div className="newsThumnail">
            <img className="newsImage" src="https://cdn.jsdelivr.net/gh/needleworm/ai_voca/src/images/news/12.jpg"  alt="projectimage"/>
            <h5>동아일보</h5>
          </div>
          </a>
      </div>
    </div>

    var news13 = <div className="singleProjectContainer">
      <div className="singleNewsCard">
        <a className="hideOnDesktop"  href="https://news.joins.com/article/23414498" target="_blank"  rel="noreferrer">
          <div className="newsThumnail">
            <img className="newsImage" src="https://cdn.jsdelivr.net/gh/needleworm/ai_voca/src/images/news/13.jpg"  alt="projectimage"/>
            <h5>중앙일보</h5>
          </div>
          </a>
        <div className="projectText">
          <a href="https://news.joins.com/article/23414498" target="_blank"  rel="noreferrer">
            <h5>[안혜리 논설위원이 간다] 수상한 공익과 더 수상한 공무원의 특별한 접선</h5>
          </a>
          <div className="codeBody">
            <p className="bookDescription firstCommitDate">
              2019.03.19.
            </p>
            <p className="bookDescription">
            파장이 컸다. 지난 연말 청와대에 불려갔다. 이름만 대면 알만한 기업 회장님으로부터는 만나러 와달라는 연락을 받았다. 냉큼 달려가 덥석 시키는 일을 할 법도 한데 웬만한 제안은 다 거절 중이다.
            </p>
          </div>
        </div>
        <a className="hideOnMobile"  href="https://news.joins.com/article/23414498" target="_blank"  rel="noreferrer">
          <div className="newsThumnail">
            <img className="newsImage" src="https://cdn.jsdelivr.net/gh/needleworm/ai_voca/src/images/news/13.jpg"  alt="projectimage"/>
            <h5>중앙일보</h5>
          </div>
          </a>
      </div>
    </div>
    
    
    var news15 = <div className="singleProjectContainer">
      <div className="singleNewsCard">
        <a className="hideOnDesktop"  href="https://in-sightjournal.com/2020/07/15/ban/" target="_blank"  rel="noreferrer">
          <div className="newsThumnail">
            <img className="newsImage" src="https://cdn.jsdelivr.net/gh/needleworm/ai_voca/src/images/news/15.jpg"  alt="projectimage"/>
            <h5>In-Sight Publishing</h5>
          </div>
          </a>
        <div className="projectText">
          <a href="https://in-sightjournal.com/2020/07/15/ban/" target="_blank"  rel="noreferrer">
            <h5>An Interview with Byunghyun Ban (반병현) on Background, and Intelligence Testing & High-IQ Societies</h5>
          </a>
          <div className="codeBody">
            <p className="bookDescription firstCommitDate">
              2020.07.15.
            </p>
            <p className="bookDescription">
            I hope High-IQ communities provide some intellectual contributions to the world. For example, I hope the societies to publish an open-access scientific journal which is indexed as SCIE or SCOPUS, and discount the publication fee for community members. This is the most simple way to collect geniuses and contribute intellectual works.
            </p>
          </div>
        </div>
        <a className="hideOnMobile"  href="https://in-sightjournal.com/2020/07/15/ban/" target="_blank"  rel="noreferrer">
          <div className="newsThumnail">
            <img className="newsImage" src="https://cdn.jsdelivr.net/gh/needleworm/ai_voca/src/images/news/15.jpg"  alt="projectimage"/>
            <h5>In-Sight Publishing</h5>
          </div>
          </a>
      </div>
    </div>

    var news16 = <div className="singleProjectContainer">
      <div className="singleNewsCard">
        <a className="hideOnDesktop"  href="https://startup.kaist.ac.kr/archives/29109" target="_blank"  rel="noreferrer">
          <div className="newsThumnail">
            <img className="newsImage" src="https://cdn.jsdelivr.net/gh/needleworm/ai_voca/src/images/news/16.jpg"  alt="projectimage"/>
            <h5>Startup Kaist</h5>
          </div>
          </a>
        <div className="projectText">
          <a href="https://startup.kaist.ac.kr/archives/29109" target="_blank"  rel="noreferrer">
            <h5>[Startup人터뷰] 양액제어시스템 등 기술을 개발하여 스마트팜을 이끄는 ‘상상텃밭’의 반병현 CTO</h5>
          </a>
          <div className="codeBody">
            <p className="bookDescription firstCommitDate">
              2020.11.13.
            </p>
            <p className="bookDescription">
            당시 다이어트를 하고 있었어요. W8건물 1층 카페에서 샐러드를 사 먹고 있었습니다. 며칠간 밀가루와 고기를 못 먹었더니 성질이 사나워져서 괜히 샐러드에게 짜증이 나는 것 있죠. ‘이렇게 맛없고 비싼 걸 사먹는걸 보면 채식주의자들은 돈이 많은가?’ 하는 생각이 스쳐지나갔습니다.
            </p>
          </div>
        </div>
        <a className="hideOnMobile"  href="https://startup.kaist.ac.kr/archives/29109" target="_blank"  rel="noreferrer">
          <div className="newsThumnail">
            <img className="newsImage" src="https://cdn.jsdelivr.net/gh/needleworm/ai_voca/src/images/news/16.jpg"  alt="projectimage"/>
            <h5>Startup Kaist</h5>
          </div>
          </a>
      </div>
    </div>

    var news17 = <div className="singleProjectContainer">
      <div className="singleNewsCard">
        <a className="hideOnDesktop"  href="https://www.imaso.co.kr/archives/4296" target="_blank"  rel="noreferrer">
          <div className="newsThumnail">
            <img className="newsImage" src="https://cdn.jsdelivr.net/gh/needleworm/ai_voca/src/images/news/17.jpg"  alt="projectimage"/>
            <h5>마이크로소프트웨어</h5>
          </div>
          </a>
        <div className="projectText">
          <a href="https://www.imaso.co.kr/archives/4296" target="_blank"  rel="noreferrer">
            <h5>코딩하는 공익 반병현 CTO “AI 활용한 보급형 스마트팜, ‘상상텃밭’이 만든다”</h5>
          </a>
          <div className="codeBody">
            <p className="bookDescription firstCommitDate">
              2018.11.15.
            </p>
            <p className="bookDescription">
            근무지에 발령받고 엑셀 파일 2개를 합쳐서 하나로 만들어 오라는 지시를 받았다. 그런데 이 파일은 주기적으로 업데이트가 필요한 내용인 것으로 보였고, 앞으로도 꾸준히 본인이 처리해야 할 것 같았다. 그래서 자동으로 처리하는 스크립트를 만들어 담당공무원에게 전달했다. 이게 국가정보자원관리원의 모니터링에 걸렸다. 비인가 소프트웨어 전송을 통한 공격행위로 오인돼 IP를 차단당했고, 우여곡절 끝에 이를 해제했다는 이야기다.
            </p>
          </div>
        </div>
        <a className="hideOnMobile"  href="https://www.imaso.co.kr/archives/4296" target="_blank"  rel="noreferrer">
          <div className="newsThumnail">
            <img className="newsImage" src="https://cdn.jsdelivr.net/gh/needleworm/ai_voca/src/images/news/17.jpg"  alt="projectimage"/>
            <h5>마이크로소프트웨어</h5>
          </div>
          </a>
      </div>
    </div>

    var news18 = <div className="singleProjectContainer">
      <div className="singleNewsCard">
        <a className="hideOnDesktop"  href="https://post.naver.com/viewer/postView.nhn?volumeNo=17719119&memberNo=2420267&vType=VERTICAL" target="_blank"  rel="noreferrer">
          <div className="newsThumnail">
            <img className="newsImage" src="https://cdn.jsdelivr.net/gh/needleworm/ai_voca/src/images/news/18.jpg"  alt="projectimage"/>
            <h5>시사원정대</h5>
          </div>
          </a>
        <div className="projectText">
          <a href="https://post.naver.com/viewer/postView.nhn?volumeNo=17719119&memberNo=2420267&vType=VERTICAL" target="_blank"  rel="noreferrer">
            <h5>세상의 모~든 문제 코딩으로 해결 할래요!</h5>
          </a>
          <div className="codeBody">
            <p className="bookDescription firstCommitDate">
              2019.02.16
            </p>
            <p className="bookDescription">
            기존 방식으로는 처리하는 데 반년이나 걸릴 일을 최근 한 사회복무요원이 단 하루 만에 '뚝딱!' 해치워 사람들을 놀라게 했어요.'
            </p>
          </div>
        </div>
        <a className="hideOnMobile"  href="https://post.naver.com/viewer/postView.nhn?volumeNo=17719119&memberNo=2420267&vType=VERTICAL" target="_blank"  rel="noreferrer">
          <div className="newsThumnail">
            <img className="newsImage" src="https://cdn.jsdelivr.net/gh/needleworm/ai_voca/src/images/news/18.jpg"  alt="projectimage"/>
            <h5>시사원정대</h5>
          </div>
          </a>
      </div>
    </div>



    var news19 = <div className="singleProjectContainer">
      <div className="singleNewsCard">
        <a className="hideOnDesktop"  href="https://www.ekn.kr/web/view.php?key=20210814010002271" target="_blank"  rel="noreferrer">
          <div className="newsThumnail">
            <img className="newsImage" src="https://cdn.jsdelivr.net/gh/needleworm/ai_voca/src/images/news/19.jpg"  alt="projectimage"/>
            <h5>에너지경제신문</h5>
          </div>
          </a>
        <div className="projectText">
          <a href="https://www.ekn.kr/web/view.php?key=20210814010002271" target="_blank"  rel="noreferrer">
            <h5>[신간도서] 비전공자가 업무에서 자주 물어보는 101가지 컴퓨터 활용팁</h5>
          </a>
          <div className="codeBody">
            <p className="bookDescription firstCommitDate">
              2021.08.14.
            </p>
            <p className="bookDescription">
              [에너지경제신문 여헌우 기자] 빠르고 효율적으로 일하려는 모든 직장인을 위한 컴퓨터 활용 스킬을 다룬 신간이 나왔다.
            </p>
          </div>
        </div>
        <a className="hideOnMobile"  href="https://www.ekn.kr/web/view.php?key=20210814010002271" target="_blank"  rel="noreferrer">
          <div className="newsThumnail">
            <img className="newsImage" src="https://cdn.jsdelivr.net/gh/needleworm/ai_voca/src/images/news/19.jpg"  alt="projectimage"/>
            <h5>에너지경제신문</h5>
          </div>
          </a>
      </div>
    </div>

    var news20 = <div className="singleProjectContainer">
      <div className="singleNewsCard">
        <a className="hideOnDesktop"  href="https://press.chungbuk.ac.kr/ktimes/articles/112/20211206/20211206201200.html" target="_blank"  rel="noreferrer">
          <div className="newsThumnail">
            <img className="newsImage" src="https://cdn.jsdelivr.net/gh/needleworm/ai_voca/src/images/news/20.jpg"  alt="projectimage"/>
            <h5>충북대신문</h5>
          </div>
          </a>
        <div className="projectText">
          <a href="https://press.chungbuk.ac.kr/ktimes/articles/112/20211206/20211206201200.html" target="_blank"  rel="noreferrer">
            <h5>대한민국을 바꾼 공익에서 스타트업 CTO가 된 반병현을 만나다</h5>
          </a>
          <div className="codeBody">
            <p className="bookDescription firstCommitDate">
              2021.12.06
            </p>
            <p className="bookDescription">
              그런데, 그 반복적이고 지루한 업무에 매달리지 않고, 개선 방법을 고민해 직접 자동화 프로그램을 만들어 6개월 걸리던 일을 단 30분 만에 끝낸 사람이 있다.
            </p>
          </div>
        </div>
        <a className="hideOnMobile"  href="https://press.chungbuk.ac.kr/ktimes/articles/112/20211206/20211206201200.html" target="_blank"  rel="noreferrer">
          <div className="newsThumnail">
            <img className="newsImage" src="https://cdn.jsdelivr.net/gh/needleworm/ai_voca/src/images/news/20.jpg"  alt="projectimage"/>
            <h5>충북대신문</h5>
          </div>
          </a>
      </div>
    </div>

    var news21 = <div className="singleProjectContainer">
      <div className="singleNewsCard">
        <a className="hideOnDesktop"  href="https://www.donga.com/news/article/all/20220502/113189882/1" target="_blank"  rel="noreferrer">
          <div className="newsThumnail">
            <img className="newsImage" src="https://cdn.jsdelivr.net/gh/needleworm/ai_voca/src/images/news/21.jpg"  alt="projectimage"/>
            <h5>동아일보</h5>
          </div>
          </a>
        <div className="projectText">
          <a href="https://www.donga.com/news/article/all/20220502/113189882/1" target="_blank"  rel="noreferrer">
            <h5>청년 스마트팜 기업 상상텃밭 “가장 진보한 기술로 가장 오래된 산업에 혁신을”</h5>
          </a>
          <div className="codeBody">
            <p className="bookDescription firstCommitDate">
              2022.04.29
            </p>
            <p className="bookDescription">
            “가장 진보한 기술로 가장 오래된 산업에 혁신을 이루겠습니다”<br/>
            청년들이 모여 만든 스마트팜 기업 ‘상상텃밭’의 반병현 최고기술경영자(CTO)가 밝힌 당찬 포부다.
            </p>
          </div>
        </div>
        <a className="hideOnMobile"  href="https://www.donga.com/news/article/all/20220502/113189882/1" target="_blank"  rel="noreferrer">
          <div className="newsThumnail">
            <img className="newsImage" src="https://cdn.jsdelivr.net/gh/needleworm/ai_voca/src/images/news/21.jpg"  alt="projectimage"/>
            <h5>동아일보</h5>
          </div>
          </a>
      </div>
    </div>

    var news22 = <div className="singleProjectContainer">
      <div className="singleNewsCard">
        <a className="hideOnDesktop"  href="https://www.artinsight.co.kr/news/view.php?no=60369" target="_blank"  rel="noreferrer">
          <div className="newsThumnail">
            <img className="newsImage" src="https://cdn.jsdelivr.net/gh/needleworm/ai_voca/src/images/news/22.jpg"  alt="projectimage"/>
            <h5>아트인사이트</h5>
          </div>
          </a>
        <div className="projectText">
          <a href="https://www.artinsight.co.kr/news/view.php?no=60369" target="_blank"  rel="noreferrer">
            <h5>믿음에 값을 매긴다면 - 돈이 복사되는 가상자산 수업</h5>
          </a>
          <div className="codeBody">
            <p className="bookDescription firstCommitDate">
              2022.06.22
            </p>
            <p className="bookDescription">
            NFT는 아무래도 '신세대' 기술이니까, 이왕이면 신간 도서를 골라잡고 싶었다. 그러던 중 NFT뿐 아니라 암호화폐와 메타버스까지 다루는 반병현 작가의 돈이 복사되는 가상자산 수업을 발견했다. 내가 본래 궁금했던 것은 NFT였으나, 다른 기술까지 함께 알아도 나쁠 건 없지 싶었다. 
            </p>
          </div>
        </div>
        <a className="hideOnMobile"  href="https://www.artinsight.co.kr/news/view.php?no=60369" target="_blank"  rel="noreferrer">
          <div className="newsThumnail">
            <img className="newsImage" src="https://cdn.jsdelivr.net/gh/needleworm/ai_voca/src/images/news/22.jpg"  alt="projectimage"/>
            <h5>아트인사이트</h5>
          </div>
          </a>
      </div>
    </div>

    return <div>
      {news22}
      {news21}
      {news20}
      {news19}
      {news2}
      {news12}
      {news3}
      {news4}
      {news5}
      {news6}
      {news7}
      {news8}
      {news9}
      {news11}
      {news13}
      {news15}
      {news16}
      {news17}
      {news18}
    </div>
  }


  render() {
    return (
      <section id="news" className="animated bounceInDown">
          {this.sectionTitle()}
          {this.drawNews()}
      </section>
    );
  }
}
  
export default News;