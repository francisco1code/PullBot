document.addEventListener('DOMContentLoaded', function()
{
    var ctx = document.getElementById("chart").getContext('2d');
    var myChart = new Chart(ctx, {
        type: 'doughnut',
        data: {
            labels: [ 'a', 'b', 'c', 'd' ],
                datasets: [{
                backgroundColor: [
                    "#59be5b",
                    "#d56328",
                    "#ff1b2d",
                    "#0078d7"
                ],
                data: [ 1, 2, 3, 4 ]
            }]
        }
    });

    document.getElementById('test').textContent = 'SUCCEED';

  
        /*Get image of canvas element*/
        var url_base64jp = document.getElementById("lineChart").toDataURL("image/pdf");
        /*get download button (tag: <a></a>) */
        var a =  document.getElementById("download");
        /*insert chart image url to download button (tag: <a></a>) */
        a.href = url_base64jp;
    
   
});

     