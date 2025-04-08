function exercicio19(numeros) {
    let soma = 0;
    for (let num of numeros) {
      if (num === 0) break;
      soma += num;
    }
    console.log("Soma:", soma);
  }