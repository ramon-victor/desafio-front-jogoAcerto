// Variáveis
const campoPalpite = document.getElementById("palpite");
const botaoPalpite = document.querySelector(".palpite button");
const botaoNovaPartida = document.querySelector(".nova-partida");
const fraseResultado = document.querySelector(".frase-resultado");

// Obtém um número aleatório para o jogo
getNumero();

// Oculta o número LED
function desativarLED(numero) {
    // Remove a classe exibir que contém o display ativo no CSS. 
    numero.classList.remove("exibir");
}

// Responsável por trocar número e cor do LED
function alterarLEDs(numero, cor) {
    const numeros = document.querySelectorAll(".numeros img");

    // Transformando o número em array
    let Func = num => Number(num);
    const numeroArr = Array.from(String(numero), Func);

    // Desativa todos os LEDs
    numeros.forEach(desativarLED);

    // Ativa os LEDs conforme o tamanho do vetor do número
    if (numero > 99) {
        /**  Para cada número é adicionado a classe exibir (altera o display através de CSS).
         *   Também é alterado o caminho da imagem de cada número conforme a 
         *   posição do número em array e cor atribuída no parâmetro da função. 
        */
        numeros[0].classList.add("exibir");
        numeros[0].src = "img/num-" + cor + "/num" + numeroArr[0] + ".svg";

        numeros[1].classList.add("exibir");
        numeros[1].src = "img/num-" + cor + "/num" + numeroArr[1] + ".svg";

        numeros[2].classList.add("exibir");
        numeros[2].src = "img/num-" + cor + "/num" + numeroArr[2] + ".svg";
    } else if (numero > 9) {
        numeros[0].classList.add("exibir");
        numeros[0].src = "img/num-" + cor + "/num" + numeroArr[0] + ".svg";

        numeros[1].classList.add("exibir");
        numeros[1].src = "img/num-" + cor + "/num" + numeroArr[1] + ".svg";
    } else {
        numeros[0].classList.add("exibir");
        numeros[0].src = "img/num-" + cor + "/num" + numeroArr[0] + ".svg";
    }
}

// Identifica se o palpite está de acordo com os requisitos
function palpiteValido(palpite) {
    return palpite <= 300 && palpite >= 0;
}


function verificarPalpite() {
    let palpite = campoPalpite.value;

    // Exibe a frase de resultado
    fraseResultado.classList.add("exibir");

    // Remove as classes de cores da frase resultado para evitar conflito
    fraseResultado.classList.remove("cor-acerto");
    fraseResultado.classList.remove("cor-erro");
    fraseResultado.classList.remove("cor-p4");

    // Se o palpite for válido será alterado a frase e LED de acordo com a resposta correta. 
    if (palpiteValido(palpite)) {
        if (palpite > resposta) {
            fraseResultado.innerHTML = "É menor";
            fraseResultado.classList.add("cor-p4");
            alterarLEDs(palpite, "preto");
        }

        if (palpite < resposta) {
            fraseResultado.innerHTML = "É maior";
            fraseResultado.classList.add("cor-p4");
            alterarLEDs(palpite, "preto");
        }

        if (palpite == resposta) {
            fraseResultado.innerHTML = "Você acertou!!!!";
            fraseResultado.classList.add("cor-acerto");
            alterarLEDs(palpite, "verde");

            campoPalpite.disabled = true;
            botaoPalpite.disabled = true;

            botaoNovaPartida.classList.add("exibir");
        }
    } else {
        fraseResultado.classList.remove("exibir");
    }
}

// Inicia uma nova partida obtendo um novo valor e desbloqueando os palpites
function novaPartida() {
    getNumero();
    botaoNovaPartida.classList.remove("exibir");
    fraseResultado.classList.remove("exibir");

    campoPalpite.disabled = false;
    botaoPalpite.disabled = false;

    alterarLEDs(0, "preto");
}

/** Altera os números LED's para o valor retornado no StatusCode do endpoint
 *  e bloqueia os palpites
*/
function setErro(StatusCode) {
    botaoNovaPartida.classList.add("exibir");
    fraseResultado.classList.add("exibir");

    campoPalpite.disabled = true;
    botaoPalpite.disabled = true;
    alterarLEDs(StatusCode, "vermelho");

    fraseResultado.innerHTML = "ERRO";
}
