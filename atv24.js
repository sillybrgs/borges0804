function exercicio24(numeros) {
    let pares = 0, impares = 0;
    for (let num of numeros) {
      if (num % 2 === 0) pares += num;
      else impares += num;
    }
    console.log("Soma dos pares:", pares);
    console.log("Soma dos ímpares:", impares);
  }