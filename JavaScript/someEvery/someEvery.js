const cargos = ["front end", "back end", "desenvolvedor", "eletricista"];

console.log(cargos.some((cargo) => cargo === "eletricista"));

const peopleNomes = [
  { nome: "marcos", idade: 23 },
  { nome: "tamires", idade: 76 },
];
console.log(peopleNomes.every((id) => id.idade > 10));
