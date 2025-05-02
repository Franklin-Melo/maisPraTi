const prompt = require("prompt-sync")()

let notas = -1
let contador = 0;
let somaNotas = 0;

while (notas !== 0) {

  notas = Number(prompt("Digite uma nota (Ou 0 para sair): "));

  if(notas !== 0){
    somaNotas = somaNotas + notas;
    contador++;
  }
}

if(contador > 0){
  let media = somaNotas/contador;
  console.log(`A media das notas é: ${media}`)
}else{
  console.log("Nenhuma nota foi Digitada!")
}