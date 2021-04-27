import {GraficoPessoal} from '../libraries/app.js';
export function CodigoDevicePost(){
    var xhr = new XMLHttpRequest();

    xhr.addEventListener("readystatechange", function() {
      if(this.readyState === 4) {

         
        
        const $getResponse = String(this.responseText).split("&");
        const $separeteValueDevice = $getResponse[0].split("=");
        var deviceCode = $separeteValueDevice[1];
        localStorage.setItem("key_dev", deviceCode);
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
    if(this.readyState === 4) {
      const $getResponse = String(this.responseText).split("&");
      const $separateToken = $getResponse[0].split("=");
      const $token = $separateToken[1]
      localStorage.setItem("token",$token);
    }
  });

  xhr.open("POST", "https://github.com/login/oauth/access_token?client_id=46da77694ca94b6a86d7&device_code="+keyValue+"&grant_type=urn:ietf:params:oauth:grant-type:device_code");
  xhr.setRequestHeader("Cookie", "_device_id="+keyValue+"; _gh_sess=eJ4SGU%2B24YwcePUSGoD82e%2Bm5C6pCMXSTicqWhqxjqK2q%2FdT%2BnIZRy2VT17XgsvqnrMmPA8Nm3foDTdRakuDTl5ZVWW%2F%2BzDAqvsEv6B4eoE83TNIIaC1HTZvT93ojGs8ARDPh26hSSFoUIYDHYnz6KEDJTK3hjlrX5ATkhOLy%2BDUwus78XVkwT1hhC0nIpj4Qm0YC6Z2rqNGkDeCzg6Kz5O0tSNzQxyahCC9WHLgoECgonCtnYIQ27w%2BBmzQ%2FWIqRmaUM%2BPRUOZBGmttLbSEhX4FaHUNIlglvwjNx9R34UAcaVkO--YFp0BPOo4pjLQIHV--aQrfy79bV3QfnmGMwYPhGw%3D%3D; _octo=GH1.1.2068834575.1616879702; logged_in=no");

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
    if(this.readyState === 4) {
     var recebeContribuintes = JSON.parse(this.responseText);
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
      if(this.readyState === 4) {
        var b = String(this.responseText).split('url:')
        
       var resposta = JSON.parse(this.responseText);
      
       const resultadoProcura = milestoneDesejada(numeroMilestone,resposta, resposta.length)
       
       var nomeSprint = resultadoProcura.title
        var dataAberturaMilestone =  resultadoProcura.created_at
        var dataFechamentoMilestone = resultadoProcura.closed_at
        console.log( resultadoProcura.created_at)
       
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
      if(this.readyState === 4) {
        var todosCommits = JSON.parse(this.responseText);
          
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
     console.log(nomeContribuinte)
     console.log(qtdComitsContribuinte)
     GraficoPessoal(nomeContribuinte, qtdComitsContribuinte, nomeSprint)
   }
    
   contador++;
 
  }