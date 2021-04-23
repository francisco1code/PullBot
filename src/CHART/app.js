
export function GraficoPessoal(nomeContribuinte, qtdComitsContribuinte ){
 

    var ctx = document.getElementById("myChart").getContext('2d');
  var myChart = new Chart(ctx, {
    type: 'bar',
    data: {
        
        labels:  nomeContribuinte,
            datasets: [{
            backgroundColor: [
                "#FFD700",
                "#F08080",
                "#FF00FF",
                "#F4A460",
                "#836FFF", 
                "#00BFFF",
                "#98FB98"
            ],
            data: qtdComitsContribuinte
        }]
    }
  });
  }