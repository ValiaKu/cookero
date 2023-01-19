import React, { useState } from "react";

const News = () => {
  // const [brand, setBrand] = useState("Fiat");
  // const [color, setColor] = useState("Lemon Vanilla");
  // const [model, setModel] = useState("Panda");
  // const [year, setYear] = useState("2004");

  const [car, setCar] = useState({
    brand: "Citroen",
    color: "Olive",
    model: "Cactus",
    year: "2016",
  });

  const updateColor = () => {
    setCar((previousState) => {
      return { ...previousState, color: "firebrick" };
    });
  };
  return (
    <>
      <h1>My {car.brand}</h1>
      <p>
        It is a {car.color} {car.model} from {car.year}.
      </p>
      <button type='button' onClick={updateColor}>
        Blue
      </button>
    </>
  );
};

export default News;
