import {contribuinteRepositorio} from '../modules/apiServices.js';
import {geracaoPorGrupoAdicoes} from '../modules/apiServices.js';
import {geracaoPorGrupoDelecoes} from '../modules/apiServices.js';
import {geracaoPorGrupoCommits} from '../modules/apiServices.js';
import {CreateDivDisplay} from '../modules/apiServices.js';
chrome.storage.sync.get(['key'], function(result) {
  var dados = result.key;
 

  const owner = dados[2]
  const repo = dados[3]
  const numeroMilestone = dados[0]
  const token = dados[1]
  localStorage.setItem("owner", owner)
  localStorage.setItem("repo", repo);
  localStorage.setItem("numeroMilestone", numeroMilestone)
  localStorage.setItem("token", token);
});
/*CREATE A DIV DISPLAY*/

const $div1 = document.getElementById('b1')
const $div2 = document.getElementById('b2')
const $div3 = document.getElementById('b3')
const $div4 = document.getElementById('b4')

var displayLoad = true;
$div1.addEventListener('click', ()=> {
  if(displayLoad){
    CreateDivDisplay(6, 6, 6);
    displayLoad = false;
    const owner = localStorage.getItem("owner")
    let repo = localStorage.getItem("repo")
    let numeroMilestone = localStorage.getItem("numeroMilestone")
    let token = localStorage.getItem("token")
    // console.log(owner, repo,numeroMilestone, token)
    contribuinteRepositorio(numeroMilestone, token , owner,  repo )
  }
  CreateDivDisplay(6, 1, 1);
 
 
});

var displayLoad2 = true;
$div2.addEventListener('click', ()=> {

  if(displayLoad2){
    CreateDivDisplay(6, 6, 6);
    displayLoad2 = false;
    const owner = localStorage.getItem("owner")
    let repo = localStorage.getItem("repo")
    let numeroMilestone = localStorage.getItem("numeroMilestone")
    let token = localStorage.getItem("token")
    // console.log(owner, repo,numeroMilestone, token)
    geracaoPorGrupoAdicoes( token , owner,  repo )
  }
  CreateDivDisplay(6, 2, 2);
 
});

var displayLoad3 = true;
$div3.addEventListener('click', ()=> {
  if(displayLoad3){
    CreateDivDisplay(6, 6, 6);
    displayLoad3 = false;
    const owner = localStorage.getItem("owner")
    let repo = localStorage.getItem("repo")
    let token = localStorage.getItem("token")
    // console.log(owner, repo,numeroMilestone, token)
    geracaoPorGrupoDelecoes( token , owner,  repo )
  }
  CreateDivDisplay(6, 3, 3);
  
 
});

var displayLoad4 = true;
$div4.addEventListener('click', ()=> {

  if(displayLoad4){
    CreateDivDisplay(6, 6, 6);
    displayLoad4 = false;
    const owner = localStorage.getItem("owner")
    let repo = localStorage.getItem("repo")
    let numeroMilestone = localStorage.getItem("numeroMilestone")
    let token = localStorage.getItem("token")
    // console.log(owner, repo,numeroMilestone, token)
    geracaoPorGrupoCommits( token , owner,  repo )
  }
  CreateDivDisplay(6, 4, 4);
 
});


