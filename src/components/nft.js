import React, {Component} from 'react';


class Designs extends Component {
  constructor(props){
    super(props)
    this.state={
      id: "",
      ps: "",
    }
  }

  render() {
    return (
      <div className="animated bounceInDown">
        Designs
      </div>
    );
  }
}
  
export default Designs;