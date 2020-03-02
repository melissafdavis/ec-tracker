// const catches = [];
const misses = [];

const catchesObject = {
  day: '',
  type: '',
  time: '',
  cue: ''
};

catchesObjectArray = JSON.parse(localStorage.getItem('catchesObjectArray')) || [];

const missesObject = {
  day: '',
  type: '',
  time: '',
  cue: ''
};

missesObjectArray = JSON.parse(localStorage.getItem('missesObjectArray')) || [];

let sundayCatches = JSON.parse(localStorage.getItem('sundayCatches')) || 0;
let sundayMisses = JSON.parse(localStorage.getItem('sundayMisses')) || 0;
let mondayCatches = JSON.parse(localStorage.getItem('mondayCatches')) || 0;
let mondayMisses = JSON.parse(localStorage.getItem('mondayMisses')) || 0;
let tuesdayCatches = JSON.parse(localStorage.getItem('tuesdayCatches')) || 0;
let tuesdayMisses = JSON.parse(localStorage.getItem('tuesdayMisses')) || 0;
let wednesdayCatches = JSON.parse(localStorage.getItem('wednesdayCatches')) || 0;
let wednesdayMisses = JSON.parse(localStorage.getItem('wednesdayMisses')) || 0;
let thursdayCatches =JSON.parse(localStorage.getItem('thursdayCatches')) || 0;
let thursdayMisses = JSON.parse(localStorage.getItem('thursdayMisses')) || 0;
let fridayCatches = JSON.parse(localStorage.getItem('fridayCatches')) || 0;
let fridayMisses = JSON.parse(localStorage.getItem('fridayMisses')) || 0;
let saturdayCatches = JSON.parse(localStorage.getItem('saturdayCatches')) || 0;
let saturdayMisses = JSON.parse(localStorage.getItem('saturdayMisses')) || 0;

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

createTable();
updateChart();



function updateCatch() {
  const catchDay = day.value;
  const catchType = type.value;
  const catchTime = time.value;
  const catchCue = cue.value;
  // const item = [catchDay,catchType,catchTime, catchCue];

  catchesObject.day = catchDay;
  catchesObject.type = catchType;
  catchesObject.time = catchTime;
  catchesObject.cue   = catchCue;
 
  catchesObjectArray.push(catchesObject);
  localStorage.setItem('catchesObjectArray', JSON.stringify(catchesObjectArray));


  // catches.push(item);
  // localStorage.setItem('catches', JSON.stringify(catches));
  
  //updates graph data when submit button clicked
  switch (catchDay){
    case 'Sunday':
      index = 0;
      sundayCatches ++;
      catchData[index] = sundayCatches;
      localStorage.setItem('sundayCatches', sundayCatches);
    break;
    case 'Monday':
      index=1;
      mondayCatches ++;
      catchData[index] = mondayCatches;
      localStorage.setItem('mondayCatches', mondayCatches);
    break;
    case 'Tuesday':
      index=2;
      tuesdayCatches ++;
      catchData[index] = tuesdayCatches;
      localStorage.setItem('tuesdayCatches', tuesdayCatches);
    break;
    case 'Wednesday':
      index=3;
      wednesdayCatches ++;
      catchData[index] = wednesdayCatches;
      localStorage.setItem('wednesdayCatches', wednesdayCatches);
    break;
    case 'Thursday':
      index=4;
      thursdayCatches ++;
      catchData[index] = thursdayCatches;
      localStorage.setItem('thursdayCatches', thursdayCatches);
    break;
    case 'Friday':
      index=5;
      fridayCatches ++;
      catchData[index] = fridayCatches;
      localStorage.setItem('fridayCatches', fridayCatches);
    break;
    case 'Saturday':
      index=6;
      saturdayCatches ++;
      catchData[index] = saturdayCatches;
      localStorage.setItem('saturdayCatches', saturdayCatches);
    break;
  }

 //creates a new row when submit button clicked
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


  missesObject.day = wMiss;
  missesObject.type = xMiss;
  missesObject.time = yMiss;
  missesObject.cue   = zMiss;
 
  missesObjectArray.push(missesObject);
  localStorage.setItem('missesObjectArray', JSON.stringify(missesObjectArray));
  
  switch (wMiss){
    case 'Sunday':
      index = 0;
      sundayMisses ++;
      missData[index] = sundayMisses;
      localStorage.setItem('sundayMisses', sundayMisses);
    break;
    case 'Monday':
      index=1;
      mondayMisses ++;
      missData[index] = mondayMisses;
      localStorage.setItem('mondayMisses', mondayMisses);
    break;
    case 'Tuesday':
      index=2;
      tuesdayMisses ++;
      missData[index] = tuesdayMisses;
      localStorage.setItem('tuesdayMisses', tuesdayMisses);
    break;
    case 'Wednesday':
      index=3;
      wednesdayMisses ++;
      missData[index] = wednesdayMisses;
      localStorage.setItem('wednesdayMisses', wednesdayMisses);
    break;
    case 'Thursday':
      index=4;
      thursdayMisses ++;
      missData[index] = thursdayMisses;
      localStorage.setItem('thursdayMisses', thursdayMisses);
    break;
    case 'Friday':
      index=5;
      fridayMisses ++;
      missData[index] = fridayMisses;
      localStorage.setItem('fridayMisses', fridayMisses);
    break;
    case 'Saturday':
      index=6;
      saturdayMisses ++;
      missData[index] = saturdayMisses;
      localStorage.setItem('saturdayMisses', saturdayMisses);
    break;
  }
  const missRow = document.createElement('tr');
  missRow.innerHTML = `
  <td>${wMiss}</td>
  <td>${xMiss}</td>
  <td>${yMiss}</td>
  <td>${zMiss}</td>`;
  missTable.appendChild(missRow);
  
  // localStorage.setItem('misses', JSON.stringify(misses));
};

function createTable(){
  catchesObjectArray.forEach((item) =>{
    const catchRow = document.createElement('tr');
    catchRow.innerHTML = `
      <td>${item.day}</td>
      <td>${item.type}</td>
      <td>${item.time}</td>
      <td>${item.cue}</td>`;
    catchTable.appendChild(catchRow);
  })

  missesObjectArray.forEach((item) =>{
    const missRow = document.createElement('tr');
    missRow.innerHTML = `
      <td>${item.day}</td>
      <td>${item.type}</td>
      <td>${item.time}</td>
      <td>${item.cue}</td>`;
    missTable.appendChild(missRow);
  })
}
 

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







