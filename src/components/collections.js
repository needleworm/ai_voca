import React, {Component} from 'react';
import './websites.css';


class Collections extends Component {
  constructor(props){
    super(props);
    this.state = {
    }
  }

  sectionTitle(){
    return(
      <div className="row">
        <div className="col-lg-12 text-center">
            <h2 className="section-heading subpageHeading">Collections</h2>
        </div>
      </div>
    )
  }

  drawWebsites(){
    var collection1 = <div className="singleProjectContainer">
      <div className="singleWebsiteCard">
        <img className="websiteImage" src="https://cdn.jsdelivr.net/gh/needleworm/ai_voca/src/images/collection/1.jpeg" alt="projectimage"/>
        <div className="projectText">
          <div className="text-center textMarginBottom">
            <strong>
              The Inner Sky - Orange in you
            </strong>
          </div>
          <div className="codeBody">
            <p className="bookDescription">
              Oil on Canvas, 40.9 x 53 cm, 2022<br/>
              <a href="https://nonez.creatorlink.net/" target="_blank" rel="noreferrer">
                <strong>넌지</strong>
              </a><br/>
            </p>
            <div className="collectedFrom">
              Collected from <a className="collectedFrom" href="https://mansion9.co.kr/" target="_blank" rel="noreferrer">
                Manshion 9
                </a>
            </div>
          </div>
        </div>
      </div>
    </div>

    var collection2 = <div className="singleProjectContainer">
      <div className="singleWebsiteCard">
        <img className="websiteImage" src="https://cdn.jsdelivr.net/gh/needleworm/ai_voca/src/images/collection/2.jpeg" alt="projectimage"/>
        <div className="projectText">
          <div className="text-center textMarginBottom">
            <strong>
              The Inner Sky - Lens-scape
            </strong>
          </div>
          <div className="codeBody">
            <p className="bookDescription">
              Oil on Canvas, 40.9 x 53 cm, 2022<br/>
              <a href="https://nonez.creatorlink.net/" target="_blank" rel="noreferrer">
                <strong>넌지</strong>
              </a><br/>
            </p>
            <div className="collectedFrom">
              Collected from <a className="collectedFrom" href="https://www.art9gallery.net/" target="_blank" rel="noreferrer">
                아트나인갤러리
                </a>
            </div>
          </div>
        </div>
      </div>
    </div>

    var collection3 = <div className="singleProjectContainer">
      <div className="singleWebsiteCard">
        <img className="websiteImage" src="https://cdn.jsdelivr.net/gh/needleworm/ai_voca/src/images/collection/3.jpeg" alt="projectimage"/>
        <div className="projectText">
          <div className="text-center textMarginBottom">
            <strong>
              The Inner Sky - Enjoy
            </strong>
          </div>
          <div className="codeBody">
            <p className="bookDescription">
              Oil on Canvas, 40.9 x 53 cm, 2021<br/>
              <a href="https://nonez.creatorlink.net/" target="_blank" rel="noreferrer">
                <strong>넌지</strong>
              </a><br/>
            </p>
            <div className="collectedFrom">
              Collected from <a className="collectedFrom" href="https://www.k-auction.com/" target="_blank" rel="noreferrer">
                K Auction
                </a>
            </div>
          </div>
        </div>
      </div>
    </div>

    var collection4 = <div className="singleProjectContainer">
      <div className="singleWebsiteCard">
        <img className="websiteImage" src="https://cdn.jsdelivr.net/gh/needleworm/ai_voca/src/images/collection/4.jpg" alt="projectimage"/>
        <div className="projectText">
          <div className="text-center textMarginBottom">
            <strong>
              Window of Time No.2
            </strong>
          </div>
          <div className="codeBody">
            <p className="bookDescription">
              Oil on Canvas, 116.8 x 91 cm, 2020<br/>
              <a href="https://nonez.creatorlink.net/" target="_blank" rel="noreferrer">
                <strong>넌지</strong>
              </a><br/>
            </p>
            <div className="collectedFrom">
              Collected from <a className="collectedFrom" href="http://www.kwanhoongallery.com" target="_blank" rel="noreferrer">
                관훈갤러리
              </a>
            </div>
            <br/><br/>

            <div className="collectedFrom">
              전시 중<br/>
              In-Joy of ART (2022.06.08. ~ 2022.06.29.) <br/>
            </div>
          </div>
        </div>
      </div>
    </div>

    var collection5 = <div className="singleProjectContainer">
      <div className="singleWebsiteCard">
        <img className="websiteImage" src="https://cdn.jsdelivr.net/gh/needleworm/ai_voca/src/images/collection/5.jpg" alt="projectimage"/>
        <div className="projectText">
          <div className="text-center textMarginBottom">
            <strong>
              The Inner Sky - Relax
            </strong>
          </div>
          <div className="codeBody">
            <p className="bookDescription">
              Oil on Canvas, 40.9 x 53 cm, 2021<br/>
              <a href="https://nonez.creatorlink.net/" target="_blank" rel="noreferrer">
                <strong>넌지</strong>
              </a><br/>
            </p>
            <div className="collectedFrom">
              Collected from <a className="collectedFrom" href="https://www.k-auction.com/" target="_blank" rel="noreferrer">
                K Auction
                </a>
            </div>
          </div>
        </div>
      </div>
    </div>

    var collection6 = <div className="singleProjectContainer">
      <div className="singleWebsiteCard">
        <img className="websiteImage" src="https://cdn.jsdelivr.net/gh/needleworm/ai_voca/src/images/collection/6.png" alt="projectimage"/>
        <div className="projectText">
          <div className="text-center textMarginBottom">
            <strong>
              Window of Time No.5
            </strong>
          </div>
          <div className="codeBody">
            <p className="bookDescription">
              Oil on Canvas, 53 x 40.9 cm, 2022<br/>
              <a href="https://nonez.creatorlink.net/" target="_blank" rel="noreferrer">
                <strong>넌지</strong>
              </a><br/>
            </p>
            <div className="collectedFrom">
              Collected from <a className="collectedFrom" href="https://www.k-auction.com/" target="_blank" rel="noreferrer">
                K Auction
                </a>
            </div>
          </div>
        </div>
      </div>
    </div>



    return (
      <div className="websitesContainer">
        <div className="text-center textMarginBottom" style={{marginBottom:"200px"}}>
          {collection6}
          {collection5}
          {collection4}
          {collection3}
          {collection2}
          {collection1}
        </div>
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
  
export default Collections;