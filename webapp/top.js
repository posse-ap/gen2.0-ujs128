'use strict'
// let ctx = document.getElementById('studyLog');

// let myBarChart = new Chart(ctx, {
//     type: 'bar',
//     data: {
//         labels: ['2', '4', '6', '8', '10', '12', '14', '16', '18', '20', '22', '24', '26', '28', '30'],
//         datasets: [
//             {
//                 data: [2, 4, 5, 3, 5, 6, 2, 1, 5, 7, 4, 2, 4, 3, 2, 8, 6, 4, 5, 1, 4, 6, 8, 3, 5, 3, 5, 3, 4, 7, 2],
//                 backgroundColor: 'blue'
//             }
//         ]
//     },
//     options: {
//         scales: {
//             yAxes: [{
//                 ticks: {
//                     suggestedMax: 8,
//                     suggestedMin: 0,
//                     stepSize: 2,
//                     callback: function (value, index, values) {
//                         return value + '人'
//                     }
//                 }
//             }]
//         },
//     }
// });
const ModalOpen=document.getElementById('btn');
const ModalOpen2=document.getElementById('btn2');
const ModalClose=document.getElementById('closeBtn');

ModalOpen.addEventListener('click',ModalAppear)
ModalOpen2.addEventListener('click',ModalAppear)
ModalClose.addEventListener('click',ModalDisappear)

function ModalAppear(){
    const ModalPage=document.getElementById('Modalpage')
    ModalPage.classList.add('appear')
}
function ModalDisappear(){
    const ModalPage=document.getElementById('Modalpage')
    ModalPage.classList.remove('appear')
}






  // Load the Visualization API and the corechart package.
  google.charts.load('current', {'packages':['corechart']});

  // Set a callback to run when the Google Visualization API is loaded.
  google.charts.setOnLoadCallback(drawChart2);

  function drawChart2() {

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
    var options = {
        legend:'none',
        pieHole:0.5,
        width:'100%',
        chartArea:{width:'100%',height:'60%',top:30},
        
      
    };

    // Instantiate and draw our chart, passing in some options.
    var chart = new google.visualization.PieChart(document.getElementById('chart_pie'));
    chart.draw(data, options);
  }

  // onReSizeイベント    
  window.onresize = function(){
    drawChart2();
  }


  // Load the Visualization API and the corechart package.
  google.charts.load('current', {'packages':['corechart']});

  // Set a callback to run when the Google Visualization API is loaded.
  google.charts.setOnLoadCallback(drawChart3);

  function drawChart3() {

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
        legend:'none',
        pieHole:0.5,
        width:'100%',
        chartArea:{width:'100%',height:'60%',top:30},
        
      
    };

    // Instantiate and draw our chart, passing in some options.
    var chart = new google.visualization.PieChart(document.getElementById('chart_pie2'));
    chart.draw(data, options2);
  }

  // onReSizeイベント    
  window.onresize = function(){
    drawChart2();
  }
        // Load the Visualization API and the corechart package.
        google.charts.load('current', {'packages':['corechart']});

        // Set a callback to run when the Google Visualization API is loaded.
        google.charts.setOnLoadCallback(drawChart1);
  
        function drawChart1() {
  
          // Create the data table.
          var data = new google.visualization.DataTable();
          data.addColumn('string', '月');
          data.addColumn('number', 'PV');
          data.addRows([
            ['9月', 10],
            ['10月', 30],
            ['11月', 100],
            ['12月', 200],
            ['1月', 300]
          ]);
  
          // Set chart options
          var options = {
            'title':'ブログのPV推移',
            'height':200
          };
  
          // Instantiate and draw our chart, passing in some options.
          var chart = new google.visualization.ColumnChart(document.getElementById('chart_div'));
          chart.draw(data, options);
        }