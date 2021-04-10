export function criarPullRequest() {

//CRIANDO MODAL APÓS FECHAMENTO DA MILESTONE
    const modal = document.createElement('div');
    modal.innerHTML =
`<style> 
    .modal {
        width: 100vw;
        height: 100vh;
        background: rgba(0,0,0,.5);
        position: fixed;
        top: 0px;
        left: 0px;
        z-index: 2000;
        display: none;
        justify-content: center;
        align-items: center;
    }

    .modal.mostrar {
        display: flex;
    }

    .modal-dialog {
        background: white;
        width: 40%;
        min-width: 300px;
        padding: 40px;
        position: relative;
    }


    .mostrar .modal-dialog {
        animation: modal .3s;
    }

    .close {
        position: absolute;
        font-size: 1.2em;
        top: 0px;
        right: 0px;
        cursor: pointer;
    }


    </style>


    <div class="modal" id="modal-mensagem">
        <div class="modal-dialog">
            <div class="modal-content">
                <div class="modal-header">

                    <button type="button" class="close" id="fechar" data-dismiss="modal">
                    ×
                    </button>

                    <h4 class="modal-title">Insira as informações abaixo para a solicitação do Pull Request</h4>
                </div>
                <div class="modal-body">
                    
                <form>
                    <fieldset>
                        
                        <label> Qual a branch para merge? &nbsp; </label>
                        <input type="text" id = "currentBranch">
                        <br> 
                        <label> Qual a branch destino?&nbsp; </label>
                        <input type="text" id = "recieveBranch">
                        <br> 
                        <br> 
                        <label> Quais foram as issues relacionadas? (ex.: #10 #11)&nbsp; </label>
                        <input type="text" id = "issues">
                        <br> 
                        <br>
                        <label> Quais foram as alterações feitas?&nbsp; </label> <br> 
                        <input type = "checkbox" id = "documentação" name = "interesse" valor = "documentação">
                        <label for = "documentação"> Alteração em documentação </label>
                        <br> 
                        <input type = "checkbox" id = "funcionalidade" name = "interesse" valor = "funcionalidade">
                        <label for = "funcionalidade"> Nova funcionalidade </label>
                        <br> 
                        <input type = "checkbox" id = "funcionalidadeModificada" name = "interesse" valor = "funcionalidadeModificada">
                        <label for = "funcionalidadeModificada"> Alteração em funcionalidade </label>
                        <br> 
                        <input type = "checkbox" id = "correçãoBug" nome = "interesse" valor = "correçãoBug">
                        <label for = "correçãoBug"> Correção de bug </label>
                        <br> 
                        <input type = "checkbox" id = "outro" nome = "interesse" valor = "outro">
                        <label for = "outro"> Outro &nbsp; </label>
                        <input type = "text" id = "outraOpcao" nome = "outro">
                        
                        
                    </fieldset>
                    </form>

                </div>
                <div class="modal-footer">
                    <button type="button" class="btn btn-default" data-dismiss="modal" id = "submit">Concluir</button>
                </div>
            </div>
        </div>
    </div>

    <script src="https://code.jquery.com/jquery-3.1.1.min.js"></script>
    <script src="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/js/bootstrap.min.js"></script>
    `
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

    //EVENTO CLICK NO BOTÃO SUBMIT DO MODAL
document.addEventListener("click", function (e) {
    if(e.target.id == "submit") {
      
      var chkDoc = document.getElementById("documentação");
      var chkFuncionalidade = document.getElementById("funcionalidade");
      var chkFuncionalidadeModificada = document.getElementById("funcionalidadeModificada");
      var chkBug = document.getElementById("correçãoBug");
      var chkOutro = document.getElementById("outro");
      var issues = document.getElementById("issues");
      var recieveBranch = document.getElementById("recieveBranch");
      var currentBranch = document.getElementById("currentBranch");
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
  
  const getFormAction = localStorage.getItem('getFormAction');
 
  //ESCOPO DO PULL REQUEST
  var data = JSON.stringify({
        "title": `# Fechamento da Milestone ${getNumberMilestone(String(getFormAction).split("/"))}`,
        "body": `# Fechamento da Milestone ${getNumberMilestone(String(getFormAction).split("/"))} \n## Descrição \nSolicita-se um Pull Request para que seja feito o merge das alterações realizadas da branch ${currentBranch.value} para a branch ${recieveBranch.value}. \n## Issue(s) Relacionada(s) \n${issues.value} \n## Tipo de Alteração \nForam feitas as seguintes alterações na branch ${currentBranch.value}: ${alteracoes}`,
        "head": currentBranch.value,
        "base": recieveBranch.value
      });
      
  
    //VALORES A SEREM PASSADOS PARA API
    var valuesAPI = String(getFormAction).split("/");
    const $owner = getOwner(valuesAPI);
    const $repo = getRepositori(valuesAPI);
    const $NumberMilestone = getNumberMilestone(valuesAPI);
    var token = localStorage.getItem('token');
  
  
  var xhr = new XMLHttpRequest();
     xhr.addEventListener("readystatechange", function () {
        if (this.readyState === 4) {
         
        }
      });
     
      xhr.open("POST", "https://api.github.com/repos/" + $owner + "/" + $repo + "/pulls");
      xhr.setRequestHeader("accept", "application/vnd.github.v3+json");
      xhr.setRequestHeader("content-type", "application/json");
      xhr.setRequestHeader("authorization", "Bearer " + token);
      
  
      xhr.send(data);

    //FECHANDO MODAL APÓS CONCLUIR INSTRUÇÕES
      document.getElementById("modal-mensagem").classList.remove('mostrar');
    }})
  
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

//////////////////////////////////////////////////////////////////////
 
