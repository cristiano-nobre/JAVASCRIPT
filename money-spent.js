let family = {
  incomes: [2500, 3200, 250.43, 345.45],
  expenses: [350.5, 1245, 187.82, 1800]
}

function sum(array) {
  let total = 0

  for (let value of array) {
    total += value
  }

  return total
}

function calculateBalance() {
  const calculateIncomes = sum(family.incomes)
  const calculateExpenses = sum(family.expenses)

  const total = calculateIncomes - calculateExpenses

  const itsOk = total >= 0

  let balanceText = ' Negative'

  if (itsOk) {
    balanceText = ' Positive'
  }

  console.log(`Seu saldo é ${balanceText}: ${total.toFixed(2)}R$`)
}

calculateBalance()
