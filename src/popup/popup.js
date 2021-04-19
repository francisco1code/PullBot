import {GraficoPessoal} from '../CHART/app.js';
document.addEventListener('DOMContentLoaded', function()
{
   
   
    GraficoPessoal()
    document.getElementById('test').textContent = 'SUCCEED';

  
        /*Get image of canvas element*/
        var url_base64jp = document.getElementById("chart").toDataURL("image/pdf");
        /*get download button (tag: <a></a>) */
        var a =  document.getElementById("download");
        /*insert chart image url to download button (tag: <a></a>) */
        a.href = url_base64jp;
    
   
});

     