import * as State from "./State.js";

export const feed = State.changeState("soil")(1);
export const blueFood = State.changeState("soil")(5);

export const hydrate = State.changeState("water")(1);
export const superWater = State.changeState("water")(5);

export const light = State.changeState("light")(1);
export const superLight = State.changeState("light")(5);

export const resetPlant = State.resetAllState("name", "soil", "water", "light");

// export const assignName2 = State.changeStateString("name")(name);
// plant.assignName2(inputName);


export const assignName = (name) => {
  State.changeStateString("name")(name);
}



