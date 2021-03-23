# Histórico de Versões
Data | Versão | Descrição | Autor(es)
:-:|:-:|:-:|:-:
28/01/2021 | 1.0.0 | Criação do documento | Lorrayne Alves Cardozo

# 1.Introdução
## 1.1.	Objetivo
Este documento tem a finalidade de expor detalhadamente o propósito do projeto PullBot, assim como a relação com os envolvidos no projeto, as funcionalidade e utilidades do produto, afim de que garanta o pleno entendimento do leitor independente de um prévio conhecimento técnico sobre desenvolvimento de software.
## 1.2.	Escopo
O documento apresenta informações sobre o projeto a fim de possibilitar entendimento claro e detalhado sobre o objetivo e funcionalidades do produto, tecnologias utilizadas e seus possíveis usuários.
## 1.3.	Definições, Acrônimos e Abreviações
Acrônimo/Abreviação | Definição
:-:|:-:
Unb | Universidade de Brasília
MDS | Métodos de Desenvolvimento de Software
FGA|Faculdade do Gama
## 1.4. Referências Bibliográficas
International Business Machines Corporation: Documento de Visão. Disponível em: <https://www.ibm.com/support/knowledgecenter/pt-br/SSWMEQ_4.0.6/com.ibm.rational.rrm.help.doc/topics/r_vision_doc.html>. Acesso em: 27 de fevereiro de 2021.
## 1.5. Visão Geral
Produzido a partir do processo RUP - Rational Unified Process, o presente documento é organizado com as ideias, recursos, descrição e posicionamento do produto. Apresentando, deste modo, uma visão geral do produto, seus requisitos e a relação com os envolvidos e usuários do produto.
# 2. Posicionamento
## 2.1. Oportunidade de Negócios
Tendo em vista que a plataforma GitHub possui milhões de usuários que provavelmente abrem e fecham milestones constantemente, o PullBot seria uma solução útil para revisar tudo o que foi feito em cada milestone após seu fechamento, principalmente para os projetos de desenvolvimento ágil, que estão em alta no mercado. Pelo método ágil Scrum, por exemplo, ao fim de cada curto período de tempo reservado para realizar parte do projeto, denominado Sprint, a equipe faz uma retrospectiva para análise das mudanças realizadas. Utilizando o PullBot, essa retrospectiva será feita de forma automatizada, organizada e detalhada.
## 2.2. Descrição do Problema
|   |    |
:--:|:--:
O problema de | visualizar de forma compacta e ágil tudo o que foi feito no projeto durante uma milestone
afeta |  usuários da plataforma GitHub
cujo impacto é | um processo lento de retrospectiva da milestone
uma boa solução seria | uma extensão capaz de, após o fechamento de uma milestone, apresentar automaticamente de modo sintetizado o que foi feito de forma coletiva e individual, além de abrir um Pull Request automaticamente

# 3. Descrição dos Envolvidos e dos Usuários
## 3.1. Resumo dos Envolvidos
| Nome | Descrição | Responsabilidade |
|:-:|:-:|:-:|
Equipe de Gestão do Projeto | Grupo de alunos da UnB matriculados na disciplina MDS | Gerenciar o projeto, garantindo a comunicação entre toda a equipe e mantendo organizada a execução do que foi previamente planejado 
Equipe de Desenvolvimento do Projeto  | Grupo de alunos da UnB matriculados na disciplina MDS | Executar o planejado com qualidade e eficiência dentro dos prazos estabelecidos
Clientes | Usuários da plataforma GitHub | Acompanhar a execução do projeto, evidenciando a devida apreciação sobre cada funcionalidade do produto
## 3.2. Resumo dos Usuários
Nome | Descrição
|:-:|:-:|
Usuários de GitHub | Pessoas que possuem uma conta na plataforma GitHub
## 3.3. Ambiente do Usuário
O usuário necessita de um computador que possua instalado o navegador Google Chrome, para que seja possível instalar a extensão PullBot e realizar o fechamento da milestone na plataforma GitHub.

## 3.4. Perfis dos Envolvidos
### 3.4.1. Equipe de Gestão de Projeto
|   |   |
|:-:|:-:|
**Repesentantes** | Arthur de Melo Garcia, Jaime Juan de Castro Feliciano Damasceno
**Descrição** | Gestores de projeto
**Tipo** | Discentes da disciplina MDS na UnB
**Critério de Sucesso** | Gerenciar a equipe, organizar tarefas a serem concluídas em cada etapa, visando a qualidade prevista e o prazo estabelecido, além de garantir a comunicação entre toda a equipe
**Envolvimento** | Alto
**Problemas/Comentários** | Equipe inexperiente em gestão de projeto, e falta de possibilidade de reuniões presenciais

### 3.4.2. Equipe de Desenvolvedores de Projeto
|   |   |
|:-:|:-:|
**Repesentantes** | Eliás Yousef, Ingrid da Silva Carvalho , Lorrayne Alves Cardozo, Peniel Etèmana Désirez-Jésus Zannoukou
**Descrição** | Desenvolvedores de projeto
**Tipo** | Discentes da disciplina MDS na UnB
**Critério de Sucesso** | Realizar as metas estabelecidas com comprometimento e qualidade dentro do prazo proposto
**Envolvimento** | Alto
**Problemas/Comentários** | Equipe inexperiente em desenvolvimento de software e com pouco conhecimento em relação as tecnologias utilizadas
### 3.4.3. Clientes
|   |   |
|:-:|:-:|
**Repesentantes** | Usuários da plataforma Github
**Descrição** | Responsáveis pela demanda do projeto
**Tipo** | Usuários de GitHub que possuem o aplicativo Telegram
**Critério de Sucesso** | Acompanhar a execução do projeto, evidenciando a devida apreciação sobre cada funcionalidade do produto
**Envolvimento** | Médio
**Problemas/Comentários** | Usuários de GitHub que por algum motivo não consigam instalar a extensão corretamente

## 3.5. Perfil do Usuário
### 3.5.1. Usuários de GitHub
|   |   |
|:-:|:-:|
**Repesentantes** | Usuários da plataforma Github
**Descrição** | Responsáveis pela demanda do projeto
**Tipo** | Usuários de GitHub que possuem o aplicativo Telegram
**Critério de Sucesso** | Acompanhar a execução do projeto, evidenciando a devida apreciação sobre cada funcionalidade do produto
**Envolvimento** | Médio
**Problemas/Comentários** | Usuários de GitHub que por algum motivo não consigam instalar a extensão corretamente

## 3.6. Alternativas e concorrência

# 4. Visão Geral do Produto
## 4.1. Perspectiva do produto
O produto terá a função de facilitar ao usuário a visualização do que foi feito após o fechamento de uma milestone no GitHub. Será aberto automaticamente um PullRequest com um arquivo .md apresentando de forma detalhada a produtividade dos integrantes e da equipe no geral.

# 5. Recursos do Produto
Recurso | Detalhes 
:-:|:-:
Quantidade de issues abertas/fechadas | Será apresentado ao usuário a quantidade de issues abertas e fechadas
Quantidade de PullRequest abertos/fechados | Será apresentado ao usuário a quantidade de PullRequest abertos e fechados 
Quantidade de comentários escritos nas issues | O usuário poderá visualizar a quantidade de comentário em casa issue aberta/fechada
Quantidade de commits | Será exibido ao usuário a quantidade de commits
Ranking de commits | Ranking com o nome de cada integrante da equipe a respectiva quantidade de commits


# 6. Restrições
* A extensão deve estar utilizável até maio de 2021;
* O projeto deverá ser desenvolvido no decorrer da disciplina MDS, do campus FGA da UnB, pelos alunos que compõem a equipe;
* Para utilizá-lo, é fundamental o acesso a internet;
* O usuário deve ter uma conta na plataforma GitHub;
* O usuário deve ter um computador com o navegador Google Chrome instalado.

# 7. Intervalos de Qualidade
## 7.1. Requisitos do Desempenho
O tempo de ação do bot poderá depender de fatores como velocidade e qualidade da internet do aparelho em que será utilizado o Telegram, além da capacidade de processamento do aparelho e quantidade de informações na respectiva milestone.
## 7.2. Requisitos de Design
O bot agirá no aplicativo social Telegram, portanto, possuirá a mesma interface.
## 7.3. Requisitos de Portabilidade
O bot poderá ser utilizado em qualquer dispositivo móvel que possua o aplicativo Telegram.

# 8. Prioridades e precedência
O produto prioriza facilitar a retrospectiva de cada milestone, para que o usuário consiga visualizar de forma prática e rápida os detalhes sobre a determinada etapa do projeto e sobre toda a equipe.