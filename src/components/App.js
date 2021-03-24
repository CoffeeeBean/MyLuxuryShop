import React, { Component } from "react";
import { Link, Route, Switch } from "react-router-dom";
import HomePage from "../pages/HomePage";
import SearchProducts from "../pages/SearchProducts";

const NoMatch = () => <div>No match</div>;

const style = {
  display: "inline-block",
  margin: 10,
  marginBottom: 30,
};

class App extends Component {
  render() {
    return (
      <div>
        <h3 style={style}>
          <Link to="/">Home </Link>
        </h3>
        <h3 style={style}>
          <Link to="/search">Search Products </Link>
        </h3>

        <Switch>
          <Route exact path="/">
            <HomePage />
          </Route>

          <Route path="/search">
            <SearchProducts />
          </Route>

          <Route>
            <NoMatch />
          </Route>
        </Switch>
      </div>
    );
  }
}

export default App;
