/*Classificação do IMC:
Baixo peso: IMC < 18,5 kg/m²
Peso normal: IMC entre 18,5 e 24,9 kg/m²
Sobrepeso: IMC entre 25 e 29,9 kg/m²
Obesidade: IMC ≥ 30 kg/m²  */

const prompt = require("prompt-sync")()

const peso = Number(prompt("Informe seu peso em (Kg): "));
const altura = Number(prompt("Informe sua alterua em (m): "));

const imc = peso / (altura * altura)
// console.log(imc);
// console.log(imc.toFixed(2));

if (imc < 18.5) {
  console.log("Seu Imc: ", imc.toFixed(2))
  console.log("Baixo Peso")
} else if (imc >= 18.5 && imc <= 24.9) {
  console.log("Seu Imc: ", imc.toFixed(2))
  console.log("Peso Normal")
} else if (imc > 25 && imc <= 29.9) {
  console.log("Seu Imc: ", imc.toFixed(2))
  console.log("Sobrepeso")
} else {
  console.log("Seu Imc: ", imc.toFixed(2))
  console.log("Obesidade")
}

