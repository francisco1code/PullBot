import {GraficoPessoal} from '../CHART/app.js';

const $btn_download = document.querySelector(".btn-download")
const $canvas = document.querySelector("#canvas")

document.addEventListener('DOMContentLoaded', function(){
    GraficoPessoal()
    document.getElementById('test').textContent = 'SUCCEED';

  
        /*Get image of canvas element*/
        var url_base64jp = document.getElementById("chart").toDataURL("image/pdf");
        /*get download button (tag: <a></a>) */
        var a =  document.getElementById("download");
        /*insert chart image url to download button (tag: <a></a>) */
        a.href = url_base64jp;
});

document.addEventListener('click', () => {
    var data = $canvas.toDataURL('image/png', 1.0)
    console.log(data)

    var docDefinition = {
        content: [
            {
                image: data
            }
        ]
    }
    pdfMake.createPdf(docDefinition).download();

})

     