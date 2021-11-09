import * as Plant from "../src/js/Plant.js";
import * as State from '../src/js/State.js';

describe("Plant", () => {
  beforeEach(() => {

  });

  test("stateControl with no arguments should return an empty object.", () => {
    expect(State.stateControl()).toEqual({});
  });

  // test('ChangeState returns function that changes the state of something')

  test("feed function increase soil value of plant", () => {
    const result = State.stateControl(Plant.feed);
    expect(result.soil).toEqual(1);
  });
});
