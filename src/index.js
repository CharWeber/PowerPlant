import $ from 'jquery';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './css/styles.css';
import * as Plant from './js/Plant.js';
import * as State from './js/State.js';


$(document).ready(function() {

// This function has side effects because we are using jQuery. Manipulating the DOM will always be a side effect. Note that we only use one of our functions to alter soil. You can easily add more.

  $('#feed').click(function() {
    const newState = State.stateControl(Plant.blueFood);
    $('#soil-value').text(`${newState.soil}`);
  });
  $('#feed-solo').click(function() {
    const newState = State.stateControl(Plant.feed);
    $('#soil-value').text(`${newState.soil}`);
  });
  $('#hydrate').click(function() {
    const newState = State.stateControl(Plant.hydrate);
    $('#water-value').text(`${newState.water}`);
  });
  $('#Super-Hydrate').click(function() {
    const newState = State.stateControl(Plant.superWater);
    $('#water-value').text(`${newState.water}`);
  });
  $('#light').click(function() {
    const newState = State.stateControl(Plant.light);
    $('#light-value').text(`${newState.light}`);
  });
  $('#super-light').click(function() {
    const newState = State.stateControl(Plant.superLight);
    $('#light-value').text(`${newState.light}`);
  });

// This function doesn't actually do anything useful in this application - it just demonstrates how we can "look" at the current state (which the DOM is holding anyway). However, students often do need the ability to see the current state without changing it so it's included here for reference.

  $('#show-state').click(function() {
    // We just need to call stateControl() without arguments to see our current state.
    const currentState = State.stateControl();
    $('#soil-value').text(`${currentState.soil}`);
    $('#water-value').text(`${currentState.water}`);
    $('#light-value').text(`${currentState.light}`);
  });
});