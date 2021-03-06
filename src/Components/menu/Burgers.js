import React from "react";
import { CSSTransition } from "react-transition-group";
function Burgers(props) {
  const {
    burgers: { image, heading }
  } = props;
  return (
    <CSSTransition
      in={true}
      appear={true}
      timeout={500}
      classNames="menu-burger"
    >
      <div className="menu-burger">
        {image.map((img, i) => {
          return (
            <div className="burger-items" key={i}>
              <img src={img} alt="Burgers" />
              <h2>{heading[i]}</h2>
              <p>
                A tree cannot be straight if it has a crooked trunk. The man who
                does the best job is the one who is happy at his job. Let's do
                that again.
              </p>
            </div>
          );
        })}
      </div>
    </CSSTransition>
  );
}

export default Burgers;
