alert(`Boas vindas ao jogo do número secreto!`);
let numeroSecreto = parseInt(Math.random() * 100 + 1);//funcionalidade math.random. Soma 1 porque não inclui o último valor
console.log(numeroSecreto);
let chute;
let tentativas = 1; //tem que começar com 1

while (chute != numeroSecreto){ //enquanto não for igual ao número secreto
    chute = prompt(`Escolha um número entre 1 e 100: `);

    if (chute == numeroSecreto){
        break;
    } else{
        if (chute > numeroSecreto){
            alert(`O número secreto é menor que ${chute}`);
        }else{
            alert(`O número secreto é maior que ${chute}`);
        }
        tentativas ++;
    }
}

let palavraTentativa = tentativas > 1 ? 'tentativas' : 'tentativa' //operador ternário
alert(`Isso aí! Você descobriu o número secreto ${numeroSecreto} com ${tentativas} ${palavraTentativa}.`);

if (tentativas > 1){
    alert(`Isso aí! Você descobriu o número secreto ${numeroSecreto} com ${tentativas} tentativas.`);
} else{
    alert(`Isso aí! Você descobriu o número secreto ${numeroSecreto} com ${tentativas} tentativa.`);
}