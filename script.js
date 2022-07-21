var numeroSecreto = parseInt(Math.random() * 11);
//console.log(numeroSecreto);

function Chutar() {
  // var chute = parseInt(document.getElementById("valor").value);
  // var elementoResultado = document.getElementById("resultado");

  for (var i = 0; i < 3; i++) {
    var chute = parseInt(document.getElementById("valor").value);
    var elementoResultado = document.getElementById("resultado");
    if (chute >= 0 && chute <= 10) {
      if (chute == numeroSecreto) {
        elementoResultado.innerHTML = "Acertou";
      } else {
        elementoResultado.innerHTML = "Errou";
      }
    } else {
      elementoResultado.innerHTML = "Entre 0 e 10 apenas";
    }
  }
}