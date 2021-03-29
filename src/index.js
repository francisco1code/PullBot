//URL DAS PÁGINAS
var currentUrl = String(window.location.href);
var urlParts = currentUrl.split("/");

document.addEventListener("click", function (e) {
  
    //VALIDA ENTRADA EM GITHUB MILESTONES
    if (urlParts[5] == "milestones" && urlParts[2] == "github.com") {
  
    //BOTOES    
    var closeMilestoneButton = document.querySelector(".d-inline-block.mr-2 .btn-link");
    var getFormAction = document.querySelectorAll('form[class="d-inline-block mr-2"]')[0].action;
  
  
    //VALIDA FECHAMENTO DE MILESTONE
    if (e.path[0] == closeMilestoneButton &&
        closeMilestoneButton.textContent.toLowerCase() == "close") {
        var base = document.querySelectorAll("form.d-inline-block.mr-2").action;
        
        var milestoneName = document.querySelector(".milestone-title-link").innerText;
        
      // PEGAR VALORES DE BRANCHS
    const currentBrnach =  window.prompt("Qual branch para merge ?");
    const recieveBranch = window.prompt("Qual branch destino ?");    
    
      var data = JSON.stringify({
            "title": "Fechamento do Evento Click Milestone e Pull Request Automatico",
            "body": "Este merge foi feito com o próprio código",
            "head": currentBrnach,
            "base": recieveBranch
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
              windoe.alert(this.responseText);
            }
          });
         
          xhr.open("POST", "https://api.github.com/repos/" + $owner + "/" + $repo + "/pulls");
          xhr.setRequestHeader("accept", "application/vnd.github.v3+json");
          xhr.setRequestHeader("content-type", "application/json");
          xhr.setRequestHeader("authorization", "Bearer " + token);
          
  
          xhr.send(data);
        }
    }
  });
  if(urlParts[2] == "github.com" && urlParts[3] == "login" && urlParts[4] == "device"  && urlParts[5] != "success" &&  urlParts[5] != "confirmation"){
    
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

  if(urlParts[2] == "github.com" && urlParts[3] == "login" && urlParts[4] == "device" && urlParts[5] == "success" ){

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
   