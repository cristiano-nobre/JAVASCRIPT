function calcularImc(peso, altura){
  return peso / (altura * altura)
}

function classificarImc(imc) {
  if (imc < 18.5) {
    return 'Você está abaixo do peso!'
  } else if (imc >= 18.5 && imc <= 25) {
    return 'Seu peso está normal!'
  } else if (imc > 25 && imc <= 30) {
    return 'Você está acima do peso!'
  } else if (imc > 30 && imc <= 40) {
    return 'Você está obeso!'
  } else {
    return 'Obesidade grave!'
  }
}

function main () {
const peso = 100
const altura = 1.78
const imc = calcularImc(peso, altura);
console.log(classificarImc(imc));
}

main();