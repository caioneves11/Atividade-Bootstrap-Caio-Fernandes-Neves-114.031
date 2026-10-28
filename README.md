# Painel de Estudos

**Aluno:** Caio Neves
**Tema:** Painel de estudos para acompanhar tarefas, notas e progresso na faculdade.

## Interface criada

A página tem uma barra de navegação com o nome do projeto, uma seção inicial com título, descrição e botão, três cards (Tarefas, Notas e Progresso), um alerta com um lembrete e um rodapé. O layout é responsivo: os cards ficam um ao lado do outro em telas grandes e um embaixo do outro no celular.

## Componentes Bootstrap utilizados

- container, row e col
- navbar
- card
- button
- badge
- alert
- footer

## Variáveis: let, const e var

- `const`: usada quando o valor não muda. Exemplos: `nomeAluno`, `curso`, `nota1`, `nota2`, `media`.
- `let`: usada quando o valor pode mudar. Exemplo: `quantidadeTarefas`, que começa com 3 e depois passa a ser 5.
- `var`: é a forma antiga de declarar variáveis. Hoje se usa `let` e `const` porque são mais seguros e evitam erros, já que o `var` tem um comportamento confuso com escopo e permite redeclarar a mesma variável sem aviso.

## Tipos de dados utilizados

- string: `titulo`, `nomeAluno`, `curso`
- number: `quantidade`, `nota1`, `nota2`, `media`
- boolean: `ativo`, `aprovado`
- null: `observacao`

## Condição com if/else

No desafio final, o código calcula o percentual de tarefas concluídas. Se o percentual for maior ou igual a 70, mostra "Meta de estudos alcançada". Caso contrário, mostra "Falta pouco para a meta". Testei os dois caminhos mudando o valor de `tarefasConcluidas` de 7 para 5.

## Maior dificuldade encontrada

Minha maior dificuldade foi entender a diferença entre `let` e `const` e saber qual usar em cada variável. Também me confundi no começo com os cálculos dentro da template literal.

## Como a dificuldade foi resolvida

Resolvi testando no Console do navegador: tentei alterar uma `const` e vi o erro aparecer, e depois alterei uma `let` com sucesso. Para a template literal, fiz os cálculos antes em variáveis separadas e só depois coloquei o resultado dentro da mensagem, o que deixou tudo mais fácil de entender.