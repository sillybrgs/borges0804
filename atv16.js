function exercicio16(idade) {
    switch (true) {
      case idade <= 12:
        console.log("Criança");
        break;
      case idade <= 17:
        console.log("Adolescente");
        break;
      case idade <= 59:
        console.log("Adulto");
        break;
      default:
        console.log("Idoso");
    }
  }