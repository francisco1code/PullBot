import {contribuinteRepositorio} from '../modules/apiServices.js';
import {geracaoPorGrupo} from '../modules/apiServices.js';

chrome.storage.sync.get(['key'], function(result) {
  var dados = result.key;
 

  const $owner = dados[2]
  const $repo = dados[3]
  

  contribuinteRepositorio(dados[0], dados[1] , $owner,  $repo )
  geracaoPorGrupo();
});



