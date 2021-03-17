/*const $btnClose = document.querySelector('.d-inline-block.mr-2 button')
/*/

document.addEventListener("click", function (e) {
    var currentUrl = String(window.location.href);
    var urlParts = currentUrl.split("/");
    
    //VALIDA ENTRADA EM GITHUB MILESTONES
    if (urlParts[5] == "milestones" && urlParts[2] == "github.com") {

    //BOTOES    
        var closeMilestoneButton = document.querySelector(".d-inline-block.mr-2 .btn-link");
        var getFormAction = document.querySelectorAll('form[class="d-inline-block mr-2"]')[0].action;

    //VALORES A SEREM PASSADOS PARA API
        var valuesAPI = String(getFormAction).split("/");
        var owner = getOwner(valuesAPI);
        var repo = getRepositori(valuesAPI);
        var NumberMilestone = getNumberMilestone(valuesAPI);

       
    //VALIDA FECHAMENTO DE MILESTONE
        if (e.path[0] == closeMilestoneButton &&
            closeMilestoneButton.textContent.toLowerCase() == "close") {
                var base = document.querySelectorAll("form.d-inline-block.mr-2").action
                console.log(base)
            var milestoneName = document.querySelector(".milestone-title-link").innerText;
             window.alert("Closed: " + milestoneName);

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


function getOwner(valuesAPI){

    var owner = valuesAPI[3];
    console.log(owner)
    return owner;

}
function getRepositori(valuesAPI){
    var repo = valuesAPI[4]
    console.log(repo)
    return repo;
}
 function getNumberMilestone(valuesAPI){
    var milestoneNumber = valuesAPI[6]
    console.log(milestoneNumber)
    return milestoneNumber;
 }
   