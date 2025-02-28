const listaObjetos = [
  "maquina de lavar",
  "geladeira",
  "miiroodas",
  "televisdao",
];

const eletrodomestico = listaObjetos.map((valor, index, array) => {
  if (valor === "geladeira") {
    return console.log(valor + index);
  }
});

let listaNumeros = [1, 15, 21, 245, 2, 54];

const soma = listaNumeros.reduce((acumulador, proximo) => {
  return acumulador + proximo;
}, 0);

console.log(soma);

const eletro = listaObjetos.find((valor) => {
  return console.log(valor === "televisdao");
});
