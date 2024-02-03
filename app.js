let listaDeNumerosSorteados = [];
let numeroLimite = 10;
let numeroSecreto = gerarNumeroAleatorio();
let tentativas = 1;


function exibirTextoNaTela(tag, texto) {
    let campo = document.querySelector(tag);
    campo.innerHTML = texto;
    responsiveVoice.speak(texto, 'Brazilian Portuguese Female', { rate: 1.2 });

}

function exibirMensagemNaTela() {
    exibirTextoNaTela('h1', 'Jogo do número secreto');
    exibirTextoNaTela('p', 'Adivinhe o numero entre 1 e 10');
}


exibirMensagemNaTela();

function verificarChute() {
    let chute = document.querySelector('input').value;
    if (chute == numeroSecreto) {
        document.querySelector('.container__imagem-pessoa').src = "/img/flork-feliz.png"
        exibirTextoNaTela('h1', 'Parabéns, Acertou');
        let palavraTentativa = tentativas > 1 ? 'tentativas' : 'tentativa';
        let mensagemTentativas = `Você descobriu o numero secreto com ${tentativas} ${palavraTentativa}`;
        exibirTextoNaTela('p', mensagemTentativas);
        document.querySelector('#reiniciar').removeAttribute('disabled');
    } else {
        document.querySelector('.container__imagem-pessoa').src = "/img/florkBravo.png"
        if (chute > numeroSecreto) {
            exibirTextoNaTela('p', 'O numero secreto é menor');
        } else {

            exibirTextoNaTela('h1', 'Errou tente denovo');

            exibirTextoNaTela('p', 'O numero é maior');
        }

        tentativas++;

        limparInput();
    }


}

function gerarNumeroAleatorio() {
    let numeroEscolhido = parseInt(Math.random() * numeroLimite + 1);
    let quantidadeDeElementosNaLista = listaDeNumerosSorteados.length;
    if (quantidadeDeElementosNaLista == numeroLimite) {
        listaDeNumerosSorteados = [];

    }

    if (listaDeNumerosSorteados.includes(numeroEscolhido)) {
        return gerarNumeroAleatorio();
    } else {
        listaDeNumerosSorteados.push(numeroEscolhido);

        return numeroEscolhido;
    }
}

function limparInput() {
    chute = document.querySelector('input');
    chute.value = '';


}

function novoJogo() {
    numeroSecreto = gerarNumeroAleatorio();
    limparInput();
    tentativas = 1;
    exibirMensagemNaTela();
    document.querySelector('#reiniciar').setAttribute('disabled', true);
    trocarFlork();
}

function trocarFlork() {
    document.querySelector('.container__imagem-pessoa').src = "/img/flork-png-90.png";
}




