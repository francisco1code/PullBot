# Protótipo de baixa fidelidade

## Introdução
Este documento tempo por finalidade apresentar as funcionalidades básicas e triviais do projeto, sendo sujeito a alterações com o caminhar das atividades.

## Funcionamento
O PullBot é um bot de produtividade do github que gera relatórios .md a cada fechamento de milestone. Nestes relatórios estão informações a respeito de toda a sprint em questão. Na lista abaixo estão algumas infomações que estarão presentes nos relatórios gerados:

* Quantidade de issues abertas e fechadas;
* Quantidade de caracteres escritas em cada issue;
* Quantidade de pull requests abertos e fechados;
* Número de commits por integrante do repositório;
* Número de comentários em cada issue por integrante.

<img src="imagens\funcionamento_pullbot.png" height="320px">

Após gerado o arquivo .md, o bot abre um pull request com o arquivo em questão.

A comunicação da aplicação com o github será feita via API do github. Ela trará todas as infomações necessárias para a execução do projeto em questão.

<img src="\imagens\PullBot_API.png" height="250px" width="490px">