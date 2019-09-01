import React, { Component } from "react";

export default class Looking extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isToggle: false
    };
    this.onToggle = this.onToggle.bind(this);
  }
  onToggle() {
    this.setState({
      isToggle: !this.state.isToggle
    });
  }
  render() {
    var { cart } = this.props;
    return (
      <div class="end-header">
        <h1>
          Products purchased :
          <i
            className="yourcart fa fa-shopping-cart"
            onClick={this.onToggle}
          ></i>
          <span>{this.CountProduct(cart)}</span>
        </h1>
        <h1>
          Total : <span>{this.showTotalInCart(cart).toFixed(2)}$</span>
        </h1>
        <div className="clear"></div>
        {this.state.isToggle == true && 
          <div className="cart">
            <div className="band">
              <h1>Your Cart <i 
                className="out-cart fa fa-sign-out"
                onClick={this.onToggle}
                >
              </i></h1>            
            </div>
            {this.props.children}
            <div className="total">Total : {this.showTotalInCart(cart).toFixed(2)}$ </div>
          </div>}
      </div>
    );
  }
  showTotalInCart = ( cart ) => {
    var total=0;
    if (cart.length>0){
      for (var i=0;i<cart.length;i++){
        total+=cart[i].product.price*cart[i].quantity;
      }
    }
    return total;
  }
  CountProduct = ( cart ) => {
    var count=0;
    if(cart.length>0){
      for(var i=0;i<cart.length;i++){
        count+=cart[i].quantity;
      }
    }
    return count;
  }
}
