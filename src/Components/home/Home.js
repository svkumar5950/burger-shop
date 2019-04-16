import React from "react";
import { CSSTransition } from "react-transition-group";

function Home() {
  return (
    <CSSTransition in={true} appear={true} timeout={600} classNames="home-page">
      <div className="app-home">
        <div className="home-text">
          <h1> Delicious, Tasty Burgers </h1>
          <p>
            With addon chips and drinks, go no where....
            <br />
            Just let these leaves jump off the brush By now you should be quite
            happy about what's happening here.
          </p>
        </div>
        <div className="home-img">
          <img src="./assets/burger-home.jpg" alt="Delicious Burger" />
        </div>
      </div>
    </CSSTransition>
  );
}

export default Home;
