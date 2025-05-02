

let anterior = 0;
let atual = 1;
let proximo;

for (let i = 1; i <=10; i++){
  proximo = anterior + atual;
  anterior = atual;
  atual = proximo;
  console.log( proximo)
}
