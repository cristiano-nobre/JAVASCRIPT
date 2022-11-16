const numeros = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 23, 24, 25, 26, 27, 28, 29, 30, 31]

for (let i = 0; i < numeros.length; i++) {
  const numero = numeros[i]

  if (numero % 2 === 0) {
    console.log(numero)
  }
}
