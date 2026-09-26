function abrirSorpresa() {
    document.getElementById("inicio").style.display = "none";
    document.getElementById("sorpresa").style.display = "block";

    window.scrollTo(0, 0);
}

function ultimaSorpresa() {

    document.getElementById("finalMensaje").style.display = "block";

    crearConfeti();
}

function crearConfeti() {

    for (let i = 0; i < 100; i++) {

        const confeti = document.createElement("div");

        confeti.classList.add("confeti");

        confeti.style.left = Math.random() * 100 + "vw";

        confeti.style.background =
            `hsl(${Math.random() * 360}, 80%, 65%)`;

        confeti.style.animationDelay =
            Math.random() * 1.5 + "s";

        document.getElementById("confeti").appendChild(confeti);
    }
}
