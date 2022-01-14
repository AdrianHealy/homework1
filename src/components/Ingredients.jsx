import React from "react";

const Ingredients = ({ dish }) => {
  console.log(dish);
  return (
    <ol>
      <h2>{dish.name}</h2>
      <li>{dish.salt}</li>
      <li>{dish.peper}</li>
      <li>{dish.groats}</li>
    </ol>
  );
};

export default Ingredients;

/*
{dish.name}
*/
