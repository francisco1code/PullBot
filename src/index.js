document.addEventListener("click", function (e) {
    var currentUrl = String(window.location.href);
    var urlParts = currentUrl.split("/");
    
    //VALIDA ENTRADA EM GITHUB MILESTONES
    if (urlParts[5] == "milestones" && urlParts[2] == "github.com") {
  
    //BOTOES    
    var closeMilestoneButton = document.querySelector(".d-inline-block.mr-2 .btn-link");
    var getFormAction = document.querySelectorAll('form[class="d-inline-block mr-2"]')[0].action;
  
  
    //VALIDA FECHAMENTO DE MILESTONE
    if (e.path[0] == closeMilestoneButton &&
        closeMilestoneButton.textContent.toLowerCase() == "close") {
        var base = document.querySelectorAll("form.d-inline-block.mr-2").action;
        console.log(base);
        var milestoneName = document.querySelector(".milestone-title-link").innerText;
        
      // PEGAR VALORES DE BRANCHS
    const currentBrnach =  window.prompt("Qual branch para merge ?");
    const recieveBranch = window.prompt("Qual branch destino ?");    
    
      var data = JSON.stringify({
            "title": "Amazing new feature",
            "body": "Please pull this in!",
            "head": currentBrnach,
            "base": recieveBranch
          });
          
        //VALORES A SEREM PASSADOS PARA API
      var valuesAPI = String(getFormAction).split("/");
      const $owner = getOwner(valuesAPI);
      const $repo = getRepositori(valuesAPI);
      const $NumberMilestone = getNumberMilestone(valuesAPI);
  
    
  
        /*  xhr.addEventListener("readystatechange", function () {
            if (this.readyState === 4) {
              console.log(this.responseText);
            }
          });
          
          xhr.open("POST", "https://api.github.com/repos/" + $owner + "/" + $repo + "/pulls");
          xhr.setRequestHeader("accept", "application/vnd.github.v3+json");
          xhr.setRequestHeader("content-type", "application/json");
          xhr.setRequestHeader("authorization","Bearer 5775e10c014ae90cbdabadbe9b2595ad35437559" );
  
          xhr.send(data);*/
        }
    }
  });
  
  
  
  
  function loginDevice(codeUser){
  
    var currentUrl = String(window.location.href);
    var urlParts = currentUrl.split("/");
    if(urlParts[2] == "github.com" && urlParts[3] == "login" && urlParts[4] == "device"){
    document.getElementById("user-code-0").value = (codeUser.subStr(0, 0));
    document.getElementById("user-code-1").value = (codeUser.subStr(1, 1));
    document.getElementById("user-code-2").value = (codeUser.subStr(2, 2));
    document.getElementById("user-code-3").value = (codeUser.subStr(3, 3));
    document.getElementById("user-code-4").value = (codeUser.subStr(5, 5));
    document.getElementById("user-code-5").value = (codeUser.subStr(6, 6));
    document.getElementById("user-code-6").value = (codeUser.subStr(7, 7));
    document.getElementById("user-code-7").value = (codeUser.subStr(8, 8));
    
  }
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
   