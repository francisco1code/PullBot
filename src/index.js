

document.addEventListener("click", function(e) {

    var currentUrl = String(window.location.pathname)
    var urlParts = currentUrl.split("/")
    console.log(urlParts)

    if(urlParts[3] == "milestones" && urlParts[0] == ""){
    const $owner = urlParts[2]
    const $repo = urlParts[3]

    var text = e.path[0].classList
    
    if(String(text) == 'btn-link'){
    window.alert("closed")
    }
}



});

/*const $btnClose = document.querySelector('.d-inline-block.mr-2 button')
/*/
