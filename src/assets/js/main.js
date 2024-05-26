/**
 * Ex. 01 - Projeto LabScore - Calcular Média
 * @param {Number} notas
 * @returns
 */
const calcularMedia = (notas) => {
  let soma = 0;
  for (let i = 0; i < notas.length; i++) {
    soma += notas[i];
  }
  return soma / notas.length;
};

/**
 * Ex. 02 - Projeto LabScore - Verifica média
 * @param {Number} media
 */
const verificarMedia = (media) =>
  document.write(
    media >= 7
      ? "Parabéns, você passou na média!"
      : "Infelizmente, você está de recuperação."
  );

// Exemplo de uso:
// const notas = [7.5, 8.0, 6.5, 9.0]; // Substitua pelas notas desejadas
// const mediaFinal = calcularMedia(notas);
// console.log(`A média das notas é: ${mediaFinal.toFixed(2)}`);

/**
 * Ex. 03 - Projeto LabScore - Imprimir Nomes
 * @param {Array} alunos
 * @returns
 */
const imprimirNomes = (alunos) => {
  if (!Array.isArray(alunos)) return;

  alunos.forEach((nome) => document.write(nome + "<br>"));
}

// Exemplo de uso:
// const nomesAlunos = ["Ana", "João", "Maria", "Carlos"]; // Substitua pelos nomes desejados
// imprimirNomes(nomesAlunos);

/**
 * Ex. 04 - Projeto LabScore - Calcula Tabuada
 * @param {Number} numero
 * @returns
 */
const calcularTabuada = (numero) => {
  if ((numero && numero <= 0) || numero > 10) return;

  document.write("<h2>Tabuada do " + numero + ":</h2>");
  for (let i = 0; i <= 10; i++) {
    const resultado = numero * i;
    document.write(`${numero} x ${i} = ${resultado}<br>`);
  }
}

// Exemplo de uso:
// calcularTabuada(8);

/**
 * Ex. 05 - Projeto LabScore - Exibir Informações do Aluno
 */
const exibirInformacoesAluno = () => {
  const nome = prompt("Qual o nome do aluno?");
  const idade = prompt("Qual a idade do aluno?");
  const serie = prompt("Qual a série do aluno?");
  const escola = prompt("Qual o nome da escola?");
  const materiaFavorita = prompt("Qual a sua matéria favorita?");

  const confirmacao = confirm("Confirma os dados inseridos?");

  if (!confirmacao) {
    document.write("<p>Dados não confirmados. O programa foi encerrado.</p>");
    return;
  }

  document.write("<h2>Informações do Aluno:</h2>");
  document.write(`<p>Nome: ${nome}</p>`);
  document.write(`<p>Idade: ${idade}</p>`);
  document.write(`<p>Série: ${serie}</p>`);
  document.write(`<p>Escola: ${escola}</p>`);
  document.write(`<p>Matéria Favorita: ${materiaFavorita}</p>`);
}

// Exemplo de uso:
// exibirInformacoesAluno();

/**
 * Ex. 06- Projeto LabScore
 */
const capturarNotas = () => {
    const nomeMateria = prompt("Digite o nome da matéria:");
    const notas = [];

    let i = 1;
    while (i <= 4) {
        const nota = parseFloat(prompt(`Digite a ${i}ª nota:`));
        if (isNaN(nota)) {
            alert("Por favor, digite um valor numérico válido.");
            continue;
        }
        notas.push(nota);
        i++;
    }

    return {
        nomeMateria: nomeMateria,
        notas: notas
    };
}

// Exemplo de uso:
// const alunoInformacoes = capturarNotas();
// const mediaNotas = calcularMedia(alunoInformacoes.notas);

// document.write("<h2>Informações do Aluno:</h2>");
// document.write(`<p>Matéria: ${alunoInformacoes.nomeMateria}</p>`);
// document.write(`<p>Notas: ${alunoInformacoes.notas.join(", ")}</p>`);
// document.write(`<p>Média: ${mediaNotas.toFixed(2)}</p>`);

/**
 * Ex. 07 - Projeto LabScore
 * @param {Number} numeros 
 * @returns 
 */
const encontrarMaiorNumero = (numeros) => {
    let maior = -Infinity; 

    for (let i = 0; i < numeros.length; i++) {
        if (numeros[i] > maior)  maior = numeros[i];
    }

    return maior;
}

// Exemplo de uso:
// const arrayNumeros = [10, 5, 8, 15, 3, 20];
// const maiorNumero = encontrarMaiorNumero(arrayNumeros);
// console.log(`O maior número é: ${maiorNumero}`);
