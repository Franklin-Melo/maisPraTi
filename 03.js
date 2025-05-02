/*Aprovado: Nota maior ou igual a 6,0.
Recuperação: Entre 5.0 a 5,9.
Reprovado: Nota menor que 5,0 */

const prompt = require ("prompt-sync")()

const nota = Number(prompt("Qual a Nota do Aluno: "));

if(nota < 5){
  console.log("Reprovado!")
}else if(nota >= 5 && nota <= 5.9){
  console.log("Recuperação")
}else if(nota >= 6 && nota <= 10){
  console.log("Aprovado")
}else{
  console.log("Você informou uma nota Inválida!")
}