function transformDegree(degree) {
  const celsiusExists = degree.toUpperCase().includes('C')
  const fahrenheitExists = degree.toUpperCase().includes('F')

  //Error
  if (!celsiusExists && !fahrenheitExists) {
    throw new Error('This transformation does not exist')
  }

  //Fahrenheit to Celsius
  let updatedDegree = Number(degree.toUpperCase().replace('F', ''))
  let formula = fahrenheit => ((fahrenheit - 32) * 5) / 9
  let degreeSign = 'C'

  //Celsius to Fahrenheit

  if (celsiusExists) {
    updatedDegree = Number(degree.toUpperCase().replace('C', ''))
    formula = celsius => (celsius * 9) / 5 + 32
    degreeSign = 'F'
  }

  return formula(updatedDegree) + degreeSign
}

try {
  console.log(transformDegree('10C'))
  console.log(transformDegree('50F'))
  console.log(transformDegree('60N'))
} catch (error) {
  console.log(error)
}
