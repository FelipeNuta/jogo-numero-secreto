alert('Boas vindas ao jogo do número secreto');
let numeroSecreto = 9;
console.log(numeroSecreto);
let chute ;
let tentativas = 0;


while (chute != numeroSecreto) {
    tentativas++;
    let chute = prompt('Escolha um número entre 1 e 10');
        // se chute for igual ao número secreto
    if (chute == numeroSecreto) {
        alert(`Isso ai! Você descobriu o número secreto ${numeroSecreto}`);
        alert(`Vocë demorou ${tentativas} tentativas para acertar`)
    } else {
        if (chute > numeroSecreto) {
            alert(`O numero secreto é menor que ${chute}`);
        }   else {
            alert(`O numero secreto é maior que ${chute}`);
        } 
    }
}


