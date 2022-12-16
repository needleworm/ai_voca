import React, { useState } from 'react';
import './websites.css';


function Reading() {

  const sectionTitle = () => {
    return(
      <div className="row">
        <div className="col-lg-12 text-center">
            <h2 className="section-heading subpageHeading">Reading Gen.</h2>
        </div>
      </div>
    )
  }

  const drawWebsites = () => {
    return (
      <div className="websitesContainer">
      </div>
    )
  }


    return (
      <section id="websites" className="animated bounceInDown">
          {sectionTitle()}
          {drawWebsites()}
      </section>
    );
}
  
export default Reading;