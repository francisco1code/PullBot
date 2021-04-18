import {criarPullRequest} from './modules/services.js';
import {CodigoDevicePost} from './modules/apiServices.js';
import {ConfirmaLoginContaUsuario} from './modules/apiServices.js';
import {contribuinteRepositorio} from './modules/apiServices.js';


//URL DAS PÁGINAS
var currentUrl = String(window.location.href);
var urlParts = currentUrl.split("/");

//ABRIR MODAL CASO O BOTÃO CLOSE DA MILESTONE JÁ TENHA SIDO CLICADO
if(localStorage.getItem('abrirModal')){
  criarPullRequest();
  localStorage.removeItem('abrirModal');
}

document.addEventListener("click", function (e) {

    //VALIDA ENTRADA EM GITHUB MILESTONES
    if (urlParts[5] == "milestones" && urlParts[2] == "github.com") {
    //BOTOES    
    var closeMilestoneButton = document.querySelector(".d-inline-block.mr-2 .btn-link");
    var getFormAction = document.querySelectorAll('form[class="d-inline-block mr-2"]')[0].action;
    localStorage.setItem('getFormAction', getFormAction);

    //VALIDA FECHAMENTO DE MILESTONE
    if (e.path[0] == closeMilestoneButton &&
        closeMilestoneButton.textContent.toLowerCase() == "close") {
        
        //INSTRUÇÃO PARA AUTORIZAR A ABERTURA DO MODAL
        localStorage.setItem('abrirModal', 'true')
        var base = document.querySelectorAll("form.d-inline-block.mr-2").action;
        var milestoneName = document.querySelector(".milestone-title-link").innerText;
        localStorage.setItem('milestoneName', milestoneName);

        
     }
    }
  });

 
  if(urlParts[2] == "github.com" && urlParts[3] == "login" && urlParts[4] == "device"  && urlParts[5] != "success" &&  urlParts[5] != "confirmation"){
    
    CodigoDevicePost();
  }

  import Chart from 'chart.js';
function criaGrafico(todosCommits){
  var myChart = new Chart(ctx, {
    type: 'bar',
    data: {
        labels: ['Red', 'Blue', 'Yellow', 'Green', 'Purple', 'Orange'],
         datasets: [{
            label: '# of Votes',
                data: [todosCommits, 19, 3, 5, 2, 3],
                backgroundColor: [
                    'rgba(255, 99, 132, 0.2)',
                    'rgba(54, 162, 235, 0.2)',
                    'rgba(255, 206, 86, 0.2)',
                    'rgba(75, 192, 192, 0.2)',
                    'rgba(153, 102, 255, 0.2)',
                    'rgba(255, 159, 64, 0.2)'
                ],
                borderColor: [
                    'rgba(255, 99, 132, 1)',
                    'rgba(54, 162, 235, 1)',
                    'rgba(255, 206, 86, 1)',
                    'rgba(75, 192, 192, 1)',
                    'rgba(153, 102, 255, 1)',
                    'rgba(255, 159, 64, 1)'
                ],
                borderWidth: 1
            }]
        },
        options: {
            scales: {
                y: {
                    beginAtZero: true
                }
            }
        }
    });
    //Download Chart Image
function dowloadImagem(){
    /*Get image of canvas element*/
    var url_base64jp = document.getElementById("lineChart").toDataURL("image/jpg");
    /*get download button (tag: <a></a>) */
    var a =  document.getElementById("download");
    /*insert chart image url to download button (tag: <a></a>) */
    a.href = url_base64jp;

}
}
  if(urlParts[2] == "github.com" && urlParts[3] == "login" && urlParts[4] == "device" && urlParts[5] == "success" ){
   
    ConfirmaLoginContaUsuario();
    
    contribuinteRepositorio(criaGrafico());
    
  }
  
  
  
  