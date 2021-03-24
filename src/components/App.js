import React, { Component } from "react";
import Products from "./Products";
import HomePage from "../pages/HomePage";

class App extends Component {
  render() {
    return (
      <div>
        <HomePage />
        <hr />
        <Products />
      </div>
    );
  }
}

export default App;
