let cityNames = ['Toronto', 'Montreal', 'Vancouver', 'Calgary', 'Edmonton'];
let cityPopulation = [5429524, 3519595, 2264823, 1237656, 1062643];
let cityColors = ['rgba(255, 99, 132, 0.6)', 'rgba(54, 162, 235, 0.6)', 'rgba(255, 206, 86, 0.6)', 'rgba(75, 192, 192, 0.6)', 'rgba(153, 102, 255, 0.6)', 'rgba(255, 159, 64, 0.6)', 'rgba(255, 99, 132, 0.6)']

let chart1 = document.getElementById('chartp1').getContext('2d');

Chart.defaults.global.defaultFontFamily = 'Times New Roman';
Chart.defaults.global.defaultFontSize = 20;
Chart.defaults.global.defaultFontColor = '#777'

let citypopcanada = new Chart(chart1, {
    type: 'bar',
    data: {
        labels: cityNames,
        datasets: [{
            label: 'Population',
            data: cityPopulation,
            backgroundColor: cityColors,
            borderWidth: 1, 
            borderColor: '#777',
            hoverBorderWidth: 2,
            hoverBorderColor: '#000'
        }]
    },
    options:{
        title: {
            display:true,
            text: 'Top 5 Cities by population',
            fontSize: 22
        },
        legend:{
            display:false,
            position:'right',
            labels:{
                fontColor:'#000'
            }
        },
        layout:{
            padding:{
                left: 0,
                right: 0,
                bottom: 5,
                top: 5
            }
        },
        tooltips:{
            enabled:true
        }
    }
});
