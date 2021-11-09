import $ from "jquery";
import "bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import "./css/styles.css";
import * as Plant from "./js/Plant.js";
import * as State from "./js/State.js";

$(document).ready(function () {
  let plantArray = [];
  $("#new-plant").click(function () {
    plantArray.push(State.stateControl(Plant.resetPlant));
    // This function has side effects because we are using jQuery. Manipulating the DOM will always be a side effect. Note that we only use one of our functions to alter soil. You can easily add more.
    
    for (let i = 0; i < plantArray.length - 1; i++) {
      $(".plants").html(`
      <div class="grow-buttons">
      <button class="btn-success" id="feed${i}">Add soil</button>
      <button class="btn-success" id="feed-solo${i}">Add a little soil</button>
      <button class="btn-primary" id="hydrate${i}">Add water</button>
      <button class="btn-primary" id="Super-Hydrate${i}">Add Brawndo</button>
      <button class="btn-warning" id="light${i}">Put it under a lamp</button>
      <button class="btn-warning" id="super-light${i}">Put it under a sun lamp</button>
      <button class="btn-dark" id="show-state${i}">Current Stats</button>
      </div>
      <h1>Your Plant's Values</h1>
      <h3>
      Soil:
      <div id="soil-value${i}">0</div>
      </h3>
      <h3>
      Water:
      <div id="water-value${i}">0</div>
      </h3>
      <h3>
      Light:
      <div id="light-value${i}">0</div>
      </h3>
      `);
      $(`#feed${i}`).click(function () {
        plantArray[i] = State.stateControl(Plant.blueFood);
        $("#soil-value").text(`${plantArray[i].soil}`);
      });
      $(`#feed-solo${i}`).click(function () {
        plantArray[i] = State.stateControl(Plant.feed);
        $(`#soil-value${i}`).text(`${plantArray[i].soil}`);
      });
      $(`#hydrate${i}`).click(function () {
        plantArray[i] = State.stateControl(Plant.hydrate);
        $(`#water-value${i}`).text(`${plantArray[i].water}`);
      });
      $(`#Super-Hydrate${i}`).click(function () {
        plantArray[i] = State.stateControl(Plant.superWater);
        $(`#water-value${i}`).text(`${plantArray[i].water}`);
      });
      $(`#light${i}`).click(function () {
        plantArray[i] = State.stateControl(Plant.light);
        $(`#light-value${i}`).text(`${plantArray[i].light}`);
      });
      $(`#super-light${i}`).click(function () {
        plantArray[i] = State.stateControl(Plant.superLight);
        $(`#light-value${i}`).text(`${plantArray[i].light}`);
      });
      
      // This function doesn't actually do anything useful in this application - it just demonstrates how we can "look" at the current state (which the DOM is holding anyway). However, students often do need the ability to see the current state without changing it so it's included here for reference.
      
      $(`#show-state${i}`).click(function () {
        // We just need to call stateControl() without arguments to see our current state.
        plantArray[i] = State.stateControl();
        $(`#soil-value${i}`).text(`${plantArray[i].soil}`);
        $(`#water-value${i}`).text(`${plantArray[i].water}`);
        $(`#light-value${i}`).text(`${plantArray[i].light}`);
      });
    }
  });
  });

//make array of plants Plants[]
//every time create plant is clicked, new object in array
//call on it like this in a foreach loop: Plants[0] = State.stateControl(Plant.superLight);
