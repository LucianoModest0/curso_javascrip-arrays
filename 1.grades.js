// Arrays JS
// Criar uma lista de notas escolares
// Add e remover notas
// Criar uma média das notas de acordo com o tamanho da lista

const grades = [8, 10, 10];
console.log(`Aqui as notas iniciais: ${grades}`);

grades.push(6);
grades.push(7);
console.log(`Aqui as notas adicionadas: ${grades}`);

grades.pop();
console.log(`Aqui as notas com remoção da última: ${grades}`);

let sum = 0;
for (let i = 0; i < grades.length; i++) {
  sum += grades[i];
}

let avarage = sum / grades.length;

console.log(`Aqui temos a media das notas: ${avarage}`);
