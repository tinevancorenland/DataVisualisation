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

// Loop to pull data from every country

console.log(table.rows);

var allRows = [];

for (ro = 2; ro < table.rows.length; ro++) {
  var currentRow = table.rows[ro].cells;
  allRows.push(currentRow);
}

console.log(allRows);

// Chart js basic data

var ctx = document.getElementById("myChart").getContext("2d");
var chart = new Chart(ctx, {
  type: "line",

  data: {
    labels: yearList,
    datasets: [
      {
        label: BeName,
        // backgroundColor: "rgb(255, 99, 132)",
        borderColor: "rgb(255, 99, 132)",
        data: BeData
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
