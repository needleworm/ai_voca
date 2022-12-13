import React, {Component} from 'react';
import './websites.css';


class Reading extends Component {
  constructor(props){
    super(props);
    this.state = {
    }
  }

  sectionTitle(){
    return(
      <div className="row">
        <div className="col-lg-12 text-center">
            <h2 className="section-heading subpageHeading">Reading Gen.</h2>
        </div>
      </div>
    )
  }

  drawWebsites(){


    return (
      <div className="websitesContainer">
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
  
export default Reading;