// utilizar o filter para retornar o nome dos alunos

const names = ["Marcus", "Monica", "Mauro", "Marcio", "Melissa"];

const grades = [7, 8, 6, 7.5, 6.9];

const failed = names.filter((_, index) => grades[index] < 7);

console.log(` Reprovados: ${failed}`);

// Tirar a média geral de 3 turmas/arrays usando o .reduce

const classJS = [7, 6, 8, 4, 10, 8];
const classPython = [7, 9, 7, 9, 3];
const classJava = [7.8, 8, 6.5];

function avarageClass(classGrades) {
  const gradesSum = classGrades.reduce((acum, actual) => actual + acum, 0);
  return gradesSum / classGrades.length;
}

console.log(`Média da sala de JS ${avarageClass(classJS)}`);
console.log(`Média da sala de Python ${avarageClass(classPython)}`);
console.log(`Média da sala de Java ${avarageClass(classJava)}`);

//Usando o .reduce no exemplo da primeira aula

const oldGrades = [10, 6.5, 8, 7];

const avg =
  oldGrades.reduce((acum, actual) => actual + acum, 0) / oldGrades.length;

console.log(avg);
