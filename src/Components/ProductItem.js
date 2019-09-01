import React, { Component } from "react";
import { Card, CardImg, CardText, CardBody,
  CardTitle, Button } from 'reactstrap';

export default class ProductItem extends Component {
  render() {
    const style={
      position:'absolute',
      top:'20px',
      left:'20px',
      backgroundColor:"rgba(255,255,255,0.8)",
      padding:"10px 15px",
      borderRadius:"10px",
    }
    const margin={
      margin:'50px 20px'
    }
    var {product}=this.props;
    return (
      <Card style={margin}>
        <CardImg top width="100%" src={product.image}/>
        <span 
          className="price"
          style={style}
          >{product.price.toFixed(2)}$</span>
        <CardBody>
          <CardTitle>{product.name}</CardTitle>
          <CardText>{product.description}</CardText>
          <Button 
            color="info"
            onClick={()=>this.onAddToCard(product)}
            >
            Add To Card</Button>
        </CardBody>
      </Card>
    );
  }
  onAddToCard = (product) => {
    this.props.onAddToCard(product);
  }
}
