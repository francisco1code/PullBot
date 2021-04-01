# Plano de Gestão de Riscos

### Histórico de Revisão
Data|Versão|Descrição|Autor
:-:|:-:|:-:|:-:
01/04/2021 | 1.0.0 | Criação do documento | Jaime Juan

# 1. Introdução
O plano de gerenciamento de riscos deste projeto possui duas etapas preliminares e outra contínua. A etapa preliminar consiste na identificação de cada risco que posso interferir neste projeto, além do impacto que cada um tem sobre o projeto. Um impacto é pontuado de acordo com uma escala de normalização que se refere aos dias de interferência no projeto caso o risco se concretize.

A segunda etapa preliminar é planejar quais são as ações para evitar que o risco se concretize e quais são ações para lidar com o risco caso ele se concretize, mesmo realizando as medidas de prevenção.

A terceira e última etapa é contínua e consiste em atribuir a probabilidade do risco se concretizar. Isto é feito para cada Sprint e se espera que as probabilidades diminuam à medida que o projeto chega ao fim. Por fim, as probabilidades são multiplicadas por seus impactos, e este processo tem como resultado o Expousure, o qual tem seus valores mapeados sprint a sprint no gráfico de Burndown.

# 2. Identificação
Identificador | Descrição | Impacto | Justificativa
:-:|:-:|:-:|:-:
R01 | Membro faltar a reunião de sprint | 3 | Impede que a issue seja atribuída ao membro faltante, sobrecarregando os demais ou atrasando o roadmap.
R02 | Não realizar a entrega da sprint | 3 | Atraso no roadmap, e sobrecarga das sprints seguintes
R03 | Mudança de escopo | 3 | Pode causar refatorações, mudanças tecnológicas e sobrecarga nas sprints seguintes.
R04 | Dificuldades com as tecnologias | 2 | Pode causar a não entrega ou baixa qualidade de entrega.
R05 | Saída de membro da equipe | 3 | Sobrecarga dos outros membros e perda de habilidades específicas na equipe.
R06 | Dificuldades de comunicação | 2 | Causa mal entendimento do que deve ser feito nas entregas.
R07 | Baixa produtividade | 1 | Pode resultar em não entregas
R08 | Problemas com internet ou computador | 1 | Pode resultar em não entregas
R09 | Mudança de servidor de deploy | 2 | Atraso na liberação de features e retrabalho.
 # 3. Escala de Impacto

Escala | Impacto
:-:|:-:
1 | 1 a 2 dias
2 | 3 a 7 dias
3 | 8 ou mais dias

# 4. Medidas de Prevenção e Contenção

Identificador | Prevenção | Contenção
:-:|:-:|:-:
R01 | Marcar no calendário Teams para notificar, além de reforçar a importância da prática. | Mudar o dia e horário da reunião excepcionalmente.
R02 | 	Monitorar o andamento das entregas e fazer revisões ao longo da semana | Reorganizar o roadmap
R03 | Testar viabilidade técnica por meio de protótipos e documentação de planejamento | Reorganizar o roadmap
R04 | Iniciar as atividades de execução o quanto antes, mas de forma gradual | Prestar apoio aos membros com dificuldades
R05 | Acompanhar a motivação do time e impedimentos | Reorganizar roadmap
R06 | Formalizar os canais de comunicação e suas finalidades e estimular a união da equipe. | Encontrar meios alternativos para se comunicar.
R07 | Organizar os horários de trabalho e evitar fadiga e exaustão | Reorganizar o roadmap e distribuição de tarefas
R08 | Evitar fazer atualizações ou trocas tecnológicas no meio do projeto | Ver a possibilidade de aderir outros hardwares e ter horários alternativos para as tarefas.
R09 | 	Conhecer os opções do mercado e estudá-las antes de implementar | Tentar fazer a troca dentro de uma sprint

# 5. Burndown