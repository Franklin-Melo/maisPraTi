/*Se ABC tem AB = AC = BC, então é equilátero.
Se ABC tem AB = AC e BC ≠ AB, então é isósceles.
Se ABC tem AB ≠ AC ≠ BC, então é escaleno.  */

const prompt = require ("prompt-sync")()


const ladoA = Number(prompt("Informe o Lado A do triângulo: "))
const ladoB =  Number(prompt("Informe o Lado B do triângulo: "))
const ladoC =  Number(prompt("Informe o Lado C do triângulo: "))

if(ladoA === ladoB && ladoB === ladoC){
  console.log("Equilátero")
}else if(ladoA !== ladoB && ladoB !== ladoC && ladoA !== ladoC){
  console.log("Escaleno")
}else {
  console.log("Isósceles")
}