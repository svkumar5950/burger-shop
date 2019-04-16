import React from "react";
import { CSSTransition } from "react-transition-group";
function Kids(props) {
  const {
    kids: { image, heading }
  } = props;
  return (
    <CSSTransition in={true} appear={true} timeout={500} classNames="menu-kids">
      <div className="menu-kids">
        {image.map((img, i) => {
          return (
            <div className="kids-items" key={i}>
              <img src={img} alt="Kids items" />
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

export default Kids;
