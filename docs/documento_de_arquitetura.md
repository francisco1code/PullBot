# Documento de Arquitetura

### Histórico de Revisão
|Data|Versão|Descrição|Autor|
:-:|:-:|:-:|:-:
|02/03/2021| 1.0.0| Criação do documento | Ingrid Carvalho |
# 1.Introdução
## 1.1.Finalidade
Este documento tem como finalidade apresentar a arquitetura do projeto PullBot, oferecendo uma visão geral arquitetural do sistema que será implementado, possibilitando assim que os envolvidos no projeto tenham conhecimento de como a aplicação será subdivida e quais serão as funções de cada componente.

## 1.2.Escopo
Apresentação das características arquiteturais do projeto PullBot, expondo detalhadamente as soluções arquiteturais idealizadas e estabelecidas para o projeto, de modo a ser utilizado como base para a edificação do projeto pelos desenvolvedores designados para o projeto.
## 1.3.Definições, acrônimos, abreviações
|Definições/Acrônimos/Abreviações| Significado|
|--------------------------------|------------|
|API|Application Programming Interface| 
## 1.4.Referências Bibliográficas
[1]Pullbot. Disponível em <https://github.com/fga-eps-mds/PullBot>. Acesso em 02 de março de 2021.

[2]Python. Disponível em <https://pt.wikipedia.org/wiki/Python>. Acesso em 02 de março de 2021.

[3]API. Disponível em <https://canaltech.com.br/software/o-que-e-api/>. Acesso em 04 de março de 2021.

[4]Plugin.Disponível em <https://rockcontent.com/br/blog/plugins/>. Acesso em 04 de março de 2021.
## 1.5.Visão Geral

|Tópico| Descrição|
|------|----------|
|Introdução| Fornece uma visão geral do documento inteiro, descrevendo informações sobre a sua finalidade|
|Representação Arquitetural| Traz o detalhamento da arquitetura de software do sistema para melhor entendimento de sua estrutura e funcionamento. Além de apresentar o modo como ela está sendo representada.|
|Metas e Restrições| Detalha os requisitos e objetivos do software que têm algum impacto sobre a arquitetura. Ela também captura as restrições especiais que podem ser aplicáveis.|
|Visão lógica| Retrata as partes relevantes concernente à arquitetura do modelo de design. |
|Visão de implementação| Descreve a estrutura geral do modelo de implementação, a divisão do software em camadas e os subsistemas no modelo de implementação e todos os componentes significativos do ponto de vista da arquitetura.|
# 2.Representação da Arquitetura
A arquitetura do projeto PullBot se concentra em auxiliar os usuário da plataforma GitHub revisando a abertura e os fechamentos de milestones sendo assim a arquitetura do projeto está centralizada em back-end com a linguagem de programação python em sinergia com a API do GitHub.
## 2.1.Camada de negócio (Back-end)
Também chamada de lógica empresarial, regras de negócio ou funcionalidade. É nela que ficam as funções e regras de todo o negócio. Não existe uma interface para o usuário e seus dados são voláteis. Nessa camada são utilizadas as tecnologias Node em conjunto com Express
## 2.2.Linguagem de programação (Python)
Python é uma linguagem de programação de alto nível, interpretada de script, imperativa, orientada a objetos, funcional, de tipagem dinâmica e forte. 
## 2.3.API do GitHub
API é um conjunto de instruçõoes e informações sobre práticas de um projeto (GitHub) para uso de suas funcionalidades que permite ao programador a implementação de novas funções não disponíveis comumente.

# 3. Metas e Restrições da Arquitetura
## 3.1 Usabilidade
A aplicação contará com a plataforma do GitHub funcionando apenas como plugin oferecendo uma nova funcionalidade ao programa

## 3.2 Portabilidade
A aplicação poderá ser acessada através de um navegador como, por exemplo, Mozilla Firefox ou Google Chrome e acesso ao aplicativo de mensagens Telegram.
# 4. Tamanho e Desempenho
A arquitetura foi planejada para que a aplicação atenda de forma satisfatória os requisitos do produto e permita uma fácil implementação de uma nova funcionalidade ao software.
O tempo de resposta da aplicação web irá depender da velocidade de conexão com a internet do usuário e do programa GitHub.
O tempo de resposta da aplicação web irá depender da velocidade de conexão com a internet do usuário.