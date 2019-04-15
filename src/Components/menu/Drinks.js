import React from "react";

function Drinks(props) {
  const {
    drinks: { image, heading }
  } = props;
  return (
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
  );
}

export default Drinks;
