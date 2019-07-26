// Create a chart via chart.js without altering html

var canvas = document.createElement("canvas");
canvas.id = "myChart";
var header = document.getElementsByTagName("h3")[0];
header.appendChild(canvas);

//Create variables to insert in chart
// Years for labels x axis

var table = document.getElementById("table1");
console.log(table);
var rowYears = table.rows[1];
console.log(rowYears);
var rowCells = table.rows[1].cells;
console.log(rowCells);

var yearList = [];

for (y = 2; y < rowCells.length; y++) {
  var years = rowCells[y].firstChild.data;
  console.log(years);
  yearList.push(years);
  console.log(yearList);
}

// Chart JS basic function

var ctx = document.getElementById('myChart').getContext('2d');
var chart = new Chart(ctx, {
  type: 'line',

  data: {
    labels: yearList,
    datasets: [{
      label: 'My First dataset',
      backgroundColor: 'rgb(255, 99, 132)',
      borderColor: 'rgb(255, 99, 132)',
      data: [0, 10, 5, 2, 20, 30, 45]
    }]
  },


  options: {}
});