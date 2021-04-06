var chkDoc = document.getElementById("documentação");
var chkFuncionalidade = document.getElementById("funcionalidade");
var chkFuncionalidadeModificada = document.getElementById("funcionalidadeModificada");
var chkBug = document.getElementById("correçãoBug");
var chkOutro = document.getElementById("outro");
var issues = document.getElementById("issues");
var recieveBranch = document.getElementById("recieveBranch");
var currentBranch = document.getElementById("currentBranch");
var escolhidos = '';

document.getElementById("submit").onclick = function () {
    if (chkDoc.checked) {
        escolhidos = `${escolhidos} \nAlteração em documentação`
    }

    if (chkFuncionalidade.checked) {
        escolhidos = `${escolhidos} \nNova funcionalidade`
    }

    if (chkFuncionalidadeModificada.checked) {
        escolhidos = `${escolhidos} \nAlteração em funcionalidade`
    }

    if (chkBug.checked) {
        escolhidos = `${escolhidos} \nCorreção de bug`
    }

    if (chkOutro.checked) {
        escolhidos = `${escolhidos} \n${document.getElementById("outraOpcao").value}`
    }

    var url_atual = window.location.href;
    window.close(url_atual);
    };