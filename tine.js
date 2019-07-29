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

var yearList = [];

for (y = 2; y < rowYears.cells.length; y++) {
  var years = rowYears.cells[y].firstChild.data;
  yearList.push(years);
}

// Country dataset 1

var rowBe = table.rows[2];
console.log(rowBe);

var BeName = rowBe.cells[1].firstChild.data;

var BeData = [];

for (Be = 2; Be < rowBe.cells.length; Be++) {
  var BeNrs = parseInt(rowBe.cells[Be].firstChild.data);
  BeData.push(BeNrs);
}

// Country dataset 2

var rowBu = table.rows[3];
console.log(rowBu);

var BuName = table.rows[3].cells[1].firstChild.data;

var BuData = [];

for (d = 2; d < table.rows[3].cells.length; d++) {
  var BuNrs = parseInt(table.rows[3].cells[d].firstChild.data);
  BuData.push(BuNrs);
}

// Loop to pull data from every country

var allRows = [];
var allCountries = [];
var allData = [];

for (ro = 2; ro < table.rows.length; ro++) {
  var currentRow = table.rows[ro].cells;
  allRows.push(currentRow);
  var currentCountry = table.rows[ro].cells[1].firstChild.data;
  allCountries.push(currentCountry);

  for (nrs = 2; nrs < table.rows[ro].cells.length; nrs++) {
    var currentData = parseInt(table.rows[ro].cells[nrs].firstChild.data);
    allData.push(currentData);
  }
}

console.log(allRows);
console.log(allCountries);
console.log(allData);

// Chart js basic data

var ctx = document.getElementById("myChart").getContext("2d");
var chart = new Chart(ctx, {
  type: "line",

  data: {
    labels: yearList,
    datasets: [
      {
        label: BeName,
        data: BeData,
        lineTension: 0,
        fill: false,
        borderColor: "pink"
      },
      {
        label: BuName,
        data: BuData,
        lineTension: 0,
        fill: false,
        borderColor: "purple"
      }
    ]
  },

  options: {
    scales: {
      yAxes: [
        {
          ticks: {
            beginAtZero: true
          }
        }
      ]
    }
  }
});
