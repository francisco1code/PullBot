export function GraficoPessoal(){
    var ctx = document.getElementById("chart").getContext('2d');
var myChart = new Chart(ctx, {
    type: 'doughnut',
    data: {
        labels: [ 'a', 'b', 'c', 'd' ],
            datasets: [{
            backgroundColor: [
                "#59be5b",
                "#d56328",
                "#ff1b2d",
                "#0078d7"
            ],
            data: [ 1, 2, 3, 4 ]
        }]
    }
});
}
