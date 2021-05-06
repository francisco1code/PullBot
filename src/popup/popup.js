import {contribuinteRepositorio} from '../modules/apiServices.js';
import {geracaoPorGrupoAdicoes} from '../modules/apiServices.js';
import {geracaoPorGrupoDelecoes} from '../modules/apiServices.js';
import {geracaoPorGrupoCommits} from '../modules/apiServices.js';

/*CREATE A DIV DISPLAY*/
function CreateDivDisplay( DivAmount, numerDivPriority, start){

	createClass('.plane0', "display: none; z-index: 0;");
	createClass('.plane1', "z-index: 1;");
	
    for(i = 1; i <=  DivAmount; i++){
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

chrome.storage.sync.get(['key'], function(result) {
  var dados = result.key;
 

  const $owner = dados[2]
  const $repo = dados[3]
  

  contribuinteRepositorio(dados[0], dados[1] , $owner,  $repo )
  // geracaoPorGrupoAdicoes(dados[1] ,$owner,  $repo);
});



