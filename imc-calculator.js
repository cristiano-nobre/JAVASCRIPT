class Pessoa {
  nome
  peso
  altura

  constructor(nome, peso, altura) {
    this.nome = nome
    this.peso = peso
    this.altura = altura
  }

  calcularImc() {
    return this.peso / (this.altura * this.altura)
  }

  classificarImc() {
    const imc = this.calcularImc()
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
}

const jose = new Pessoa('Jose', 98, 1.75)
console.log(jose.classificarImc())

const cris = new Pessoa('Cris', 68, 1.7)
console.log(cris.classificarImc())

const renan = new Pessoa('Renan', 54, 1.72)
console.log(renan.classificarImc())
