// Mensagem inicial da atividade.
console.log("Meu primeiro script foi executado!");
console.log("Painel de Estudos");
console.log(10 + 5);
console.log("A atividade começou");

const nomeAluno = "Caio Neves";
const curso = "Engenharia de Software";
let quantidadeTarefas = 3;
console.log(quantidadeTarefas);
quantidadeTarefas = 5;
console.log(quantidadeTarefas);

var exemploAntigo = "Declaração utilizada em códigos antigos";
console.log(exemploAntigo);

const titulo = "Painel de estudos";
const quantidade = 4;
const ativo = true;
const observacao = null;
console.log(titulo);
console.log(quantidade);
console.log(ativo);
console.log(observacao);

const nota1 = 7;
const nota2 = 8;
const soma = nota1 + nota2;
const diferenca = nota2 - nota1;
const multiplicacao = nota1 * 2;
const media = soma / 2;
const aprovado = media >= 6;
console.log(soma);
console.log(diferenca);
console.log(multiplicacao);
console.log(media);
console.log(aprovado);

const mensagem = `O aluno ${nomeAluno} está no curso de ${curso} e possui ${quantidadeTarefas} tarefas.`;
console.log(mensagem);

if (media >= 6) {
  console.log("Aprovado");
} else {
  console.log("Precisa revisar");
}

const totalTarefas = 10;
const tarefasConcluidas = 7;
const tarefasPendentes = totalTarefas - tarefasConcluidas;
const percentual = (tarefasConcluidas / totalTarefas) * 100;

console.log(`Aluno: ${nomeAluno}. Concluídas: ${tarefasConcluidas}. Pendentes: ${tarefasPendentes}. Progresso: ${percentual}%.`);

if (percentual >= 70) {
  console.log("Meta de estudos alcançada");
} else {
  console.log("Falta pouco para a meta");
}