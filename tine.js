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
console.log(rowYears.cells);

var yearList = [];

for (y = 2; y < rowYears.cells.length; y++) {
  var years = rowYears.cells[y].firstChild.data;
  yearList.push(years);
}

// Country name for dataset 1

var rowBe = table.rows[2];
console.log(rowBe);

var BeName = rowBe.cells[1].firstChild.data;
console.log(BeName);

var BeData = [];

for (Be = 2; Be < rowBe.cells.length; Be++) {
  var BeNrs = parseInt(rowBe.cells[Be].firstChild.data);
  BeData.push(BeNrs);
}

console.log(BeNrs);
console.log(yearList);
console.log(BeData);

// Options

// var options = {
//   scales: {
//     yAxes: [
//       {
//         ticks: {
//           min: -2000,
//           max: 8000
//         }
//       }
//     ]
//   }
// };

// Chart JS basic function

var ctx = document.getElementById("myChart").getContext("2d");
var chart = new Chart(ctx, {
  type: "line",

  data: {
    labels: yearList,
    datasets: [
      {
        label: BeName,
        backgroundColor: "rgb(255, 99, 132)",
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
