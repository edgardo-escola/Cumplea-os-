function abrirSorpresa() {

    const inicio = document.getElementById("inicio");
    const sorpresa = document.getElementById("sorpresa");

    if (!inicio || !sorpresa) {
        console.error("No se encontraron los elementos necesarios.");
        return;
    }

    inicio.style.display = "none";
    sorpresa.style.display = "block";

    window.scrollTo(0, 0);
}


function ultimaSorpresa() {

    const finalMensaje =
        document.getElementById("finalMensaje");

    if (!finalMensaje) {
        console.error("No se encontró finalMensaje.");
        return;
    }

    finalMensaje.style.display = "block";

    crearConfeti();
}


function crearConfeti() {

    const contenedor =
        document.getElementById("confeti");

    if (!contenedor) {
        console.error("No se encontró el contenedor de confeti.");
        return;
    }

    contenedor.innerHTML = "";

    for (let i = 0; i < 100; i++) {

        const confeti =
            document.createElement("div");

        confeti.classList.add("confeti");

        confeti.style.left =
            Math.random() * 100 + "vw";

        confeti.style.backgroundColor =
            `hsl(${Math.random() * 360}, 80%, 65%)`;

        confeti.style.animationDelay =
            Math.random() * 1.5 + "s";

        contenedor.appendChild(confeti);
    }
}
