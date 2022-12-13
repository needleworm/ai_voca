import React, {Component} from 'react';
import './patents.css';

class Patents extends Component {
  constructor(props){
    super(props);
    this.state = {
    }
  }

  sectionTitle(){
    return(
      <div className="row">
        <div className="col-lg-12 text-center">
            <h2 className="section-heading subpageHeading">Patents</h2>
        </div>
      </div>
    )
  }

  drawWebsites(){
    var gitLogo = <i className="fab fa-github"></i>
    var capLogo = <i className="fas fa-graduation-cap"></i>

    var patent1 = <div className="singleProjectContainer">
      <div className="singleWebsiteCard">
         <img className="websiteImage" src="https://cdn.jsdelivr.net/gh/needleworm/ai_voca/src/images/patents/1.jpg" alt="projectimage"/>
        <div className="projectText">
          <h5>센서의 자동 캘리브레이션이 가능한 양액 제어 장치 및 방법</h5><br/>
          <div className="bookDescription">
            <strong>등록번호</strong> &nbsp;&nbsp;&nbsp;10-2162817
            <div className="patentInfo">
              <div><strong>출원일</strong> &nbsp;&nbsp;&nbsp;2020.06.15.</div>
              <div><strong>등록일</strong> &nbsp;&nbsp;&nbsp;2020.10.07.</div>
            </div>
            <strong>발명자</strong> &nbsp;&nbsp;&nbsp;반병현, 이장훈, 류동훈, 이민우, 권영범, 엄태동<br/>
            <strong>출원인</strong> &nbsp;&nbsp;&nbsp;농업회사법인 상상텃밭 (주)<br/>
          </div>
          <div className="projectIcons">
            <h5>
              <span className="citation"  onClick={
                function(e){
                  e.preventDefault()
                  var dummy = document.createElement("textarea");
                  document.body.appendChild(dummy);
                  dummy.value = 'Byunghyun Ban et al. Nutrient control device and method capable of automatic calibration of sensor. KR Patent 10-2162817 (2020)'
                  dummy.select();
                  document.execCommand("copy");
                  document.body.removeChild(dummy);
                  alert("Citation is copied to Clipboard!")
                }
              }>
                <i className="far fa-clipboard"></i>&nbsp;Cite This
              </span>
            </h5>
            <div className="gitIcons">
              <a href="https://ieeexplore.ieee.org/abstract/document/9289192/" target="_blank"  rel="noreferrer">
                {capLogo}
              </a>
              &nbsp;&nbsp;&nbsp;
              <a href="https://cdn.jsdelivr.net/gh/needleworm/ai_voca/src/patentPdf/1.pdf" target="_blank"  rel="noreferrer" download>
                <i className="fas fa-file-pdf"></i>
              </a>
              &nbsp;&nbsp;&nbsp;
              <a href="https://doi.org/10.8080/1020200072009" target="_blank"  rel="noreferrer">
                <i className="fas fa-external-link-alt"></i>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
    
    var patent2 = <div className="singleProjectContainer">
      <div className="singleWebsiteCard">
         <img className="websiteImage" src="https://cdn.jsdelivr.net/gh/needleworm/ai_voca/src/images/patents/2.jpg" alt="projectimage"/>
        <div className="projectText">
          <h5>데이터 처리 서버 및 방법</h5><br/>
          <div className="bookDescription">
            <strong>등록번호</strong> &nbsp;&nbsp;&nbsp;10-2139928
            <div className="patentInfo">
              <div><strong>출원일</strong> &nbsp;&nbsp;&nbsp;2020.05.26.</div>
              <div><strong>등록일</strong> &nbsp;&nbsp;&nbsp;2020.07.27.</div>
            </div>
            <strong>발명자</strong> &nbsp;&nbsp;&nbsp;이장훈, 반병현<br/>
            <strong>출원인</strong> &nbsp;&nbsp;&nbsp;농업회사법인 상상텃밭 (주)<br/>
          </div>
          <div className="projectIcons">
            <h5>
              <span className="citation"  onClick={
                function(e){
                  e.preventDefault()
                  var dummy = document.createElement("textarea");
                  document.body.appendChild(dummy);
                  dummy.value = 'Janghun Lee and Byunghyun Ban. Data processing server and method. KR Patent 10-2139928 (2020)'
                  dummy.select();
                  document.execCommand("copy");
                  document.body.removeChild(dummy);
                  alert("Citation is copied to Clipboard!")
                }
              }>
                <i className="far fa-clipboard"></i>&nbsp;Cite This
              </span>
            </h5>
            <div className="gitIcons">
              <a href="https://cdn.jsdelivr.net/gh/needleworm/ai_voca/src/patentPdf/2.pdf" target="_blank"  rel="noreferrer" download>
                <i className="fas fa-file-pdf"></i>
              </a>
              &nbsp;&nbsp;&nbsp;
              <a href="https://doi.org/10.8080/1020200063129" target="_blank"  rel="noreferrer">
                <i className="fas fa-external-link-alt"></i>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
    
    var patent3 = <div className="singleProjectContainer">
      <div className="singleWebsiteCard">
         <img className="websiteImage" src="https://cdn.jsdelivr.net/gh/needleworm/ai_voca/src/images/patents/3.jpg" alt="projectimage"/>
        <div className="projectText">
          <h5>용존산소량 및 양액 농도 조절이 가능한 양액 재배 장치 및 방법</h5><br/>
          <div className="bookDescription">
            <strong>등록번호</strong> &nbsp;&nbsp;&nbsp;10-2134655
            <div className="patentInfo">
              <div><strong>출원일</strong> &nbsp;&nbsp;&nbsp;2020.04.23.</div>
              <div><strong>등록일</strong> &nbsp;&nbsp;&nbsp;2020.07.10.</div>
            </div>
            <strong>발명자</strong> &nbsp;&nbsp;&nbsp;반병현<br/>
            <strong>출원인</strong> &nbsp;&nbsp;&nbsp;농업회사법인 상상텃밭 (주)<br/>
          </div>
          <div className="projectIcons">
            <h5>
              <span className="citation"  onClick={
                function(e){
                  e.preventDefault()
                  var dummy = document.createElement("textarea");
                  document.body.appendChild(dummy);
                  dummy.value = 'Byunghyun Ban. Apparatus and method for cultivating nutrient solution capable of adjusting dissolved oxygen and nutrient solution concentration. KR Patent 10-2134655 (2020)'
                  dummy.select();
                  document.execCommand("copy");
                  document.body.removeChild(dummy);
                  alert("Citation is copied to Clipboard!")
                }
              }>
                <i className="far fa-clipboard"></i>&nbsp;Cite This
              </span>
            </h5>
            <div className="gitIcons">
              <a href="https://cdn.jsdelivr.net/gh/needleworm/ai_voca/src/patentPdf/3.pdf" target="_blank"  rel="noreferrer" download>
                <i className="fas fa-file-pdf"></i>
              </a>
              &nbsp;&nbsp;&nbsp;
              <a href="https://doi.org/10.8080/1020200049113" target="_blank"  rel="noreferrer">
                <i className="fas fa-external-link-alt"></i>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
    
    var patent4 = <div className="singleProjectContainer">
    <div className="singleWebsiteCard">
       <img className="websiteImage" src="https://cdn.jsdelivr.net/gh/needleworm/ai_voca/src/images/patents/4.jpg" alt="projectimage"/>
      <div className="projectText">
        <h5>식물 뿌리의 이온 흡수율 분석 장치 및 방법</h5><br/>
        <div className="bookDescription">
          <strong>등록번호</strong> &nbsp;&nbsp;&nbsp;10-2118957
          <div className="patentInfo">
            <div><strong>출원일</strong> &nbsp;&nbsp;&nbsp;2020.02.06.</div>
            <div><strong>등록일</strong> &nbsp;&nbsp;&nbsp;2020.05.29.</div>
          </div>
          <strong>발명자</strong> &nbsp;&nbsp;&nbsp;반병현<br/>
          <strong>출원인</strong> &nbsp;&nbsp;&nbsp;농업회사법인 상상텃밭 (주)<br/>
        </div>
        <div className="projectIcons">
          <h5>
            <span className="citation"  onClick={
              function(e){
                e.preventDefault()
                var dummy = document.createElement("textarea");
                document.body.appendChild(dummy);
                dummy.value = 'Byunghyun Ban. Apparatus and method for analyzing the ion absorption rate of plant roots. KR Patent 10-2118957 (2020)'
                dummy.select();
                document.execCommand("copy");
                document.body.removeChild(dummy);
                alert("Citation is copied to Clipboard!")
              }
            }>
              <i className="far fa-clipboard"></i>&nbsp;Cite This
            </span>
          </h5>
          <div className="gitIcons">
             <a href="https://github.com/needleworm/nutrient_solution" target="_blank"  rel="noreferrer">
                {gitLogo}
              </a>
            &nbsp;&nbsp;&nbsp;
             <a href="https://ieeexplore.ieee.org/document/9289083/" target="_blank"  rel="noreferrer">
                {capLogo}
              </a>
            &nbsp;&nbsp;&nbsp;
            <a href="https://cdn.jsdelivr.net/gh/needleworm/ai_voca/src/patentPdf/4.pdf" target="_blank"  rel="noreferrer" download>
              <i className="fas fa-file-pdf"></i>
            </a>
            &nbsp;&nbsp;&nbsp;
            <a href="https://doi.org/10.8080/1020200014379" target="_blank"  rel="noreferrer">
              <i className="fas fa-external-link-alt"></i>
            </a>
          </div>
        </div>
      </div>
    </div>
  </div>

    var patent5 = <div className="singleProjectContainer">
    <div className="singleWebsiteCard">
       <img className="websiteImage" src="https://cdn.jsdelivr.net/gh/needleworm/ai_voca/src/images/patents/5.jpg" alt="projectimage"/>
      <div className="projectText">
        <h5>머신러닝을 활용한 양액에서 이온 간섭 효과 제거 장치 및 방법</h5><br/>
        <div className="bookDescription">
          <strong>등록번호</strong> &nbsp;&nbsp;&nbsp;10-2069202
          <div className="patentInfo">
            <div><strong>출원일</strong> &nbsp;&nbsp;&nbsp;2019.09.24.</div>
            <div><strong>등록일</strong> &nbsp;&nbsp;&nbsp;2020.01.16.</div>
          </div>
          <strong>발명자</strong> &nbsp;&nbsp;&nbsp;반병현, 이민우, 류동훈<br/>
          <strong>출원인</strong> &nbsp;&nbsp;&nbsp;농업회사법인 상상텃밭 (주)<br/>
        </div>
        <div className="projectIcons">
          <h5>
            <span className="citation"  onClick={
              function(e){
                e.preventDefault()
                var dummy = document.createElement("textarea");
                document.body.appendChild(dummy);
                dummy.value = 'Byunghyun Ban et al. Device and method for removing ion interference effect from nutrient solution using machine learning. KR Patent 10-2069202 (2020)'
                dummy.select();
                document.execCommand("copy");
                document.body.removeChild(dummy);
                alert("Citation is copied to Clipboard!")
              }
            }>
              <i className="far fa-clipboard"></i>&nbsp;Cite This
            </span>
          </h5>
          <div className="gitIcons">
             <a href="https://github.com/needleworm/ion_interference" target="_blank"  rel="noreferrer">
                {gitLogo}
              </a>
            &nbsp;&nbsp;&nbsp;
             <a href="https://ieeexplore.ieee.org/document/8939812/" target="_blank"  rel="noreferrer">
                {capLogo}
              </a>
            &nbsp;&nbsp;&nbsp;
            <a href="https://cdn.jsdelivr.net/gh/needleworm/ai_voca/src/patentPdf/5.pdf" target="_blank"  rel="noreferrer" download>
              <i className="fas fa-file-pdf"></i>
            </a>
            &nbsp;&nbsp;&nbsp;
            <a href="https://doi.org/10.8080/1020190117156" target="_blank"  rel="noreferrer">
              <i className="fas fa-external-link-alt"></i>
            </a>
          </div>
        </div>
      </div>
    </div>
  </div>
      
    var patent6 = <div className="singleProjectContainer">
    <div className="singleWebsiteCard">
       <img className="websiteImage" src="https://cdn.jsdelivr.net/gh/needleworm/ai_voca/src/images/patents/6.jpg" alt="projectimage"/>
      <div className="projectText">
        <h5>상미분방적식으로 모델링된 네트워크 모델을 이용한 수경재배 양액 분석 장치 및 방법</h5><br/>
        <div className="bookDescription">
          <strong>등록번호</strong> &nbsp;&nbsp;&nbsp;10-2053738
          <div className="patentInfo">
            <div><strong>출원일</strong> &nbsp;&nbsp;&nbsp;2019.09.20.</div>
            <div><strong>등록일</strong> &nbsp;&nbsp;&nbsp;2019.12.03.</div>
          </div>
          <strong>발명자</strong> &nbsp;&nbsp;&nbsp;반병현, 이민우, 류동훈<br/>
          <strong>출원인</strong> &nbsp;&nbsp;&nbsp;농업회사법인 상상텃밭 (주)<br/>
        </div>
        <div className="projectIcons">
          <h5>
            <span className="citation"  onClick={
              function(e){
                e.preventDefault()
                var dummy = document.createElement("textarea");
                document.body.appendChild(dummy);
                dummy.value = 'Byunghyun Ban et al. Device and method for agricultural nutrient solution analysis using network model modeled by ordinary differential equation KR Patent 10-2053738 (2019)'
                dummy.select();
                document.execCommand("copy");
                document.body.removeChild(dummy);
                alert("Citation is copied to Clipboard!")
              }
            }>
              <i className="far fa-clipboard"></i>&nbsp;Cite This
            </span>
          </h5>
          <div className="gitIcons">
             <a href="https://github.com/needleworm/nutrient_solution" target="_blank"  rel="noreferrer">
                {gitLogo}
              </a>
            &nbsp;&nbsp;&nbsp;
             <a href="https://ieeexplore.ieee.org/document/8939946/" target="_blank"  rel="noreferrer">
                {capLogo}
              </a>
            &nbsp;&nbsp;&nbsp;
            <a href="https://cdn.jsdelivr.net/gh/needleworm/ai_voca/src/patentPdf/6.pdf" target="_blank"  rel="noreferrer" download>
              <i className="fas fa-file-pdf"></i>
            </a>
            &nbsp;&nbsp;&nbsp;
            <a href="https://doi.org/10.8080/1020190115737" target="_blank"  rel="noreferrer">
              <i className="fas fa-external-link-alt"></i>
            </a>
          </div>
        </div>
      </div>
    </div>
  </div>

    var patent7 = <div className="singleProjectContainer">
    <div className="singleWebsiteCard">
       <img className="websiteImage" src="https://cdn.jsdelivr.net/gh/needleworm/ai_voca/src/images/patents/7.jpg" alt="projectimage"/>
      <div className="projectText">
        <h5>온실 시스템의 제어 모델 생성 방법</h5><br/>
        <div className="bookDescription">
          <strong>등록번호</strong> &nbsp;&nbsp;&nbsp;10-2100350
          <div className="patentInfo">
            <div><strong>출원일</strong> &nbsp;&nbsp;&nbsp;2019.04.24.</div>
            <div><strong>등록일</strong> &nbsp;&nbsp;&nbsp;2020.04.07.</div>
          </div>
          <strong>발명자</strong> &nbsp;&nbsp;&nbsp;반병현, 김수빈<br/>
          <strong>출원인</strong> &nbsp;&nbsp;&nbsp;농업회사법인 상상텃밭 (주)<br/>
        </div>
        <div className="projectIcons">
          <h5>
            <span className="citation"  onClick={
              function(e){
                e.preventDefault()
                var dummy = document.createElement("textarea");
                document.body.appendChild(dummy);
                dummy.value = 'Byunghyun Ban et al. METHOD FOR GENERATING CONTROL MODEL OF GREENHOUSE SYSTEM. KR Patent 10-2100350 (2020)'
                dummy.select();
                document.execCommand("copy");
                document.body.removeChild(dummy);
                alert("Citation is copied to Clipboard!")
              }
            }>
              <i className="far fa-clipboard"></i>&nbsp;Cite This
            </span>
          </h5>
          <div className="gitIcons">
             <a href="https://github.com/needleworm/greenhouse_ai" target="_blank"  rel="noreferrer">
                {gitLogo}
              </a>
            &nbsp;&nbsp;&nbsp;
             <a href="https://ieeexplore.ieee.org/document/8190813/" target="_blank"  rel="noreferrer">
                {capLogo}
              </a>
            &nbsp;&nbsp;&nbsp;
            <a href="https://cdn.jsdelivr.net/gh/needleworm/ai_voca/src/patentPdf/7.pdf" target="_blank"  rel="noreferrer" download>
              <i className="fas fa-file-pdf"></i>
            </a>
            &nbsp;&nbsp;&nbsp;
            <a href="https://doi.org/10.8080/1020180011904" target="_blank"  rel="noreferrer">
              <i className="fas fa-external-link-alt"></i>
            </a>
          </div>
        </div>
      </div>
    </div>
  </div>

    var patent8 = <div className="singleProjectContainer">
    <div className="singleWebsiteCard">
      <img className="websiteImage" src="https://cdn.jsdelivr.net/gh/needleworm/ai_voca/src/images/patents/8.jpg" alt="projectimage"/>
      <div className="projectText">
        <h5>수경재배용 양액 관리 자동화 시스템 및 그 방법</h5><br/>
        <div className="bookDescription">
          <div className="patentInfo">
            <div><strong>출원일</strong> &nbsp;&nbsp;&nbsp;2019.04.24.</div>
            <div><strong>출원번호</strong> &nbsp;&nbsp;&nbsp;10-2018-0094076</div>
          </div>
          <strong>발명자</strong> &nbsp;&nbsp;&nbsp;남윤성, 김민근, 김수림, 김현준, 이하영, 황의경, 반병현, 이민우<br/>
          <strong>출원인</strong> &nbsp;&nbsp;&nbsp;한국과학기술원<br/>
        </div>
        <div className="projectIcons">
          <span></span>
          <div className="gitIcons">
            <a href="https://cdn.jsdelivr.net/gh/needleworm/ai_voca/src/patentPdf/8.pdf" target="_blank"  rel="noreferrer" download>
              <i className="fas fa-file-pdf"></i>
            </a>
            &nbsp;&nbsp;&nbsp;
            <a href="https://doi.org/10.8080/1020180094076" target="_blank"  rel="noreferrer">
              <i className="fas fa-external-link-alt"></i>
            </a>
          </div>
        </div>
      </div>
    </div>
    </div>

    var patent9 = <div className="singleProjectContainer">
      <div className="singleWebsiteCard">
        <img className="websiteImage" src="https://cdn.jsdelivr.net/gh/needleworm/ai_voca/src/images/patents/9.jpg" alt="projectimage"/>
        <div className="projectText">
          <h5>프리 오더 마르코프 체인과 베이즈 추론을 이용한 음악 작곡 방법</h5><br/>
          <div className="bookDescription">
            <div className="patentInfo">
              <div><strong>출원일</strong> &nbsp;&nbsp;&nbsp;2017.02.23.</div>
              <div><strong>출원번호</strong> &nbsp;&nbsp;&nbsp;10-2017-0024220</div>
            </div>
            <strong>발명자</strong> &nbsp;&nbsp;&nbsp;반병현, 정윤의, 장민수<br/>
            <strong>출원인</strong> &nbsp;&nbsp;&nbsp;반병현, 정윤의, 장민수<br/>
          </div>
          <div className="projectIcons">
            <span></span>
            <div className="gitIcons">
              <a href="https://cdn.jsdelivr.net/gh/needleworm/ai_voca/src/patentPdf/9.pdf" target="_blank"  rel="noreferrer" download>
                <i className="fas fa-file-pdf"></i>
              </a>
              &nbsp;&nbsp;&nbsp;
              <a href="https://doi.org/10.8080/1020170024220" target="_blank"  rel="noreferrer">
                <i className="fas fa-external-link-alt"></i>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>

    var patent10 = <div className="singleProjectContainer">
      <div className="singleWebsiteCard">
        <img className="websiteImage" src="https://cdn.jsdelivr.net/gh/needleworm/ai_voca/src/images/patents/10.jpg" alt="projectimage"/>
        <div className="projectText">
          <h5>용존산소 농도 및 용존이산화탄소 농도 분석을 통한 수경재배 양액 내 조류 농도 추론 장치 및 방법</h5><br/>
          <div className="bookDescription">
            <strong>등록번호</strong> &nbsp;&nbsp;&nbsp;10-2289069
            <div className="patentInfo">
              <div><strong>출원일</strong> &nbsp;&nbsp;&nbsp;2021.04.27</div>
              <div><strong>등록일</strong> &nbsp;&nbsp;&nbsp;2021.08.06.</div>
            </div>
            <strong>발명자</strong> &nbsp;&nbsp;&nbsp;반병현, 이민우<br/>
            <strong>출원인</strong> &nbsp;&nbsp;&nbsp;농업회사법인 상상텃밭 (주)<br/>
          </div>
          <div className="projectIcons">
            <h5>
              <span className="citation"  onClick={
                function(e){
                  e.preventDefault()
                  var dummy = document.createElement("textarea");
                  document.body.appendChild(dummy);
                  dummy.value = 'Byunghyun Ban et al. Apparatus and method for inferring algae concentration in hydroponic nutrient solution through dissolved oxygen concentration and dissolved carbon dioxide concentration analysis. KR Patent 10-2289069 (2021)'
                  dummy.select();
                  document.execCommand("copy");
                  document.body.removeChild(dummy);
                  alert("Citation is copied to Clipboard!")
                }
              }>
                <i className="far fa-clipboard"></i>&nbsp;Cite This
              </span>
            </h5>
            <div className="gitIcons">
              <a href="https://cdn.jsdelivr.net/gh/needleworm/ai_voca/src/patentPdf/10.pdf" target="_blank"  rel="noreferrer" download>
                <i className="fas fa-file-pdf"></i>
              </a>
              &nbsp;&nbsp;&nbsp;
              <a href="https://doi.org/10.8080/1020210054324" target="_blank"  rel="noreferrer">
                <i className="fas fa-external-link-alt"></i>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>

    var patent11 = <div className="singleProjectContainer">
      <div className="singleWebsiteCard">
        <img className="websiteImage" src="https://cdn.jsdelivr.net/gh/needleworm/ai_voca/src/images/patents/11.jpg" alt="projectimage"/>
        <div className="projectText">
          <h5>수경재배 베드 및 뿌리 생장 정보를 이용한 수경재배 방법</h5><br/>
          <div className="bookDescription">
            <strong>등록번호</strong> &nbsp;&nbsp;&nbsp;10-2308623
            <div className="patentInfo">
              <div><strong>출원일</strong> &nbsp;&nbsp;&nbsp;2021.03.31</div>
              <div><strong>등록일</strong> &nbsp;&nbsp;&nbsp;2021.09.28.</div>
            </div>
            <strong>발명자</strong> &nbsp;&nbsp;&nbsp;반병현, 류동훈, 김수빈, 이민우, 권영범<br/>
            <strong>출원인</strong> &nbsp;&nbsp;&nbsp;농업회사법인 상상텃밭 (주)<br/>
          </div>
          <div className="projectIcons">
            <h5>
              <span className="citation"  onClick={
                function(e){
                  e.preventDefault()
                  var dummy = document.createElement("textarea");
                  document.body.appendChild(dummy);
                  dummy.value = 'Byunghyun Ban et al. Hydroponic cultivation bed and method of hydroponic cultivation using root growth information. KR Patent 10-2308623 (2021)'
                  dummy.select();
                  document.execCommand("copy");
                  document.body.removeChild(dummy);
                  alert("Citation is copied to Clipboard!")
                }
              }>
                <i className="far fa-clipboard"></i>&nbsp;Cite This
              </span>
            </h5>
            <div className="gitIcons">
              <a href="https://cdn.jsdelivr.net/gh/needleworm/ai_voca/src/patentPdf/11.pdf" target="_blank"  rel="noreferrer" download>
                <i className="fas fa-file-pdf"></i>
              </a>
              &nbsp;&nbsp;&nbsp;
              <a href="https://doi.org/10.8080/1020210041526" target="_blank"  rel="noreferrer">
                <i className="fas fa-external-link-alt"></i>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>

    var patent12 = <div className="singleProjectContainer">
      <div className="singleWebsiteCard">
        <img className="websiteImage" src="https://cdn.jsdelivr.net/gh/needleworm/ai_voca/src/images/patents/12.jpg" alt="projectimage"/>
        <div className="projectText">
          <h5>불리언 방정식으로 모델링된 네트워크 모델을 이용한 수경재배 양액 분석 장치 및 방법</h5><br/>
          <div className="bookDescription">
            <strong>출원번호</strong> &nbsp;&nbsp;&nbsp;10-2021-0118950
            <div className="patentInfo">
              <div><strong>출원일</strong> &nbsp;&nbsp;&nbsp;2021.09.07</div>
              <div><strong>공개일</strong> &nbsp;&nbsp;&nbsp;2021.09.29.</div>
            </div>
            <strong>발명자</strong> &nbsp;&nbsp;&nbsp;반병현<br/>
            <strong>출원인</strong> &nbsp;&nbsp;&nbsp;농업회사법인 상상텃밭 (주)<br/>
          </div>
          <div className="projectIcons">
            <h5>
              <span className="citation"  onClick={
                function(e){
                  e.preventDefault()
                  var dummy = document.createElement("textarea");
                  document.body.appendChild(dummy);
                  dummy.value = 'Byunghyun Ban. Device and method for agricultural nutrient solution analysis using network model modeled by boolean equation. KR Applied Patent 10-2021-0118950 (2021)'
                  dummy.select();
                  document.execCommand("copy");
                  document.body.removeChild(dummy);
                  alert("Citation is copied to Clipboard!")
                }
              }>
                <i className="far fa-clipboard"></i>&nbsp;Cite This
              </span>
            </h5>
            <div className="gitIcons">
              <a href="https://cdn.jsdelivr.net/gh/needleworm/ai_voca/src/patentPdf/12.pdf" target="_blank"  rel="noreferrer" download>
                <i className="fas fa-file-pdf"></i>
              </a>
              &nbsp;&nbsp;&nbsp;
              <a href="https://doi.org/10.8080/1020210118950" target="_blank"  rel="noreferrer">
                <i className="fas fa-external-link-alt"></i>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>

  var patent13 = <div className="singleProjectContainer">
    <div className="singleWebsiteCard">
      <img className="websiteImage" src="https://cdn.jsdelivr.net/gh/needleworm/ai_voca/src/images/patents/13.jpg" alt="projectimage"/>
      <div className="projectText">
        <h5>고형 원료 디스펜싱 방식의 양액 공급장치</h5><br/>
        <div className="bookDescription">
          <strong>출원번호</strong> &nbsp;&nbsp;&nbsp;10-2021-0120087
          <div className="patentInfo">
            <div><strong>출원일</strong> &nbsp;&nbsp;&nbsp;2021.09.09</div>
            <div><strong>공개일</strong> &nbsp;&nbsp;&nbsp;2021.09.29.</div>
          </div>
          <strong>발명자</strong> &nbsp;&nbsp;&nbsp;반병현, 이민우, 장승엽<br/>
          <strong>출원인</strong> &nbsp;&nbsp;&nbsp;농업회사법인 상상텃밭 (주)<br/>
        </div>
        <div className="projectIcons">
          <h5>
            <span className="citation"  onClick={
              function(e){
                e.preventDefault()
                var dummy = document.createElement("textarea");
                document.body.appendChild(dummy);
                dummy.value = 'Byunghyun Ban. et al. Nutrient solution supply device of solid raw material dispensing method. KR Applied Patent 10-2021-0120087 (2021)'
                dummy.select();
                document.execCommand("copy");
                document.body.removeChild(dummy);
                alert("Citation is copied to Clipboard!")
              }
            }>
              <i className="far fa-clipboard"></i>&nbsp;Cite This
            </span>
          </h5>
          <div className="gitIcons">
            <a href="https://cdn.jsdelivr.net/gh/needleworm/ai_voca/src/patentPdf/13.pdf" target="_blank"  rel="noreferrer" download>
              <i className="fas fa-file-pdf"></i>
            </a>
            &nbsp;&nbsp;&nbsp;
            <a href="https://doi.org/10.8080/1020210120087" target="_blank"  rel="noreferrer">
              <i className="fas fa-external-link-alt"></i>
            </a>
          </div>
        </div>
      </div>
    </div>
  </div>

  var patent14 = <div className="singleProjectContainer">
    <div className="singleWebsiteCard">
      <img className="websiteImage" src="https://cdn.jsdelivr.net/gh/needleworm/ai_voca/src/images/patents/14.jpg" alt="projectimage"/>
      <div className="projectText">
        <h5>ISE 센서 및 머신러닝을 활용한 양액 주요 영양소 공급장치 및 이를 이용한 양액 주요 영양소 공급 방법</h5><br/>
        <div className="bookDescription">
          <strong>출원번호</strong> &nbsp;&nbsp;&nbsp;10-2021-0123213
          <div className="patentInfo">
            <div><strong>출원일</strong> &nbsp;&nbsp;&nbsp;2021.09.15</div>
            <div><strong>공개일</strong> &nbsp;&nbsp;&nbsp;2021.10.06.</div>
          </div>
          <strong>발명자</strong> &nbsp;&nbsp;&nbsp;반병현<br/>
          <strong>출원인</strong> &nbsp;&nbsp;&nbsp;농업회사법인 상상텃밭 (주)<br/>
        </div>
        <div className="projectIcons">
          <h5>
            <span className="citation"  onClick={
              function(e){
                e.preventDefault()
                var dummy = document.createElement("textarea");
                document.body.appendChild(dummy);
                dummy.value = 'Byunghyun Ban. An automatic controller of nutrient solution using the ISE sensor and machine learning and a method using thereof. KR Applied Patent 10-2021-0123213 (2021)'
                dummy.select();
                document.execCommand("copy");
                document.body.removeChild(dummy);
                alert("Citation is copied to Clipboard!")
              }
            }>
              <i className="far fa-clipboard"></i>&nbsp;Cite This
            </span>
          </h5>
          <div className="gitIcons">
            <a href="https://cdn.jsdelivr.net/gh/needleworm/ai_voca/src/patentPdf/14.pdf" target="_blank"  rel="noreferrer" download>
              <i className="fas fa-file-pdf"></i>
            </a>
            &nbsp;&nbsp;&nbsp;
            <a href="https://doi.org/10.8080/1020210123213" target="_blank"  rel="noreferrer">
              <i className="fas fa-external-link-alt"></i>
            </a>
          </div>
        </div>
      </div>
    </div>
  </div>

  var patent15 = <div className="singleProjectContainer">
    <div className="singleWebsiteCard">
      <img className="websiteImage" src="https://cdn.jsdelivr.net/gh/needleworm/ai_voca/src/images/patents/15.jpg" alt="projectimage"/>
      <div className="projectText">
        <h5>머신러닝을 이용한 센서의 수명 분석 장치 및 방법</h5><br/>
          <div className="bookDescription">
            <strong>출원번호</strong> &nbsp;&nbsp;&nbsp;10-2021-0123641
            <div className="patentInfo">
              <div><strong>출원일</strong> &nbsp;&nbsp;&nbsp;2021.09.16</div>
              <div><strong>공개일</strong> &nbsp;&nbsp;&nbsp;2021.10.07.</div>
            </div>
            <strong>발명자</strong> &nbsp;&nbsp;&nbsp;반병현<br/>
            <strong>출원인</strong> &nbsp;&nbsp;&nbsp;농업회사법인 상상텃밭 (주)<br/>
          </div>
        <div className="projectIcons">
          <h5>
            <span className="citation"  onClick={
              function(e){
                e.preventDefault()
                var dummy = document.createElement("textarea");
                document.body.appendChild(dummy);
                dummy.value = 'Byunghyun Ban. Device and method of sensor lifetime analysis using machine learning. KR Applied Patent 10-2021-0123641 (2021)'
                dummy.select();
                document.execCommand("copy");
                document.body.removeChild(dummy);
                alert("Citation is copied to Clipboard!")
              }
            }>
              <i className="far fa-clipboard"></i>&nbsp;Cite This
            </span>
          </h5>
          <div className="gitIcons">
            <a href="https://cdn.jsdelivr.net/gh/needleworm/ai_voca/src/patentPdf/15.pdf" target="_blank"  rel="noreferrer" download>
              <i className="fas fa-file-pdf"></i>
            </a>
            &nbsp;&nbsp;&nbsp;
            <a href="https://doi.org/10.8080/1020210123641" target="_blank"  rel="noreferrer">
              <i className="fas fa-external-link-alt"></i>
            </a>
          </div>
        </div>
      </div>
    </div>
  </div>

    var patent16 = <div className="singleProjectContainer">
      <div className="singleWebsiteCard">
        <img className="websiteImage" src="https://cdn.jsdelivr.net/gh/needleworm/ai_voca/src/images/patents/16.jpg" alt="projectimage"/>
        <div className="projectText">
          <h5>신경망을 이용한 음악 검색 방법</h5><br/>
            <div className="bookDescription">
            <strong>출원번호</strong> &nbsp;&nbsp;&nbsp;10-2017-0025908
            <div className="patentInfo">
              <div><strong>출원일</strong> &nbsp;&nbsp;&nbsp;2017.02.28</div>
              <div><strong>공개일</strong> &nbsp;&nbsp;&nbsp;2017.11.22.</div>
            </div>
            <strong>발명자</strong> &nbsp;&nbsp;&nbsp;반병현<br/>
            <strong>출원인</strong> &nbsp;&nbsp;&nbsp;반병현<br/>
            </div>
          <div className="projectIcons">
            <h5>
              <span className="citation"  onClick={
                function(e){
                  e.preventDefault()
                  var dummy = document.createElement("textarea");
                  document.body.appendChild(dummy);
                  dummy.value = 'Byunghyun Ban. MUSIC SEARCH METHOD BASED ON NEURAL NETWORK. KR Applied Patent 10-2017-0025908 (2017)'
                  dummy.select();
                  document.execCommand("copy");
                  document.body.removeChild(dummy);
                  alert("Citation is copied to Clipboard!")
                }
              }>
                <i className="far fa-clipboard"></i>&nbsp;Cite This
              </span>
            </h5>
            <div className="gitIcons">
              <a href="https://cdn.jsdelivr.net/gh/needleworm/ai_voca/src/patentPdf/16.pdf" target="_blank"  rel="noreferrer" download>
                <i className="fas fa-file-pdf"></i>
              </a>
              &nbsp;&nbsp;&nbsp;
              <a href="https://doi.org/10.8080/1020170025908" target="_blank"  rel="noreferrer">
                <i className="fas fa-external-link-alt"></i>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>

    var patent17 = <div className="singleProjectContainer">
      <div className="singleWebsiteCard">
        <img className="websiteImage" src="https://cdn.jsdelivr.net/gh/needleworm/ai_voca/src/images/patents/17.jpg" alt="projectimage"/>
        <div className="projectText">
          <h5>심층 강화 학습을 이용한 음악 작곡 방법</h5><br/>
            <div className="bookDescription">
            <strong>출원번호</strong> &nbsp;&nbsp;&nbsp;10-2017-0024223
            <div className="patentInfo">
              <div><strong>출원일</strong> &nbsp;&nbsp;&nbsp;2017.02.23</div>
              <div><strong>공개일</strong> &nbsp;&nbsp;&nbsp;2017.11.22.</div>
            </div>
            <strong>발명자</strong> &nbsp;&nbsp;&nbsp;반병현<br/>
            <strong>출원인</strong> &nbsp;&nbsp;&nbsp;반병현<br/>
            </div>
          <div className="projectIcons">
            <h5>
              <span className="citation"  onClick={
                function(e){
                  e.preventDefault()
                  var dummy = document.createElement("textarea");
                  document.body.appendChild(dummy);
                  dummy.value = 'Byunghyun Ban. MUSIC COMPOSITION METHOD BASED ON DEEP REINFORCEMENT LEARNING. KR Applied Patent 10-2017-0024223 (2017)'
                  dummy.select();
                  document.execCommand("copy");
                  document.body.removeChild(dummy);
                  alert("Citation is copied to Clipboard!")
                }
              }>
                <i className="far fa-clipboard"></i>&nbsp;Cite This
              </span>
            </h5>
            <div className="gitIcons">
              <a href="https://cdn.jsdelivr.net/gh/needleworm/ai_voca/src/patentPdf/17.pdf" target="_blank"  rel="noreferrer" download>
                <i className="fas fa-file-pdf"></i>
              </a>
              &nbsp;&nbsp;&nbsp;
              <a href="https://doi.org/10.8080/1020170024223" target="_blank"  rel="noreferrer">
                <i className="fas fa-external-link-alt"></i>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>

    var patent18 = <div className="singleProjectContainer">
      <div className="singleWebsiteCard">
        <img className="websiteImage" src="https://cdn.jsdelivr.net/gh/needleworm/ai_voca/src/images/patents/18.jpg" alt="projectimage"/>
        <div className="projectText">
          <h5>기계 학습을 이용한 음악 신호의 처리 방법</h5><br/>
          <div className="bookDescription">
            <strong>출원번호</strong> &nbsp;&nbsp;&nbsp;10-2016-0167317
            <div className="patentInfo">
              <div><strong>출원일</strong> &nbsp;&nbsp;&nbsp;2016.12.09</div>
              <div><strong>공개일</strong> &nbsp;&nbsp;&nbsp;2018.06.19.</div>
            </div>
            <strong>발명자</strong> &nbsp;&nbsp;&nbsp;반병현<br/>
            <strong>출원인</strong> &nbsp;&nbsp;&nbsp;반병현<br/>
          </div>
          <div className="projectIcons">
            <h5>
              <span className="citation"  onClick={
                function(e){
                  e.preventDefault()
                  var dummy = document.createElement("textarea");
                  document.body.appendChild(dummy);
                  dummy.value = 'Byunghyun Ban. Method for processing audio signal using machine learning. KR Applied Patent 10-2016-0167317 (2016)'
                  dummy.select();
                  document.execCommand("copy");
                  document.body.removeChild(dummy);
                  alert("Citation is copied to Clipboard!")
                }
              }>
                <i className="far fa-clipboard"></i>&nbsp;Cite This
              </span>
            </h5>
            <div className="gitIcons">
              <a href="https://cdn.jsdelivr.net/gh/needleworm/ai_voca/src/patentPdf/18.pdf" target="_blank"  rel="noreferrer" download>
                <i className="fas fa-file-pdf"></i>
              </a>
              &nbsp;&nbsp;&nbsp;
              <a href="https://doi.org/10.8080/1020160167317" target="_blank"  rel="noreferrer">
                <i className="fas fa-external-link-alt"></i>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>

    var patent19 = <div className="singleProjectContainer">
      <div className="singleWebsiteCard">
        <img className="websiteImage" src="https://cdn.jsdelivr.net/gh/needleworm/ai_voca/src/images/patents/19.jpg" alt="projectimage"/>
        <div className="projectText">
          <h5>재생되는 음악을 분석하여 멜로디를 추출하는 방법</h5><br/>
            <div className="bookDescription">
            <strong>출원번호</strong> &nbsp;&nbsp;&nbsp;10-2016-0169802 
            <div className="patentInfo">
              <div><strong>출원일</strong> &nbsp;&nbsp;&nbsp;2016.12.13</div>
              <div><strong>공개일</strong> &nbsp;&nbsp;&nbsp;2017.11.22.</div>
            </div>
            <strong>발명자</strong> &nbsp;&nbsp;&nbsp;반병현<br/>
            <strong>출원인</strong> &nbsp;&nbsp;&nbsp;반병현<br/>
            </div>
          <div className="projectIcons">
            <h5>
              <span className="citation"  onClick={
                function(e){
                  e.preventDefault()
                  var dummy = document.createElement("textarea");
                  document.body.appendChild(dummy);
                  dummy.value = 'Byunghyun Ban. MELODY EXTRACTION METHOD FROM MUSIC SIGNAL. KR Applied Patent 10-2016-0169802 (2016)'
                  dummy.select();
                  document.execCommand("copy");
                  document.body.removeChild(dummy);
                  alert("Citation is copied to Clipboard!")
                }
              }>
                <i className="far fa-clipboard"></i>&nbsp;Cite This
              </span>
            </h5>
            <div className="gitIcons">
              <a href="https://cdn.jsdelivr.net/gh/needleworm/ai_voca/src/patentPdf/19.pdf" target="_blank"  rel="noreferrer" download>
                <i className="fas fa-file-pdf"></i>
              </a>
              &nbsp;&nbsp;&nbsp;
              <a href="https://doi.org/10.8080/1020160169802" target="_blank"  rel="noreferrer">
                <i className="fas fa-external-link-alt"></i>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>

    var patent20 = <div className="singleProjectContainer">
    <div className="singleWebsiteCard">
      <img className="websiteImage" src="https://cdn.jsdelivr.net/gh/needleworm/ai_voca/src/images/patents/20.jpg" alt="projectimage"/>
      <div className="projectText">
        <h5>순환형 신경망에 기반한 작곡 방법</h5><br/>
          <div className="bookDescription">
          <strong>출원번호</strong> &nbsp;&nbsp;&nbsp;10-2017-0022493  
          <div className="patentInfo">
            <div><strong>출원일</strong> &nbsp;&nbsp;&nbsp;2017.02.20</div>
            <div><strong>공개일</strong> &nbsp;&nbsp;&nbsp;2017.11.22.</div>
          </div>
          <strong>발명자</strong> &nbsp;&nbsp;&nbsp;반병현, 박주희, 정윤의<br/>
          <strong>출원인</strong> &nbsp;&nbsp;&nbsp;반병현<br/>
          </div>
        <div className="projectIcons">
          <h5>
            <span className="citation"  onClick={
              function(e){
                e.preventDefault()
                var dummy = document.createElement("textarea");
                document.body.appendChild(dummy);
                dummy.value = 'Byunghyun Ban. CHORD COMPOSITION METHOD BASED ON RECURRENT NEURAL NETWORK. KR Applied Patent 10-2017-0022493 (2017)'
                dummy.select();
                document.execCommand("copy");
                document.body.removeChild(dummy);
                alert("Citation is copied to Clipboard!")
              }
            }>
              <i className="far fa-clipboard"></i>&nbsp;Cite This
            </span>
          </h5>
          <div className="gitIcons">
            <a href="https://cdn.jsdelivr.net/gh/needleworm/ai_voca/src/patentPdf/20.pdf" target="_blank"  rel="noreferrer" download>
              <i className="fas fa-file-pdf"></i>
            </a>
            &nbsp;&nbsp;&nbsp;
            <a href="https://doi.org/10.8080/1020170022493" target="_blank"  rel="noreferrer">
              <i className="fas fa-external-link-alt"></i>
            </a>
          </div>
        </div>
      </div>
    </div>
    </div>

    var patent21 = <div className="singleProjectContainer">
    <div className="singleWebsiteCard">
      <img className="websiteImage" src="https://cdn.jsdelivr.net/gh/needleworm/ai_voca/src/images/patents/21.jpg" alt="projectimage"/>
      <div className="projectText">
        <h5>투척식 소화기</h5><br/>
          <div className="bookDescription">
          <strong>출원번호</strong> &nbsp;&nbsp;&nbsp;10-2014-0008341 
          <div className="patentInfo">
            <div><strong>출원일</strong> &nbsp;&nbsp;&nbsp;2014.01.23</div>
            <div><strong>공개일</strong> &nbsp;&nbsp;&nbsp;2014.03.05.</div>
          </div>
          <strong>발명자</strong> &nbsp;&nbsp;&nbsp;반병현, 반병우<br/>
          <strong>출원인</strong> &nbsp;&nbsp;&nbsp;한국과학기술원<br/>
          </div>
        <div className="projectIcons">
          <h5>
            <span className="citation"  onClick={
              function(e){
                e.preventDefault()
                var dummy = document.createElement("textarea");
                document.body.appendChild(dummy);
                dummy.value = 'Byunghyun Ban. THROWING TYPE FIRE EXTINGUISHER. KR Applied Patent 10-2014-0008341 (2014)'
                dummy.select();
                document.execCommand("copy");
                document.body.removeChild(dummy);
                alert("Citation is copied to Clipboard!")
              }
            }>
              <i className="far fa-clipboard"></i>&nbsp;Cite This
            </span>
          </h5>
          <div className="gitIcons">
            <a href="https://cdn.jsdelivr.net/gh/needleworm/ai_voca/src/patentPdf/21.pdf" target="_blank"  rel="noreferrer" download>
              <i className="fas fa-file-pdf"></i>
            </a>
            &nbsp;&nbsp;&nbsp;
            <a href="https://doi.org/10.8080/1020140008341" target="_blank"  rel="noreferrer">
              <i className="fas fa-external-link-alt"></i>
            </a>
          </div>
        </div>
      </div>
    </div>
    </div>

    var patent22 = <div className="singleProjectContainer">
    <div className="singleWebsiteCard">
      <img className="websiteImage" src="https://cdn.jsdelivr.net/gh/needleworm/ai_voca/src/images/patents/22.png" alt="projectimage"/>
      <div className="projectText">
        <h5>개방형 와이파이를 탐지해 점멸하는 스마트 단말기 케이스</h5><br/>
        <div className="bookDescription">
          <strong>출원번호</strong> &nbsp;&nbsp;&nbsp;10-2013-0144524 
          <div className="patentInfo">
            <div><strong>출원일</strong> &nbsp;&nbsp;&nbsp;2014.01.23</div>
            <div><strong>공개일</strong> &nbsp;&nbsp;&nbsp;2014.03.05.</div>
          </div>
          <strong>발명자</strong> &nbsp;&nbsp;&nbsp;반병현, 반병우<br/>
          <strong>출원인</strong> &nbsp;&nbsp;&nbsp;한국과학기술원<br/>
        </div>
        <div className="projectIcons">
          <h5>
            <span className="citation"  onClick={
              function(e){
                e.preventDefault()
                var dummy = document.createElement("textarea");
                document.body.appendChild(dummy);
                dummy.value = 'Byunghyun Ban. THE FLASHING SMART DEVICE CASE TO DETECT THE OPENED WIFI ENVIRONMENT. KR Applied Patent 10-2013-0144524 (2014)'
                dummy.select();
                document.execCommand("copy");
                document.body.removeChild(dummy);
                alert("Citation is copied to Clipboard!")
              }
            }>
              <i className="far fa-clipboard"></i>&nbsp;Cite This
            </span>
          </h5>
          <div className="gitIcons">
            <a href="https://cdn.jsdelivr.net/gh/needleworm/ai_voca/src/patentPdf/22.pdf" target="_blank"  rel="noreferrer" download>
              <i className="fas fa-file-pdf"></i>
            </a>
            &nbsp;&nbsp;&nbsp;
            <a href="https://doi.org/10.8080/1020130144524" target="_blank"  rel="noreferrer">
              <i className="fas fa-external-link-alt"></i>
            </a>
          </div>
        </div>
      </div>
    </div>
    </div>

    var patent23 = <div className="singleProjectContainer">
    <div className="singleWebsiteCard">
      <img className="websiteImage" src="https://cdn.jsdelivr.net/gh/needleworm/ai_voca/src/images/patents/23.jpg" alt="projectimage"/>
      <div className="projectText">
        <h5>고형물 보관용기</h5><br/>
        <div className="bookDescription">
          <strong>등록번호</strong> &nbsp;&nbsp;&nbsp;10-1465439
          <div className="patentInfo">
            <div><strong>출원일</strong> &nbsp;&nbsp;&nbsp;2013.05.13</div>
            <div><strong>등록일</strong> &nbsp;&nbsp;&nbsp;2014.11.20.</div>
          </div>
          <strong>발명자</strong> &nbsp;&nbsp;&nbsp;반병현, 반병우<br/>
          <strong>출원인</strong> &nbsp;&nbsp;&nbsp;한국과학기술원<br/>
        </div>
        <div className="projectIcons">
          <h5>
            <span className="citation"  onClick={
              function(e){
                e.preventDefault()
                var dummy = document.createElement("textarea");
                document.body.appendChild(dummy);
                dummy.value = 'Byunghyun Ban. Storage Container For Solid State Sample. KR Patent 10-1465439 (2013)'
                dummy.select();
                document.execCommand("copy");
                document.body.removeChild(dummy);
                alert("Citation is copied to Clipboard!")
              }
            }>
              <i className="far fa-clipboard"></i>&nbsp;Cite This
            </span>
          </h5>
          <div className="gitIcons">
            <a href="https://cdn.jsdelivr.net/gh/needleworm/ai_voca/src/patentPdf/23.pdf" target="_blank"  rel="noreferrer" download>
              <i className="fas fa-file-pdf"></i>
            </a>
            &nbsp;&nbsp;&nbsp;
            <a href="https://doi.org/10.8080/1020130053562" target="_blank"  rel="noreferrer">
              <i className="fas fa-external-link-alt"></i>
            </a>
          </div>
        </div>
      </div>
    </div>
    </div>

    var patent24 = <div className="singleProjectContainer">
    <div className="singleWebsiteCard">
      <img className="websiteImage" src="https://cdn.jsdelivr.net/gh/needleworm/ai_voca/src/images/patents/24.jpg" alt="projectimage"/>
      <div className="projectText">
        <h5>대뇌 발달 균형 측정 방법 및 대뇌 발달 유형 분류 방법</h5><br/>
        <div className="bookDescription">
          <strong>출원번호</strong> &nbsp;&nbsp;&nbsp;10-2012-0141120 
          <div className="patentInfo">
            <div><strong>출원일</strong> &nbsp;&nbsp;&nbsp;2012.12.06</div>
            <div><strong>공개일</strong> &nbsp;&nbsp;&nbsp;2013.12.11.</div>
          </div>
          <strong>발명자</strong> &nbsp;&nbsp;&nbsp;반병현<br/>
          <strong>출원인</strong> &nbsp;&nbsp;&nbsp;반병현<br/>
        </div>
        <div className="projectIcons">
          <h5>
            <span className="citation"  onClick={
              function(e){
                e.preventDefault()
                var dummy = document.createElement("textarea");
                document.body.appendChild(dummy);
                dummy.value = 'Byunghyun Ban. METHOD OF MEASUREMENT OF CEREBRAL DEVELOPMENT BALANCE AND CEREBRAL DEVELOPMENT TYPE CLASSIFICATION METHOD. KR Applied Patent 10-2012-0141120  (2012)'
                dummy.select();
                document.execCommand("copy");
                document.body.removeChild(dummy);
                alert("Citation is copied to Clipboard!")
              }
            }>
              <i className="far fa-clipboard"></i>&nbsp;Cite This
            </span>
          </h5>
          <div className="gitIcons">
            <a href="https://cdn.jsdelivr.net/gh/needleworm/ai_voca/src/patentPdf/24.pdf" target="_blank"  rel="noreferrer" download>
              <i className="fas fa-file-pdf"></i>
            </a>
            &nbsp;&nbsp;&nbsp;
            <a href="https://doi.org/10.8080/1020120141120" target="_blank"  rel="noreferrer">
              <i className="fas fa-external-link-alt"></i>
            </a>
          </div>
        </div>
      </div>
    </div>
    </div>

    var patent25 = <div className="singleProjectContainer">
    <div className="singleWebsiteCard">
      <img className="websiteImage" src="https://cdn.jsdelivr.net/gh/needleworm/ai_voca/src/images/patents/25.png" alt="projectimage"/>
      <div className="projectText">
        <h5>강화학습 AI를 활용한 식물공장 양액제어 시스템 최적화 방법</h5><br/>
        <div className="bookDescription">
          <strong>등록번호</strong> &nbsp;&nbsp;&nbsp;10-2423998 
          <div className="patentInfo">
            <div><strong>출원일</strong> &nbsp;&nbsp;&nbsp;2021.12.23</div>
            <div><strong>등록일</strong> &nbsp;&nbsp;&nbsp;2022.07.19.</div>
          </div>
          <strong>발명자</strong> &nbsp;&nbsp;&nbsp;반병현<br/>
          <strong>출원인</strong> &nbsp;&nbsp;&nbsp;농업회사법인 상상텃밭 (주)<br/>
        </div>
        <div className="projectIcons">
          <h5>
            <span className="citation"  onClick={
              function(e){
                e.preventDefault()
                var dummy = document.createElement("textarea");
                document.body.appendChild(dummy);
                dummy.value = 'Byunghyun Ban. Method of optimize plant factory nutrient solution control system using reinforcement learning AI. KR Patent 10-2423998  (2022)'
                dummy.select();
                document.execCommand("copy");
                document.body.removeChild(dummy);
                alert("Citation is copied to Clipboard!")
              }
            }>
              <i className="far fa-clipboard"></i>&nbsp;Cite This
            </span>
          </h5>
          <div className="gitIcons">
            <a href="https://cdn.jsdelivr.net/gh/needleworm/ai_voca/src/patentPdf/25.pdf" target="_blank"  rel="noreferrer" download>
              <i className="fas fa-file-pdf"></i>
            </a>
            &nbsp;&nbsp;&nbsp;
            <a href="https://doi.org/10.8080/1020210185604" target="_blank"  rel="noreferrer">
              <i className="fas fa-external-link-alt"></i>
            </a>
          </div>
        </div>
      </div>
    </div>
    </div>

    var patent26 = <div className="singleProjectContainer">
      <div className="singleWebsiteCard">
        <img className="websiteImage" src="https://cdn.jsdelivr.net/gh/needleworm/ai_voca/src/images/patents/26.png" alt="projectimage"/>
        <div className="projectText">
          <h5>인공지능 모델을 활용한 작물 재배 작업 자문 장치 및 방법</h5><br/>
          <div className="bookDescription">
            <strong>출원번호</strong> &nbsp;&nbsp;&nbsp;10-2022-0012245 
            <div className="patentInfo">
              <div><strong>출원일</strong> &nbsp;&nbsp;&nbsp;2022.01.27</div>
              <div><strong>공개일</strong> &nbsp;&nbsp;&nbsp;2022.02.15.</div>
            </div>
            <strong>발명자</strong> &nbsp;&nbsp;&nbsp;반병현<br/>
            <strong>출원인</strong> &nbsp;&nbsp;&nbsp;농업회사법인 상상텃밭 (주)<br/>
          </div>
          <div className="projectIcons">
            <h5>
              <span className="citation"  onClick={
                function(e){
                  e.preventDefault()
                  var dummy = document.createElement("textarea");
                  document.body.appendChild(dummy);
                  dummy.value = 'Byunghyun Ban. Advising device and method for crop cultivation work using artificial intelligence model. KR Applied Patent 10-2022-0012245 (2022)'
                  dummy.select();
                  document.execCommand("copy");
                  document.body.removeChild(dummy);
                  alert("Citation is copied to Clipboard!")
                }
              }>
                <i className="far fa-clipboard"></i>&nbsp;Cite This
              </span>
            </h5>
            <div className="gitIcons">
              <a href="https://cdn.jsdelivr.net/gh/needleworm/ai_voca/src/patentPdf/26.pdf" target="_blank"  rel="noreferrer" download>
                <i className="fas fa-file-pdf"></i>
              </a>
              &nbsp;&nbsp;&nbsp;
              <a href="https://doi.org/10.8080/1020220012245" target="_blank"  rel="noreferrer">
                <i className="fas fa-external-link-alt"></i>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>

    var patent27 = <div className="singleProjectContainer">
      <div className="singleWebsiteCard">
        <img className="websiteImage" src="https://cdn.jsdelivr.net/gh/needleworm/ai_voca/src/images/patents/27.png" alt="projectimage"/>
        <div className="projectText">
          <h5>인공지능 능동보조 서버가 탑재된 지능형 의료용 헴프 식물공장 시스템</h5><br/>
          <div className="bookDescription">
            <strong>등록번호</strong> &nbsp;&nbsp;&nbsp;10-2434102
            <div className="patentInfo">
              <div><strong>출원일</strong> &nbsp;&nbsp;&nbsp;2022.01.27</div>
              <div><strong>등록일</strong> &nbsp;&nbsp;&nbsp;2022.08.16.</div>
            </div>
            <strong>발명자</strong> &nbsp;&nbsp;&nbsp;반병현 외 10인<br/>
            <strong>출원인</strong> &nbsp;&nbsp;&nbsp;농업회사법인 상상텃밭 (주)<br/>
          </div>
          <div className="projectIcons">
            <h5>
              <span className="citation"  onClick={
                function(e){
                  e.preventDefault()
                  var dummy = document.createElement("textarea");
                  document.body.appendChild(dummy);
                  dummy.value = 'Byunghyun Ban, et al. Intelligent Plant factory system for medical and industrial hemp and AI assistance server. KR Patent 10-2434102 (2022)'
                  dummy.select();
                  document.execCommand("copy");
                  document.body.removeChild(dummy);
                  alert("Citation is copied to Clipboard!")
                }
              }>
                <i className="far fa-clipboard"></i>&nbsp;Cite This
              </span>
            </h5>
            <div className="gitIcons">
              <a href="https://cdn.jsdelivr.net/gh/needleworm/ai_voca/src/patentPdf/27.pdf" target="_blank"  rel="noreferrer" download>
                <i className="fas fa-file-pdf"></i>
              </a>
              &nbsp;&nbsp;&nbsp;
              <a href="https://doi.org/10.8080/1020220012112" target="_blank"  rel="noreferrer">
                <i className="fas fa-external-link-alt"></i>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>

    return (
      <div className="websitesContainer">
        {patent27}
        {patent25}
        {patent26}
        {patent15}
        {patent14}
        {patent13}
        {patent12}
        {patent11}
        {patent10}
        {patent1}
        {patent2}
        {patent3}
        {patent4}
        {patent5}
        {patent6}
        {patent7}
        {patent8}
        {patent9}
        {patent23}
        {patent20}
        {patent19}
        {patent18}
        {patent17}
        {patent16}
        {patent21}
        {patent22}
        {patent24}
      </div>
    )
  }

  render() {
    return (
      <section id="patents" className="animated bounceInDown">
          {this.sectionTitle()}
          {this.drawWebsites()}
      </section>
    );
  }
}
  
export default Patents;