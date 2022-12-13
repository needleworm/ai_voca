import React, {Component} from 'react';
import './codes.css';
import 'chart.js/auto';
import { Doughnut } from 'react-chartjs-2';
import axios from 'axios';


class Codes extends Component {
  constructor(props){
    super(props);
    this.state = {
      repository: {}
    }
  }

  componentDidMount(){
    const response = axios.get('https://api.github.com/users/needleworm/repos?per_page=100')
    response.then((res) =>{
      const data = res.data
      var repo = {}
      for (var i in data){
        var el = data[i]
        repo[el.name] = {
          name: el.name,
          url: el.html_url,
          language: el.language,
          stars: el.stargazers_count,
          forks: el.forks_count,
          watch: el.watchers,
          createdAt: el.created_at,
          description: el.description        
        }
      }
      this.setState({
        repository: repo
      })
    })
  }

  drawGraph(){
    const options = {
      legend:{
        display: true,
        position: "bottom"
      },
      elements:{
        arc:{
          borderWidth: 2
        }
      }
      
    }

    const data = {
      labels: [
        'Python', 
        'C & C++', 
        'JS & HTML & CSS', 
        'ETC'],
      datasets: [
        {
          label: 'Code Bytes on Github',
          data: [164577814, 1454905, 902627, 70423],
          backgroundColor: [
            'rgba(255, 99, 132, 0.5)',
            'rgba(54, 162, 235, 0.5)',
            'rgba(255, 206, 86, 0.5)',
            'rgba(75, 192, 192, 0.5)'
          ],
          borderWidth: 1,
        },
      ],
    }

    const chartStyle = {
      maxWidth:'500px',
      marginLeft:'auto',
      marginRight:'auto',
    }

    return (
      <div style={chartStyle}>
        <Doughnut data={data} options={options}/>
        <p className="text-center">
          Click &nbsp;<i className="fab fa-python"></i>&nbsp;Python label to see other languages
        </p><br/><br/><br/>
      </div>
    )
  }

  sectionTitle(){
    return(
      <div className="row">
        <div className="col-lg-12 text-center">
            <h2 className="section-heading subpageHeading">Codes</h2>
        </div>
      </div>
    )
  }

  drawProjects(){
    var pythonIcon = <i className="fab fa-python"></i>
    var reactIconL = <i className="fab fa-react"></i>
    var windowsIcon = <i className="fab fa-windows"></i>
    var jekyllIcon = <i className="fas fa-vial"></i>
    var jsIcon = <i className="fab fa-js-square"></i>
    var javaIcon = <i className="fab fa-java"></i>
    var eduThumbnail = "https://cdn.jsdelivr.net/gh/needleworm/ai_voca/src/images/codes/edu.jpg"
    var pythonThumbnail = "https://cdn.jsdelivr.net/gh/needleworm/ai_voca/src/images/codes/python.jpg"
    var exeThumbnail = "https://cdn.jsdelivr.net/gh/needleworm/ai_voca/src/images/codes/exe.jpg"
    var scienceThumbnail = "https://cdn.jsdelivr.net/gh/needleworm/ai_voca/src/images/codes/science.jpg"
    var moneyautoThumbnail = "https://cdn.jsdelivr.net/gh/needleworm/ai_voca/src/images/codes/moneyauto.jpg"
    var reactThumbnail = "https://cdn.jsdelivr.net/gh/needleworm/ai_voca/src/images/codes/react.jpg"
    var tfThumbnail = "https://cdn.jsdelivr.net/gh/needleworm/ai_voca/src/images/codes/tf.jpg"
    var scalaThumbnail = "https://cdn.jsdelivr.net/gh/needleworm/ai_voca/src/images/codes/scala.jpg"
    var cheeseThumbnail = "https://cdn.jsdelivr.net/gh/needleworm/ai_voca/src/images/codes/cheese.jpg"
    var jsThumbnail = "https://cdn.jsdelivr.net/gh/needleworm/ai_voca/src/images/codes/js.jpg"
    var nftThumbnail = "https://cdn.jsdelivr.net/gh/needleworm/ai_voca/src/images/codes/nft.jpg"


    return <div className="projects">
      {/* 교육관련 */}
      {this.drawSingleProject("bhban_rpa", "https://cdn.jsdelivr.net/gh/needleworm/ai_voca/src/images/books/covers/1.jpg", pythonIcon)}
      {this.drawSingleProject("automation_edu", eduThumbnail, pythonIcon)}
      {this.drawSingleProject("pymacro", eduThumbnail, pythonIcon)}
      {this.drawSingleProject("python101", eduThumbnail, pythonIcon)}
      {this.drawSingleProject("bhban_ai", "https://cdn.jsdelivr.net/gh/needleworm/ai_voca/src/images/books/covers/8.jpg", pythonIcon)}
      {this.drawSingleProject("pywinmacro", exeThumbnail, pythonIcon)}



      {/* 재미관련 */}
      {this.drawSingleProject("newsToday", pythonThumbnail, pythonIcon)}
      {this.drawSingleProject("post_crawler", pythonThumbnail, pythonIcon)}
      {this.drawSingleProject("brunch_thaad", pythonThumbnail, pythonIcon)}


      {/* Git Pages */}
      {this.drawSingleProject("needleworm.github.io", reactThumbnail, reactIconL)}
      {this.drawSingleProject("financebook", "https://cdn.jsdelivr.net/gh/needleworm/ai_voca/src/images/books/covers/9.jpg", jekyllIcon)}
      {this.drawSingleProject("instagram", "https://cdn.jsdelivr.net/gh/needleworm/ai_voca/src/images/books/covers/12.jpg", jsIcon)}
      {this.drawSingleProject("gunbam", "https://cdn.jsdelivr.net/gh/needleworm/ai_voca/src/images/books/covers/12.jpg", jekyllIcon)}
      {this.drawSingleProject("101", "https://cdn.jsdelivr.net/gh/needleworm/ai_voca/src/images/books/covers/10.jpg", jekyllIcon)}
      {this.drawSingleProject("frontend", "https://cdn.jsdelivr.net/gh/needleworm/ai_voca/src/images/books/covers/12.jpg", jekyllIcon)}
      {this.drawSingleProject("dataset", "https://cdn.jsdelivr.net/gh/needleworm/ai_voca/src/images/books/covers/13.jpg", jekyllIcon)}


      {/* 연구관련 */}
      {this.drawSingleProject("fvs", scienceThumbnail, pythonIcon)}
      {this.drawSingleProject("base_sequence_analysis", scienceThumbnail, pythonIcon)}
      {this.drawSingleProject("fmm_crawl", scienceThumbnail, pythonIcon)}
      {this.drawSingleProject("pubmed_crawler", scienceThumbnail, pythonIcon)}
      {this.drawSingleProject("pubmed_abstract_crawl", scienceThumbnail, pythonIcon)}
      {this.drawSingleProject("PubMed_Crawl_exe", exeThumbnail, windowsIcon)}
      {this.drawSingleProject("google_scholar_crawler", scienceThumbnail, pythonIcon)}
      {this.drawSingleProject("ion_interference", scienceThumbnail, pythonIcon)}
      {this.drawSingleProject("nutrient_solution", scienceThumbnail, pythonIcon)}
      {this.drawSingleProject("nc2", scienceThumbnail, pythonIcon)}
      {this.drawSingleProject("greenhouse_ai", scienceThumbnail, pythonIcon)}
      {this.drawSingleProject("bh_coefficient", scienceThumbnail, pythonIcon)}
      {this.drawSingleProject("mlproject", tfThumbnail, pythonIcon)}


      {/* 자동화 */}
      {this.drawSingleProject("pixabay_crawling", pythonThumbnail, pythonIcon)}
      {this.drawSingleProject("chulsukbu", pythonThumbnail, pythonIcon)}
      {this.drawSingleProject("get_vaccine", pythonThumbnail, pythonIcon)}
      {this.drawSingleProject("img_crop_from_PDF", pythonThumbnail, pythonIcon)}
      {this.drawSingleProject("insta_like_by_graphic_recognition", pythonThumbnail, pythonIcon)}
      {this.drawSingleProject("twitter_news_macro", pythonThumbnail, pythonIcon)}
      {this.drawSingleProject("xlsx_destroyer", pythonThumbnail, pythonIcon)}
      {this.drawSingleProject("wordpuzzle", pythonThumbnail, pythonIcon)}
      {this.drawSingleProject("xlsx_sorter", pythonThumbnail, pythonIcon)}
      {this.drawSingleProject("bluestack_macro", pythonThumbnail, pythonIcon)}


      {/* 머니오토 */}
      {this.drawSingleProject("CoinAutoTrader", moneyautoThumbnail, pythonIcon)}
      {this.drawSingleProject("nftauto", nftThumbnail, pythonIcon)}
      {this.drawSingleProject("pixelRandomizer", nftThumbnail, pythonIcon)}
      {this.drawSingleProject("CoinAutoTrader_Bithumb", moneyautoThumbnail, pythonIcon)}
      {this.drawSingleProject("coinone_Api_for_google_apps", jsThumbnail, jsIcon)}
      {this.drawSingleProject("CoinAutoTrader_exe", moneyautoThumbnail, windowsIcon)}

      {/* 그 외 */}
      {this.drawSingleProject("eliza", scalaThumbnail, javaIcon)}
      {this.drawSingleProject("mozza", cheeseThumbnail, pythonIcon)}
      {this.drawSingleProject("pizza", cheeseThumbnail, pythonIcon)}
      {this.drawSingleProject("cottoncandy", cheeseThumbnail, pythonIcon)}
      {this.drawSingleProject("breakout", tfThumbnail, pythonIcon)}
      {this.drawSingleProject("moneyauto", moneyautoThumbnail, jekyllIcon)}
      


    </div>
  }

  drawSingleProject(name, icon, languageIcon){
    if (!this.state.repository[name]){
      return 
    }
    var project = <div className="singleProjectContainer">
      <div className="singleProjectCard">
        <a className="tempa" href={this.state.repository[name].url} target="_blank"  rel="noreferrer">
         <img className="projectImage" src={icon}  alt="projectimage"/>
        </a>
        <div className="projectText">
          <a href={this.state.repository[name].url} target="_blank"  rel="noreferrer">
            <h5>{name}</h5>
          </a>
          <div className="codeBody">
            <p className="bookDescription firstCommitDate">
              First Commit on {this.state.repository[name].createdAt.substring(0,10)}
            </p>
            <p className="bookDescription">{this.state.repository[name].description}</p>
          </div>
          <div className="projectIcons">
            <h5>{languageIcon}&nbsp; {this.state.repository[name].language}</h5>
            <div className="gitIcons">
              <a href={this.state.repository[name].url + '/watchers'} target="_blank"  rel="noreferrer">
                <i className="far fa-eye"></i> {this.state.repository[name].watch}
              </a>
              &nbsp;&nbsp;&nbsp;&nbsp;
              <a href={this.state.repository[name].url + '/stargazers'} target="_blank"  rel="noreferrer">
                <i className="far fa-star"></i> {this.state.repository[name].stars}
              </a>
              &nbsp;&nbsp;&nbsp;&nbsp;
              <a href={this.state.repository[name].url + '/network/members'} target="_blank"  rel="noreferrer">
                <i className="fas fa-code-branch"></i> {this.state.repository[name].forks}
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>

    return project
  }

  drawCodes(){
    return(
      <div className="codeContainer">
        {this.drawGraph()}
        <div className="col-lg-12 text-center">
          <h3 className="qwerqwer">
            Realtime Summary of &nbsp; 
            <a className="tempa" href="https://github.com/needleworm" target="_blank"  rel="noreferrer">
              My <i className="fab fa-github"></i> Github Account
            </a>
          </h3>
        </div>
        {this.drawProjects()}
      </div>
    )
  }

  render() {
    return (
      <section id="codes" className="animated bounceInDown">
          {this.sectionTitle()}
          {this.drawCodes()}
      </section>
    );
  }
}
  
export default Codes;