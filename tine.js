// CREATE CANVAS WITHOUT TOUCHING HTML

var canvas = document.createElement("canvas");
canvas.id = "myChart";
var header = document.getElementsByTagName("h3")[0];
header.appendChild(canvas);

// YEARS FROM TABLE TO CHART LABEL

var tableOne = document.getElementById("table1");
console.log(tableOne);
var tableOneBody = tableOne.getElementsByTagName("tbody");
var years = tableOneBody[0].childNodes[1];
var correctYear = years.getElementsByTagName("th");

// var time = tableOne.rows.item(1).cells;
// console.log(time);

// for (y = 2; y <time.length; y++) {
//     var years = time.item(y).innerHTML;
//     console.log(years);
//     yearList.push(years);
// }

var yearList = [];

for (l = 2; l < correctYear.length; l++) {
    var awesomeYears = correctYear[l].innerHTML;
    yearList.push(awesomeYears);
}

//Countrylist tryout

// var countryList = [];
// var tableRowLength = tableOne.rows.length;
// console.log(tableRowLength);

// var country = tableOne.rows.item(2).cells;
// var countryName = country.item(1).innerHTML;
// console.log(countryName);

// for (co = 2; co < tableOne.rows.length; co++) {
//     var countryNames = tableOne.rows(co).item(2).innerHTML;
//     console.log(countryNames);
// }

// DATA 
//BELGIQUE

var Belgique = tableOne.rows.item(2).cells;
var BelgiqueNom = Belgique.item(1).innerHTML;
var BelgiqueNombres = [];

for (b = 2; b <Belgique.length; b++) {
    var BelgiqueNrs = Belgique.item(b).innerHTML;
    BelgiqueNombres.push(BelgiqueNrs);
}

// console.log(Belgique);
// console.log(BelgiqueNom);
// console.log(BelgiqueNrs);
// console.log(BelgiqueNombres);

var dataBelgique = {
    label: BelgiqueNom,
    data: BelgiqueNombres,
};

//BULGARIE

var Bulgarie = tableOne.rows.item(3).cells;
var BulgarieNom = Bulgarie.item(1).innerHTML;
var BulgarieNombres = [];

for (bb = 2; bb <Bulgarie.length; bb++) {
    var BulgarieNrs = Bulgarie.item(bb).innerHTML;
    BulgarieNombres.push(BelgiqueNrs);
}

// console.log(Bulgarie);
// console.log(BulgarieNom);
// console.log(BulgarieNrs);
// console.log(BulgarieNombres);

var dataBulgarie = {
    label: BulgarieNom,
    data: BulgarieNombres,
};

//REP TCHEQUE

var RepTcheque = tableOne.rows.item(4).cells;
var RepTchequeNom = RepTcheque.item(1).innerHTML;
var RepTchequeNombres = [];

for (rt = 2; rt <RepTcheque.length; rt++) {
    var RepTchequeNrs = RepTcheque.item(rt).innerHTML;
    RepTchequeNombres.push(RepTchequeNrs);
}

// console.log(RepTcheque);
// console.log(RepTchequeNom);
// console.log(RepTchequeNrs);
// console.log(RepTchequeNombres);

var dataReptcheque = {
    label: RepTchequeNom,
    data: RepTchequeNombres,
};

//DANMARK

var Danmark = tableOne.rows.item(5).cells;
var DanmarkNom = Danmark.item(1).innerHTML;
var DanmarkNombres = [];

for (d = 2; d <Danmark.length; d++) {
    var DanmarkNrs = Danmark.item(d).innerHTML;
    DanmarkNombres.push(DanmarkNrs);
}

// console.log(Danmark);
// console.log(DanmarkNom);
// console.log(DanmarkNrs);
// console.log(DanmarkNombres);

var dataDanmark = {
    label: DanmarkNom,
    data: DanmarkNombres,
};

//ALLEMAGNE

var Allemagne = tableOne.rows.item(6).cells;
var AllemagneNom = Allemagne.item(1).innerHTML;
var AllemagneNombres = [];

for (al = 2; al <Allemagne.length; al++) {
    var AllemagneNrs = Allemagne.item(al).innerHTML;
    AllemagneNombres.push(AllemagneNrs);
}

// console.log(Allemagne);
// console.log(AllemagneNom);
// console.log(AllemagneNrs);
// console.log(AllemagneNombres);

var dataAllemagne = {
    label: AllemagneNom,
    data: AllemagneNombres,
};

//ESTONIE

var Estonie = tableOne.rows.item(7).cells;
var EstonieNom = Estonie.item(1).innerHTML;
var EstonieNombres = [];

for (es = 2; es <Estonie.length; es++) {
    var EstonieNrs = Estonie.item(es).innerHTML;
    EstonieNombres.push(EstonieNrs);
}

// console.log(Estonie);
// console.log(EstonieNom);
// console.log(EstonieNrs);
// console.log(EstonieNombres);

var dataEstonie = {
    label: EstonieNom,
    data: EstonieNombres,
};

//IRLANDE

var Irlande = tableOne.rows.item(8).cells;
var IrlandeNom = Irlande.item(1).innerHTML;
var IrlandeNombres = [];

for (ir = 2; ir <Irlande.length; ir++) {
    var IrlandeNrs = Irlande.item(ir).innerHTML;
    IrlandeNombres.push(IrlandeNrs);
}

var dataIrlande = {
    label: IrlandeNom,
    data: IrlandeNombres,
};

// console.log(Irlande);
// console.log(IrlandeNom);
// console.log(IrlandeNrs);
// console.log(IrlandeNombres);
// console.log(dataIrlande);

var crimiData = {
    labels: yearList,
    datasets: [dataBelgique, dataBulgarie, dataReptcheque, dataDanmark, dataAllemagne, dataEstonie, dataIrlande],
};

// console.log(crimiData);

//Options

var options = {
    scales: {
      yAxes: [{
        ticks: {
          max: 7000,
          min: 0,
          stepSize: 200
        }
      }]
    },
  };

// CHART.JS CODE

var ctx = document.getElementById('myChart').getContext('2d');
var myChart = new Chart(ctx, {
    type: 'line',
    data: crimiData,
    options: options
});
