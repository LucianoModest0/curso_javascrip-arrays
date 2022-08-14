// Unindo duas arrays

const pythonClass = ["Roberto", "Reinaldo", "Ruana", "Rose"];
const jsClass = ["Melissa", "Matheus", "Monique"];

const jointClass = pythonClass.concat(jsClass);

console.log(jointClass);

// Lista de duas dimensões

const students = ["Caio", "Cláudia", "Celeste"];

const avarage = [10, 6, 7];

let studentsNavarage = [students, avarage];

console.log(`${studentsNavarage[0][0]}, sua média é ${studentsNavarage[1][0]}`);

// Dentro do console.log os indices de studentsNavarage correspondem primeiramente as arrays (students [0] ou avarage[1]) e depoios o indice dentro da array selecionada

console.log(
  `Quem tirou ${studentsNavarage[1][2]} foi ${studentsNavarage[0][2]}`
);
