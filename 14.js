const prompt = require ("prompt-sync")()

const numero = Number(prompt("Digite um número para mostrar o seu Fatorial: "));

let fatorial = 1;

for(let i = 1; i <=numero; i++){
fatorial =  fatorial * i
}
console.log(fatorial)

