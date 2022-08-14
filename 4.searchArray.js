// Procurar um aluno  dentro de uma lista

const studentList = ["Fernando", "Flávia", "Fábio"];

const studentAvarage = [9, 7, 8];

let stdNavg = [studentList, studentAvarage];

const showNameNAvarage = (studentName) => {
  if (stdNavg[0].includes(studentName)) {
    let index = stdNavg[0].indexOf(studentName);
    return stdNavg[0][index] + " sua média é " + stdNavg[1][index];
  } else {
    return "Aluno não cadastrado";
  }
};

console.log(showNameNAvarage("Flávia"));
console.log(showNameNAvarage("Fábio"));
console.log(showNameNAvarage("Fernando"));
console.log(showNameNAvarage("Roberto"));
