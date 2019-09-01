import React,{Component} from "react";
import Logo from "./../img/logo.png";
import HeaderLogin from './HeaderLogin';


export default class HeaderMenuItem extends Component {
  constructor(props){
    super(props)
    this.state={
      isToggle:false
    }
    this.isToggle=this.isToggle.bind(this);
  }
  isToggle(){
    this.setState({
      isToggle:!this.state.isToggle
    })
  }
  render(){
    return (
              <div className="menu">
                <span></span>
                <ul id="menu_list">
                  <span></span>
                  <li>
                    <a href="#cont-click">Buy</a>
                  </li>
                  <li>
                    <a href="#">Rent</a>
                  </li>
                  <li>
                    <a href="#">Sell</a>
                  </li>
                  <li>
                    <a href="#footer-click">About</a>
                  </li>
                  <li>
                    <a href="#">Contact</a>
                  </li>
                  <li id="login" >
                    <a href="#" onClick={this.isToggle}>Login</a>
                    {this.state.isToggle==true && <HeaderLogin isToggle={() => this.isToggle(this.state.isToggle)}/>}
                  </li>
                </ul>
                <div className="clear"></div>
              </div>
      );
  }
}
