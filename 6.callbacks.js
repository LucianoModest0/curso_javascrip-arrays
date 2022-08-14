// Chamando uma lista de nomes usando o foreach (método callback) onde se chama uma função

const names = ["Ana", "Ava", "Andressa", "Arnaldo"];

names.forEach((name) => {
  console.log(name);
});

// usando o .map para dar 1 ponto extra nas notas

const grades = [7, 9, 10, 6, 8];

const attgrade = grades.map((grade) => (grade == 10 ? grade : ++grade));

console.log(attgrade);

// utilizando o .map para percorrer os índices da array e transformar as letras em maísculas com toUpperCase()

let names2 = ["Vinicius", "virna", "Vone", "Vladmir", "victoria"];

const attNames = names2.map((name) => name.toUpperCase());

console.log(attNames);
