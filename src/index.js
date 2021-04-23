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
    if (urlParts[5] == "milestones" && urlParts[2] == "github.com" ) {
    //BOTOES    
    
    var closeMilestoneButton = document.querySelector(".d-inline-block.mr-2 .btn-link");
    var getFormAction = document.querySelectorAll('form[class="d-inline-block mr-2"]')[0].action;
    localStorage.setItem('getFormAction', getFormAction);
    var valuesAPI = String(getFormAction).split("/");
    var owner = valuesAPI[3];
    var repo = valuesAPI[4]
    var milestoneNumber = valuesAPI[6]
    localStorage.setItem(owner, owner)
    localStorage.setItem(milestoneNumber, milestoneNumber)
    localStorage.setItem(repo, repo)
    //VALIDA FECHAMENTO DE MILESTONE
    if (e.path[0] == closeMilestoneButton &&
        closeMilestoneButton.textContent.toLowerCase() == "close") {
        
        //INSTRUÇÃO PARA AUTORIZAR A ABERTURA DO MODAL
        localStorage.setItem('abrirModal', 'true')
     }
    }
  });

 
  if(urlParts[2] == "github.com" && urlParts[3] == "login" && urlParts[4] == "device"  && urlParts[5] != "success" &&  urlParts[5] != "confirmation"){

    CodigoDevicePost();

  }

  if(urlParts[2] == "github.com" && urlParts[3] == "login" && urlParts[4] == "device" && urlParts[5] == "success" ){
   
    ConfirmaLoginContaUsuario();
    
    
  }
  
 
 
  