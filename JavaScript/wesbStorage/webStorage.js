localStorage.setItem("FisrtName", "Fernando");
localStorage.setItem("LateName", "Ferreira");

const fisrtName = localStorage.getItem("FisrtName");

console.log(fisrtName);

localStorage.curso = "javaScript";
console.log(localStorage.curso);
localStorage.removeItem("curso");
console.log(localStorage.curso);

// --------------------------------

function estudo(cursoAprender) {
  let curso = "";

  if (typeof localStorage.curso === "undefined") {
    localStorage.curso = cursoAprender;
  } else {
    localStorage.removeItem("curso");
  }

  document.getElementById("nameLocal").innerHTML = localStorage.curso;
}

function pedido(lanche, adicional) {
  localStorage.lanche = [lanche, adicional];
}

document.getElementById("btnPedido").addEventListener("click", function () {
  pedido(prompt("qual lanche voce quer?"), prompt("algum adicional?"));
});
