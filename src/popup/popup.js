
import {contribuinteRepositorio} from '../modules/apiServices.js';
chrome.storage.sync.get(['key'], function(result) {
  var dados = result.key;
 

  const $owner = dados[2]
  const $repo = dados[3]
  

  contribuinteRepositorio(dados[0], dados[1] , $owner,  $repo )
});




     
  
  


//VALORES A SEREM PASSADOS PARA API



 
