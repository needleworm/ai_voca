import React from 'react';
import './papers.css';



function Papers () {

  const sectionTitle = () => {
    return(
      <div className="row">
        <div className="col-lg-12 text-center">
            <h2 className="section-heading subpageHeading">Papers</h2>
        </div>
      </div>
    )
  }

  const drawWebsites = () => {
    let gitLogo = <i className="fab fa-github"></i>

    let paper11 = <div className="singleProjectContainer">
    <div className="singleWebsiteCard">
      <img className="websiteImage" src="https://cdn.jsdelivr.net/gh/needleworm/needleworm.github.io/src/images/papers/2022_sunung.png" alt="projectimage"/>
      <div className="projectText">
        <h5>Analysis on English Vocabulary Appearance Pattern in Korean CSAT</h5><br/>
          <p className="bookDescription">
            <strong>Byunghyun Ban</strong>, Jejong Lee, Hyeonmok Hwang (2022)<br/>
            Preprint (Researchgate)
          </p>
        <div className="codeBody">
          <p className="bookDescription">
            A text-mining-based word function categorization method and LSTM-based vocabulary pattern prediction method are introduced in this paper. A preprocessing method based on simple text appearance frequency analysis is first described. This method was developed as a data screening tool but showed 4.35 ~ 6.21 times higher than previous works. An LSTM deep learning method is also suggested for vocabulary appearance pattern prediction method. AI performs a regression with various size of data window of previous exams to predict the probabilities of word appearance in the next exam. Predicted values of AI over various data windows are processed into a single score as a weighted sum, which we call an "AI-Score", which represents the probability of word appearance in next year's exam. Suggested method showed 100% accuracy at the range 100-score area and showed only 1.7% error of prediction in the section where the scores were over 60 points. All source codes are freely available at the authors' 
            <a href="https://github.com/needleworm/bigdata_voca" target="_blank" rel="noreferrer">Git Hub repository. </a>
          </p>
        </div>
        <div className="projectIcons">
          <h5>
            <span className="citation"  onClick={
              function(e){
                e.preventDefault()
                let dummy = document.createElement("textarea");
                document.body.appendChild(dummy);
                dummy.value = 'Ban, Byunghyun, et al. "Analysis on English Vocabulary Appearance Pattern in Korean CSAT." arXiv preprint arXiv:2211.15426 (2022).'
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
              <a href="https://cdn.jsdelivr.net/gh/needleworm/needleworm.github.io/src/paperPdf/2022_sunung.pdf" target="_blank"  rel="noreferrer" download>
                <i className="fas fa-file-pdf"></i>
              </a>
              &nbsp;&nbsp;&nbsp;&nbsp;
              <a href="https://arxiv.org/abs/2211.15426" target="_blank"  rel="noreferrer">
                <i className="fas fa-external-link-alt"></i>
              </a>
              &nbsp;&nbsp;&nbsp;&nbsp;
              <a href="https://github.com/needleworm/bigdata_voca" target="_blank"  rel="noreferrer">
                {gitLogo}
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
    
    return (
      <div className="websitesContainer">
        {paper11}
      </div>
    )
  }

  return (
    <section id="papers" className="animated bounceInDown">
        {sectionTitle()}
        {drawWebsites()}
    </section>
  );
}
  
export default Papers;