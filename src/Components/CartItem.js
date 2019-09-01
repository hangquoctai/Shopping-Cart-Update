import React, { Component } from "react";
import { Media } from "reactstrap";
import Img9 from "./../img/09.jpg";

export default class Looking extends Component {
  render() {
    var { item,cart } = this.props;
    var { quantity } = item;
    return (
      <div>
        <Media className="item">
          <Media left href="#">
            <img src={item.product.image} />
          </Media>
          <Media body className="info">
            <p>{item.product.name}</p>
            <p>{item.product.price.toFixed(2)}$ * {quantity} = {this.TotalInProduct(item.product.price,quantity).toFixed(2)}$</p>
            <p>
              <span onClick={()=>this.onUpdateProduct(item.product,quantity-1)}>-</span>
              {quantity}
              <span onClick={()=>this.onUpdateProduct(item.product,quantity+1)}>+</span>
            </p>
          </Media>
          <span className="delete" onClick={()=>this.onDeleteProduct(item.product)}>X</span>
        </Media>
      </div>
    );
  }
  TotalInProduct = (price,quantity) => {
    let total=0;
    total=price*quantity;
    return total;
  }
  onDeleteProduct=(product)=>{
    this.props.onDeleteProduct(product);
  }
  onUpdateProduct =(product,quantity) => {
    if(quantity>0){
      this.setState({
        quantity:quantity
      })
      this.props.onUpdateProduct(product,quantity);
    }
  }
}
