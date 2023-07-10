window.onload = function () {
  document
    .getElementById("calcularButton")
    .addEventListener("click", function (event) {
      event.preventDefault();

      var nota1 = parseFloat(document.getElementById("nota1").value);
      var nota2 = parseFloat(document.getElementById("nota2").value);
      var nota3 = parseFloat(document.getElementById("nota3").value);

      if (isNaN(nota1) || isNaN(nota2) || isNaN(nota3)) {
        console.log("Preencha todos os campos de notas");
        return;
      }

      var media = (nota1 + nota2 + nota3) / 3;

      if (media >= 7) {
        console.log("Aprovado");
      } else {
        console.log("Reprovado");
      }

      sessionStorage.setItem("media", media.toFixed(1));
      window.location.href = "resultado.html";
    });
};
