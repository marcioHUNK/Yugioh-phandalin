const btnAvancar = document.getElementById("btn-avancar");
const btnVoltar = document.getElementById("btn-voltar");
const cartoes = document.querySelectorAll(".cartao");
const somClique = document.getElementById('som-clique');
let cartaoAtual = 0;

// criando constante de áudio


mostrarCartao();

btnAvancar.addEventListener("click", function () {
    if (cartaoAtual === cartoes.length - 1) {
        return;
    }
    esconderCartaoSelecionado();
    cartaoAtual++;
    somClique.currentTime = 0;
    somClique.play();
    mostrarCartao();
});

btnVoltar.addEventListener("click", function () {
    if (cartaoAtual === 0) {
        return;
    }
    esconderCartaoSelecionado();
    cartaoAtual--;
    mostrarCartao();
    somClique.currentTime = 0;
    somClique.play();
});

function mostrarCartao() {
    cartoes[cartaoAtual].classList.add("selecionado");
}

function esconderCartaoSelecionado() {
    const cartaoSelecionado = document.querySelector(".selecionado");
    cartaoSelecionado.classList.remove("selecionado");
}
