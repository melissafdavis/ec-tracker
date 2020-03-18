//DOM Elements
const peeCatch = document.getElementById('pee');
const peeMiss = document.getElementById('pee-miss');
const poopCatch = document.getElementById('poop');
const poopMiss = document.getElementById('poop-miss');
const bothCatch = document.getElementById('both');
const bothMiss = document.getElementById('both-miss');
const dry = document.getElementById('dry');
const empty = document.getElementById('empty');
const notesInput =document.querySelector('.notes');
const submitButton = document.querySelector('.submit');
const timeline = document.querySelector('.timeline-background');
const datePicker = document.querySelector('.datepicker');
const timePicker = document.querySelector('.timepicker');

//Global variables
let event;
let events = JSON.parse(localStorage.getItem('events')) || [];
let notes = '';
let date;
let datesArray = JSON.parse(localStorage.getItem('dates')) || [];
let dates;
let time;
let lastEvent;

let timelineInner = JSON.parse(localStorage.getItem('timeline')) ||'';

let handleEventsArray = JSON.parse(localStorage.getItem('handle-events-array')) || [];

let catches = JSON.parse(localStorage.getItem('catches')) ||0;
let misses = JSON.parse(localStorage.getItem('misses')) ||0;

let catchesArray = JSON.parse(localStorage.getItem('catches')) || [];;
let instanceDate;
let instanceTime;

let catchData = [catches, 2, 3, 4, 5, 6, 7];
let missData = [misses, 2, 3, 4, 5, 6, 7];

//Event Listeners
peeCatch.addEventListener('click', handleEvent);
peeCatch.addEventListener('click', handleCatches);
peeMiss.addEventListener('click', handleEvent);
peeMiss.addEventListener('click', handleMisses);
poopCatch.addEventListener('click', handleEvent);
poopCatch.addEventListener('click', handleCatches);
poopMiss.addEventListener('click', handleEvent);
poopMiss.addEventListener('click', handleMisses);
bothCatch.addEventListener('click', handleEvent);
bothCatch.addEventListener('click', handleCatches);
bothMiss.addEventListener('click', handleEvent);
bothMiss.addEventListener('click', handleMisses);
dry.addEventListener('click', handleEvent);
empty.addEventListener('click', handleEvent);
submitButton.addEventListener('click', handleDate);
submitButton.addEventListener('click', timelineAdd);
datePicker.addEventListener('click', openDatePicker);
timePicker.addEventListener('click', openTimePicker);
document.addEventListener('DOMContentLoaded', function() {
  var elem = document.querySelector('.datepicker');
  instanceDate = M.Datepicker.init(elem);
});
document.addEventListener('DOMContentLoaded', function() {
  var elem = document.querySelector('.timepicker');
  instanceTime = M.Timepicker.init(elem);
});

//Functions

updateChart();
recreateTimeline();

dates = removeDuplicates(datesArray);

function recreateTimeline(){
  timeline.innerHTML = timelineInner;
}

function openDatePicker(){
  instanceDate.open();
}

function openTimePicker(){
  instanceTime.open();
}



function handleDate(){

  
  date = datePicker.value;
  time = timePicker.value;
  dates.push(date);
  dates.sort();
  
  if (dates.length === 8){
        dates.shift(dates.length[0]);
      }
  localStorage.setItem('dates', JSON.stringify(dates));
  // console.log(date);
  // console.log(time);
  // console.log(datesArray);
}

function removeDuplicates(array) {
  return array.filter((a, b) => array.indexOf(a) === b)
};

function handleEvent(){
  event = this.innerText;
}

function handleCatches(){
  catches ++;
  localStorage.setItem('catches',JSON.stringify(catches) )
  console.log(catches);
}

function handleMisses(){
  misses ++;
  localStorage.setItem('misses',JSON.stringify(misses) )
  console.log(misses);
}

function timelineAdd (){
  notes = notesInput.value;

  const dateline = document.createElement('p');
  dateline.className = date;
  dateline.innerText = date;
  
  const newEvent = document.createElement('div');
  newEvent.innerText = time + " " + event + ' ' + notes;
  
  if (date === lastEvent){
    timeline.appendChild(newEvent);
    
  }else{
    timeline.appendChild(dateline);
    timeline.appendChild(newEvent);
    // var catches`${date}` = 'hello';
    // console.log(catches`${date}` );
    
  }

  timelineInner = timeline.innerHTML;
  events.push({date: date, time: time, event: event, notes: notes, catches: catches, misses: misses});
  localStorage.setItem('events', JSON.stringify(events));
  localStorage.setItem('timeline', JSON.stringify(timelineInner));

  lastEvent = date;
  notesInput.value = '';
}

function updateChart(){
  const chart = document.getElementById('chart');

  var trace1 = {
    name: 'Catches',
    type: 'bar',
    x: ['Day 1', 'Day 2', 'Day 3', 'Day 4', 'Day 5', 'Day 6', 'Day 7'],
    y: [0, 0, 0, 0, 0, 0, 0],
    marker: {
        color: '#4db6ac',
        line: {
            width: 1
        }}};

  var trace2 = {
    name: 'Misses',
    type: 'bar',
    x: ['Day 1', 'Day 2', 'Day 3', 'Day 4', 'Day 5', 'Day 6', 'Day 7'],
    y: [0, 0, 0, 0, 0, 0, 0],
    marker: {
        color: '#ff8a65',
        line: {
            width: 1
        }}};
  
  var data = [ trace1, trace2];
  
  var layout = { 
    title: 'Cues: Catch vs. Miss',
    font: {size: 14}
  };
  
  var config = {responsive: true}
  
  Plotly.newPlot('chart', data, layout, config );
}