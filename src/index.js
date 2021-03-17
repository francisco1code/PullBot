/*const $btnClose = document.querySelector('.d-inline-block.mr-2 button')
/*/

document.addEventListener("click", function (e) {
    var currentUrl = String(window.location.href);
    var urlParts = currentUrl.split("/");
    
    //VALIDA ENTRADA EM GITHUB MILESTONES
    if (urlParts[5] == "milestones" && urlParts[2] == "github.com") {
        
        var closeMilestoneButton = document.querySelector(".d-inline-block.mr-2 .btn-link");
        //VALIDA FECHAMENTO DE MILESTONE
        if (e.path[0] == closeMilestoneButton &&
            closeMilestoneButton.textContent.toLowerCase() == "close") {
               
            var milestoneName = document.querySelector(".milestone-title-link").innerText;
            // window.alert("Closed: " + milestoneName);

            var xhttp = new XMLHttpRequest();
            xhttp.onreadystatechange = function () {
                if (this.readyState == 4 && this.status == 200) {
                    // Typical action to be performed when the document is ready:
                    alert(xhttp.responseText);
                }
            };
            xhttp.open("GET", "https://github.com/fga-eps-mds/PullBot/milestones");
            xhttp.send();

        }
    }
});
