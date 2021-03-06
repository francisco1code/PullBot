import {criarRelatorio} from './relatorio.js';
export function criarPullRequest() {
  
  var xhr = new XMLHttpRequest();
  var owner = localStorage.getItem('owner');
  var repo = localStorage.getItem('repo');

  xhr.addEventListener("readystatechange", function() {
    if(xhr.readyState === 4) {
  
      var branches = JSON.parse(xhr.responseText);
        var optionsBranches1 = `<select id='opt1'><option></option>`;

        for(var i = 1; i <= branches.length; i++) {
          optionsBranches1 += `<option id='opt1 ${i}'>${branches[i-1].name}</option>`;
        }
        optionsBranches1 += `</select>`;
        var optionsBranches2 = optionsBranches1.replace('opt1', 'opt2');
        criarModal(optionsBranches1, optionsBranches2);
    }
  });

  xhr.open("GET", `https://api.github.com/repos/${owner}/${repo}/branches`);
  xhr.send();
}

function criarModal(optionsBranches1, optionsBranches2){
  
  //CRIANDO MODAL APÓS FECHAMENTO DA MILESTONE
    const modal = document.createElement('div');
    modal.innerHTML = `<style> .modal { width: 100vw; height: 100vh;background: rgba(0,0,0,.5);position: fixed;top: 0px;left: 0px;z-index: 2000;display: none;justify-content: center;align-items: center;}.modal.mostrar {display: flex;}.modal-dialog {background: #24292e;width: 40%;min-width: 300px;padding: 40px;position: relative.texto {color: white;}</style><div class="modal" id="modal-mensagem"><div class="modal-dialog"><div class="modal-content">    <div class="modal-header"><button type="button" class="btn" id="fechar">×</button> <center><h3 class="texto">Insira as informações abaixo para a solicitação do Pull Request:</h3></center>        <br>    </div>    <div class="modal-body">            <form>        <fieldset><label class="texto"> Qual a branch para merge?   </label> ${optionsBranches1} <br> <br> <label class="texto"> Qual a branch destino?  </label> ${optionsBranches2} <br> <br> <label class="texto"> Quais foram as issues relacionadas? (ex.: #10 #11)  </label><input type="text" id = "issues"><br> <br><label class="texto"> Quais foram as alterações feitas?  </label> <br> <input type = "checkbox" id = "documentação" class="texto"><label class="texto"> Alteração em documentação </label><br> <input type = "checkbox" id = "funcionalidade" class="texto"><label class="texto"> Nova funcionalidade </label><br> <input type = "checkbox" id = "funcionalidadeModificada" class="texto"><label class="texto"> Alteração em funcionalidade </label><br> <input type = "checkbox" id = "correçãoBug" class="texto"><label class="texto"> Correção de bug </label><br> <input type = "checkbox" id = "outro" class="texto"><label class="texto"> Outro   </label><input type = "text" id = "outraOpcao">    </fieldset></form> </div><div class="modal-footer">    <br>        <button type="button" class="btn" data-dismiss="modal" id = "submit">Concluir</button>    </div></div></div></div>`
    const body = document.body || document.getElementsByTagName("body")[0] || document.documentElement;
    body.insertBefore(modal, body.lastChild);

    //FUNÇÃO QUE ABRE O MODAL
    function iniciaModal(modalID) {
        const modal = document.getElementById(modalID);
        if (modal) {
            modal.classList.add('mostrar');
            
            //FECHAR MODAL APERTANDO O "X"
            modal.addEventListener('click', function (e) {
                if (e.target.id == 'fechar'){
                    modal.classList.remove('mostrar');
                }
            })
        }
    }

    iniciaModal("modal-mensagem")

  //EVENTO CLICK NA LISTA DE BRANCHES PARA MERGE (branch mergeada)
  document.addEventListener("click", function (e) {

    if(e.target.id == "opt1") {
      window.currentBranch = e.target.value;
    }
  })

  //EVENTO CLICK NA LISTA DE BRANCHES PARA MERGE (branch destino)
  document.addEventListener("click", function (e) {

    if(e.target.id == "opt2") {
      window.recieveBranch = e.target.value;
    }
  })

  //EVENTO CLICK NO BOTÃO SUBMIT DO MODAL
  document.addEventListener("click", function (e) {

    if(e.target.id == "submit") {
        
      var chkDoc = document.getElementById("documentação");
      var chkFuncionalidade = document.getElementById("funcionalidade");
      var chkFuncionalidadeModificada = document.getElementById("funcionalidadeModificada");
      var chkBug = document.getElementById("correçãoBug");
      var chkOutro = document.getElementById("outro");
      var issues = document.getElementById("issues");
      var alteracoes = '';
  
  //CONSTRUINDO STRING COM ALTERAÇÕES FEITAS NA BRANCH
      if (chkDoc.checked) {
        alteracoes = `${alteracoes} \n* Alteração em documentação`
      }
  
      if (chkFuncionalidade.checked) {
        alteracoes = `${alteracoes} \n* Nova funcionalidade`
      }
  
      if (chkFuncionalidadeModificada.checked) {
        alteracoes = `${alteracoes} \n* Alteração em funcionalidade`
      }
  
      if (chkBug.checked) {
        alteracoes = `${alteracoes} \n* Correção de bug`
      }
  
      if (chkOutro.checked) {
        alteracoes = `${alteracoes} \n* ${document.getElementById("outraOpcao").value}`
      }
    
    const milestoneName = localStorage.getItem('milestoneName');
  
    //VALORES A SEREM PASSADOS PARA API
    const $owner = localStorage.getItem('owner');
    const $repo = localStorage.getItem('repo');
    const $NumberMilestone = localStorage.getItem('NumberMilestone');
    const token = localStorage.getItem('token');
  
    //ESCOPO DO PULL REQUEST
    var data = JSON.stringify({
          "title": `# Fechamento da milestone: ${$NumberMilestone} - ${milestoneName}`,
          "body": 
                  `# Fechamento da milestone: ${$NumberMilestone} - ${milestoneName} \n## Descrição \nSolicita-se um Pull Request para que seja feito o merge das alterações realizadas da branch ${currentBranch} para a branch ${recieveBranch}. \n  ## Issue(s) Relacionada(s) \n${issues.value} \n## Tipo de Alteração \nForam feitas as seguintes alterações na branch ${currentBranch}: ${alteracoes}`,
  
          "head": currentBranch,
          "base": recieveBranch
        });
        
    var xhr = new XMLHttpRequest();
    xhr.addEventListener("readystatechange", function () {
      if (xhr.readyState === 4) {}
    });
       
    xhr.open("POST", "https://api.github.com/repos/" + $owner + "/" + $repo + "/pulls");
    xhr.setRequestHeader("accept", "application/vnd.github.v3+json");
    xhr.setRequestHeader("content-type", "application/json");
    xhr.setRequestHeader("authorization", "Bearer " + token);
    

    xhr.send(data);

  //FECHANDO MODAL APÓS CONCLUIR INSTRUÇÕES
    document.getElementById("modal-mensagem").classList.remove('mostrar');
    criarRelatorio($owner,  $repo, milestoneName);
  }}) 
}