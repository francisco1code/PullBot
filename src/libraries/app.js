
export function GraficoPessoal(nomeContribuinte, qtdComitsContribuinte , sprint){
 

    var ctx = document.getElementById("myChart").getContext('2d');
  var myChart = new Chart(ctx, {
    type: 'line',
    options: {
        plugins: {
          title: {
            display: true,
            text: sprint,
          }
        }
      },
    data: {
        
        labels:  nomeContribuinte,
            datasets: [{
                label: "commits",
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
        },
      ]
    }
    
  });
  }

  export function GraficoGrupo(nomeContribuinte, qtdComitsContribuinte , sprint){
 

    var ctx = document.getElementById("myChart").getContext('2d');
  var myChart = new Chart(ctx, {
    type: 'bar',
    options: {
        plugins: {
          title: {
            display: true,
            text: sprint,
          }
        }
      },
    data: {
        
        labels:  nomeContribuinte,
            datasets: [{
                label: "commits",
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
        },

        {
          label: "commits",
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
      },
      {
        label: "commits",
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
    }
      ]
    }
    
  });
  }

 