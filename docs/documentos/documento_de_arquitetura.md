# Documento de Arquitetura

### Histórico de Revisão
|Data|Versão|Descrição|Autor|
:-:|:-:|:-:|:-:
|02/03/2021| 1.0.0| Criação do documento | Ingrid Carvalho |

# 1.Introdução
## 1.1.Finalidade
Este documento tem como finalidade apresentar a arquitetura do projeto PullBot, oferecendo uma visão geral arquitetural do sistema que será implementado, possibilitando assim que os envolvidos no projeto tenham conhecimento de como a aplicação será subdivida e quais serão as funções de cada componente.

## 1.2.Escopo
Apresentação as características arquiteturais do projeto PullBot, expondo detalhadamente as soluções arquiteturais idealizadas e estabelecidas para o projeto, de modo a ser utilizado como base para a edificação do projeto pelos desenvolvedores designados para o projeto.
## 1.3.Referências Bibliográficas
[1]_Python_. Disponivel em (https://pt.wikipedia.org/wiki/Python). Acesso em 02 de março de 2021.
## 1.4.Visão Geral

|Tópico| Descrição|
|------|----------|
|Introdução| Fornece uma visão geral do documento inteiro, descrevendo informações sobre a sua finalidade|
|Representação Arquitetural| Traz o detalhamento da arquitetura de software do sistema para melhor entendimento de sua estrutura e funcionamento. Além de apresentar o modo como ela está sendo representada.|
|Metas e Restrições| Detalha os requisitos e objetivos do software que têm algum impacto sobre a arquitetura. Ela também captura as restrições especiais que podem ser aplicáveis.|
|Visão lógica| Retrata as partes relevantes concernente à arquitetura do modelo de design. |
|Visão de implementação| Descreve a estrutura geral do modelo de implementação, a divisão do software em camadas e os subsistemas no modelo de implementação e todos os componentes significativos do ponto de vista da arquitetura.|

# 2.Representação da Arquitetura
A arquitetura do projeto PullBot se concentra em auxiliar os usuario da plataforma github revisando a abertura e os fechamentos de milestones sendo assim a arquitetura do projeto esta centralizada em back-end com a linguagem de programação python.
## 2.1.Camada de apresentação
???
## 2.2.Camada de negócio
Também chamada de lógica empresarial, regras de negócio ou funcionalidade. É nela que ficam as funções e regras de todo o negócio. Não existe uma interface para o usuário e seus dados são voláteis. Nessa camada são utilizadas as tecnologias Node em conjunto com Express
## 2.3.Linguagem de programação (Python)
Python é uma linguagem de programação de alto nível, interpretada de script, imperativa, orientada a objetos, funcional, de tipagem dinâmica e forte. 
# 3. Metas e Restrições da Arquitetura
## 3.1 Usabilidade
A aplicação contará com design responsivo, tendo um bom ajuste e posicionamento dos elementos em tela, com uma interface clara e intuitiva.

## 3.2 Portabilidade
A aplicação poderá ser acessada através de um navegador como, por exemplo, Mozilla Firefox ou Google Chrome e acesso ao aplicativo de mensagens Telegram.

## 3.3 Restrições de Design
A aplicação ser desenvolvida em Python.

# _4. Tamanho e Desempenho_
A arquitetura foi planejada para que a aplicação atenda de forma satisfatória os requisitos do produto e permita uma fácil implementação e expansão de funcionalidades, sem a necessidade de dimensionar todo o sistema.

O tempo de resposta da aplicação web irá depender da velocidade de conexão com a internet do usuário.