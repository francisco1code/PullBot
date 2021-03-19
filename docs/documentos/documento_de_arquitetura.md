# Documento de Arquitetura

## Histórico de Revisão
 Data | Versão | Descrição | Autor
--- | --- | --- | ---
02/03/2021 | 1.0.0 | Criação do documento | Ingrid Carvalho
17/03/2021 | 1.0.1 | Padronização do documento | Eliás Yousef
# 1.Introdução
## 1.1 - Finalidade
Este documento tem como finalidade apresentar a arquitetura do projeto [pullbot](),oferecendo uma visão geral arquitetural do sistema que será implementado, possibilitando assim que os envolvidos no projeto tenham conhecimento de como a aplicação será subdivida e quais serão as funções de cada componente.

## 1.2 - Escopo
A extensão para google chrome PullBot tem como alvo desenvolvedores que utilizam o github como plataforma de hospedagem para seus repositórios. O projeto consiste em facilitar e agilizar a análise de produtividade do time de desenvolvimento, gerando um arquivo .md com as métricas a serem estudadas.

## 1.3 - Definições, acrônimos, abreviações
Definições/Acrônimos/Abreviações| Significado
--- | ---
API | Application Programming Interface
UnB | Universidade de Brasília
FGA | Faculdade do Gama
MDS | Métodos de Desenvolvimetno de Software

## 1.4 - Referências Bibliográficas
[1]Pullbot. Disponível em<https://github.com/fga-eps-mds/PullBot>;

## 1.5 - Visão Geral
Tópico | Descrição
------ | ----------
Introdução | Fornece uma visão geral do documento e do projeto
Representação Arquitetural | Traz o detalhamento da arquitetura de software do sistema para melhor entendimento de sua estrutura e funcionamento.
Metas e Restrições | Detalha os requisitos e objetivos do software que têm algum impacto sobre a arquitetura, além de captura as restrições especiais que podem ser aplicáveis.
Visão lógica | Retrata as partes relevantes concernente à arquitetura do modelo de design.
Visão de implementação | Descreve a estrutura geral do modelo de implementação, a divisão do software em camadas e os subsistemas no modelo de implementação e todos os componentes significativos do ponto de vista da arquitetura.

# 2 - Representação da Arquitetura
A arquitetura do projeto [pullbot]() se concentra em auxiliar os usuário da plataforma github, revisando os dados das milestones, e por isso, a arquitetura do projeto está centrada no Back-End com a linguagem de programação JavaScript em sinergia com a API do GitHub.

## 2.1 - Camada de negócio (Back-end)
[1]Também chamada de lógica empresarial, regras de negócio ou funcionalidade. É nela que ficam as funções e regras de todo o negócio. Não existe uma interface para o usuário e seus dados são voláteis. Nessa camada são utilizadas as tecnologias Node em conjunto com Express.

## 2.2 - Tecnologias
Tecnologias | Descrição
--- | ---
JavaScript | É uma linguagem de programação de alto nível, principalmente utilizada para o desenvolvimento web.
Git | Git é um sistema de versionamento destribuído, usado para registrar o histórico de edições.
Docker | Plataforma de containers que agrupa ambientes de desenvolvimento

## 2.3 - API do GitHub
[3]API é um conjunto de instruções e informações sobre o acesso de uma aplicação. Ela é útil para estabalecer comunicação com funcionalidades e infomações que permite ao programador a implementação de novas funções não disponíveis comumente.

# 3 - Metas e Restrições da Arquitetura
## 3.1 - Metas
* Facilitar a visualização das métricas do time de desenvolvimento.
* Agilizar o processo analítico das métricas.

## 3.2 - Restrições da arquitetura
* Ter acesso a internet
* Possuir o navegador de internet Google Chrome
* Adicionar a extensão PullBot corretamente
# 4 - Tamanho e Desempenho
A arquitetura foi planejada para que a aplicação atenda de forma satisfatória os requisitos do produto e permita uma fácil implementação de uma nova funcionalidade ao software.
O tempo de resposta da aplicação web irá depender da velocidade de conexão com a internet do usuário e do programa GitHub.
O tempo de resposta da aplicação web irá depender da velocidade de conexão com a internet do usuário.

