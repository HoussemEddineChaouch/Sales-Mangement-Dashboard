// Bar Chart
const barChart = document.getElementById("chart-bar").getContext('2d');
const myBarChart = new Chart(barChart, {
  type: 'bar',
  data: {
    labels: ['11 Aug', '12 Aug', '13 Aug', '14 Aug', '15 Aug', '16 Aug' , '17 Aug'],
    datasets: [{
      data: [5, 15, 23, 14, 25, 28 , 20],
      borderWidth: 1,
      borderRadius: 15 ,
      backgroundColor: 'rgba(122, 128, 240)' ,
    }]
  },
  options: {
    responsive : true ,
    plugins: {
      legend: {
          display: false
      }
  } ,
    scales: {
      x: {
        grid: {
          display : 'none',
        }
      }
    },
  } ,

});

function darkBarChart() {
  myBarChart.options.scales.x.grid.color = 'rgb(122, 128, 240 , 0.1) '
  myBarChart.options.scales.y.grid.color = 'rgb(122, 128, 240 , 0.1) '
  myBarChart.update();
}
function LightBarChart() {
  myBarChart.data.datasets[0].backgroundColor = 'rgba(122, 128, 240)'
  myBarChart.update();
}

// End Bar Char

// Pie Chart
const pieChart = document.getElementById("secteurChart").getContext('2d');
const dataPie = {
    labels: [
      'Delivered',
      'Pending',
      'Cancled'
    ] ,
    datasets: [{
      label: 'My First Dataset',
      data: [300, 50, 100],
      backgroundColor: [
        'rgb(67, 197, 141)',
        'rgb(253, 232, 157)',
        'rgb(255, 51, 109)'
      ],
      borderColor: ['white'],
      borderWidth : '3' 
    }]
};
const configPie = {
    type: 'pie',
    data: dataPie,
    options : {
      responsive : true ,
      plugins : {
        legend : {
          position : 'bottom' , 
          labels : {
            usePointStyle : true ,
            padding : 20 
          }
        }
      }
    }
};
const myPieChart = new Chart(pieChart , configPie);

function darkPieChart() {
  myPieChart.data.datasets[0].borderColor = '#313234'
  myPieChart.update();
}
function LightPieChart() {
  myPieChart.data.datasets[0].backgroundColor =  [
    'rgb(67, 197, 141)',
    'rgb(253, 232, 157)',
    'rgb(255, 51, 109)'
  ],
  myPieChart.update();
}

// End Pie Chart 




let modeBtn = document.querySelector('.mode-btn');
let navMenu = document.querySelector('.nav-menu');
let boxes = document.querySelectorAll('.box') ;
let lineInfo = document.querySelectorAll('.line-info') ;
let tilteTrans = document.querySelector('.title-trans');
let periodList = document.querySelector('.period');
let salesPeriodList = document.querySelector('.sales');
let profileBtn = document.querySelector('#profileIcon');
let menuList = document.querySelector('.menu');
let opacityLayerEle = document.querySelector('#opacity-layer-ele');
let overviewStat = document.querySelector('.overview-stat') ;


// Function

function loopElement(parnetEle , classEleme) {
  parnetEle.forEach(ele => {
    ele.classList.toggle(`${classEleme}`);
  });
}


// Event Display Menu Profile And Settings 

profileBtn.addEventListener('click' , e => {
  if(menuList.style.display == 'none') {
    menuList.style.display = 'block';
    opacityLayerEle.classList.add('opacity-layer');
  } else  {
    menuList.style.display = 'none'
    opacityLayerEle.classList.remove('opacity-layer');
  }

})


// Events Works When Click on DarnLight Mode Btn  

modeBtn.addEventListener('click' , e => {

    document.body.classList.toggle('dark-body');
  
    modeBtn.classList.toggle('dark-mode-btn');
    tilteTrans.classList.toggle('dark-title-trans')
    
    navMenu.classList.toggle('dark-nav-menu');
    periodList.classList.toggle('dark-period') ;
    salesPeriodList.classList.toggle('dark-sales') ;
    menuList.classList.toggle('dark-menu');

    loopElement(boxes , 'dark-box');
    loopElement(lineInfo , 'dark-line-info');
    if(modeBtn.classList.contains('dark-mode-btn')) {
      darkBarChart(); 
      darkPieChart();
    } else {
      LightBarChart();
      LightPieChart();
    }

})

