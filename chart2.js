let pcNames = ['Montreal', 'Quebec City', 'Ottawa - Gatineau (Quebec part)', 'Sherbrooke', 'Trois-Rivières'];
let pcPopulation = [3519595, 705103, 276245, 139565, 114203];
let pcColors = ['rgba(255, 99, 132, 0.6)', 'rgba(54, 162, 235, 0.6)', 'rgba(255, 206, 86, 0.6)', 'rgba(75, 192, 192, 0.6)', 'rgba(153, 102, 255, 0.6)', 'rgba(255, 159, 64, 0.6)', 'rgba(255, 99, 132, 0.6)']

let chart2 = document.getElementById('chartp2').getContext('2d');

Chart.defaults.global.defaultFontFamily = 'Times New Roman';
Chart.defaults.global.defaultFontSize = 20;
Chart.defaults.global.defaultFontColor = '#777'

let pcpopcanada = new Chart(chart2, {
    type: 'pie',
    data: {
        labels: pcNames,
        datasets: [{
            label: 'Population',
            data: pcPopulation,
            backgroundColor: pcColors,
            borderWidth: 1, 
            borderColor: '#777',
            hoverBorderWidth: 2,
            hoverBorderColor: '#000'
        }]
    },
    options:{
        title: {
            display:true,
            text: 'Top 5 population centre in Quebec - 2016',
            fontSize: 22
        },
        legend:{
            display:true,
            position:'top',
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
