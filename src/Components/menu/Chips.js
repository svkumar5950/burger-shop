import React from "react";

function Chips(props) {
  const {
    chips: { image, heading }
  } = props;
  return (
    <div className="menu-chips">
      {image.map((img, i) => {
        return (
          <div className="chips-items" key={i}>
            <img src={img} alt="Fries" />
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
  );
}

export default Chips;
