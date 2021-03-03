# _Histórico de Revisão_

|Data|Versão|Descrição|Autor|
|----|------|---------|-----|
|02/03/2021| 0.1.0| Criação da primeira versão do documento | Ingrid Carvalho |


# _1.Introdução_
O presente documento tem como objetivo descrever o documento de arquitetura do
projeto Donar. Este sistema tem como finalidade , mediante disseminação dos direitos dos doadores e realização de campanhas que
podem ser compartilhadas nas redes sociais.
## _1.1.Finalidade_
Este documento tem como finalidade apresentar a arquitetura do projeto [pullbot](),oferecendo uma visão geral arquitetural do sistema que será implementado, possibilitando assim que os envolvidos no projeto tenham conhecimento de como a aplicação será subdivida e quais serão as funções de cada componente.

## _1.2.Escopo_
Apresentação as características arquiteturais do projeto <pullbot>, expondo detalhadamente as soluções arquiteturais idealizadas e estabelecidas para o projeto, de modo a ser utilizado como base para a edificação do projeto pelos desenvolvedores designados para o projeto.
## _1.4.Referências Bibliográficas_
[1]_Python_. Disponivel em (https://pt.wikipedia.org/wiki/Python) Acesso em 02 de março de 2021
## _1.5.Visão Geral_

|Tópico| Descrição|
|------|----------|
|Introdução| Fornece uma visão geral do documento inteiro, descrevendo informações sobre a sua finalidade|
|Representação Arquitetural| Traz o detalhamento da arquitetura de software do sistema para melhor entendimento de sua estrutura e funcionamento. Além de apresentar o modo como ela está sendo representada.|
|Metas e Restrições| Detalha os requisitos e objetivos do software que têm algum impacto sobre a arquitetura. Ela também captura as restrições especiais que podem ser aplicáveis.|
|Visão lógica| Retrata as partes relevantes concernente à arquitetura do modelo de design. |
|Visão de implementação| Descreve a estrutura geral do modelo de implementação, a divisão do software em camadas e os subsistemas no modelo de implementação e todos os componentes significativos do ponto de vista da arquitetura.|

# _2.Representação da Arquitetura_
A arquitetura do projeto [pullbot](https://github.com/fga-eps-mds/PullBot) se concentra em auxiliar os usuario da plataforma github revisando a abertura e os fechamentos de milestones sendo assim a arquitetura do projeto esta centralizada em back-end com a linguagem de programação python.
## _2.1.Camada de negócio (Back-end)_
[1]Também chamada de lógica empresarial, regras de negócio ou funcionalidade. É nela que ficam as funções e regras de todo o negócio. Não existe uma interface para o usuário e seus dados são voláteis. Nessa camada são utilizadas as tecnologias Node em conjunto com Express
## _2.2.Linguagem de programação (Python)_
[2]Python é uma linguagem de programação de alto nível, interpretada de script, imperativa, orientada a objetos, funcional, de tipagem dinâmica e forte. 
# _3. Metas e Restrições da Arquitetura_
## 3.1 Usabilidade
A aplicação contará com design responsivo, tendo um bom ajuste e posicionamento dos elementos em tela, com uma interface clara e intuitiva.

## 3.2 Portabilidade
A aplicação poderá ser acessada através de um navegador como, por exemplo, Mozilla Firefox ou Google Chrome e acesso ao aplicativo de mensagens Telegram.

## 3.3 Restrições de Design
A aplicação ser desenvolvida em Python.

# _4. Tamanho e Desempenho_
A arquitetura foi planejada para que a aplicação atenda de forma satisfatória os requisitos do produto e permita uma fácil implementação e expansão de funcionalidades, sem a necessidade de dimensionar todo o sistema.

O tempo de resposta da aplicação web irá depender da velocidade de conexão com a internet do usuário.

