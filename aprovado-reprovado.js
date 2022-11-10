const nota1 = 10
const nota2 = 2
const nota3 = 2

const media = (nota1 + nota2 + nota3) / 3;

console.log("Sua média foi: " + media.toFixed(1));

if (media < 5) {
  console.log("Você reprovou, sinto muito");
} else if (media >=5 && media <= 7) {
  console.log("Você vai para a recuperação...");
} else {
  console.log('Você passou!');
}