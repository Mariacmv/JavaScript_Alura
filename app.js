// alert('Boas vindas ao jogo do número secreto');
// let numeroSecreto = parseInt(Math.random() * 100 + 1);
// console.log(numeroSecreto);
// let chute;
// let tentativas = 1;

// // enquanto chute não for igual ao n.s.
// while (chute != numeroSecreto) {
//     chute = prompt('Escolha um número entre 1 e 100');
//     // se chute for igual ao número secreto
//     if (chute == numeroSecreto) {
//         break;
//     } else {
//         if (chute > numeroSecreto) {
//             alert(`O número secreto é menor que ${chute}`);
//         } else {
//             alert(`O número secreto é maior que ${chute}`);
//         }
//         // tentativas = tentativas + 1;
//         tentativas++;
//     }
// }

// let palavraTentativa = tentativas > 1 ? 'tentativas' : 'tentativa';
// alert(`Isso ai! Você descobriu o número secreto ${numeroSecreto} com ${tentativas} ${palavraTentativa}.`);

alert(`Boas vindas ao jogo do número secreto!`);
let numeroMaximo = 5000;
let numeroSecreto = parseInt(Math.random() * numeroMaximo + 1);//funcionalidade math.random. Soma 1 porque não inclui o último valor
console.log(numeroSecreto);
let chute;
let tentativas = 1; //tem que começar com 1

while (chute != numeroSecreto) { //enquanto não for igual ao número secreto
    chute = prompt(`Escolha um número entre 1 e ${numeroMaximo}: `);

    if (chute == numeroSecreto) {
        break;
    } else {
        if (chute > numeroSecreto) {
            alert(`O número secreto é menor que ${chute}`);
        } else {
            alert(`O número secreto é maior que ${chute}`);
        }
        tentativas++;
    }
}


// // if (tentativas > 1) {
// //     alert(`Isso ai! Você descobriu o número secreto ${numeroSecreto} com ${tentativas} tentativas.`);
// // } else {
// //     alert(`Isso ai! Você descobriu o número secreto ${numeroSecreto} com ${tentativas} tentativa.`);
// // }



//Para manipular uma tag do html:
// Cria uma variável para receber e só modifica o 1 h1 por causa do let
let titulo = document.querySelector('h1');
// Agora modifica o html
titulo.innerHTML = 'Jogo do número secreto';

let paragrafo = document.querySelector('p');
paragrafo.innerHTML = 'Escolha um número entre 1 e 10';
