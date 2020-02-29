const catches = [];
const misses = [];

let sundayCatches = 0;
let sundayMisses = 0;
let mondayCatches = 0;
let mondayMisses = 0;
let tuesdayCatches = 0;
let tuesdayMisses = 0;
let wednesdayCatches = 0;
let wednesdayMisses = 0;
let thursdayCatches =0;
let thursdayMisses = 0;
let fridayCatches = 0;
let fridayMisses = 0;
let saturdayCatches = 0;
let saturdayMisses = 0;

let catchData = [sundayCatches, mondayCatches, tuesdayCatches, wednesdayCatches, thursdayCatches, fridayCatches, saturdayCatches];
let missData = [sundayMisses, mondayMisses, tuesdayMisses, wednesdayMisses, thursdayMisses, fridayMisses, saturdayMisses];

const catchList = document.getElementById('catch-list');
const missList = document.getElementById('miss-list');
const day = document.getElementById('day-catch');
const dayMiss = document.getElementById('day-miss');
const type = document.getElementById('type');
const typeMiss = document.getElementById('type-miss');
const time = document.getElementById('time-catch');
const timeMiss = document.getElementById('time-miss');
const cue = document.getElementById('cue');
const cueMiss =  document.getElementById('cue-miss');
const submitCatch = document.getElementById('submit');
const submitMiss = document.getElementById('submit-miss');
const catchTable = document.getElementById('catch-table');
const missTable = document.getElementById('miss-table');

submitCatch.addEventListener('click', updateCatch);
submitCatch.addEventListener('click', updateChart);
submitMiss.addEventListener('click', updateMiss);
submitMiss.addEventListener('click', updateChart)

function updateCatch() {
  const catchDay = day.value;
  const catchType = type.value;
  const catchTime = time.value;
  const catchCue = cue.value;
  const item = catchDay + ' ' + catchType+' '+catchTime + ' '+ catchCue;

  catches.push(item);

  switch (catchDay){
    case 'Sunday':
      index = 0;
      sundayCatches ++;
      catchData[index] = sundayCatches;
    break;
    case 'Monday':
      index=1;
      mondayCatches ++;
      catchData[index] = mondayCatches;
    break;
    case 'Tuesday':
      index=2;
      tuesdayCatches ++;
      catchData[index] = tuesdayCatches;
    break;
    case 'Wednesday':
      index=3;
      wednesdayCatches ++;
      catchData[index] = wednesdayCatches;
    break;
    case 'Thursday':
      index=4;
      thursdayCatches ++;
      catchData[index] = thursdayCatches;
    break;
    case 'Friday':
      index=5;
      fridayCatches ++;
      catchData[index] = fridayCatches;
    break;
    case 'Saturday':
      index=6;
      saturdayCatches ++;
      catchData[index] = saturdayCatches;
    break;
  }
 
  const catchRow = document.createElement('tr');
  catchRow.innerHTML = `
  <td>${catchDay}</td>
  <td>${catchType}</td>
  <td>${catchTime}</td>
  <td>${catchCue}</td>`;
  catchTable.appendChild(catchRow);
  // localStorage.setItem('catches', JSON.stringify(catches));
};

function updateMiss() {
  const wMiss = dayMiss.value;
  const xMiss = typeMiss.value;
  const yMiss = timeMiss.value;
  const zMiss = cueMiss.value;
  const itemMiss = wMiss +' '+xMiss +' '+yMiss+ ' '+ zMiss;
  misses.push(itemMiss);
  
  switch (wMiss){
    case 'Sunday':
      index = 0;
      sundayMisses ++;
      missData[index] = sundayMisses;
    break;
    case 'Monday':
      index=1;
      mondayMisses ++;
      missData[index] = mondayMisses;
    break;
    case 'Tuesday':
      index=2;
      tuesdayMisses ++;
      missData[index] = tuesdayMisses;
    break;
    case 'Wednesday':
      index=3;
      wednesdayMisses ++;
      missData[index] = wednesdayMisses;
    break;
    case 'Thursday':
      index=4;
      thursdayMisses ++;
      missData[index] = thursdayMisses;
    break;
    case 'Friday':
      index=5;
      fridayMisses ++;
      missData[index] = fridayMisses;
    break;
    case 'Saturday':
      index=6;
      saturdayMisses ++;
      missData[index] = saturdayMisses;
    break;
  }
  const missRow = document.createElement('tr');
  missRow.innerHTML = `
  <td>${wMiss}</td>
  <td>${xMiss}</td>
  <td>${yMiss}</td>
  <td>${zMiss}</td>`;
  missTable.appendChild(missRow);
  
  // localStorage.setItem('catches', JSON.stringify(catches));
};
 

function updateChart(){
  const chart = document.getElementById('chart');

  var trace1 = {
    name: 'Catches',
    type: 'bar',
    x: ['Sunday','Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'],
    y: catchData,
    marker: {
        color: '#C8A2C8',
        line: {
            width: 2.5
        }}};

  var trace2 = {
    name: 'Misses',
    type: 'bar',
    x: ['Sunday','Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'],
    y: missData,
    marker: {
        color: 'orange',
        line: {
            width: 2.5
        }}};
  
  var data = [ trace1, trace2 ];
  
  var layout = { 
    title: 'Catches vs Misses',
    font: {size: 18}
  };
  
  var config = {responsive: true}
  
  Plotly.newPlot('chart', data, layout, config );
}


