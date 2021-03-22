# Documento de Arquitetura

### Histórico de Revisão
Data|Versão|Descrição|Autor
:-:|:-:|:-:|:-:
02/03/2021 | 1.0.0 | Criação do documento | Ingrid Carvalho
17/03/2021 | 1.1.0 | Padronização do documento | Eliás Yousef 
19/03/2021 | 1.2.0 | Revisão do documento | Lorrayne Cardozo
21/03/2021 | 1.2.1 | Correção e Atualização Do Documento De Arquitetura | Peniel Zannoukou

# 1. Introdução
## 1.1. Finalidade

Este documento tem como finalidade apresentar ao leitor a arquitetura do projeto PullBot, assim como suas principais características, oferecendo uma visão mais simples e clara possível do modelo arquitetural adotado, possibilitando o pleno entendimento das subdivisões do sistema.

## 1.2. Escopo
A extensão para Google Chrome PullBot tem como alvo desenvolvedores que utilizam a plataforma Github para a hospedagem de seus repositórios. O projeto consiste em facilitar e agilizar a análise de produtividade do time de desenvolvimento, gerando um arquivo .md com as métricas a serem estudadas.

## 1.3. Definições, Acrônimos, Abreviações
Definições/Acrônimos/Abreviações| Significado
:-:|:--:
API | Application Programming Interface
UnB | Universidade de Brasília
FGA | Faculdade do Gama
MDS | Métodos de Desenvolvimento de Software

## 1.4. Referências Bibliográficas
[1] Pullbot. Disponível em <https://github.com/fga-eps-mds/PullBot>. Acesso em 02 de março de 2021.

[2] JavaScript. Disponível em: <https://developer.mozilla.org/pt-BR/docs/Web/JavaScript>. Acesso em: 19 Mar. 2021.

[3] API. Disponível em <https://canaltech.com.br/software/o-que-e-api/>. Acesso em 04 de março de 2021.

[4] GitHub Documentation. Disponível em: <https://docs.github.com/en>. Acesso em: 19 Mar. 2021.

[5] Architecture overview - Chrome Developers. Disponível em: <https://developer.chrome.com/docs/extensions/mv2/architecture-overview/>. Acesso em: 21 Mar. 2021.

## 1.5. Visão Geral
Para esclarecer de forma clara as tecnologias utilizadas no desenvolvimento do PullBot, assim como o modelo arquitetural e suas motivações, o presente documento foi dividido nos seguintes tópicos:
|Tópico | Descrição
:-:|:-:
|Introdução| Fornece uma visão geral do documento inteiro, descrevendo informações sobre a sua finalidade|
|Representação Arquitetural| Traz o detalhamento da arquitetura de software do sistema para melhor entendimento de sua estrutura e funcionamento. Além de apresentar o modo como ela está sendo representada.|
|Metas e Restrições| Detalha os requisitos e objetivos do software que têm algum impacto sobre a arquitetura. Ela também captura as restrições especiais que podem ser aplicáveis.|
|Visão lógica| Retrata as partes relevantes concernente à arquitetura do modelo de design. |
|Visão de implementação| Descreve a estrutura geral do modelo de implementação, a divisão do software em camadas e os subsistemas no modelo de implementação e todos os componentes significativos do ponto de vista da arquitetura.|

# 2. Representação Arquitetural
A finalidade do projeto PullBot se concentra em auxiliar os usuário da plataforma GitHub revisando milestones após seu fechamento. Sendo assim, a arquitetura do projeto está centralizada em Back-End utilizando a linguagem de programação JavaScript em sinergia com a API do GitHub. O desenvolvimento dessa extensão é baseado em um modelo arquitetural composto por:
* Manifest;
* Background Script;
* Elementos de interação com o usuário.

## 2.1. Camada de negócio (Back-end)
Também chamada de lógica empresarial, regras de negócio ou funcionalidade. É nela que ficam as funções e regras de todo o negócio. Não existe uma interface para o usuário e seus dados são voláteis. Nessa camada são utilizadas as tecnologias Node em conjunto com Express.

## 2.1.1 Node
O Node.js pode ser definido como um ambiente de execução Javascript server-side.Isso significa que com o Node.js é possível criar aplicações Javascript para rodar como uma aplicação standalone em uma máquina, não dependendo de um browser para a execução[5]. No PullBot, o node fará uso da arquitetura overview.

## 2.1.2 Express
Express é um framework para aplicativo da web do Node.js mínimo e flexível que fornece um conjunto bem robusto de recursos para os aplicativos web e móvel.

## 2.2. Tecnologias
Tecnologia | Descrição
:-: | :-:
JavaScript | É uma linguagem de programação de alto nível, principalmente utilizada para o desenvolvimento web,de fácil execução e que pode ser rodadar a partir de um navegador de internet. Ela é uma linguagem popular do mundo.
Git | Git é um sistema de versionamento distribuído, usado para registrar o histórico de edições.Ela é geralmente usada no desenvolvimento de software.
Docker | É uma linguagem de alto desempenho.Plataforma de containers que agrupa ambientes de desenvolvimento.

## 2.3. API do GitHub
API é um conjunto de instruções e informações sobre o acesso de uma aplicação. Ela é útil para estabalecer comunicação com funcionalidades e infomações que permite ao programador a implementação de novas funções não disponíveis comumente.

## 2.4. Modelo Arquitetural
### 2.4.1. Manifest
O Manifest é um arquivo intitulado `manifest.json` que faz parte de todas as extensões criadas para o Google Chrome. Tem a função de conceder informações relevantes sobre a extensão ao navegador, como arquivos importantes e recursos utilizados.

### 2.4.2. Background Script
O script de fundo - ou script de segundo plano - é o responsável pela operação dos eventos e será uma ponte entre as outras partes da extensão. Este script permanece inativo até que seja acionado através da execução de um evento, que no caso do PullBot será o fechamendo de uma milestone no GitHub. O script será ativado assim que o evento for efetuado, e após realizar suas devidas instruções, tornará ao ócio.

### 2.4.3. Elementos de Interação com o Usuário
A interação do sistema com o usuário deve ser mínima. O objetivo será apenas colher os dados necessários para o funcionamento do PullBot, como o nome de usuário e token do GitHub.

# 3. Metas e Restrições da Arquitetura
## 3.1. Metas
* Facilitar a visualização das métricas do time de desenvolvimento durante uma milestone;
* Agilizar o processo analítico das métricas.

## 3.2. Restrições da arquitetura
* Ter acesso a internet;
* Possuir o navegador de internet Google Chrome;
* Adicionar a extensão PullBot corretamente.

# 4. Visão de Caso de Uso
## 4.1. Ator (Usuário)
O usuário será o único ator do sistema, responsável por instalar a extensão em seu navegador e realizar o fechamento de uma milestone no GitHub, afim de que o PullBot exerça suas funcionalidades.

## 4.2. Diagrama de Caso de Uso
<img src="https://raw.githubusercontent.com/fga-eps-mds/PullBot/35-doc-arquitetura/imagens/casoDeUso.jpeg" width="750">

# 5. Tamanho e Desempenho
A arquitetura foi planejada para que a aplicação atenda de forma satisfatória os requisitos do produto e permita uma fácil implementação de uma nova funcionalidade ao software.
O tempo de resposta da aplicação web irá depender da velocidade de conexão com a internet do usuário e da plataforma GitHub.
No software será aplicado alguns conceitos que possibilitarão a renderização de conteúdo e que permitirão uma boa comunicação com o usúario.