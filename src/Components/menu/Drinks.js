import React from "react";
import { CSSTransition } from "react-transition-group";
function Drinks(props) {
  const {
    drinks: { image, heading }
  } = props;
  return (
    <CSSTransition
      in={true}
      appear={true}
      timeout={500}
      classNames="menu-drinks"
    >
      <div className="menu-drinks">
        {image.map((img, i) => {
          return (
            <div className="drinks-items" key={i}>
              <img src={img} alt="Drinks" />
              <h2>{heading[i]}</h2>
            </div>
          );
        })}
      </div>
    </CSSTransition>
  );
}

export default Drinks;
