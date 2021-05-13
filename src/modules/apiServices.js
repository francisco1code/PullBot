import {GraficoPessoal} from '../libraries/app.js';
import {GraficoGrupoAdicoes} from '../libraries/app.js';
import {GraficoGrupoDelecoes} from '../libraries/app.js';
import {GraficoGrupoCommits} from '../libraries/app.js';
// ESSAS FUNÇÕES SÃO UTILIZADAS NO POPUP.JS PARA FAZER APARECER E DESAPARECER O CONTEUDO DO JS
/*CREATE A DIV DISPLAY*/
 export function CreateDivDisplay( DivAmount, numerDivPriority, start){

	createClass('.plane0', "display: none; z-index: -1;");
	createClass('.plane1', "z-index: 1; display: grid !important;");
    for(var i = 1; i <=  DivAmount; i++){
        if (i <= numerDivPriority & i >= start){
            var DivPriority = eval(new String('div'+i))
            var estadoDisplay = window.getComputedStyle(document.getElementById(DivPriority));
            if(estadoDisplay.display == "none"){
              applyClass('plane1', DivPriority);
            }
            
            applyClass('plane0',DivPriority, true);
        }
        else
        {
            var DivSecundary = eval(new String('div'+i))
            var estadoDisplay = window.getComputedStyle(document.getElementById(DivSecundary));

            
            if(estadoDisplay.display != "none"){
              applyClass('plane0',DivSecundary);
            }
              
             applyClass('plane1', DivSecundary, true);
            
             
        }
    }

}

function createClass(name,rules){
	var style = document.createElement('style');
	style.type = 'text/css';
	document.getElementsByTagName('head')[0].appendChild(style);
	if(!(style.sheet||{}).insertRule) 
		(style.styleSheet || style.sheet).addRule(name, rules);
	else
		style.sheet.insertRule(name+"{"+rules+"}",0);
}

function applyClass(name,element,doRemove){
	if(typeof element.valueOf() == "string"){
		element = document.getElementById(element);
	}
	if(doRemove){
		element.className = element.className.replace(new RegExp("\\b"+name+"\\b","g"),"");
	}else{
		element.className = element.className + " "+name;
	}
}

/////
export function CodigoDevicePost(){
    var xhr = new XMLHttpRequest();

    xhr.addEventListener("readystatechange", function() {
      if(xhr.readyState === 4) {

         
        
        const $getResponse = String(xhr.responseText).split("&");
        const $separeteValueDevice = $getResponse[0].split("=");
        var deviceCode = $separeteValueDevice[1];
       const $separatevalue = String($getResponse[3]).split("=");
       var codeUser = $separatevalue[1];
        loginDevice(codeUser)
      }
    });

    xhr.open("POST", "https://github.com/login/device/code?client_id=46da77694ca94b6a86d7&scope=repo%20user");
    xhr.send();
  }
  function loginDevice(codeUser){
   
    document.getElementById("user-code-0").value = codeUser[0];
    document.getElementById("user-code-1").value = codeUser[1];
    document.getElementById("user-code-2").value =  codeUser[2];
    document.getElementById("user-code-3").value = codeUser[3];
    document.getElementById("user-code-5").value = codeUser[5];
    document.getElementById("user-code-6").value = codeUser[6];
    document.getElementById("user-code-7").value = codeUser[7];
    document.getElementById("user-code-8").value = codeUser[8];
    
    
}
//////////////////////////////////////////////////////////////////////////////

export function ConfirmaLoginContaUsuario(){
  var keyValue = localStorage.getItem('key_dev');
  var xhr = new XMLHttpRequest();

  xhr.addEventListener("readystatechange", function() {
    if(xhr.readyState === 4) {
      const $getResponse = String(xhr.responseText).split("&");
      const $separateToken = $getResponse[0].split("=");
      const $token = $separateToken[1]
      localStorage.setItem("token",$token);
    }
  });

  xhr.open("POST", "https://github.com/login/oauth/access_token?client_id=46da77694ca94b6a86d7&device_code="+keyValue+"&grant_type=urn:ietf:params:oauth:grant-type:device_code");
  // xhr.setRequestHeader("Cookie", "_device_id="+keyValue+"; _gh_sess=eJ4SGU%2B24YwcePUSGoD82e%2Bm5C6pCMXSTicqWhqxjqK2q%2FdT%2BnIZRy2VT17XgsvqnrMmPA8Nm3foDTdRakuDTl5ZVWW%2F%2BzDAqvsEv6B4eoE83TNIIaC1HTZvT93ojGs8ARDPh26hSSFoUIYDHYnz6KEDJTK3hjlrX5ATkhOLy%2BDUwus78XVkwT1hhC0nIpj4Qm0YC6Z2rqNGkDeCzg6Kz5O0tSNzQxyahCC9WHLgoECgonCtnYIQ27w%2BBmzQ%2FWIqRmaUM%2BPRUOZBGmttLbSEhX4FaHUNIlglvwjNx9R34UAcaVkO--YFp0BPOo4pjLQIHV--aQrfy79bV3QfnmGMwYPhGw%3D%3D; _octo=GH1.1.2068834575.1616879702; logged_in=no");

  xhr.send();
  
}
// ///////////////////////////////////////////////////////////////////////



 var total = 0;
 var contador = 0;
 let nomeContribuinte = [];
 let qtdComitsContribuinte = [];
//VALORES A SEREM PASSADOS PARA API

export function contribuinteRepositorio(numeroMilestone, token, $owner, $repo, sprint){

  var xhr = new XMLHttpRequest();
  
  
  xhr.addEventListener("readystatechange", function() {
    if(xhr.readyState === 4) {
     var recebeContribuintes = JSON.parse(xhr.responseText);
    const $numerosContribuintes = recebeContribuintes.length;
    milestone(numeroMilestone, recebeContribuintes, $numerosContribuintes, token, $owner, $repo, sprint);
     
    
  }});
  
  xhr.open("GET", "https://api.github.com/repos/"+$owner+"/"+$repo+"/contributors");
  xhr.setRequestHeader("authorization", "Bearer " + token);
  xhr.send();
  
  }
  
  function milestone(numeroMilestone, recebeContribuintes, numerosContribuintes, token, $owner, $repo, sprint){ 
    var xhr = new XMLHttpRequest();
  
    xhr.addEventListener("readystatechange", function() {
      if(xhr.readyState === 4) {
        var b = String(xhr.responseText).split('url:')
        
       var resposta = JSON.parse(xhr.responseText);
      
       const resultadoProcura = milestoneDesejada(numeroMilestone,resposta, resposta.length)
       
       var nomeSprint = resultadoProcura.title
        var dataAberturaMilestone =  resultadoProcura.created_at
        var dataFechamentoMilestone = resultadoProcura.closed_at
       
       ProcuraContribuicao(recebeContribuintes,  numerosContribuintes, dataAberturaMilestone, dataFechamentoMilestone, token,  $owner, $repo, nomeSprint);
  
      }
    });
    xhr.open("GET", "https://api.github.com/repos/"+$owner+"/"+$repo+"/milestones?state=all&sort=completeness");
    xhr.setRequestHeader("accept", "application/vnd.github.v3+json");
    xhr.setRequestHeader("authorization", "Bearer " + token);
    xhr.send();
  }
 
  function milestoneDesejada(numeroMilestone,resposta,  qtdMilestones){
    
    for(var i = 0; i < qtdMilestones; i++){
      if (resposta[i].number == numeroMilestone){
       
        return resposta[i];
      }
    
      
    }
  }
     
  function ProcuraContribuicao(recebeContribuintes, numerosContribuintes, dataAberturaMilestone, dataFechamentoMilestone, token, $owner, $repo, nomeSprint){
  

  var i = 0;
  while(i < numerosContribuintes){
    var contribuinte = recebeContribuintes[i].login;

  
    getContribuicao(contribuinte, numerosContribuintes,  dataAberturaMilestone, dataFechamentoMilestone, token, $owner, $repo, nomeSprint);
    i++;
  }
  }
  
  function getContribuicao(contribuinte, numerosContribuintes, dataAberturaMilestone, dataFechamentoMilestone, token, $owner, $repo, nomeSprint){
    
    var xhr = new XMLHttpRequest();
    xhr.addEventListener("readystatechange", function() {
      if(xhr.readyState === 4) {
        var todosCommits = JSON.parse(xhr.responseText);
          
         calculaCommits(contribuinte, todosCommits.length, numerosContribuintes, nomeSprint);
      
      }
    });
    
    xhr.open("GET", "https://api.github.com/repos/"+$owner+"/"+$repo+"/commits?author="+contribuinte+"&since="+dataAberturaMilestone+"&until="+dataFechamentoMilestone);
    xhr.setRequestHeader("accept", "application/vnd.github.v3+json");
    xhr.setRequestHeader("authorization", "Bearer " + token);
    xhr.send();
  }
 
  function calculaCommits(contribuinte, todosCommits , numerosContribuintes, nomeSprint){
    
    total = todosCommits + total;
  
    nomeContribuinte[contador]  = contribuinte;
    qtdComitsContribuinte[contador] = todosCommits;
   
   
   if(contador == numerosContribuintes - 1){
     GraficoPessoal(nomeContribuinte, qtdComitsContribuinte, nomeSprint);
     CreateDivDisplay(6, 1, 1)
   }
    
   contador++;
 
  }

// ////////////////////////////////////////////////
// FUNÇOES DE GRAFICOS

var nomes = [];
var contribuicaoSemana = [];

function calcResultadoAdicoes( respostaJson , iteracao, qtdContribuintes, qtdSemanas, dataSetArray){
  var adicoes = [] ;
  var semanas = [];
  for(var i = 0; i < qtdSemanas; i++){
      adicoes[i] =  respostaJson.weeks[i].a
      var minhaData = new Date( respostaJson.weeks[i].w * 1000);
      let ye = new Intl.DateTimeFormat('en', { year: '2-digit' }).format(minhaData);
      let mo = new Intl.DateTimeFormat('en', { month: '2-digit' }).format(minhaData);
      let da = new Intl.DateTimeFormat('en', { day: '2-digit' }).format(minhaData);
      semanas[i] =   `${da}/${mo}/${ye}`;
  }
  var randomColor = Math.floor(Math.random()*16777215).toString(16);
  dataSetArray[iteracao] = {
    
    label: respostaJson.author.login,
    backgroundColor: "#" + randomColor ,
    data: adicoes
  }

  if(iteracao == qtdContribuintes - 1){
       GraficoGrupoAdicoes(dataSetArray,semanas )
       CreateDivDisplay(6, 2, 2);

  }

}

function getDadosSemanaisContribuinteAdicoes(qtdContribuintes, qtdSemanas, respostaJson){

  var dataSetArray = [];
  for(var i = 0; i < qtdContribuintes ; i++){
  
    calcResultadoAdicoes( respostaJson[i] , i, qtdContribuintes, qtdSemanas, dataSetArray)
  }
}

export function geracaoPorGrupoAdicoes( token, $owner, $repo){

  var xhr = new XMLHttpRequest();

  xhr.addEventListener("readystatechange", function() {
    if(xhr.readyState === 4) {

      var respostaJson = JSON.parse(xhr.responseText)
      var qtdContribuintes = respostaJson.length
      var qtdSemanas = respostaJson[0].weeks.length
      
      getDadosSemanaisContribuinteAdicoes(qtdContribuintes, qtdSemanas, respostaJson);
    }
  });
  
  xhr.open("GET", "https://api.github.com/repos/"+$owner+"/"+$repo+"/stats/contributors");
  xhr.setRequestHeader("authorization", "Bearer " + token);
  xhr.send();
  
}  

///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////


function calcResultadoDelecoes( respostaJson , iteracao, qtdContribuintes, qtdSemanas, dataSetArray){
  var adicoes = [] ;
  var semanas = [];
  for(var i = 0; i < qtdSemanas; i++){
      adicoes[i] =  respostaJson.weeks[i].d
      var minhaData = new Date( respostaJson.weeks[i].w * 1000);
      let ye = new Intl.DateTimeFormat('en', { year: '2-digit' }).format(minhaData);
      let mo = new Intl.DateTimeFormat('en', { month: '2-digit' }).format(minhaData);
      let da = new Intl.DateTimeFormat('en', { day: '2-digit' }).format(minhaData);
      semanas[i] =   `${da}/${mo}/${ye}`;
  }
  var randomColor = Math.floor(Math.random()*16777215).toString(16);
  dataSetArray[iteracao] = {

    label: respostaJson.author.login,
    backgroundColor: "#" + randomColor ,
    data: adicoes
  }

  if(iteracao == qtdContribuintes - 1){
       GraficoGrupoDelecoes(dataSetArray,semanas )
       CreateDivDisplay(6, 3, 3);

  }

}

function getDadosSemanaisContribuinteDelecoes(qtdContribuintes, qtdSemanas, respostaJson){

  var dataSetArray = [];
  for(var i = 0; i < qtdContribuintes ; i++){
  
    calcResultadoDelecoes( respostaJson[i] , i, qtdContribuintes, qtdSemanas, dataSetArray)
  }
}

export function geracaoPorGrupoDelecoes( token, $owner, $repo){

  var xhr = new XMLHttpRequest();

  xhr.addEventListener("readystatechange", function() {
    if(xhr.readyState === 4) {

      var respostaJson = JSON.parse(xhr.responseText)
      var qtdContribuintes = respostaJson.length
      var qtdSemanas = respostaJson[0].weeks.length

      getDadosSemanaisContribuinteDelecoes(qtdContribuintes, qtdSemanas, respostaJson);
    }
  });
  
  xhr.open("GET", "https://api.github.com/repos/"+$owner+"/"+$repo+"/stats/contributors");
  xhr.setRequestHeader("authorization", "Bearer " + token);
  xhr.send();
  
}  

//////////////////////////////////////////////////////////////////////////////////////////////

function calcResultadoCommits( respostaJson , iteracao, qtdContribuintes, qtdSemanas, dataSetArray){
  var adicoes = [] ;
  var semanas = [];
  for(var i = 0; i < qtdSemanas; i++){
      adicoes[i] =  respostaJson.weeks[i].c
      var minhaData = new Date( respostaJson.weeks[i].w * 1000);
      let ye = new Intl.DateTimeFormat('en', { year: '2-digit' }).format(minhaData);
      let mo = new Intl.DateTimeFormat('en', { month: '2-digit' }).format(minhaData);
      let da = new Intl.DateTimeFormat('en', { day: '2-digit' }).format(minhaData);
      semanas[i] =   `${da}/${mo}/${ye}`;
  }
  var randomColor = Math.floor(Math.random()*16777215).toString(16);
  dataSetArray[iteracao] = {
    label: respostaJson.author.login,
    backgroundColor: "#" + randomColor ,
    data: adicoes
  }

  if(iteracao == qtdContribuintes - 1){
      
       GraficoGrupoCommits(dataSetArray,semanas )
       CreateDivDisplay(6, 4, 4);

  }

}

function getDadosSemanaisContribuinteCommits(qtdContribuintes, qtdSemanas, respostaJson){

  var dataSetArray = [];
  for(var i = 0; i < qtdContribuintes ; i++){
  
    calcResultadoCommits( respostaJson[i] , i, qtdContribuintes, qtdSemanas, dataSetArray)
  }
}

export function geracaoPorGrupoCommits( token, $owner, $repo){

  var xhr = new XMLHttpRequest();

  xhr.addEventListener("readystatechange", function() {
    if(xhr.readyState === 4) {

      var respostaJson = JSON.parse(xhr.responseText)
      var qtdContribuintes = respostaJson.length
      var qtdSemanas = respostaJson[0].weeks.length
 
       getDadosSemanaisContribuinteCommits(qtdContribuintes, qtdSemanas, respostaJson);
    }
  });
  
  xhr.open("GET", "https://api.github.com/repos/"+$owner+"/"+$repo+"/stats/contributors");
  xhr.setRequestHeader("authorization", "Bearer " + token);
  xhr.send();
  
} 