//DOM Elements

const firstDay = document.getElementById('date1');
const datePicker = document.querySelector('.datepicker');
const dateSubmit = document.getElementById('date-submit');

//date buttons
const day1 = document.getElementById('day1');
const day2 = document.getElementById('day2');
const day3= document.getElementById('day3');
const day4 = document.getElementById('day4');
const day5 = document.getElementById('day5');
const day6 = document.getElementById('day6');
const day7 = document.getElementById('day7');

//time picker
const timePicker = document.querySelector('.timepicker');

//event buttons
const peeCatch = document.getElementById('pee');
const poopCatch = document.getElementById('poop');
const bothCatch = document.getElementById('both');
const peeMiss = document.getElementById('pee-miss');
const poopMiss = document.getElementById('poop-miss');
const bothMiss = document.getElementById('both-miss');
const dry = document.getElementById('dry');
const empty = document.getElementById('empty');

//notes button
const notesInput =document.querySelector('.notes');

//submit button
const submitButton = document.getElementById('main-submit');

//timeline 
const timeline = document.querySelector('.timeline');
const dayOneTL = document.getElementById('day1-tl');
const dayTwoTL = document.getElementById('day2-tl');
const dayThreeTL = document.getElementById('day3-tl');
const dayFourTL = document.getElementById('day4-tl');
const dayFiveTL = document.getElementById('day5-tl');
const daySixTL = document.getElementById('day6-tl');
const daySevenTL = document.getElementById('day7-tl');

//global variables
let firstDate = JSON.parse(localStorage.getItem('firstDate')) ||'Day 1';
let secondDate = JSON.parse(localStorage.getItem('secondDate')) ||'Day 2';
let thirdDate = JSON.parse(localStorage.getItem('thirdDate')) ||'Day 3';
let fourthDate = JSON.parse(localStorage.getItem('fourthDate')) ||'Day 4';
let fifthDate = JSON.parse(localStorage.getItem('fifthDate')) ||'Day 5';
let sixthDate = JSON.parse(localStorage.getItem('sixthDate')) ||'Day 6';
let seventhDate = JSON.parse(localStorage.getItem('seventhDate')) ||'Day 7';

let dates = [firstDate, secondDate, thirdDate, fourthDate, fifthDate, sixthDate, seventhDate];

let currentDay;
let currentArray;

let time;
let notes;
let instanceTime;
let instanceDate;
let currentEvent;

let dayOneArray= [];
let dayTwoArray= [];
let dayThreeArray= [];
let dayFourArray= [];
let dayFiveArray= [];
let daySixArray= [];
let daySevenArray= [];

let timelineInner= JSON.parse(localStorage.getItem('timeline')) ||'';;

let currentCatches = 0;
let catchesDayOne = 0;
let catchesDayTwo = 0;
let catchesDayThree = 0;
let catchesDayFour = 0;
let catchesDayFive = 0;
let catchesDaySix = 0;
let catchesDaySeven = 0;

let currentMisses = 0;
let missesDayOne = 0;
let missesDayTwo = 0;
let missesDayThree = 0;
let missesDayFour = 0;
let missesDayFive = 0;
let missesDaySix = 0;
let missesDaySeven = 0;

let otherDayOne = JSON.parse(localStorage.getItem('otherDayOne')) ||0;

let currentTracker;
let trackerDayOne = 'trackerDayOne';
let trackerDayTwo = 'trackerDayTwo';
let trackerDayThree = 'trackerDayThree';
let trackerDayFour = 'trackerDayFour';
let trackerDayFive = 'trackerDayFive';
let trackerDaySix = 'trackerDaySix';
let trackerDaySeven = 'trackerDaySeven';

//event listeners
document.addEventListener('DOMContentLoaded', function() {var elem = document.querySelector('.datepicker');
  instanceDate = M.Datepicker.init(elem);
});
document.addEventListener('DOMContentLoaded', function() {var elem = document.querySelector('.timepicker');
  instanceTime = M.Timepicker.init(elem);
});

day1.addEventListener('click', getCurrentDay);
day2.addEventListener('click', getCurrentDay);
day3.addEventListener('click', getCurrentDay);
day4.addEventListener('click', getCurrentDay);
day5.addEventListener('click', getCurrentDay);
day6.addEventListener('click', getCurrentDay);
day7.addEventListener('click', getCurrentDay);

dateSubmit.addEventListener('click', handleDates);
// dateSubmit.addEventListener('click', dateButtonNames);
// dateSubmit.addEventListener('click', refreshTimeline);



peeCatch.addEventListener('click', handleCatch);
peeCatch.addEventListener('click', handleEvent);
poopCatch.addEventListener('click', handleCatch);
poopCatch.addEventListener('click', handleEvent);
bothCatch.addEventListener('click', handleCatch);
bothCatch.addEventListener('click', handleEvent);

peeMiss.addEventListener('click', handleMiss);
peeMiss.addEventListener('click', handleEvent);
poopMiss.addEventListener('click', handleMiss);
poopMiss.addEventListener('click', handleEvent);
bothMiss.addEventListener('click', handleMiss);
bothMiss.addEventListener('click', handleEvent);

dry.addEventListener('click', handleOther);
dry.addEventListener('click', handleEvent);
empty.addEventListener('click', handleOther);
empty.addEventListener('click', handleEvent);

timePicker.addEventListener('click', openTimePicker);

submitButton.addEventListener('click', updateChart);
submitButton.addEventListener('click', updateEventArrays);
submitButton.addEventListener('click', addToTimeline);



//functions
// dateButtonNames();
// refreshTimeline();
updateChart();

function openDatePicker(){
  instanceDate.open();
}

function openTimePicker(){
  instanceTime.open();
}

function handleDates(){
  firstDate = new Date(date1.value);
  var dd = firstDate.getDate();
  var mm = firstDate.getMonth()+1;
  var yyyy = firstDate.getFullYear();
  firstDate = mm+`/`+dd+`/`+yyyy;
  dates[0] = firstDate;
  localStorage.setItem('dates', JSON.stringify(dates));
  dayOneTL.innerText = firstDate;
  localStorage.setItem('firstDate', JSON.stringify(firstDate));

  var secondDate = new Date(firstDate);
  var dd = secondDate.getDate()+1;
  var mm = secondDate.getMonth()+1;
  var yyyy = secondDate.getFullYear();
  secondDate = mm+`/`+dd+`/`+yyyy;
  dates[1]= secondDate;
  localStorage.setItem('dates', JSON.stringify(dates));
  localStorage.setItem('secondDate', JSON.stringify(secondDate));
  

  var thirdDate = new Date(secondDate);
  var dd = thirdDate.getDate()+1;
  var mm = thirdDate.getMonth()+1;
  var yyyy = thirdDate.getFullYear();
  thirdDate = mm+`/`+dd+`/`+yyyy;
  dates[2]= thirdDate;
  localStorage.setItem('dates', JSON.stringify(dates));
  localStorage.setItem('thirdDate', JSON.stringify(thirdDate));

  var fourthDate = new Date(thirdDate);
  var dd = fourthDate.getDate()+1;
  var mm = fourthDate.getMonth()+1;
  var yyyy = fourthDate.getFullYear();
  fourthDate = mm+`/`+dd+`/`+yyyy;
  dates[3]= fourthDate;
  localStorage.setItem('dates', JSON.stringify(dates));
  localStorage.setItem('fourthDate', JSON.stringify(fourthDate));

  var fifthDate = new Date(fourthDate);
  var dd = fifthDate.getDate()+1;
  var mm = fifthDate.getMonth()+1;
  var yyyy = fifthDate.getFullYear();
  fifthDate = mm+`/`+dd+`/`+yyyy;
  dates[4]= fifthDate;
  localStorage.setItem('dates', JSON.stringify(dates));
  localStorage.setItem('fifthDate', JSON.stringify(fifthDate));

  var sixthDate = new Date(fifthDate);
  var dd = sixthDate.getDate()+1;
  var mm = sixthDate.getMonth()+1;
  var yyyy = sixthDate.getFullYear();
  sixthDate = mm+`/`+dd+`/`+yyyy;
  dates[5]= sixthDate;
  localStorage.setItem('dates', JSON.stringify(dates));
  localStorage.setItem('sixthDate', JSON.stringify(sixthDate));

  var seventhDate = new Date(sixthDate);
  var dd = seventhDate.getDate()+1;
  var mm = seventhDate.getMonth()+1;
  var yyyy = seventhDate.getFullYear();
  seventhDate = mm+`/`+dd+`/`+yyyy;
  dates[6]= seventhDate;
  localStorage.setItem('dates', JSON.stringify(dates));
  localStorage.setItem('seventhDate', JSON.stringify(seventhDate));
}

function getCurrentDay(){
  currentDay = this.id;
}

// function dateButtonNames(){
//   day1.innerText = firstDate;
//   day2.innerText = secondDate;
//   day3.innerText = thirdDate;
//   day4.innerText = fourthDate;
//   day5.innerText = fifthDate;
//   day6.innerText = sixthDate;
//   day7.innerText = seventhDate;
// }

function handleTime(){
  time = timePicker.value;
}

function handleCatch(){
  switch(currentDay) {
    case 'day1':
      currentCatches = catchesDayOne;
      break;
    case 'day2':
      currentCatches = catchesDayTwo;
      break;
      case 'day3':
        currentCatches = catchesDayThree;
      break;
      case 'day4':
        currentCatches =catchesDayFour;
      break;
      case 'day5':
        currentCatches =catchesDayFive;
      break;
      case 'day6':
        currentCatches =catchesDaySix;
      break;
      case 'day7':
        currentCatches =catchesDaySeven;
      break;
    default:
      // code block
  }
  console.log(`handleCatch: ${currentCatches}`);
}

function handleMiss(){
  console.log(this.innerText);
  currentEvent = this.innerText;
  missesDayOne++;
  localStorage.setItem('missesDayOne',JSON.stringify(missesDayOne) );
  // console.log(missesDayOne);
}

function handleOther(){
  currentEvent = this.innerText;
  otherDayOne++;
  localStorage.setItem('otherDayOne', JSON.stringify(otherDayOne));
  // console.log(otherDayOne);
}

function handleEvent(){
  event = this.innerText;
}

function updateEventArrays(){
  switch(currentDay) {
    case 'day1':
      currentArray = dayOneArray;
      currentTL = dayOneTL;
      currentCatches = catchesDayOne;
      currentTracker = trackerDayOne;
      break;
    case 'day2':
      currentArray = dayTwoArray;
      currentTL = dayTwoTL;
      currentCatches = catchesDayTwo;
      currentTracker = trackerDayTwo;
      break;
      case 'day3':
        currentArray = dayThreeArray;
        currentTL = dayThreeTL;
        currentCatches = catchesDayThree;
        currentTracker = trackerDayThree;
      break;
      case 'day4':
        currentArray = dayFourArray;
        currentTL = dayFourTL;
        currentCatches = catchesDayFour;
        currentTracker = trackerDayFour;
      break;
      case 'day5':
        currentArray = dayFiveArray;
        currentTL = dayFiveTL;
        currentCatches = catchesDayFive;
        currentTracker = trackerDayFive;
      break;
      case 'day6':
        currentArray = daySixArray;
        currentTL = daySixTL;
        currentCatches = catchesDaySix;
        currentTracker = trackerDaySix;
      break;
      case 'day7':
        currentArray = daySevenArray;
        currentTL = daySevenTL;
        currentCatches = catchesDaySeven;
        currentTracker = trackerDaySeven;
      break;
    default:
      // code block
  }

  notes = notesInput.value;
  time = timePicker.value;
  currentArray.push({notes:notes, time:time, event:currentEvent});
}


function addToTimeline(){
newEvent = document.createElement('p');
newEvent.style.color ="black";
const textnode = document.createTextNode(`${time} ${event} ${notes}`);
newEvent.appendChild(textnode);
currentTL.appendChild(newEvent);
//???if catch increment currentCatches, if miss increment currentMisses???
console.log(`current catches passed into addToTimeline: ${currentCatches}`);

console.log(currentTracker);



  

  // timelineInner = timeline.innerHTML;
  // dayOneArray.push({time: time, event: currentEvent, notes: notes});
  // localStorage.setItem('dayOneArray', JSON.stringify(dayOneArray));
  // localStorage.setItem('timeline', JSON.stringify(timelineInner));
}

// function refreshTimeline(){

//   dayOneTL.innerText = firstDate;
//   dayTwoTL.innerText = secondDate;
//   dayThreeTL.innerText= thirdDate;
//   dayFourTL.innerText= fourthDate;
//   dayFiveTL.innerText = fifthDate;
//   daySixTL.innerText = sixthDate;
//   daySevenTL.innerText = seventhDate;

//   timeline.innerHTML = timelineInner;
// }


function updateChart(){
  const chart = document.getElementById('chart');

  var trace1 = {
    name: 'Catches',
    type: 'bar',
    x: dates,
    y: [1, 2, 3, 4, 5, 6, 7],
    marker: {
        color: '#4db6ac',
        line: {
            width: 1
        }}};

  var trace2 = {
    name: 'Misses',
    type: 'bar',
    x: dates,
    y: [7, 6, 5, 4, 3, 2, 1],
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
