import React, { Component } from "react";
import { connect } from "react-redux";
import Cart from "./../Components/Cart";
import CartItem from "./../Components/CartItem";
import { actDeleteInCart, actUpdateInCart } from "../action/action";

class CartContainer extends Component {
  render() {
    var { cart } = this.props;
    return (
      <Cart cart={cart}>
        {this.showCartItem(cart)}
      </Cart>
    );
  }
  showCartItem = cart => {
    var result = null;
    var { onDeleteProduct, onUpdateProduct } = this.props;
    if (cart.length > 0) {
      result = cart.map((item, index) => {
        return (
          <CartItem
            key={index}
            item={item}
            index={index}
            onDeleteProduct={onDeleteProduct}
            onUpdateProduct={onUpdateProduct}
          />
        );
      });
    }
    return result;
  };
}

const mapStateToProps = state => {
  return {
    cart: state.cart
  };
};
const mapDispatchToProps = (dispatch, props) => {
  return {
    onDeleteProduct: product => {
      dispatch(actDeleteInCart(product));
    },
    onUpdateProduct: (product, quantity) => {
      dispatch(actUpdateInCart(product, quantity));
    }
  };
};
export default connect(
  mapStateToProps,
  mapDispatchToProps,
  null
)(CartContainer);
