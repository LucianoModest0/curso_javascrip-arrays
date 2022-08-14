// Dividir a turma em duas classes com o mesmo tamanho2

const studentList = ["Juliana", "João", "José", "Joanderson"];

const classA = studentList.slice(0, studentList.length / 2);
const classB = studentList.slice(studentList.length / 2);

console.log(`A lista de alunos é composta por ${studentList}`);
console.log(`A classe A é composta por ${classA}`);
console.log(`A classe B é composta por ${classB}`);

// Remover um aluno da lista e add um novo aluno
// 3 parametros indice inicial, quantos indices, elemento novo(Opcional)

studentList.splice(2, 2, "Juvenal");

// No exemplo acima, removeria a partir do segundo indice -> 'José', 2 elementos da array 'José e Joanderson', add 'Juve

console.log(`A nova lista de alunos é composta por ${studentList}`);
