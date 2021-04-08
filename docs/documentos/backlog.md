# Backlog do Produto

### Histórico de Revisão
| Data | Versão | Descrição | Autor |  
| :--: | :--:   | :--:      |  :--:  | 
| 04/03/2021 | 1.0 | Primeiro protótipo de Backlog| Arthur Melo
| 17/03/2021 | 1.1 | Refatoração do Backlog| Arthur Melo
| 07/04/2021 | 1.1 | Refatoração do Backlog| Arthur Melo
# Épicos 
| ID | Descrição |
| :---        |    :----:   |       
| EP01 | Comunicação via API |
| EP02 | Resultado da sprint gerado para usuário |
| EP03 | Extensão Google Chrome para GitHub |
| EP04 | Gráficos de relatório |
 
# Features
| ID      | Descrição | 
| :---        |    :----:   |       
| FT01 | Pull request automático via GitHub API    |
| FT02 | Commit automático via GitHub API  |
| FT03 | Receber relatório de desenvolvimento no fechamentos de milestone  |  
| FT04 | Geração de gráficos informativos da equipe|
| FT05 | Geração de gráficos informativos por contribuinte|
| FT06 | Pegar evento de fechamento de milestone automaticamente|
| FT07 | Acessibilzar extensão no Chrome|
| FT08 | Geração de texto markdown para escopo dos commits e pull requests   |
| FT09 | Autenticação via token Ouath2  |


# User Stories 
| ID | Eu, como | Desejo | Features | Épicos |
--| -- | -- | -- |  -- | 
| US01 | Usuário | desejo realizar pull requests por automação via GitHub |    FT01 | EP01|
| US02 | Usuário | Commits separados em pasta no pull request com os relatórios | FT02 |  EP01 |
| US03 | Usuário | Após fechamento de milestone, receber os relatórios | FT03 FT06  |  EP02|
| US04 | Usuário  | Receber um relatório com auxilio de gráficos de desempenho da equipe para melhorar o gerenciamento da mesma | FT04 | EP04 |
| US05 | Usuário | Receber um relatório com auxilio de gráficos de desempenho pessoal para facilitar o entendimento  | FT05 | EP04|
| US06 | Usuário | Baixar extensão no Chrome  | FT07 |  EP03|
| US07 | Usuário | Desejo receber relatório do que foi feito durante a milestone dentro do PRs feitos em markdown| FT08 | EP02