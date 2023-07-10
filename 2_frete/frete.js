function calcularFrete() {
  var peso = parseFloat(document.getElementById("peso").value);
  var distancia = parseFloat(document.getElementById("distancia").value);

  var custoPeso = peso * 0.5;
  var custoDistancia = distancia * 0.1;
  var custoFrete = custoPeso + custoDistancia;

  return custoFrete;
}

document
  .getElementById("calcularButton")
  .addEventListener("click", function (event) {
    event.preventDefault();
    var custoTotal = calcularFrete();
    sessionStorage.setItem("custoFrete", custoTotal);
    window.location.href = "./valor.html";
  });
