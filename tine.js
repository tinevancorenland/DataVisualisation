// CREATE CANVAS WITHOUT TOUCHING HTML

var canvas = document.createElement("canvas");
canvas.id = "myCanvas";
canvas.height = "400";
canvas.width = "400";
var header = document.getElementById("Crimes_et_d.C3.A9lits_enregistr.C3.A9s_par_les_services_de_police");
header.appendChild(canvas);

// ACCESS ELEMENTS TO INPUT THEM IN TABLE

var tableOne = document.getElementById("table1");
console.log(tableOne);
var tableOneBody = tableOne.getElementsByTagName("tbody");
console.log(tableOneBody);
var years = tableOneBody[0].childNodes[1];
console.log(years);
var correctYear = years.getElementsByTagName("th");
console.log(correctYear);

for (l = 2; l < correctYear.length; l++) {
    var labels = correctYear[l].innerHTML;
    console.log(labels);
}

// CHART.JS CODE

var ctx = document.getElementById('myChart').getContext('2d');
var myChart = new Chart(ctx, {
    type: 'line',
    data: {
        labels: labels,
        datasets: [{
            label: '# of Votes',
            data: [12, 19, 3, 5, 2, 3],
            backgroundColor: [
                'rgba(255, 99, 132, 0.2)',
                'rgba(54, 162, 235, 0.2)',
                'rgba(255, 206, 86, 0.2)',
                'rgba(75, 192, 192, 0.2)',
                'rgba(153, 102, 255, 0.2)',
                'rgba(255, 159, 64, 0.2)'
            ],
            borderColor: [
                'rgba(255, 99, 132, 1)',
                'rgba(54, 162, 235, 1)',
                'rgba(255, 206, 86, 1)',
                'rgba(75, 192, 192, 1)',
                'rgba(153, 102, 255, 1)',
                'rgba(255, 159, 64, 1)'
            ],
            borderWidth: 1
        }]
    },
    options: {
        scales: {
            yAxes: [{
                ticks: {
                    beginAtZero: true
                }
            }]
        }
    }
});