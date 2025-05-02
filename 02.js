//Regras:
/*Detalhamento:
Criança: De 0 a 12 anos.
Adolescente: De 12 a 18 anos.
Adulto: De 18 a 64 anos.
Idoso: 65 anos ou mais.  */

const idade = 65;

if(idade < 12){
  console.log("Criança")
}else if( idade >= 12 && idade < 18){
  console.log("Adolecente")
}else if( idade >= 18 && idade <= 64 ){
  console.log("Adulto")
}else{
  console.log("Idoso")
}