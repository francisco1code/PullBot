# Protótipo Alta Fidelidade

## Introdução
Este documento tem por finalidade apresentar o funcionamento e funcionalidades da extensão para o navegador Google Chrome, a PullBot.

## Funcionamento
Para a ativar e começar a utilizar os recursos do PullBot, basta seguir os passos abaixo:
1. Abra o [Chrome Web Store.](https://chrome.google.com/webstore/category/extensions)
2. Localize e selecione a extensão PullBot.
3. Clique em Usar no Chrome.
4. Após isso, será pedido o Token do GitHub, para assim o pull request ser realizado adequadamente.

Feito isso, assim que se encerrar a milestone do repositório será gerado um arquivo markdown com as métricas de desenvolvimento do time. O PullBot irá gerar um pull request com o arquivo em questão, no repositório envolvido.

## Funcionalidades
O PullBot trará as seguintes métricas no arquivo markdown:

* Quantidade de issues abertas e fechadas no repositório e por integrante do grupo
* Quantidade de pull request abertos e fechados no repositório e por integrante do grupo
* Número de commits por integrante na principal branch do repositório
* Número de commits por integrande nas demais branchs do repositório
* Número de comentários em cada issue por integrante do grupo

<img src="imagens\funcionalidades_pullbot_alta_fidelidade.png" height="320px">