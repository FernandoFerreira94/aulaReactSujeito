function somaNumeros(...numero) {
  const total = numero.reduce((acc, proximo) => acc * proximo);

  return console.log(total);
}
somaNumeros(1, 4, 1, 2, 4, 454);
