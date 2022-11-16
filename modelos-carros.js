class Carro {
  marca;
  cor;
  gastoMedioPorKm;

  constructor(marca, cor, gastoMedioPorKm) {
    this.marca = marca;
    this.cor = cor;
    this.gastoMedioPorKm = gastoMedioPorKm;
  }

  calcularGastoDePercurso(distanciaEmKm, precoCombustivel){
    return distanciaEmKm * this.gastoMedioPorKm * precoCombustivel;
}
}

const uno = new Carro('Fiat', 'Branco', 1/12);
console.log(uno.calcularGastoDePercurso(70, 5));

const hilux = new Carro('Toyota', 'Cinza', 1/14);
console.log(hilux.calcularGastoDePercurso(120, 5));

const corolla = new Carro('Toyota', 'Branco', 1/15);
console.log(corolla.calcularGastoDePercurso(150, 5));