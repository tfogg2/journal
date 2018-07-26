import React, { Component } from 'react';
import moment from "moment";

class Header extends Component{


  render(){
    const date = this.props.todaysDate;

    return(
      <header className="header">
        <h1>{date}</h1>
      </header>
    )
  }

}


export default Header;
