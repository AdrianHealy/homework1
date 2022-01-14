import React, { useEffect, useState } from "react";
import Ingredients from "./Ingredients";

const Receipts = () => {
  const [meal, setMeal] = useState();

  const arrOfIngredients = [
    {
      name: "Chicken",
      salt: "Salt",
      peper: "Peper",
      groats: "Rise",
    },
    {
      name: "Beef",
      salt: "Salt",
      peper: "Peper",
      groats: "Rise",
      image: "http://www.kemmvl.ru/images/site_image/kura57.jpg",
    },
    {
      name: "Egg",
      salt: "Salt",
      peper: "Peper",
      groats: "Rise",
    },
  ];

  useEffect(() => {
    console.log(meal);
  }, [meal]);

  return (
    <div>
      <p>Choose your favorite dish:</p>
      <form
        onChange={(e) => {
          setMeal(e.target.value);
        }}
      >
        <input type="radio" id="choice1" name="contact" value="Chicken" />
        <label>Chicken</label>
        <input type="radio" id="choice2" name="contact" value="Beef" />
        <label>Beef</label>
        <input type="radio" id="choice3" name="contact" value="Egg" />
        <label>Egg</label>
      </form>
      {meal && (
        <Ingredients
          dish={arrOfIngredients.find((item) => item.name === meal)}
        />
      )}
    </div>
  );
};

export default Receipts;
