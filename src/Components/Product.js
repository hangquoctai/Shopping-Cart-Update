import React, { Component } from "react";
import { Container, Row, Col } from "reactstrap";
import ProductItem from './ProductItem';


export default class Product extends Component {
  render() {
    var { products } = this.props.children;
    return (
      <Container>
          <Row>
            {this.props.children}
          </Row>
        </Container>
    );
  }
}
