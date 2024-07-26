let numeroSecreto = gerarNumeroAleatorio();
let tentativas = 1;
let numeroTentativa = 10;
let alteraNumero = `Escolha um número entre 1 e ${numeroTentativa}`;

function exibirTextoNaTela(tag, texto) {
    let campo = document.querySelector(tag);
    campo.innerHTML = texto;
}

function mensagemInicial() {
    exibirTextoNaTela('h1', 'Jogo do número secreto');
    exibirTextoNaTela('p', alteraNumero);
}

mensagemInicial();

function verificarChute() {
    let chute = document.querySelector('input').value;
    console.log(chute == numeroSecreto);

    if (chute == numeroSecreto) {
        let palavraTentativas = tentativas > 1 ? 'tentativas' : 'tentativa';
        let mensagemTentativa = `Você Acertou o Numero Secreto com ${tentativas} ${palavraTentativas}!`;
        exibirTextoNaTela('h1', 'ACERTOU O NUMERO');
        exibirTextoNaTela('p', mensagemTentativa);
        document.getElementById('reiniciar').removeAttribute('disabled');
    } else {
        if(chute < numeroSecreto) {
        exibirTextoNaTela('p', 'O Numero secreto é maior!!!!');
        } else if (chute > numeroSecreto) {
            exibirTextoNaTela('p', 'O Numero secreto é menor!!!!');

        }
        tentativas++;
        limparCampo();
    }
    
}

function gerarNumeroAleatorio() {
   return parseInt(Math.random() * 10 + 1);
}

function limparCampo() {
    chute = document.querySelector('input');
    chute.value = '';
}

function reiniciarJogo() {
    numeroSecreto = gerarNumeroAleatorio();
    limparCampo();
    mensagemInicial();
    tentativas = 1;
    document.getElementById('reiniciar').setAttribute('disabled', true);
}








