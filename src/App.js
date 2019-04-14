import React, { Component } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Header from "./Layouts/Header";
import Home from "./Components/home/Home";
import "./App.scss";

class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">
          <Header />
          <Route excat path="/" component={Home} />
        </div>
      </Router>
    );
  }
}

export default App;
