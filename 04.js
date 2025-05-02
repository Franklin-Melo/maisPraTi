const prompt = require("prompt-sync")();

let opcao; // underfined

//Enquanto 
while (opcao !== 0) {
  const menu = `
  #########################

  |          Menu         |

  #########################

  | 1 - Opção 1           |
  | 2 - opção 2           |
  | 3 - opção 3           |
  | 0 - Sair              |
  
  #########################

 
  `;
  console.log(menu);

  opcao = Number(prompt("Digite a opção desejada: "))
  console.log()

  switch (opcao) {

    case 1:
      console.log("Você digitou a opção 1.")
      break;
    case 2:
      console.log("Você digitou a opção 2.")
      break;
    case 3:
      console.log("Você digitou a opção 3.")
      break;
    case 0:
      console.log("Você digitou a opção de sair")
      break;
    default:
      console.log("Você Digitou uma opção Inválida!")
      break;
  }
  console.log();
}
