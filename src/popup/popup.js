
import {contribuinteRepositorio} from '../modules/apiServices.js';
chrome.storage.sync.get(['key'], function(result) {
  var dados = result.key;
 

  const $owner = dados[2]
  const $repo = dados[3]
  

  contribuinteRepositorio(dados[0], dados[1] , $owner,  $repo )
});
const $btn_download = document.querySelector("#btn-download")
const $canvas = document.querySelector("#canvas")





$btn_download.addEventListener('click', () => {
    
    var dataURL = $canvas.toDataURL('image/png', 1.0);
    //console.log(data)

    var docDefinition = {
        content: [
            {
                image: dataURL
            }
        ]
    }
    pdfMake.createPdf(docDefinition).open();

})


     
  
  


//VALORES A SEREM PASSADOS PARA API



 

