const listaDeTeclas = document.querySelectorAll (".tecla");

listaDeTeclas.forEach ((elemento) => {
    const instrumento = elemento.classList[1];
    const idAudio = `#som_${instrumento}`;
    elemento.addEventListener ("click", () => {
        tocaSom (idAudio);
    });

    elemento.onkeydown = function (evento) {
        if (evento.code === "Space" || evento.code === "Enter") {
            elemento.classList.add ("ativa");
        }
    }

    elemento.onkeyup = function () {
        elemento.classList.remove ("ativa");
    }
        
});

function tocaSom (idElementoAudio) {
    const som = document.querySelector (idElementoAudio);

    if (som && som.localName === "audio") {
        som.play();
    } else {
        alert ("elemento não encontrado ou seletor invalido");
    }
}

//-----------------------------------------------------------------------------------------------

/*  
const listaDeTeclas = document.querySelectorAll (".tecla");

for (i = 0; i < listaDeTeclas.length; i++) {
    const teclas = listaDeTeclas[i];
    const instrumento = teclas.classList[1];
    const idAudio = `#som_${instrumento}`;

    teclas.onclick = function () {
        tocaSom (idAudio);
    }

    teclas.onkeydown = function (event) {
        if (event.code === "Space" || event.code === "Enter") {
            teclas.classList.add ("ativa");
        }
    }

    teclas.onkeyup = function () {
        teclas.classList.remove ("ativa");
    }
}

function tocaSom (idElementoAudio) {
    const som = document.querySelector (idElementoAudio);

    if (som && som.localName === "audio") {
            som.play();
    } else {
        alert ("elemento não encontrado ou seletor invalido");
    }
}
*/