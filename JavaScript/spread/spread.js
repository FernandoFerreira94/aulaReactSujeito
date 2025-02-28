let listafrutas = ["banana", "uva", "laranja"];

let listaFrutas2 = [...listafrutas, "morango", "melancia"];

console.log(listaFrutas2);

const dadosFamilia = {
  nome: "Ferreira",
  qtd: 5,
};

const familiaNova = { ...dadosFamilia, filhos: true };

console.log(familiaNova);

function names(...name) {
  console.log(name);
}

names("fernando", "elsagnela", "nandao");
