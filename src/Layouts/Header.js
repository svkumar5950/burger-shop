import React, { Component } from "react";
import { Link } from "react-router-dom";

class Header extends Component {
  state = {
    menu: false
  };

  // Toggle the Menu button
  handleClick = () => {
    this.setState({ menu: !this.state.menu });
  };

  render() {
    return (
      <div className="app-header">
        <div className="app-brand">
          <h1>
            <Link to="/">
              Trat Burger
              <i className="fas fa-bacon" />
            </Link>
          </h1>
        </div>

        <div className="app-menu-btn" onClick={this.handleClick}>
          <div />
        </div>
        <nav
          className={this.state.menu ? "app-nav-items show" : "app-nav-items"}
        >
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/menu">Menu</Link>
            </li>
            <li>
              <Link to="/order">Order</Link>
            </li>
          </ul>
        </nav>
      </div>
    );
  }
}

export default Header;
