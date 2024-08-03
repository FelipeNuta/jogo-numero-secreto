let titulo = document.querySelector('h1')
titulo.innerHTML = 'Hora do Desafio!!';

function verificaConsole() {
    console.log('O botão foi clicado');
};

function verificaAlert() {
    alert('Eu amo JS');
};

function verificaPromp() {
    let escolheCidade = prompt('Escreva o nome de uma cidade do Brasil');
    alert(`Estive em ${escolheCidade} e lembrei de vocë`);
};

function verificaSoma() {
    let escolhaNumero1 = parseInt(prompt(`Escolha um Numero`));
    let escolhaNumero2 = parseInt(prompt(`Escolha outro Numero`));
    alert(escolhaNumero1 + escolhaNumero2);
};