import {criarPullRequest} from './modules/services.js';
import {CodigoDevicePost} from './modules/apiServices.js';
import {ConfirmaLoginContaUsuario} from './modules/apiServices.js';
import {contribuintesRepositorio} from './modules/apiServices.js';
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
     }
    }
  });

 
  if(urlParts[2] == "github.com" && urlParts[3] == "login" && urlParts[4] == "device"  && urlParts[5] != "success" &&  urlParts[5] != "confirmation"){
    contribuintesRepositorio();
    CodigoDevicePost();
  }

  if(urlParts[2] == "github.com" && urlParts[3] == "login" && urlParts[4] == "device" && urlParts[5] == "success" ){
   
    ConfirmaLoginContaUsuario();

  }
  
  
  