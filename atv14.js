function exercicio14(peso, altura) {
    let imc = peso / (altura ** 2);
    let status = "";
    if (imc < 18.5) status = "Abaixo do peso";
    else if (imc < 25) status = "Peso normal";
    else if (imc < 30) status = "Sobrepeso";
    else if (imc < 35) status = "Obesidade grau I";
    else if (imc < 40) status = "Obesidade grau II";
    else status = "Obesidade grau III";
    console.log(`IMC: ${imc.toFixed(2)} - ${status}`);
  }