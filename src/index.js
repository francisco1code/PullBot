

document.addEventListener("click", function(e) {

    
console.log("URL atual: " + window.location.pathname);

var currentUrl = String(window.location.pathname)
var urlParts = currentUrl.split("/")
console.log(urlParts)

    if(urlParts[3] == "milestones" && urlParts[0] == ""){

    var text = e.path[0].classList
    console.log(e)
    
    if(String(text) == 'btn-link'){
    window.alert("closed")
    }
}



});

/*const $btnClose = document.querySelector('.d-inline-block.mr-2 button')
/*/
