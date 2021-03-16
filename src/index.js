document.addEventListener("click", function(e) {

    
console.log("URL atual: " + window.location.pathname);

var text = e.path[0].classList
    console.log(e)

    if(String(text) == 'btn-link'){
    window.alert("closed")
    }
});

/*const $btnClose = document.querySelector('.d-inline-block.mr-2 button')
/*/
