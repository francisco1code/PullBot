//DEFININDO INDEX.JS COMO UM MÓDULO PARA FAZER IMPORTAÇÕES
const script = document.createElement('script');
    script.setAttribute("type", "module");
    script.setAttribute("src", chrome.runtime.getURL('index.js'));
    const head = document.head || document.getElementsByTagName("head")[0] || document.documentElement;
    head.insertBefore(script, head.lastChild);
    
    function run(numeroMilestone) {
        // var milestoneNome = document.getElementsByClassName('mt-0 mb-2 h1 text-normal')[0].outerText;
        chrome.storage.sync.set({key: numeroMilestone}, function() {
            console.log('Value is set to ' + numeroMilestone);
           
          });
      }
     
   
    // document.addEventListener("DOMContentLoaded", run());

   
      

      document.addEventListener("click", function (e) {
        // if( currentUrl == 'https://github.com/'+$owner+'/'+$repo+'/milestones?state=closed'){
          var currentUrl = String(window.location.href);
          var urlParts = currentUrl.split("/");
       
         if(e.path[0] == "https://github.com/fga-eps-mds/PullBot/milestone/"+urlParts[6] ){
          run(urlParts[6])
         }
        

            // console.log(e.path[1])  
            // console.log(e.path[2])  
            // console.log(e.path[3])  
            // console.log(e.path[4])  
        // }
      });