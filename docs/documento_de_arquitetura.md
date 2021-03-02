# _Histórico de Revisão_

|Data|Versão|Descrição|Autor|
|----|------|---------|-----|
|02/03/2021| 0.1.0| Criação da primeira versão do documento | Ingrid Carvalho |


# _1.Introdução_

## _1.1.Finalidade_
Este documento tem como finalidade apresentar a arquitetura do projeto [chatbot_para_acolhimento_de_calouros](),oferecendo uma visão geral arquitetural do sistema que será implementado, possibilitando assim que os envolvidos no projeto tenham conhecimento de como a aplicação será subdivida e quais serão as funções de cada componente.

## _1.2.Escopo_
Apresentação as características arquiteturais do projeto <chatbot_para_acolhimento_de_calouros>, expondo detalhadamente as soluções arquiteturais idealizadas e estabelecidas para o projeto, de modo a ser utilizado como base para a edificação do projeto pelos desenvolvedores designados para o projeto.

## _1.3.Definições, acrônimos, abreviações_
|Definições/Acrônimos/Abreviações| Significado|
|--------------------------------|------------|
||MongoDB, Express, React, Node|
|MC| Model Controller|
|UI|User Interface (Interface do Usuário)|
|GUI|Graphical User Interface|


## _1.4.Referências Bibliográficas_
[1]_Modelo em três camadas_. Disponível em <https://pt.wikipedia.org/wiki/Modelo_em_tr%C3%AAs_camadas>.Acesso em 03 de Setembro de 2020.

[2]_MERN Stack_. Disponível em <https://www.mongodb.com/mern-stack>. Acesso em 02 de Setembro de 2020

[3]_Tutorial: Introdução ao React_. Disponível em <https://pt-br.reactjs.org/tutorial/tutorial.html>. Acesso em 03 de Setembro de 2020

[4]_Redux Essentials, Part 1: Redux Overview and Concepts_. Disponível em <https://redux.js.org/tutorials/essentials/part-1-overview-concepts>. Acesso em 03 de Setembro de 2020.

[5]_Node.js – O que é, como funciona e quais as vantagens_. Disponível em <https://www.opus-software.com.br/node-js/>. Acesso em 04 de Setembro de 2020.

[6]_Express Framework web rápido, flexível e minimalista para Node.js_. Disponível em <https://expressjs.com/pt-br/>. Acesso em 03 de Setembro de 2020.

[7]_MongoDB_. Disponível em <https://pt.wikipedia.org/wiki/MongoDB>. Acesso em 03 de Setembro de 2020.

[8]_Elm architecture with React + Redux + Redux-loop_. Disponível em <https://smallbusinessforum.co/elm-architecture-with-react-redux-redux-loop-645a67070b1a>. Acesso em 03 de Setembro de 2020.

## _1.5.Visão Geral_

|Tópico| Descrição|
|------|----------|
|Introdução| Fornece uma visão geral do documento inteiro, descrevendo informações sobre a sua finalidade|
|Representação Arquitetural| Traz o detalhamento da arquitetura de software do sistema para melhor entendimento de sua estrutura e funcionamento. Além de apresentar o modo como ela está sendo representada.|
|Metas e Restrições| Detalha os requisitos e objetivos do software que têm algum impacto sobre a arquitetura. Ela também captura as restrições especiais que podem ser aplicáveis.|
|Visão lógica| Retrata as partes relevantes concernente à arquitetura do modelo de design. |
|Visão de implementação| Descreve a estrutura geral do modelo de implementação, a divisão do software em camadas e os subsistemas no modelo de implementação e todos os componentes significativos do ponto de vista da arquitetura.|

# _2.Representação da Arquitetura_
A arquitetura do projeto [chatbot_de_acolhimento_para_calouros]() é composta por frontend e backend acoplados, possuindo  apenas um repositório.Apesar de a metodologia utilizada é Modelo em 3 Camadas(3-Tier), expecificamente o modelo MERN Stack onde normalmente são distribuídas separadamente, não será o caso já que o frontend do projeto será simples.

[1]O modelo 3-Tier, derivado do modelo 'n' camadas, organizando a aplicação nas camadas de apresentação, de négocio e de dados. A separação em camadas lógicas torna os sistemas mais flexíveis, permitindo que as partes possam ser alteradas de forma independente. As funcionalidades da camada de negócio podem ser divididas em classes e essas classes podem ser agrupadas em pacotes ou componentes, reduzindo as dependências entre as classes e pacotes; podem ser reutilizadas por diferentes partes do aplicativo e até por aplicativos diferentes. O modelo de 3 camadas tornou-se a arquitetura padrão para sistemas corporativos com base na Web.

[2]MERN é o acrônimo para MongoDB, Express, React, Node, nome das quatro tecnologias principais que compõem a stack. A arquitetura MERN permite que você construa facilmente uma arquitetura de 3 camadas (front-end, back-end, banco de dados) inteiramente usando JavaScript e JSON.

## _2.1.Camada de apresentação (Front-end)_
[1]É a chamada GUI, ou simplesmente interface. Esta camada interage diretamente com o usuário, é através dela que são feitas as requisições como consultas, por exemplo. Nessa camada são utilizadas as tecnologias React em conjunto com a Redux

### _2.1.1 React_
[3]O React é uma biblioteca JavaScript declarativa, eficiente e flexível para criar interfaces com o usuário. Ele permite compor UIs complexas a partir de pequenos e isolados códigos chamados “componentes”.

### _2.1.2 Redux_
[4]Redux é um padrão e biblioteca para gerenciar e atualizar o estado do aplicativo, usando eventos chamados "ações". Ele serve como um armazenamento centralizado para o estado que precisa ser usado em todo o seu aplicativo, com regras que garantem que o estado só possa ser atualizado de maneira previsível.

### _2.1.3 Representação arquitetural da camada de apresentação_
![Representação-Arquitetura-React-Redux](https://miro.medium.com/max/512/1*Or0o-_dFsZe1ahMAC2yLZQ.png)[8]

## _2.2.Camada de negócio (Back-end)_
[1]Também chamada de lógica empresarial, regras de negócio ou funcionalidade. É nela que ficam as funções e regras de todo o negócio. Não existe uma interface para o usuário e seus dados são voláteis. Nessa camada são utilizadas as tecnologias Node em conjunto com Express

### _2.2.1 Node_
[5]O Node.js pode ser definido como um ambiente de execução Javascript server-side.Isso significa que com o Node.js é possível criar aplicações Javascript para rodar como uma aplicação standalone em uma máquina, não dependendo de um browser para a execução.

### _2.2.2 Express_
[6]O Express é um framework para aplicativo da web do Node.js mínimo e flexível que fornece um conjunto robusto de recursos para aplicativos web e móvel.


## _2.3.Camada de Dados_
[1]É composta pelo repositório das informações e as classes que as manipulam. Esta camada recebe as requisições da camada de negócios e seus métodos executam essas requisições em um banco de dados. Nessa camara é utilizada a tecnologia MongoDB

### _2.3.1 MongoDB_
[7]MongoDB é um software de banco de dados orientado a documentos livre, de código aberto e multiplataforma, escrito na linguagem C++. Classificado como um programa de banco de dados NoSQL, o MongoDB armazena dados em documentos do tipo JSON. Suas características permitem com que as aplicações modelem informações de modo muito mais natural, pois os dados podem ser aninhados em hierarquias complexas e continuar a ser indexáveis e fáceis de buscar.
    
## _2.4.Diagrama de Relações_


# _3. Metas e Restrições da Arquitetura_
## 3.1 Usabilidade
A aplicação contará com design responsivo, tendo um bom ajuste e posicionamento dos elementos em tela, com uma interface clara e intuitiva.

## 3.2 Portabilidade
A aplicação poderá ser acessada através de um navegador como, por exemplo, Mozilla Firefox ou Google Chrome.

## 3.3 Restrições de Design
A aplicação ser desenvolvida em JavaScript, HTML e CSS, utilizando os frameworks NodeJS e ReactJS, e deve ser modelada para o banco MongoDB.

O projeto deve ser estruturado nos padrões da arquitetura em 3 camadas(3-Tier), mais especificamente a arquitetura MERN, com as camadas de “Apresentação”, “Negócio” e “Dados”.

Capaz de sofrer alterações e implementações tanto no Back-End quanto o Front-End.

# _4. Tamanho e Desempenho_
A arquitetura foi planejada para que a aplicação atenda de forma satisfatória os requisitos do produto e permita uma fácil implementação e expansão de funcionalidades, sem a necessidade de dimensionar todo o sistema.

Na aplicação será abordado o conceito de SPA(Single-Page-Application), que possibilita a renderização dinâmica de conteúdo ao contrário de um carregamento completo da página, reduzindo o tempo de espera e proporcionando uma melhor e mais fluida experiência para o usuário.

O tempo de resposta da aplicação web irá depender da velocidade de conexão com a internet do usuário e da a conexão com o banco de dados, assim como a disponibilidade do servidor.

