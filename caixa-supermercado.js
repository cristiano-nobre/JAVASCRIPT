/*
Formas de pagamento:
 
01- À vista débito, recebe 10% de desconto;
02- À vista dinheiro ou pix, recebe 15% de desconto;
03- Em duas vezes, preço normal sem juros;
04- Em mais de duas vezes, juros de 10%;
*/

const valorProduto = 100
const formaPagamento = 4

if (formaPagamento === 1) {
  console.log(valorProduto * 0.9)
} else if (formaPagamento === 2) {
  console.log(valorProduto * 0.85)
} else if (formaPagamento === 3) {
  console.log(valorProduto)
} else {
  console.log(valorProduto * 1.1)
}
