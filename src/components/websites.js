import React, {Component} from 'react';
import './websites.css';


class Websites extends Component {
  constructor(props){
    super(props);
    this.state = {
    }
  }

  sectionTitle(){
    return(
      <div className="row">
        <div className="col-lg-12 text-center">
            <h2 className="section-heading subpageHeading">Websites</h2>
        </div>
      </div>
    )
  }

  drawWebsites(){
    var reactIconL = <i className="fab fa-react"></i>
    var jekyllIcon = <i className="fas fa-vial"></i>
    var gitLogo = <i className="fab fa-github"></i>
    var ms = <i className="fab fa-microsoft"></i>
    var docker = <i class="fa-brands fa-docker"></i>
    var wordpress = <i class="fa-brands fa-wordpress"></i>

    var blog = <div className="singleProjectContainer">
      <div className="singleWebsiteCard">
        <a className="tempa" href="https://needleworm.github.io" target="_blank"  rel="noreferrer">
         <img className="websiteImage" src="https://cdn.jsdelivr.net/gh/needleworm/ai_voca/src/images/websites/blog.gif" alt="projectimage"/>
        </a>
        <div className="projectText">
          <a className="text-center textMarginBottom" href="https://needleworm.github.io" target="_blank"  rel="noreferrer">
            <h5>https://needleworm.github.io</h5><br/>
          </a>
          <div className="codeBody">
            <p className="bookDescription">
              My own webpage built with &nbsp;{reactIconL} React. This static website is hosted on &nbsp;{gitLogo} Github Pages.
              It was inspired by &nbsp; 
              <a href='https://github.com/tzuehlke/jekyll-uno-timeline/' target="_blank"  rel="noreferrer">
                Thomas Zühlke's jekyll theme
              </a>. The original theme runs with jQuery for github API calling, and SCSS for styling. 
              And its jQuery function supported only one content wrapper element.<br/>
              I built a  &nbsp;{reactIconL} React app looks similar to Thomas' work. 
              As you can see, this page supports multiple content wrapper elements. 
              If you are interested in using this site theme to build your own page, please visit my repository to get the source code.
            </p>
          </div>
          <div className="projectIcons">
            <h5>{reactIconL}&nbsp;React&nbsp;&nbsp;{gitLogo}&nbsp;Pages</h5>
            <div className="gitIcons">
              <a href="https://github.com/needleworm/needleworm.github.io" target="_blank"  rel="noreferrer">
                <i className="fas fa-code"></i>
              </a>
              &nbsp;&nbsp;&nbsp;&nbsp;
              <a href="https://needleworm.github.io" target="_blank"  rel="noreferrer">
                <i className="fas fa-external-link-alt"></i>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>

    var ai = <div className="singleProjectContainer">
      <div className="singleWebsiteCard">
        <a className="tempa" href="https://needleworm.github.io/bhban_ai" target="_blank"  rel="noreferrer">
        <img className="websiteImage" src="https://cdn.jsdelivr.net/gh/needleworm/ai_voca/src/images/websites/ai.gif" alt="projectimage"/>
        </a>
        <div className="projectText">
          <a className="text-center textMarginBottom" href="https://needleworm.github.io/bhban_ai" target="_blank"  rel="noreferrer">
            <h5>https://needleworm.github.io/bhban_ai</h5><br/>
          </a>
          <div className="codeBody">
            <p className="bookDescription">
              This page provides example codes for my book, "수학, 통계를 몰라도 이해되는 쉬운 딥러닝 (생능출판사, 2021)". It was built with  &nbsp;{jekyllIcon}&nbsp;Jekyll and &nbsp;
            <a href="https://github.com/raviriley/agency-jekyll-theme/" target="_blank"  rel="noreferrer">
              Agency theme by Ravi Riley
            </a>.
            </p>
          </div>
          <div className="projectIcons">
            <h5>{jekyllIcon}&nbsp;Jekyll&nbsp;&nbsp;{gitLogo}&nbsp;Pages</h5>
            <div className="gitIcons">
              <a href="https://github.com/needleworm/bhban_ai/tree/web" target="_blank"  rel="noreferrer">
                <i className="fas fa-code"></i>
              </a>
              &nbsp;&nbsp;&nbsp;&nbsp;
              <a href="https://needleworm.github.io/bhban_ai" target="_blank"  rel="noreferrer">
                <i className="fas fa-external-link-alt"></i>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>

    var rpa = <div className="singleProjectContainer">
      <div className="singleWebsiteCard">
        <a className="tempa" href="https://needleworm.github.io/bhban_rpa" target="_blank"  rel="noreferrer">
        <img className="websiteImage" src="https://cdn.jsdelivr.net/gh/needleworm/ai_voca/src/images/websites/rpa.gif" alt="projectimage"/>
        </a>
        <div className="projectText">
          <a className="text-center textMarginBottom" href="https://needleworm.github.io/bhban_rpa" target="_blank"  rel="noreferrer">
            <h5>https://needleworm.github.io/bhban_rpa</h5><br/>
          </a>
          <div className="codeBody">
            <p className="bookDescription">
              This page provides example codes for my book, "6개월 치 업무를 하루 만에 끝내는 업무 자동화 (생능출판사, 2020)". It was built with  &nbsp;{jekyllIcon}&nbsp;Jekyll and &nbsp;
            <a href="https://github.com/raviriley/agency-jekyll-theme/" target="_blank"  rel="noreferrer">
              Agency theme by Ravi Riley
            </a>.
            </p>
          </div>
          <div className="projectIcons">
            <h5>{jekyllIcon}&nbsp;Jekyll&nbsp;&nbsp;{gitLogo}&nbsp;Pages</h5>
            <div className="gitIcons">
              <a href="https://github.com/needleworm/bhban_rpa/tree/web" target="_blank"  rel="noreferrer">
                <i className="fas fa-code"></i>
              </a>
              &nbsp;&nbsp;&nbsp;&nbsp;
              <a href="https://needleworm.github.io/bhban_rpa" target="_blank"  rel="noreferrer">
                <i className="fas fa-external-link-alt"></i>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>

    var financebook = <div className="singleProjectContainer">
      <div className="singleWebsiteCard">
        <a className="tempa" href="https://needleworm.github.io/financebook" target="_blank"  rel="noreferrer">
        <img className="websiteImage" src="https://cdn.jsdelivr.net/gh/needleworm/ai_voca/src/images/websites/financebook.gif" alt="projectimage"/>
        </a>
        <div className="projectText">
          <a className="text-center textMarginBottom" href="https://needleworm.github.io/financebook" target="_blank"  rel="noreferrer">
            <h5>https://needleworm.github.io/financebook</h5><br/>
          </a>
          <div className="codeBody">
            <p className="bookDescription">
              This page provides example codes for my book, "내 자산 자동으로 관리하기 (생능출판사, 2021.07.09)". It was built with  &nbsp;{jekyllIcon}&nbsp;Jekyll and &nbsp;
            <a href="https://github.com/raviriley/agency-jekyll-theme/" target="_blank"  rel="noreferrer">
              Agency theme by Ravi Riley
            </a>.
            </p>
          </div>
          <div className="projectIcons">
            <h5>{jekyllIcon}&nbsp;Jekyll&nbsp;&nbsp;{gitLogo}&nbsp;Pages</h5>
            <div className="gitIcons">
              <a href="https://github.com/needleworm/financebook" target="_blank"  rel="noreferrer">
                <i className="fas fa-code"></i>
              </a>
              &nbsp;&nbsp;&nbsp;&nbsp;
              <a href="https://needleworm.github.io/financebook" target="_blank"  rel="noreferrer">
                <i className="fas fa-external-link-alt"></i>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>

    var dataset = <div className="singleProjectContainer">
      <div className="singleWebsiteCard">
        <a className="tempa" href="https://needleworm.github.io/dataset" target="_blank"  rel="noreferrer">
        <img className="websiteImage" src="https://cdn.jsdelivr.net/gh/needleworm/ai_voca/src/images/websites/dataset.gif" alt="projectimage"/>
        </a>
        <div className="projectText">
          <a className="text-center textMarginBottom" href="https://needleworm.github.io/dataset" target="_blank"  rel="noreferrer">
            <h5>https://needleworm.github.io/dataset</h5><br/>
          </a>
          <div className="codeBody">
            <p className="bookDescription">
              This page provides example codes for my book, "AI, 빅데이터 활용이 쉬워지는 142가지 데이터셋 (생능북스, 2022.02.22.)". It was built with  &nbsp;{jekyllIcon}&nbsp;Jekyll and &nbsp;
            <a href="https://github.com/raviriley/agency-jekyll-theme/" target="_blank"  rel="noreferrer">
              Agency theme by Ravi Riley
            </a>.
            </p>
          </div>
          <div className="projectIcons">
            <h5>{jekyllIcon}&nbsp;Jekyll&nbsp;&nbsp;{gitLogo}&nbsp;Pages</h5>
            <div className="gitIcons">
              <a href="https://github.com/needleworm/dataset" target="_blank"  rel="noreferrer">
                <i className="fas fa-code"></i>
              </a>
              &nbsp;&nbsp;&nbsp;&nbsp;
              <a href="https://needleworm.github.io/dataset" target="_blank"  rel="noreferrer">
                <i className="fas fa-external-link-alt"></i>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>

    var b101 = <div className="singleProjectContainer">
      <div className="singleWebsiteCard">
        <a className="tempa" href="https://needleworm.github.io/101" target="_blank"  rel="noreferrer">
        <img className="websiteImage" src="https://cdn.jsdelivr.net/gh/needleworm/ai_voca/src/images/websites/101.gif" alt="projectimage"/>
        </a>
        <div className="projectText">
          <a className="text-center textMarginBottom" href="https://needleworm.github.io/101" target="_blank"  rel="noreferrer">
            <h5>https://needleworm.github.io/101</h5><br/>
          </a>
          <div className="codeBody">
            <p className="bookDescription">
              This page provides example codes for my book, "비전공자가 업무에서 자주 물어보는 101가지 컴퓨터 활용팁 (생능출판사, 2021.07.15.)". It was built with  &nbsp;{jekyllIcon}&nbsp;Jekyll and &nbsp;
            <a href="https://github.com/raviriley/agency-jekyll-theme/" target="_blank"  rel="noreferrer">
              Agency theme by Ravi Riley
            </a>.
            </p>
          </div>
          <div className="projectIcons">
            <h5>{jekyllIcon}&nbsp;Jekyll&nbsp;&nbsp;{gitLogo}&nbsp;Pages</h5>
            <div className="gitIcons">
              <a href="https://github.com/needleworm/101" target="_blank"  rel="noreferrer">
                <i className="fas fa-code"></i>
              </a>
              &nbsp;&nbsp;&nbsp;&nbsp;
              <a href="https://needleworm.github.io/101" target="_blank"  rel="noreferrer">
                <i className="fas fa-external-link-alt"></i>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>

    var frontend = <div className="singleProjectContainer">
      <div className="singleWebsiteCard">
        <a className="tempa" href="https://needleworm.github.io/frontend" target="_blank"  rel="noreferrer">
        <img className="websiteImage" src="https://cdn.jsdelivr.net/gh/needleworm/ai_voca/src/images/websites/frontend.gif" alt="projectimage"/>
        </a>
        <div className="projectText">
          <a className="text-center textMarginBottom" href="https://needleworm.github.io/frontend" target="_blank"  rel="noreferrer">
            <h5>https://needleworm.github.io/frontend</h5><br/>
          </a>
          <div className="codeBody">
            <p className="bookDescription">
              This page provides example codes for my book, "코딩만 따라 해도 웹페이지가 만들어지는 HTML + CSS + 자바스크립트 (생능북스, 2022.02.15.)". It was built with  &nbsp;{jekyllIcon}&nbsp;Jekyll and &nbsp;
            <a href="https://github.com/raviriley/agency-jekyll-theme/" target="_blank"  rel="noreferrer">
              Agency theme by Ravi Riley
            </a>.
            </p>
          </div>
          <div className="projectIcons">
            <h5>{jekyllIcon}&nbsp;Jekyll&nbsp;&nbsp;{gitLogo}&nbsp;Pages</h5>
            <div className="gitIcons">
              <a href="https://github.com/needleworm/frontend" target="_blank"  rel="noreferrer">
                <i className="fas fa-code"></i>
              </a>
              &nbsp;&nbsp;&nbsp;&nbsp;
              <a href="https://needleworm.github.io/frontend" target="_blank"  rel="noreferrer">
                <i className="fas fa-external-link-alt"></i>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
    
    var moneyauto = <div className="singleProjectContainer">
      <div className="singleWebsiteCard">
        <a className="tempa" href="https://needleworm.github.io/moneyauto" target="_blank"  rel="noreferrer">
        <img className="websiteImage" src="https://cdn.jsdelivr.net/gh/needleworm/ai_voca/src/images/websites/moneyauto.gif" alt="projectimage"/>
        </a>
        <div className="projectText">
          <a className="text-center textMarginBottom" href="https://needleworm.github.io/moneyauto" target="_blank"  rel="noreferrer">
            <h5>https://needleworm.github.io/moneyauto</h5><br/>
          </a>
          <div className="codeBody">
            <p className="bookDescription">
              A Landing page for Money AUTO project. Money AUTO is a non-commercial project to provide automated solutionis for individual investors.
              It now provides Coin AUTO, an automated cryptocurrency trading system. Money AUTO will provide automated stock trading system, 
              real-time asset management system, and investment portfolio design services. All services of moneyauto will be provided for free.<br/>
              This static website was built with &nbsp;{jekyllIcon}&nbsp;Jekyll and &nbsp;
              <a href="https://github.com/raviriley/agency-jekyll-theme/" target="_blank"  rel="noreferrer">
                Agency theme by Ravi Riley
              </a>.
            </p>
          </div>
          <div className="projectIcons">
              <h5>{jekyllIcon}&nbsp;Jekyll&nbsp;&nbsp;{gitLogo}&nbsp;Pages</h5>
            <div className="gitIcons">
              <a href="https://github.com/needleworm/moneyauto" target="_blank"  rel="noreferrer">
                <i className="fas fa-code"></i>
              </a>
              &nbsp;&nbsp;&nbsp;&nbsp;
              <a href="https://needleworm.github.io/moneyauto" target="_blank"  rel="noreferrer">
                <i className="fas fa-external-link-alt"></i> 
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>

    var sangsangfarm = <div className="singleProjectContainer">
      <div className="singleWebsiteCard">
        <a className="tempa" href="https://www.sangsang.farm" target="_blank"  rel="noreferrer">
         <img className="websiteImage" src="https://cdn.jsdelivr.net/gh/needleworm/ai_voca/src/images/websites/sangsangfarm.gif" alt="projectimage"/>
        </a>
        <div className="projectText">
          <a className="text-center textMarginBottom" href="https://www.sangsang.farm" target="_blank"  rel="noreferrer">
            <h5>https://www.sangsang.farm</h5><br/>
          </a>
          <div className="codeBody">
            <p className="bookDescription">
              Official webpage of Imagination Garden Inc. 
              This static website was built with &nbsp;{jekyllIcon}&nbsp;Jekyll and hosted on &nbsp;{ms} Azure. It also utilized &nbsp;
              <a href="https://github.com/raviriley/agency-jekyll-theme/" target="_blank"  rel="noreferrer">
                Agency theme by Ravi Riley
              </a>.
            </p>
          </div>
          <div className="projectIcons">
            <h5>{jekyllIcon}&nbsp;Jekyll&nbsp;&nbsp;{ms}&nbsp;Azure</h5>
            <div className="gitIcons">
              <a href="https://www.sangsang.farm" target="_blank"  rel="noreferrer">
                <i className="fas fa-external-link-alt"></i>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>

    var business = <div className="singleProjectContainer">
      <div className="singleWebsiteCard">
        <a className="tempa" href="https://www.sangsang.farm/business" target="_blank"  rel="noreferrer">
        <img className="websiteImage" src="https://cdn.jsdelivr.net/gh/needleworm/ai_voca/src/images/websites/business.gif" alt="projectimage"/>
        </a>
        <div className="projectText">
          <a className="text-center textMarginBottom" href="https://www.sangsang.farm/business" target="_blank"  rel="noreferrer">
            <h5>https://www.sangsang.farm/business</h5><br/>
          </a>
          <div className="codeBody">
            <p className="bookDescription">
              Business proposal page of Imagination Garden Inc. This website provides embedded slide show for presentation.
              This static website was built with &nbsp;{jekyllIcon}&nbsp;Jekyll and hosted on &nbsp;{ms} Azure. It also utilized &nbsp;
              <a href="https://github.com/raviriley/agency-jekyll-theme/" target="_blank"  rel="noreferrer">
                Agency theme by Ravi Riley
              </a>.
            </p>
          </div>
          <div className="projectIcons">
            <h5>{jekyllIcon}&nbsp;Jekyll&nbsp;&nbsp;{ms}&nbsp;Azure</h5>
            <div className="gitIcons">
              <a href="https://www.sangsang.farm/business" target="_blank"  rel="noreferrer">
                <i className="fas fa-external-link-alt"></i>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
    
    var price = <div className="singleProjectContainer">
      <div className="singleWebsiteCard">
        <a className="tempa" href="https://www.sangsang.farm/price" target="_blank"  rel="noreferrer">
        <img className="websiteImage" src="https://cdn.jsdelivr.net/gh/needleworm/ai_voca/src/images/websites/price.gif" alt="projectimage"/>
        </a>
        <div className="projectText">
          <a className="text-center textMarginBottom" href="https://www.sangsang.farm/price" target="_blank"  rel="noreferrer">
            <h5>https://www.sangsang.farm/price</h5><br/>
          </a>
          <div className="codeBody">
            <p className="bookDescription">
                This webpage provides automated counceling on smart farm and plant factory facilities. 
                As there is no standard format of smart farm facilities in Korean market, each consulting requires so much time and effort from both customers and us. 
                So I built this automated and interactive web app to provide information and suggest appropriate options for our customers. 
                This system also provides formed quote documents for administrative works of companies.
                <br/>
                This static website was built with &nbsp;{reactIconL} React and hosted on &nbsp;{ms} Azure.
            </p>
          </div>
          <div className="projectIcons">
            <h5>{reactIconL}&nbsp;React&nbsp;&nbsp;{ms}&nbsp;Azure</h5>
            <div className="gitIcons">
              <a href="https://www.sangsang.farm/price" target="_blank"  rel="noreferrer">
                <i className="fas fa-external-link-alt"></i>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
    
    var sstb2 = <div className="singleProjectContainer">
      <div className="singleWebsiteCard">
        <a className="tempa" href="https://www.sangsang.farm" target="_blank"  rel="noreferrer">
        <img className="websiteImage" src="https://cdn.jsdelivr.net/gh/needleworm/ai_voca/src/images/websites/sstb2.gif" alt="projectimage"/>
        </a>
        <div className="projectText">
          <a className="text-center textMarginBottom" href="https://www.sangsang.farm" target="_blank"  rel="noreferrer">
            <h5>https://www.sangsang.farm</h5><br/>
          </a>
          <div className="codeBody">
            <p className="bookDescription">
                Official website of Imagination Garden Inc. for 2022 4Q. It uses a backend MySQL server for data management, while previous website was a static website. 
                <br/>
                This website was built with {docker} Docker, MySQL, and {wordpress} Wordpress hosted on &nbsp;{ms} Azure.
            </p>
          </div>
          <div className="projectIcons">
            <h5>{docker}&nbsp;docker&nbsp;&nbsp;{wordpress}&nbsp;Wordpress&nbsp;&nbsp;{ms}&nbsp;Azure</h5>
            <div className="gitIcons">
              <a href="https://www.sangsang.farm" target="_blank"  rel="noreferrer">
                <i className="fas fa-external-link-alt"></i>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>

    var tech3 = <div className="singleProjectContainer">
      <div className="singleWebsiteCard">
        <a className="tempa" href="https://needleworm.github.io/tech3" target="_blank"  rel="noreferrer">
        <img className="websiteImage" src="https://cdn.jsdelivr.net/gh/needleworm/ai_voca/src/images/websites/tech3.png" alt="projectimage"/>
        </a>
        <div className="projectText">
          <a className="text-center textMarginBottom" href="https://needleworm.github.io/tech3" target="_blank"  rel="noreferrer">
            <h5>https://needleworm.github.io/tech3</h5><br/>
          </a>
          <div className="codeBody">
            <p className="bookDescription">
              This page provides example codes for my book, "돈이 복사되는 가상자산 수업 (생능북스, 2022)". It was built with  &nbsp;{jekyllIcon}&nbsp;Jekyll and &nbsp;
            <a href="https://github.com/raviriley/agency-jekyll-theme/" target="_blank"  rel="noreferrer">
              Agency theme by Ravi Riley
            </a>.
            </p>
          </div>
          <div className="projectIcons">
            <h5>{jekyllIcon}&nbsp;Jekyll&nbsp;&nbsp;{gitLogo}&nbsp;Pages</h5>
            <div className="gitIcons">
              <a href="https://github.com/needleworm/tech3" target="_blank"  rel="noreferrer">
                <i className="fas fa-code"></i>
              </a>
              &nbsp;&nbsp;&nbsp;&nbsp;
              <a href="https://needleworm.github.io/tech3" target="_blank"  rel="noreferrer">
                <i className="fas fa-external-link-alt"></i>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>

    var dev = <div className="singleProjectContainer">
      <div className="singleWebsiteCard">
        <a className="tempa" href="https://needleworm.github.io/dev" target="_blank"  rel="noreferrer">
        <img className="websiteImage" src="https://cdn.jsdelivr.net/gh/needleworm/ai_voca/src/images/websites/dev.png" alt="projectimage"/>
        </a>
        <div className="projectText">
          <a className="text-center textMarginBottom" href="https://needleworm.github.io/dev" target="_blank"  rel="noreferrer">
            <h5>https://needleworm.github.io/dev</h5><br/>
          </a>
          <div className="codeBody">
            <p className="bookDescription">
              This page provides example codes for my book, "비전공이지만 개발자로 먹고삽니다 (생능북스, 2022)". It was built with  &nbsp;{jekyllIcon}&nbsp;Jekyll and &nbsp;
            <a href="https://github.com/raviriley/agency-jekyll-theme/" target="_blank"  rel="noreferrer">
              Agency theme by Ravi Riley
            </a>.
            </p>
          </div>
          <div className="projectIcons">
            <h5>{jekyllIcon}&nbsp;Jekyll&nbsp;&nbsp;{gitLogo}&nbsp;Pages</h5>
            <div className="gitIcons">
              <a href="https://github.com/needleworm/dev" target="_blank"  rel="noreferrer">
                <i className="fas fa-code"></i>
              </a>
              &nbsp;&nbsp;&nbsp;&nbsp;
              <a href="https://needleworm.github.io/dev" target="_blank"  rel="noreferrer">
                <i className="fas fa-external-link-alt"></i>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>

    return (
      <div className="websitesContainer">
        {blog}
        {sstb2}
        {sangsangfarm}
        {price}
        {business}
        {financebook}
        {dataset}
        {b101}
        {frontend}
        {ai}
        {rpa}
        {moneyauto}
        {tech3}
        {dev}
      </div>
    )
  }

  render() {
    return (
      <section id="websites" className="animated bounceInDown">
          {this.sectionTitle()}
          {this.drawWebsites()}
      </section>
    );
  }
}
  
export default Websites;