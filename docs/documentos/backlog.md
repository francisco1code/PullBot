# Backlog do Produto

### Histórico de Revisão
| Data | Versão | Descrição | Autor |  
| :--: | :--:   | :--:      |  :--:  | 
| 04/03/2021 | 1.0 | Primeiro protótipo de Backlog| Arthur Melo
| 17/03/2021 | 1.1 | Refatoração do Backlog| Arthur Melo
| 07/04/2021 | 1.2 | Refatoração do Backlog| Arthur Melo
| 08/05/2021 | 1.3 | Refatoração do Backlog| Arthur Melo

# Épicos 
| ID | Descrição |
| :---        |    :----:   |       
| EP01 | Comunicação do PullBot via API com GitHub|
| EP02 | Resultado da sprint gerado em graficos e markdown para usuário |
| EP03 | Extensão PullBot no Google Chrome |
| EP04 | Gráficos do desenvolvimento do grupo e pessoal  |
 
# Features
| ID      | Descrição | 
| :---        |    :----:   |       
| FT01 | Pull request automático via GitHub API    |
| FT02 | Receber relatório de desenvolvimento no fechamentos de milestone  |  
| FT03 | Geração de gráficos informativos da equipe|
| FT04 | Geração de gráficos informativos por contribuinte|
| FT05 | Pegar evento de fechamento de milestone automaticamente|
| FT06 | Acessibilzar extensão no Chrome|
| FT07 | Geração de texto markdown para escopo dos commits e pull requests   |
| FT08 | Autenticação via token Ouath2  |


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

# Resumos 

### O PullBot é uma extensão que pretende melhorar a forma que equipes de software trabalham em seus repositórios. Seu objetivo é automatizar tarefas como criar Prs no final de uma sprint e receber o desenvolvimento de projeto de de cada integrante de uma forma fácil. O PullBot conta com 4 gráficos que descreverão como você e seu grupo está indo durante as semanas.
###  O gráfico adições descreverá a quantidade de adições em todas as branchs durantes as semanas. Os gráficos de deleções e commits tem o mesmo intuito mas com a quantidade de deleções e commits respectivamente. O último grafico funcionará a partir da milestone desejada, por exemeplo, você esta navegando no GitHub na área de milestones do grupo e clica na milestone que desejar, no popup da extensão , estará disponível o grçafico de desempenho de cada integrante do repositório naquela milestone clicada.
### Juntamente a tudo isso, ao fechar uma milestone, o PullBot fará o dowload de um arquivo em markdown do desempenho do grupo naquela sprint, semelhante ao gráfico de milestone, porém em texto markdown.



