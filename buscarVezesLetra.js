function buscarVezesLetra(letra, palavra) {
  const vezes = palavra.split('').reduce((acc, valor) => {
    if (valor === letra) {
      acc++;
    }
    return acc;
  }, 0);

  return vezes;
}

quantidadeRepetidasDaLetra = buscarVezesLetra('e', 'Quantas vezes essa letra ocorre nesta frase?');

console.log(quantidadeRepetidasDaLetra)