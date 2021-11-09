import * as Plant from "../src/js/Plant.js";
import * as State from '../src/js/State.js';

describe("Plant", () => {
  beforeEach(() => {
    State.stateControl(Plant.resetPlant)
  });

  test("stateControl with no arguments should return the current object.", () => {
    expect(State.stateControl()).toEqual({
        "light": 0,
        "soil": 0,
        "water": 0,
      });
  });

  // test('ChangeState returns function that changes the state of something')

  test("feed function increase soil value of plant", () => {
    const result = State.stateControl(Plant.feed);
    expect(result.soil).toEqual(1);
  });
  
  test("blueFood function increase soil value of plant", () => {
    const result = State.stateControl(Plant.blueFood);
    expect(result.soil).toEqual(5);
  });

  test("light function increase light value of plant", () => {
    const result = State.stateControl(Plant.light);
    expect(result.light).toEqual(1);
  });

  test("superLight function increase light value of plant", () => {
    const result = State.stateControl(Plant.superLight);
    expect(result.light).toEqual(5);
  });

  test("hydrate function increase water value of plant", () => {
    const result = State.stateControl(Plant.hydrate);
    expect(result.water).toEqual(1);
  });

  test("SuperWater function increase water value of plant", () => {
    const result = State.stateControl(Plant.superWater);
    expect(result.water).toEqual(5);
  });
});
