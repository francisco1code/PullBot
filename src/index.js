const express = require('express')
const app = express()
const port = 3000
const $btnClose = document.querySelector('.d-inline-block.mr-2 button')

app.get('/', (req, res) => {
  res.send('Ola Mundo!')
})


document.addEventListener("click", function(e) {
  console.log("URL atual: " + window.location.pathname);
  console.log(e);
});


$btnClose.addEventListener("click", () => {  
  console.log('Hello word');

})