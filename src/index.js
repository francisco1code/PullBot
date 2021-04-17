import {criarPullRequest} from './modules/services.js';
import {CodigoDevicePost} from './modules/apiServices.js';
import {ConfirmaLoginContaUsuario} from './modules/apiServices.js';
import {contribuintesRepositorio} from './modules/apiServices.js';
import {criarRelatorio} from './modules/relatorio.js';
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
      criarRelatorio()
    //BOTOES    
    var closeMilestoneButton = document.querySelector(".d-inline-block.mr-2 .btn-link");
    var getFormAction = document.querySelectorAll('form[class="d-inline-block mr-2"]')[0].action;
    localStorage.setItem('getFormAction', getFormAction);

    //SALVA INFORMAÇÕES NO LOCAL STORAGE
    var valuesAPI = String(getFormAction).split("/");
    const $owner = getOwner(valuesAPI);
    localStorage.setItem('owner', $owner);
    const $repo = getRepositori(valuesAPI);
    localStorage.setItem('repo', $repo);
    const $NumberMilestone = getNumberMilestone(valuesAPI);
    localStorage.setItem('NumberMilestone', $NumberMilestone);
    var milestoneName = document.querySelector(".milestone-title-link").innerText;
    localStorage.setItem('milestoneName', milestoneName);

    //VALIDA FECHAMENTO DE MILESTONE
    if (e.path[0] == closeMilestoneButton &&
        closeMilestoneButton.textContent.toLowerCase() == "close") {
        
        //INSTRUÇÃO PARA AUTORIZAR A ABERTURA DO MODAL
        localStorage.setItem('abrirModal', 'true')
        var base = document.querySelectorAll("form.d-inline-block.mr-2").action;
     }
    }
  });

 
  if(urlParts[2] == "github.com" && urlParts[3] == "login" && urlParts[4] == "device"  && urlParts[5] != "success" &&  urlParts[5] != "confirmation"){
    
    CodigoDevicePost();
  }

  if(urlParts[2] == "github.com" && urlParts[3] == "login" && urlParts[4] == "device" && urlParts[5] == "success" ){
   
    ConfirmaLoginContaUsuario();
    contribuintesRepositorio();

  }
  
/*FUNÇOES A DEFINIREM OS VALORES A SEREM PASSADOS PARA API*/

/*GET DONO DO REPOSITORIO*/
function getOwner(valuesAPI){
  var owner = valuesAPI[3];
  console.log(owner)
  return owner;
}

/*GET  REPOSITORIO*/
function getRepositori(valuesAPI){
  var repo = valuesAPI[4]
  console.log(repo)
  return repo;
}

/*GET NUMERO DA MILESTONE A SER FECHADA*/
function getNumberMilestone(valuesAPI){
  var milestoneNumber = valuesAPI[6]
  console.log(milestoneNumber)
  return milestoneNumber;
}