const livros = document.getElementById ("livros");
const valorTotal = document.querySelector (".valor__total");

function vitrineDeLivros (livrosComDesconto) {
    valorTotal.innerHTML = " ";
    livros.innerHTML = " ";
    livrosComDesconto.forEach (livro => {
        let disponibilidade = (livro.quantidade > 0 ? "livro__img" : "livro__img indisponivel");
        livros.innerHTML += `
            <article class="livro">
                <section class="livro__conteudo">
                    <div class="livro__bloco-img">
                        <img class="${disponibilidade}" src="${livro.imagem}" alt="${livro.alt}" >
                    </div>

                    <div class="livro__bloco-descricao">
                        <h2 class="livro__titulo">${livro.titulo}</h2>
                        <p class="livro__autor">${livro.autor}</p>
                        <p class="livro__preco">${livro.preco.toFixed(2)}</p>

                        <div class="tags"><span class="tag">${livro.categoria}</span></div>
                    </div>
                </section>
            </article>
        `
    });
}