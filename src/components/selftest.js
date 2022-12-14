import React, {Component} from 'react';
import './websites.css';


class Selftest extends Component {
  constructor(props){
    super(props);
    this.state = {
    }
  }

  sectionTitle(){
    return(
      <div className="row">
        <div className="col-lg-12 text-center">
            <h2 className="section-heading subpageHeading">Self Study</h2>
        </div>
      </div>
    )
  }

  drawSelftest(){


    return (
      <div className="websitesContainer">
      </div>
    )
  }

  render() {
    return (
      <section id="selftest" className="animated bounceInDown">
          {this.sectionTitle()}
          {this.drawSelftest()}
      </section>
    );
  }
}
  
export default Selftest;