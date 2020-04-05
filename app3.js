const datePicker = document.querySelector('.datepicker');
let instanceDate;
const timePicker = document.querySelector('.timepicker');
let instanceTime;

//buttons
const peeCatch = document.getElementById('pee');
const poopCatch = document.getElementById('poop');
const bothCatch = document.getElementById('both');
const peeMiss = document.getElementById('pee-miss');
const poopMiss = document.getElementById('poop-miss');
const bothMiss = document.getElementById('both-miss');
const dry = document.getElementById('dry');
const empty = document.getElementById('empty');
const notesInput =document.querySelector('.notes');
const submitButton = document.getElementById('main-submit');

//timeline 
const timeline = document.querySelector('.timeline');

let time;
let notes;
let result;
let currentEvent;

const eventsArray = JSON.parse(localStorage.getItem('eventsArray')) || [];

//event listeners
document.addEventListener('DOMContentLoaded', function() {var elem = document.querySelector('.datepicker');
  instanceDate = M.Datepicker.init(elem);
});
document.addEventListener('DOMContentLoaded', function() {var elem = document.querySelector('.timepicker');
  instanceTime = M.Timepicker.init(elem);
});
peeCatch.addEventListener('click', handleResult);
poopCatch.addEventListener('click', handleResult);
bothCatch.addEventListener('click', handleResult);
peeMiss.addEventListener('click', handleResult);
poopMiss.addEventListener('click', handleResult);
bothMiss.addEventListener('click', handleResult);
dry.addEventListener('click', handleResult);
empty.addEventListener('click', handleResult);

timePicker.addEventListener('click', openTimePicker);

// submitButton.addEventListener('click', updateChart);
submitButton.addEventListener('click', addEntry);
submitButton.addEventListener('click', buildTimeline);

//functions
buildTimeline();
// updateChart();

function openDatePicker(){
  instanceDate.open();
}

function openTimePicker(){
  instanceTime.open();
}

function handleResult(){
      result = this.dataset.result;
      event = this.innerText;
  }

function addEntry(){
  time = timePicker.value;
  notes = notesInput.value;
  currentEvent = {date: datePicker.value, time: time, event: event, result: result, notes: notes};
  eventsArray.push(currentEvent);
  //clear timepicker
  timePicker.value = '';

  localStorage.setItem('eventsArray', JSON.stringify(eventsArray));
}

function buildTimeline(){
  timeline.innerText = '';
  eventsArray.forEach(event => {
    newEvent = document.createElement('p');
    newEvent.style.color ="black";
    const textnode = document.createTextNode(`${event.date} ${event.time} ${event.event} ${event.notes}`);
    newEvent.appendChild(textnode);
    timeline.appendChild(newEvent);
  })
}



// function updateChart(){
//   const chart = document.getElementById('chart');

//   var trace1 = {
//     name: 'Catches',
//     type: 'bar',
//     x: ['sunday', 'monday','tuesday', 'wednesday', 'thursday', 'friday', 'saturday'],
//     y: [1, 2, 3, 4, 5, 6, 7],
//     marker: {
//         color: '#4db6ac',
//         line: {
//             width: 1
//         }}};

//   var trace2 = {
//     name: 'Misses',
//     type: 'bar',
//     x: ['sunday', 'monday','tuesday', 'wednesday', 'thursday', 'friday', 'saturday'],
//     y: [7, 6, 5, 4, 3, 2, 1],
//     marker: {
//         color: '#ff8a65',
//         line: {
//             width: 1
//         }}};
  
//   var data = [ trace1, trace2];
  
//   var layout = { 
//     title: 'Cues: Catch vs. Miss',
//     font: {size: 14}
//   };
  
//   var config = {responsive: true}
  
//   Plotly.newPlot('chart', data, layout, config );
// }
