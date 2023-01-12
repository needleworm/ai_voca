import React, { useState } from 'react';
import './websites.css';


function Selftest() {

  const sectionTitle = () => {
    return(
      <div className="row">
        <div className="col-lg-12 text-center">
            <h2 className="section-heading subpageHeading">Self Study</h2>
        </div>
      </div>
    )
  }

  const drawSelftest = () => {


    return (
      <div className="websitesContainer">
      </div>
    )
  }


    return (
      <section id="selftest" className="animated bounceInDown">
          {sectionTitle()}
          {drawSelftest()}
      </section>
    );
}
  
export default Selftest;