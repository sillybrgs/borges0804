function exercicio20(numeros) {
    let soma = 0, count = 0;
    for (let num of numeros) {
      if (num < 0) break;
      soma += num;
      count++;
    }
    console.log("Média:", count > 0 ? soma / count : 0);
  }