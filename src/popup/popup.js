import {GraficoPessoal} from '../CHART/app.js';

//import {pdfmakeMin} from './pdfmakeMin.js';
chrome.storage.sync.get(['key'], function(result) {
  var numeroMilestone = result.key;
  contribuinteRepositorio(numeroMilestone)
});
const $btn_download = document.querySelector("#btn-download")
const $canvas = document.querySelector("#canvas")

document.addEventListener('DOMContentLoaded', function(){
    GraficoPessoal()
});



$btn_download.addEventListener('click', () => {
    
    var dataURL = $canvas.toDataURL('image/png', 1.0);
    //console.log(data)

    var docDefinition = {
        content: [
            {
                image: dataURL
            }
        ]
    }
    pdfMake.createPdf(docDefinition).open();

})


     
  
  


 const $owner = 'fga-eps-mds'
 const $repo = 'PullBot'
 var total = 0;
 var contador = 0;
 let nomeContribuinte = [];
 let qtdComitsContribuinte = [];
//VALORES A SEREM PASSADOS PARA API

function contribuinteRepositorio(numeroMilestone){

 var xhr = new XMLHttpRequest();
 
 
 xhr.addEventListener("readystatechange", function() {
   if(this.readyState === 4) {
    var recebeContribuintes = JSON.parse(this.responseText);
   const $numerosContribuintes = recebeContribuintes.length;
   milestone(numeroMilestone, recebeContribuintes, $numerosContribuintes);
 
   
 }});
 
 xhr.open("GET", "https://api.github.com/repos/"+$owner+"/"+$repo+"/contributors");
 xhr.send();
 
 }
 
 function milestone(numeroMilestone, recebeContribuintes, numerosContribuintes){ 
   var xhr = new XMLHttpRequest();
 
   xhr.addEventListener("readystatechange", function() {
     if(this.readyState === 4) {
       var b = String(this.responseText).split('url:')
       
      var resposta = JSON.parse(this.responseText);
     
      const resultadoProcura = milestoneDesejada(numeroMilestone,resposta, resposta.length)
      
      console.log(numeroMilestone)
       var dataAberturaMilestone =  resultadoProcura.created_at
       var dataFechamentoMilestone = resultadoProcura.closed_at
       console.log( resultadoProcura.created_at)
      
      ProcuraContribuicao(recebeContribuintes,  numerosContribuintes, dataAberturaMilestone, dataFechamentoMilestone);
 
     }
   });
   xhr.open("GET", "https://api.github.com/repos/"+$owner+"/"+$repo+"/milestones?state=all&sort=completeness");
   xhr.setRequestHeader("accept", "application/vnd.github.v3+json");
   xhr.send();
 }

 function milestoneDesejada(numeroMilestone,resposta,  qtdMilestones){
   
   for(var i = 0; i < qtdMilestones; i++){
     if (resposta[i].number == numeroMilestone){
      
       return resposta[i];
     }
   
     
   }
 }
    
 function ProcuraContribuicao(recebeContribuintes, numerosContribuintes, dataAberturaMilestone, dataFechamentoMilestone){
 
 var i = 0;
 while(i < numerosContribuintes){
   var contribuinte = recebeContribuintes[i].login;
 
   getContribuicao(contribuinte, numerosContribuintes,  dataAberturaMilestone, dataFechamentoMilestone);
   i++;
 }
 }
 
 function getContribuicao(contribuinte, numerosContribuintes, dataAberturaMilestone, dataFechamentoMilestone){
   
   var xhr = new XMLHttpRequest();
   xhr.addEventListener("readystatechange", function() {
     if(this.readyState === 4) {
       var todosCommits = JSON.parse(this.responseText);
         
        calculaCommits(contribuinte, todosCommits.length, numerosContribuintes);
     
     }
   });
   
   xhr.open("GET", "https://api.github.com/repos/"+$owner+"/"+$repo+"/commits?author="+contribuinte+"&since="+dataAberturaMilestone+"&until="+dataFechamentoMilestone);
   xhr.setRequestHeader("accept", "application/vnd.github.v3+json");
   xhr.send();
 }

 function calculaCommits(contribuinte, todosCommits , numerosContribuintes){
   
   total = todosCommits + total;
 
   nomeContribuinte[contador]  = contribuinte;
   qtdComitsContribuinte[contador] = todosCommits;
  
  
  if(contador == numerosContribuintes - 1){
    console.log(nomeContribuinte)
    console.log(qtdComitsContribuinte)
    GraficoPessoal(nomeContribuinte, qtdComitsContribuinte)
  }
   
  contador++;

 }
 

 

