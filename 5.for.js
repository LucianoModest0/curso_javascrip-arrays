// imprimir uma lista de números através de um laço de repetição

const numbers = [100, 200, 300, 400, 500, 600];

for (let i = 0; i < numbers.length; i++) {
  console.log(i, numbers[i]);
}

// O exercicio de trazer as médias da aula 3 ('Média com for') já tinha sido resolvido no 1.grades.js

// Calcular a média com forEach ->

const grades = [10, 6.5, 8, 7.5];

let sum = 0;

grades.forEach((grade) => {
  sum += grade;
});

let avarage = sum / grades.length;

console.log(avarage);
