# Documento de Arquitetura

### Histórico de Revisão
Data|Versão|Descrição|Autor
:-:|:-:|:-:|:-:
02/03/2021 | 1.0.0 | Criação do documento | Ingrid Carvalho
17/03/2021 | 1.1.0 | Padronização do documento | Eliás Yousef 
19/03/2021 | 1.2.0 | Revisão do documento | Lorrayne Cardozo
21/03/2021 | 1.3.0 | Correção e atualização do documento | Peniel Zannoukou
22/03/2021 | 1.4.0 |Adição do diagrama de relações | Lorrayne Cardozo
22/03/2021 | 1.4.1 | Adição do Backlog | Peniel Zannoukou

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

| |Tópico | Descrição
|:-:|:-:|:-:
1 | Introdução | Fornece uma visão geral do documento inteiro, descrevendo informações sobre a sua finalidade.
2 | Representação Arquitetural | Traz o detalhamento da arquitetura de software do sistema para melhor entendimento de sua estrutura e funcionamento. Além de apresentar o modo como ela está sendo representada.
3 | Metas e Restrições | Detalha os requisitos e objetivos do software que têm algum impacto sobre a arquitetura. Ela também captura as restrições especiais que podem ser aplicáveis.
4 | Visão de Caso de Uso | Retrata e detalha as partes relevantes ao funcionamento do sistema.
5 | Tamanho e Desempenho | Descreve sobre os detalhes de funcionamento do sistema, como seu o tempo de resposta e possíveis falhas. 
6 | Backlog | Apresenta as atividades a serem cumpridas pela equipe durante o desenvolvimento do projeto.

# 2. Representação Arquitetural
A finalidade do projeto PullBot se concentra em auxiliar os usuário da plataforma GitHub revisando milestones após seu fechamento. Sendo assim, a arquitetura do projeto está centralizada em Back-End utilizando a linguagem de programação JavaScript em sinergia com a API do GitHub. O desenvolvimento dessa extensão é baseado em um modelo arquitetural composto por:
* Manifest;
* Background Script;
* Content script

## 2.1. Camada de negócio (Back-end)
Também chamada de lógica empresarial, regras de negócio ou funcionalidade. É nela que ficam as funções e regras de todo o negócio. Não existe uma interface para o usuário e seus dados são voláteis. Nessa camada são utilizadas as tecnologias Node em conjunto com Express.

### 2.1.1. Node
O Node.js pode ser definido como um ambiente de execução Javascript server-side.Isso significa que com o Node.js é possível criar aplicações Javascript para rodar como uma aplicação standalone em uma máquina, não dependendo de um browser para a execução[5]. No PullBot, o node fará uso da arquitetura overview.

### 2.1.2. Express
Express é um framework para aplicativo da web do Node.js mínimo e flexível que fornece um conjunto bem robusto de recursos para os aplicativos web e móvel.

## 2.2. Tecnologias
Tecnologia | Descrição
:-: | :-:
JavaScript | É uma linguagem de programação de alto nível, principalmente utilizada para o desenvolvimento web,de fácil execução e que pode ser rodadar a partir de um navegador de internet. Ela é uma linguagem amplamente utilizaeda.
Git | Git é um sistema de versionamento distribuído, usado para registrar o histórico de edições.Ela é geralmente usada no desenvolvimento de software.
Docker | É uma linguagem de alto desempenho.Plataforma de containers que agrupa ambientes de desenvolvimento.

## 2.3. API do GitHub
API é um conjunto de instruções e informações sobre o acesso de uma aplicação. Ela é útil para estabalecer comunicação com funcionalidades e infomações que permite ao programador a implementação de novas funções não disponíveis comumente.

## 2.4. OAuth 2
O OAuth 2 é um protocolo de autorização que permite que uma aplicação se autentique em outra. Funciona de forma que uma aplicação requisita ao usuário a permissão de acesso para que não haja a necessidade de acessar alguma senha ou token pessoal. Após o usuário permitir o acesso, a aplicação tem aquisição limitada às suas informações, e mesmo que a senha seja alterada a autorização continuará válida.

## 2.5. Modelo Arquitetural
### 2.5.1. Manifest
O Manifest é um arquivo intitulado `manifest.json` que faz parte de todas as extensões criadas para o Google Chrome. Tem a função de conceder informações relevantes sobre a extensão ao navegador, como arquivos importantes e recursos utilizados. Além disso, o manifest também provê ponteiros para os outros arquivos da extensão.

### 2.5.2. Background Script
O script de fundo - ou script de segundo plano - é o responsável pela operação dos eventos e será uma ponte entre as outras partes da extensão. Este script permanece inativo até que seja acionado através da execução de um evento, que no caso do PullBot será o fechamendo de uma milestone no GitHub. O script será ativado assim que o evento for efetuado, e após realizar suas devidas instruções, tornará ao ócio.

### 2.5.3. Content script
O script de conteúdo será executado nos contextos de uma página que foi carregada no navegador, que no caso será a do GitHub. Terá a função de se comunicar com a extensão trocando mensagens e armazenando valores.

## 2.6. Diagrama de Relações
<img src="https://raw.githubusercontent.com/fga-eps-mds/PullBot/master/imagens/diagramaDeRelacoes.jpg" width="550">

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
<img src="https://raw.githubusercontent.com/fga-eps-mds/PullBot/master/imagens/casoDeUso.jpeg" width="750">

# 5. Tamanho e Desempenho
A arquitetura foi planejada para que a aplicação atenda de forma satisfatória os requisitos do produto e permita uma fácil implementação de uma nova funcionalidade ao software.
O tempo de resposta da aplicação web irá depender da velocidade de conexão com a internet do usuário e da plataforma GitHub.
No software será aplicado alguns conceitos que possibilitarão a renderização de conteúdo e que permitirão uma boa comunicação com o usúario.


# 6. Backlog
O backlog representa a acumulação de trabalho: tudo o que deve ser feito do produto que vai ser desenvolvido. Basicamente, é uma pilha de itens a fazer, solicitados por alguém com base em suas necessidades/desejos, que devem ser entregues a quem solicitou depois que forem produzidos. Os épicos levantados para o nosso projeto são:

* Protótipo de baixa fidelidade
* Treinamentos
* Como executar o PullBot no GitHub do Usúario
* Execução do PullBot na máquina do usuário
* Apresentação das informações via Gráficos

Para mais detalhes sobre os demais tópicos do backlog, [clique aqui](https://fga-eps-mds.github.io/PullBot/#/docs/documentos/backlog).
