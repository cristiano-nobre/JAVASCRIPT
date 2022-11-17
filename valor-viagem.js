const etanol = 4.80;
const gasolina = 5.23;

const distanciaPorLitroGasolina = 10;
const distanciaPorLitroEtanol = 7;
const distanciaViagem = 600;

const tipoCombustivel = etanol;

if (tipoCombustivel === etanol) {
  const etanolConsumido = distanciaViagem / distanciaPorLitroEtanol;
  console.log('Sua viagem será de '+ distanciaViagem + 'km, e serão consumidos ' + etanolConsumido.toFixed(2) + ' litros de etanol.');

  const precoTotal = tipoCombustivel * etanolConsumido;
  console.log('Logo, o valor total a ser pago será de '+ precoTotal.toFixed(2));
} else {

  const gasolinaConsumida = distanciaViagem / distanciaPorLitroGasolina;
  console.log('Sua viagem será de '+ distanciaViagem + 'km, e serão consumidos ' + gasolinaConsumida.toFixed(2) + ' litros de gasolina.');

  const precoTotal = tipoCombustivel * gasolinaConsumida;
  console.log('Logo, o valor total a ser pago será de '+ precoTotal.toFixed(2));
}