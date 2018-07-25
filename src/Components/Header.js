import React, { Component } from 'react';

class Header extends Component{


  render(){
    const day = new Date().getDate();
    const month = new Date().getMonth() + 1;
    const year = new Date().getFullYear();
    const date = month + '/' + day + '/' + year;
    return(
      <header className="header">
        <h1> Journal </h1>
      </header>
    )
  }

}


export default Header;
