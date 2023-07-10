function calculaSalario(salarioBruto) {
  var resultado = salarioBruto * 0.08;
  var resultadoAnual = resultado * 12;
  return { resultado, resultadoAnual };
}

const calcularButton = document.getElementById("calcularButton");
calcularButton.addEventListener("click", function () {
  const salarioInput = document.getElementById("salarioInput");
  const salario = Number(salarioInput.value);
  const { resultado, resultadoAnual } = calculaSalario(salario);
  
  // Redireciona o usuário para a página "resultado.html" com os resultados como parâmetros
  window.location.href = `resultado.html?resultado=${resultado}&resultadoAnual=${resultadoAnual}`;
});
