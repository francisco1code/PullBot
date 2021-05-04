import {contribuinteRepositorio} from '../modules/apiServices.js';
import {geracaoPorGrupoAdicoes} from '../modules/apiServices.js';
import {geracaoPorGrupoDelecoes} from '../modules/apiServices.js';
import {geracaoPorGrupoCommits} from '../modules/apiServices.js';

chrome.storage.sync.get(['key'], function(result) {
  var dados = result.key;
 

  const $owner = dados[2]
  const $repo = dados[3]
  

  // contribuinteRepositorio(dados[0], dados[1] , $owner,  $repo )
  geracaoPorGrupoAdicoes(dados[1] ,$owner,  $repo);
});



