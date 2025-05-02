const prompt = require ("prompt-sync")()

const macasCompradas = Number(prompt("Digite o números de Maçãs comprads: "));

let soma = 0;

if(macasCompradas < 12){
  soma = macasCompradas * 0.30
  console.log(`Valor total da compra : ${soma}`)
}else {
  soma = macasCompradas * 0.25
  console.log(`Valor Total da Compra: ${soma}`)
}