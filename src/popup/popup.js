import {contribuinteRepositorio} from '../modules/apiServices.js';
import {geracaoPorGrupoAdicoes} from '../modules/apiServices.js';
import {geracaoPorGrupoDelecoes} from '../modules/apiServices.js';
import {geracaoPorGrupoCommits} from '../modules/apiServices.js';
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
function CreateDivDisplay( DivAmount, numerDivPriority, start){

	createClass('.plane0', "display: none ; z-index: -1;");
	createClass('.plane1', "z-index: 1; display: grid !important;");
	
    for(var i = 1; i <=  DivAmount; i++){
        if (i <= numerDivPriority & i >= start){
            var DivPriority = eval(new String('div'+i))
            applyClass('plane1', DivPriority);
            applyClass('plane0',DivPriority, true);
        }
        else
        {
            var DivSecundary = eval(new String('div'+i))
             applyClass('plane0',DivSecundary);
             applyClass('plane1',DivSecundary, true);
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
	if(!element) return;
	if(doRemove){
		element.className = element.className.replace(new RegExp("\\b"+name+"\\b","g"),"");
	}else{
		element.className = element.className + " "+name;
	}
}

const $div1 = document.getElementById('b1')
const $div2 = document.getElementById('b2')
const $div3 = document.getElementById('b3')
const $div4 = document.getElementById('b4')

$div1.addEventListener('click', ()=> {
  CreateDivDisplay(6, 6, 6)
  const owner = localStorage.getItem("owner")
  let repo = localStorage.getItem("repo")
  let numeroMilestone = localStorage.getItem("numeroMilestone")
  let token = localStorage.getItem("token")
  // console.log(owner, repo,numeroMilestone, token)
  contribuinteRepositorio(numeroMilestone, token , owner,  repo )
 
});

$div2.addEventListener('click', ()=> {
  CreateDivDisplay(5, 2, 2)
  const owner = localStorage.getItem("owner")
  let repo = localStorage.getItem("repo")
  let numeroMilestone = localStorage.getItem("numeroMilestone")
  let token = localStorage.getItem("token")
  // console.log(owner, repo,numeroMilestone, token)
  geracaoPorGrupoAdicoes( token , owner,  repo )
 
});

$div3.addEventListener('click', ()=> {
  CreateDivDisplay(5, 3, 3)
  const owner = localStorage.getItem("owner")
  let repo = localStorage.getItem("repo")
  let token = localStorage.getItem("token")
  // console.log(owner, repo,numeroMilestone, token)
  geracaoPorGrupoDelecoes( token , owner,  repo )
 
});

$div4.addEventListener('click', ()=> {
  CreateDivDisplay(6, 6, 6)
  const owner = localStorage.getItem("owner")
  let repo = localStorage.getItem("repo")
  let numeroMilestone = localStorage.getItem("numeroMilestone")
  let token = localStorage.getItem("token")
  // console.log(owner, repo,numeroMilestone, token)
  geracaoPorGrupoCommits( token , owner,  repo )
 
});


