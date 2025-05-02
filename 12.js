const prompt = require ("prompt-sync")()

const numero = Number(prompt("Informe um número para obter sua tabuada: "));

for(let i = 1; i <=10; i ++){

  
  
  console.log(`${i} x ${numero} = ${i * numero} `)

}


