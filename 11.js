const prompt = require ("prompt-sync")()

let soma = 0;

for(let i = 1; i <= 5; i++){
  const numero = Number(prompt("Digite um número: "));
  soma = soma + numero;
}
console.log(soma)







