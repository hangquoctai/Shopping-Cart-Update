import React, { Component } from "react";
import "./App.css";
import Header from "./Components/Header";
import ProductContainer from "./container/ProductContainer";
import Footer from "./Components/Footer";
import CartContainer from "./container/CartContainer";

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        <CartContainer />
        <ProductContainer/>
        <Footer />
      </div>
    );
  }
}
export default App;
