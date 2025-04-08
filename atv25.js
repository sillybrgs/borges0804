function exercicio25(n) {
    let a = 1, b = 1;
    let fib = [a, b];
    while (fib.length < n) {
      let proximo = a + b;
      fib.push(proximo);
      a = b;
      b = proximo;
    }
    console.log(`Fibonacci (${n} termos):`, fib.slice(0, n).join(", "));
  }