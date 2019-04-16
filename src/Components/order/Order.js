import React from "react";
import { CSSTransition } from "react-transition-group";
function Order() {
  return (
    <CSSTransition
      in={true}
      appear={true}
      timeout={800}
      classNames="about-page"
    >
      <div className="app-order">
        <img src="../assets/order-page.jpg" alt="Jumbotron of Burger" />
        <h1> For Reservation's & order's</h1>
        <div className="order-content">
          <div>
            <h2>
              <i className="fas fa-mobile" /> 445 256 897
            </h2>
          </div>
          <div>
            <h2>
              <i className="fas fa-at" /> tratburger@mail.com
            </h2>
          </div>
        </div>
      </div>
    </CSSTransition>
  );
}

export default Order;
