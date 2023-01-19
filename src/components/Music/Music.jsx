import React from "react";

class Car {
  constructor(name) {
    this.brand = name;
  }
  present() {
    return "I have a " + this.brand;
  }
}
class Model extends Car {
  constructor(name, mod) {
    super(name);
    this.model = mod;
  }
  show() {
    return this.present() + " , and it is  " + this.model;
  }
}

const myArray = ["apple", "orange", "pear"];
const myArray2 = ["potatoes", "cucumber", "tomatoes"];
const CombinedArray = [...myArray, ...myArray2];

const numbers = [1, 2, 3, 4, 5, 6];
const [one, two, ...rest] = numbers;

const [, fruit2, fruit3] = myArray;

const myList = CombinedArray.map((item) => <li>{item}</li>);

const myCar = new Model("Fiat", "Panda");

const vehicleOne = {
  brand: "Ford",
  model: "Mustang",
  type: "car",
  year: 2021,
  color: "red",
};

const shoot = (a, b) => alert(b.type);

function MissedGoal() {
  return <h1>MISSED!</h1>;
}

function MadeGoal() {
  return <h1>Goal!</h1>;
}

function Goal(props) {
  const isGoal = props.isGoal;
  {
    isGoal && <MissedGoal />;
  }
  {
    !isGoal && <MadeGoal />;
  }
}

const Music = () => {
  return (
    <divP>
      <h1>{myCar.show()}</h1>
      <ul>{myList}</ul>
      <button onClick={(event) => shoot("Goal!", event)}>Shoot</button>
      <Goal isGoal={false} />
    </divP>
  );
};

const myVehicle = {
  brand: "Ford",
  model: "Mustang",
  color: "red",
};

const updateMyVehicle = {
  type: "car",
  year: 2021,
  color: "yellow",
};

const myUpdatedVehicle = { ...myVehicle, ...updateMyVehicle };

export default Music;
