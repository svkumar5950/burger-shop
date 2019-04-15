import React, { Component } from "react";
import { Link } from "react-router-dom";
import Burgers from "./Burgers";
import Drinks from "./Drinks";
import Chips from "./Chips";
import Kids from "./Kids";

export default class Menu extends Component {
  state = {
    burgers: {
      image: [
        "./assets/burger_menu-1.jpg",
        "./assets/burger_menu-2.jpg",
        "./assets/burger_menu-3.jpg",
        "./assets/burger_menu-4.jpg",
        "./assets/burger_menu-5.jpg",
        "./assets/burger_menu-6.jpg"
      ],
      heading: ["January", "February", "March", "April", "May", "June"]
    },
    drinks: {
      image: [
        "../assets/drinks_menu-1.jpg",
        "../assets/drinks_menu-2.jpg",
        "../assets/drinks_menu-3.jpg",
        "../assets/drinks_menu-4.jpg",
        "../assets/drinks_menu-5.jpg",
        "../assets/drinks_menu-6.jpg",
        "../assets/drinks_menu-7.jpg",
        "../assets/drinks_menu-8.jpg"
      ],
      heading: [
        "Mazata",
        "Farloop",
        "Mangi",
        "Aprtile",
        "Marnuta",
        "Jumlia",
        "Jurwarnia",
        "augrita"
      ]
    },
    chips: {
      image: ["../assets/fries_menu-1.jpg", "../assets/fries_menu-2.jpg"],
      heading: ["Mazata", "Farloop"]
    },
    kids: {
      image: ["../assets/kids_menu-1.jpg", "../assets/kids_menu-2.jpg"],
      heading: ["Jurwarnia", "augrita"]
    }
  };

  render() {
    const path = this.props.location.pathname;
    return (
      <div className="app-menu">
        <div className="app-menu-nav">
          <ul>
            <li className={path === "/menu" ? "active" : ""}>
              <Link to="/menu">Burgers</Link>
            </li>
            <li className={path === "/menu/drinks" ? "active" : ""}>
              <Link to="/menu/drinks">Drinks</Link>
            </li>
            <li className={path === "/menu/chips" ? "active" : ""}>
              <Link to="/menu/chips">Chip's</Link>
            </li>
            <li className={path === "/menu/kids" ? "active" : ""}>
              <Link to="/menu/kids">Kid's</Link>
            </li>
          </ul>
        </div>
        <div className="menu-content">
          {path === "/menu" && <Burgers burgers={this.state.burgers} />}
          {path === "/menu/drinks" && <Drinks drinks={this.state.drinks} />}
          {path === "/menu/chips" && <Chips chips={this.state.chips} />}
          {path === "/menu/kids" && <Kids kids={this.state.kids} />}
        </div>
      </div>
    );
  }
}
