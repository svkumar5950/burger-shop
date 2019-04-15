import React, { Component } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Header from "./Layouts/Header";
import Home from "./Components/home/Home";
import Menu from "./Components/menu/Menu";
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
          </Switch>
        </div>
      </Router>
    );
  }
}

export default App;
