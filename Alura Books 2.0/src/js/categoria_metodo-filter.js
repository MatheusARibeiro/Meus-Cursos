const botoes = document.querySelectorAll (".btn");
botoes.forEach (botao => {botao.addEventListener ("click", filtrarPorCategoria)});

function filtrarPorCategoria () {
    const idBotao = document.getElementById (this.id);
    const categoria = idBotao.value;
    let livrosFiltrados = categoria == "disponivel" ? arrayDeLivros.filter (livro => livro.quantidade > 0) : arrayDeLivros.filter (livro => livro.categoria == categoria);

    vitrineDeLivros (livrosFiltrados);

    if (categoria == "disponivel") {
        const somaTotal = calculaValorTotalDeLivrosDisponiveis (livrosFiltrados);
        exibeValorTotalNaTela (somaTotal);
    }
}

function exibeValorTotalNaTela (somaTotal) {
    valorTotal.innerHTML = `
        <div class="livros__disponiveis">
            <p class="valor__total-descricao">Todos os livros disponíveis por R$<span class="valor">${somaTotal}</p>
        </div>
    `
}
