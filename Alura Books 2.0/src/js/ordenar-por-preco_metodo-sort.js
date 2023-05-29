const BTNprecoOrdenado = document.querySelectorAll (".preco");

BTNprecoOrdenado.forEach (botao => {botao.addEventListener ("click", ordenarPreco)})

function ordenarPreco () {
    let livrosOrdenados = arrayDeLivros.sort ((a, b) => a.preco - b.preco);
    vitrineDeLivros (livrosOrdenados);
}