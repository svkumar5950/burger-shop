import React, { Component } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Header from "./Layouts/Header";
import Home from "./Components/home/Home";
import Menu from "./Components/menu/Menu";
import Order from "./Components/order/Order";
import "./App.scss";

class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">
          <Header />
          <Switch>
            <Route exact path="/" component={Home} />
            <Route path="/menu" component={Menu} />
            <Route path="/order" component={Order} />
          </Switch>
        </div>
      </Router>
    );
  }
}

export default App;
