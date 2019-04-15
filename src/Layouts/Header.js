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

        <div
          className={!this.state.menu ? "app-menu-btn" : "app-menu-btn open"}
          onClick={this.handleClick}
        >
          <div />
        </div>
        <nav
          className={!this.state.menu ? "app-nav-items" : "app-nav-items show"}
        >
          <ul>
            <li>
              <Link to="/" onClick={this.handleClick}>
                Home
              </Link>
            </li>
            <li>
              <Link to="/menu" onClick={this.handleClick}>
                Menu
              </Link>
            </li>
            <li>
              <Link to="/order" onClick={this.handleClick}>
                Order
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    );
  }
}

export default Header;
