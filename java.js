function abrirAba(imagem, descricao) {
    window.open("informacoes.html?imagem=" + encodeURIComponent(imagem) + "&descricao=" + encodeURIComponent(descricao), "_blank");
}

function abrirJanelaFlutuante(descricao) {
    var janelaFlutuante = document.getElementById("janelaFlutuante");
    janelaFlutuante.innerHTML = descricao;
    janelaFlutuante.style.display = "block";
}

function fecharJanelaFlutuante() {
    var janelaFlutuante = document.getElementById("janelaFlutuante");
    janelaFlutuante.style.display = "none";
}

document.addEventListener("DOMContentLoaded", function () {
    var itensColeta = document.querySelectorAll(".coleta-item");

    itensColeta.forEach(function (item) {
        item.addEventListener("mouseover", function () {
            var descricao = item.getAttribute("data-descricao");
            abrirJanelaFlutuante(descricao);
        });

        item.addEventListener("mouseout", function () {
            fecharJanelaFlutuante();
        });
    });
});
