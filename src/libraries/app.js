
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

  export function GraficoGrupo(adicoes, delecoes,commits, semanas, qtd){
    
    
    const NUMBER_CFG = {count: qtd, min: 0};
    
    
    const data = {
      // labels: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13],
      labels: semanas,
      datasets: [
        {
          label: 'Dataset 1',
          backgroundColor: [
            "#FFD700"
          
        ],
          data: adicoes
        },
        {
          label: 'Dataset 2',
          backgroundColor: [
            "#F08080"
           
        ],
          data: delecoes,
         
        },
        {
          label: 'Dataset 2',
          backgroundColor: [
            "#FF00FF"
            
        ],
          data: commits,
         
        }
      ]
    };

    var ctx = document.getElementById("myChart").getContext('2d');
  var myChart = new Chart(ctx, {
    type: 'bar',
    options: {
        plugins: {
          title: {
            display: true,
            text: "Desempenho Repo",
          }
        }
      },
    data: data
    
  });
  }

 