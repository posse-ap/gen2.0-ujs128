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
const ModalClose=document.getElementById('closeBtn');

ModalOpen.addEventListener('click',ModalAppear)
ModalClose.addEventListener('click',ModalDisappear)

function ModalAppear(){
    const ModalPage=document.getElementById('Modalpage')
    ModalPage.classList.add('appear')
}
function ModalDisappear(){
    const ModalPage=document.getElementById('Modalpage')
    ModalPage.classList.remove('appear')
}