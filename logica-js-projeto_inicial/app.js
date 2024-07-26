alert ('Boas vindas ao nosso site!');
let nome = prompt ('Qual seu nome?');
let idade = prompt ('Qual a sua idade?');
let numeroDeVendas = '50';
let saldoDisponivel =  '1000';
let mensagemDeErro = 'Erro! Preencha todos os campos';

if (nome === '' || idade === '') {
    alert (mensagemDeErro);  
}

if (nome >= '18') {
    alert ('Voce pode tirar a habilitação!')
}
