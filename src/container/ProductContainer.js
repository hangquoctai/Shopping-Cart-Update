import React, { Component } from "react";
import { connect } from "react-redux";
import ProductItem from "./../Components/ProductItem";
import Product from "./../Components/Product";
import { Col } from "reactstrap";
import { actAddToCart } from "../action/action";

class ProductContainer extends Component {
  render() {
    var { products } = this.props;
    return <Product>{this.showProduct(products)}</Product>;
  }
  showProduct(products) {
    var result = null;
    var { onAddToCard } = this.props;
    if (products.length > 0) {
      result = products.map((product, index) => {
        return (
          <Col xl="4" lg="4" md="6" sm="12" key={index}>
            <ProductItem 
              key={index} 
              product={product} 
              onAddToCard={onAddToCard}
              />
          </Col>
        );
      });
    }
    return result;
  }
}

const mapStateToProps = state => {
  return {
    products: state.products
  };
};
const mapDispatchToProps = (dispatch,props) => {
  return {
    onAddToCard:(product) => {
      dispatch(actAddToCart(product,1))
    }
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps,
  null
)(ProductContainer);
