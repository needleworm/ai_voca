import React, {Component} from 'react';
import './contact.css';



class Contact extends Component {
  constructor(props){
    super(props)
    this.state = {
      status: ""
    };
  }

  submitForm() {
    return (
      <form id="fs-frm" name="complaint-form" acceptCharset="utf-8" action="https://formspree.io/f/xaylgyzq" method="post">
        <fieldset id="fs-frm-inputs">
          <p>
            <label htmlFor="full-name">Name</label><br/>
            <input type="text" name="name" id="full-name" placeholder="Your Name Please*" required data-validation-required-message="Please enter your name"/>
          </p>
          <p>
            <label htmlFor="email-address">Email Address</label><br/>
            <input type="email" name="_replyto" id="email-address" placeholder="email@bhban.com*" required data-validation-required-message="Please enter your email adress."/>
          </p>
          <p>
            <label htmlFor="telephone">Phone Number (Optional)</label><br/>
            <input type="telephone" name="telephone" id="telephone" placeholder="010-1234-5678"/>
          </p>
          <p>
            <label htmlFor="Message">Message</label><br/>
            <textarea rows="6" name="complaint" id="complaint" placeholder="Tell me your story :)" required data-validation-required-message="Please enter a message."></textarea>
          </p>
          <input type="hidden" name="_subject" id="email-subject" value="Contact From Homepage"/>
        </fieldset>
        <button type="submit" className="submitButton">Send Message</button>
      </form>
    )
  }

  sectionTitle(){
    return(
      <div className="row">
        <div className="col-lg-12 text-center">
            <h2 className="section-heading subpageHeading">Contact</h2>
        </div>
      </div>
    )
  }

  render() {
    return (
      <section id="contact" className="animated bounceInDown">
        {this.sectionTitle()}
        {this.submitForm()}
      </section>
    );
  }
}
  
export default Contact;