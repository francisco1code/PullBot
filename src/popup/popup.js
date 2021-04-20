import {GraficoPessoal} from '../CHART/app.js';
//import {pdfmakeMin} from './pdfmakeMin.js';

const $btn_download = document.querySelector("#btn-download")
const $canvas = document.querySelector("#canvas")

document.addEventListener('DOMContentLoaded', function(){
    GraficoPessoal()
});

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

     