function exercicio15(ano) {
    const bissexto = (ano % 4 === 0 && ano % 100 !== 0) || (ano % 400 === 0);
    console.log(bissexto ? "Bissexto" : "Não é bissexto");
  }