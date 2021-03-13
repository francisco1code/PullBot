const express = require('express')
const app = express()
const port = 3000
const $btnClose = document.querySelector('.d-inline-block.mr-2 button')

app.get('/', (req, res) => {
  res.send('Ola Mundo!')
})

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})

/* PEGAR BOTAO CLOSE MILESTONE*/
/*const puppeteer = require('puppeteer');

async function closeCurrentmilestone(){
  const browser = await puppeteer.launch({headless: false });
  const page = await browser.newPage();
  await page.goto('https://github.com);
  await page.screenshot({ path: 'example.png' });

  await browser.close();

}*/

const puppeteer = require('puppeteer');
/*LOGIN NA CONTA DO GITHUB, ESSA CONTA É APENAS DE TESTES,FUTURAMENTE IMPLEMENTAR VIA VARIÁVEIS DE AMBIENTE*/
(async () => {
  const browser = await puppeteer.launch({ headless: true });
  const page = await browser.newPage();
  /*ENTRA NA AREA DE LOGIN E PASSA O USER E SENHA*/
  await page.goto('https://github.com/login');

  const inputLogin = 'PullBotTestes' /*CONTA TESTE PARA ENTRAR GITHUB*/
  const inputPassword = 'passocaepamonha'

  await page.type('[name="login"]', inputLogin) 
  await page.type('[name="password"]', inputPassword)
  await page.click('[name="commit"]')
  

  await browser.close();
})();