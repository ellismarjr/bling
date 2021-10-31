function calcularDiferenca(dataInicio, dataFinal) {
  const dataInicioArray = dataInicio.split('/');
  const dataFinalArray = dataFinal.split('/');
  const dataInicioFormatted = new Date(dataInicioArray[2], dataInicioArray[1] - 1, dataInicioArray[0]);
  const dataFinalFormatted = new Date(dataFinalArray[2], dataFinalArray[1] - 1, dataFinalArray[0]);

  var diferenca = dataFinalFormatted.getTime() - dataInicioFormatted.getTime();
  var diferencaDias = Math.floor(diferenca / (1000 * 60 * 60 * 24));
  return diferencaDias;
}

const diferencaEmDias = calcularDiferenca("10/05/2021", "15/05/2021") // Esperado 5
console.log(diferencaEmDias)


