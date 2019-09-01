import React, { Component } from "react";
import HeaderMenuItem from "./HeaderMenuItem";
import Logo from "./../img/logo.png";

export default class Header extends Component {
  render() {
    return (
      <div className="header">
        <div className="header-top">
          <img src={Logo} alt="La Casa" />
          <div onClick={this.isToggle} className="hamburger">
            <div className="bar1"></div>
            <div className="bar2"></div>
            <div className="bar3"></div>
          </div>
          <HeaderMenuItem />
        </div>
      </div>
    );
  }
}
