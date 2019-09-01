import React,{Component} from "react";

export default class HeaderLogin extends Component {
  render(){
    return (
            <div className="login">
              <div className="login-content">
                <div className="lore">
                  <p className="login_1">Login</p>
                  <p className="registry_1">Registry</p>
                  <div className="clear"></div>
                </div>
                <div className="input">
                  <input type="text" placeholder="Email" />
                  <input type="password" placeholder="Password" />
                </div>
                <div className="forgot">
                  <a href="#">
                    <p onClick={this.props.isToggle} className="cancle">Cancle</p>
                    <p className="forg">Forgot Password ???</p>
                  </a>
                  <div className="clear"></div>
                </div>
              </div>
              <div className="clear"></div>
            </div>
      );
  }
}
