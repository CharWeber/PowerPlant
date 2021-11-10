import $ from "jquery";
import "bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import "./css/styles.css";
import * as Plant from "./js/Plant.js";
import * as State from "./js/State.js";

$(document).ready(function () {
  let plantArray = [];
  $("#new-plant").submit(function () {
    event.preventDefault();
    const inputName = $('#name').val();
    plantArray.push({});
    plantArray[plantArray.length - 1] = State.stateControl(Plant.resetPlant);
    plantArray[plantArray.length - 1] = State.stateControl(Plant.assignName(inputName));

    $(".plants").empty();
    for (let i = 0; i <= plantArray.length - 1; i++) {
      $(".plants").append(`
      <div class="plant" id="plant${i}">
      <div class="grow-buttons">
      <button class="btn-success" id="feed${i}">Add soil</button>
      <button class="btn-success" id="feed-solo${i}">Add a little soil</button>
      <button class="btn-primary" id="hydrate${i}">Add water</button>
      <button class="btn-primary" id="Super-Hydrate${i}">Add Brawndo</button>
      <button class="btn-warning" id="light${i}">Put it under a lamp</button>
      <button class="btn-warning" id="super-light${i}">Put it under a sun lamp</button>
      <button class="btn-dark" id="show-state${i}">Current Stats</button>
      </div>
      <h1>${plantArray[i].name}'s Values</h1>
      <h3>
      Soil:
      <div id="soil-value${i}">${plantArray[i].soil}</div>
      </h3>
      <h3>
      Water:
      <div id="water-value${i}">${plantArray[i].water}</div>
      </h3>
      <h3>
      Light:
      <div id="light-value${i}">${plantArray[i].light}</div>
      </h3>
      </div>
      `);
      $(`#feed${i}`).click(function () {
        plantArray[i] = State.stateControl(Plant.blueFood);
        $(`#soil-value${i}`).text(`${plantArray[i].soil}`);
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

      $(`#show-state${i}`).click(function () {
        // We just need to call stateControl() without arguments to see our current state.
        // plantArray[i] = State.stateControl();
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
