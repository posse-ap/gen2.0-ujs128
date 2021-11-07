'use strict'

const ModalOpen=document.getElementById('btn');
const ModalOpen2=document.getElementById('btn2');
const ModalClose=document.getElementById('closeBtn');
const backgroBlack=document.getElementById('backBlack');

ModalOpen.addEventListener('click',ModalAppear)
ModalOpen2.addEventListener('click',ModalAppear)
ModalClose.addEventListener('click',ModalDisappear)

function ModalAppear(){
    const ModalPage=document.getElementById('Modalpage')
    ModalPage.classList.add('appear')
    backgroBlack.classList.add('beBlack')
  }
  function ModalDisappear(){
    const ModalPage=document.getElementById('Modalpage')
    ModalPage.classList.remove('appear')
    backgroBlack.classList.remove('beBlack')
}








// 学習コンテンツの円グラフ

// Load the Visualization API and the corechart package.
google.charts.load('current', { 'packages': ['corechart'] });

// Set a callback to run when the Google Visualization API is loaded.
google.charts.setOnLoadCallback(drawChart);

function drawChart() {

  // Create the data table.
  var data = new google.visualization.DataTable();
  data.addColumn('string', 'ブラウザ');
  data.addColumn('number', '数');
  data.addRows([
    ['Chrome', 42],
    ['Edge', 18],
    ['Safari', 10],
    ['Firefox', 8],
    ['InternetExplorer', 7],
    ['InternetExplorer2', 5],
    ['InternetExplorer3', 5],
    ['InternetExplorer4', 5],
  ]);

  // Set chart options
  var options2 = {
    legend:'none',
    pieHole:0.5,
    chartArea:{width:'100%',height:'100%',top:30},
    colors:['rgb(3,69,236)', 'rgb(15,113,189)', 'rgb(32,189,222)','rgb(60,206,254)','rgb(178,158,243)','rgb(109,70,236)','rgb(74,23,239)','rgb(49,5,192)']
  };

  // Instantiate and draw our chart, passing in some options.
  var chart = new google.visualization.PieChart(document.getElementById('chart_pie'));
  chart.draw(data, options2);
}



// 学習コンテンツの円グラフ

// Load the Visualization API and the corechart package.
google.charts.load('current', { 'packages': ['corechart'] });

// Set a callback to run when the Google Visualization API is loaded.
google.charts.setOnLoadCallback(drawChart2);

function drawChart2() {

  // Create the data table.
  var data = new google.visualization.DataTable();
  data.addColumn('string', 'ブラウザ');
  data.addColumn('number', '数');
  data.addRows([
    ['ドットインストール', 42],
    ['N予備校', 33],
    ['POSSE課題', 25],
  ]);

  // Set chart options
  var options2 = {
    legend: 'none',
    pieHole: 0.5,

    chartArea: { width: '100%', height: '100%', top: 30 },
    colors:['rgb(3,69,236)', 'rgb(15,113,189)', 'rgb(32,189,222)']
  };

  // Instantiate and draw our chart, passing in some options.
  var chart = new google.visualization.PieChart(document.getElementById('chart_pie2'));
  chart.draw(data, options2);
}






// 

// Load the Visualization API and the corechart package.
google.charts.load('current', { 'packages': ['corechart'] });

// Set a callback to run when the Google Visualization API is loaded.
google.charts.setOnLoadCallback(drawChart3);

function drawChart3() {
  // Create the data table.
  var data = new google.visualization.DataTable();
  data.addColumn('string', '月');
  data.addColumn('number', 'PV');
  data.addRows([
    ['', 2],
    ['2', 6],
    ['', 4],
    ['4', 2],
    ['', 7],
    ['6', 8],
    ['', 4.5],
    ['8', 6.2],
    ['', 4.6],
    ['10', 1.8],
    ['', 4],
    ['12', 1],
    ['', 3],
    ['14', 6],
    ['', 6.3],
    ['16', 4],
    ['', 3],
    ['18', 4],
    ['', 6.8],
    ['20', 6.5],
    ['', 3.6],
    ['22', 4],
    ['', 7],
    ['24', 3],
    ['', 8],
    ['26', 4],
    ['', 6],
    ['28', 3],
    ['', 1],
    ['30', 4],
    ['', 7],

  ]);

  // Set chart options
  var options3 = {
    legend: 'none',
    pieHole: 0.5,
    width: '100%',
    chartArea: { width: '100%', height: '60%', top: 30 },
    // colors:[rgb(22,128,198)]
    vAxis: {
      format:'#h',
    },
    bar: {groupWidth: "40%"},
        colors: ['rgb(22,128,198)']

      };

  // Instantiate and draw our chart, passing in some options.
  var chart = new google.visualization.ColumnChart(document.getElementById('chart_div'));
  chart.draw(data, options3);
}


// onReSizeイベント    
window.onresize = function () {
  drawChart();
  drawChart2();
  drawChart3();
}


const menus = document.getElementsByClassName('menu');
console.log(menus)

for(let i = 0; i < menus.length; i++) {
    menus[i].addEventListener('click', menuClick);
}

function menuClick(){
  this.parentNode.classList.toggle('checked')
  console.log(this.parentNode)
  
}
