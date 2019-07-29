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

// // Country dataset 1

// var rowBe = table.rows[2];
// console.log(rowBe);

// var BeName = rowBe.cells[1].firstChild.data;

// var BeData = [];

// for (Be = 2; Be < rowBe.cells.length; Be++) {
//   var BeNrs = parseInt(rowBe.cells[Be].firstChild.data);
//   BeData.push(BeNrs);
// }

// // Country dataset 2

// var rowBu = table.rows[3];
// console.log(rowBu);

// var BuName = table.rows[3].cells[1].firstChild.data;

// var BuData = [];

// for (d = 2; d < table.rows[3].cells.length; d++) {
//   var BuNrs = parseInt(table.rows[3].cells[d].firstChild.data);
//   BuData.push(BuNrs);
// }

// // Loop to pull data from every country

// var allRows = [];
// var allCountries = [];
// var allData = [];

// for (ro = 2; ro < table.rows.length; ro++) {
//   var currentRow = table.rows[ro].cells;
//   allRows.push(currentRow);
//   var currentCountry = table.rows[ro].cells[1].firstChild.data;
//   allCountries.push(currentCountry);

//   for (nrs = 2; nrs < table.rows[ro].cells.length; nrs++) {
//     var currentData = parseInt(table.rows[ro].cells[nrs].firstChild.data);
//     allData.push(currentData);
//   }
// }

// console.log(allRows);
// console.log(allCountries);
// console.log(allData);

// Livecoding Filip

var theTable = document.getElementById("table1");
var belgium = theTable.rows[1];

function findBelgiumData() {
  var belgiumData = [];

  for (let i = 2; i < belgium.cells.length; i++) {
    var cellData = belgium.cells[i].innerHTML;
    belgiumData.push(parseFloat(cellData));
  }
}
findBelgiumData();

//FIND THE DATA FOR EACH COUNTRY: PUT A LOOP AROUND THE BELGIUM FUNCTION
// Takes in a table row and iterates starting at the second cell and returns te rest of the data

function findCountryData(country) {
  var countryData = [];

  for (let i = 2; i < country.cells.length; i++) {
    var cellData = country.cells[i].innerHTML;
    countryData.push(parseFloat(cellData));
  }
  return countryData;
}

// findCountryData(theTable.rows[1]);
// findCountryData(theTable.rows[2]);
// ...

// This function takes in a table and returns all the data in the format below
// RETURNS:
// {
//     belgium : [..., ...],
//     bulgarie : [..., ...]
// }

function getDataFromTable(theTable) {
  var countriesData = {};

  for (var i = 2; i < document.getElementById("table1").rows.length; i++) {
    var countryRow = document.getElementById("table1").rows[i];
    var data = findCountryData(countryRow);
    var countryName = getNameOfCountry(countryRow);
  }
  return (countriesData[countryName] = data);
}

function getNameOfCountry() {
  return document.getElementById("table1").rows.cells[1].innerHTML;
}

getDataFromTable();

// //

// JSON.stringify(getDataFromTable(theTable));

// //

// Chart js basic data

var ctx = document.getElementById("myChart").getContext("2d");
var chart = new Chart(ctx, {
  type: "line",

  data: {
    labels: yearList,
    datasets: [
      {
        label: getNameOfCountry(),
        data: findCountryData()
      }
    ]
  }
});
