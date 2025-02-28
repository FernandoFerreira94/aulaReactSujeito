const dadosPessoa = {
  nome: "Fernando",
  sobreNome: "Ferreira",
  idade: 30,
  endereço: {
    rua: "av Jk",
    numero: 5430,
  },
  cargo: "FrontEnd",
};

let { endereço, idade = 25, filho = 3 } = dadosPessoa;
console.log(endereço, idade, filho);

const listaPessoa = ["Fernnado", "Ferreira", "Gabi"];

let [, segundaessoa] = listaPessoa;
console.log(segundaessoa);

let { 2: cunhada } = listaPessoa;
console.log(cunhada);
