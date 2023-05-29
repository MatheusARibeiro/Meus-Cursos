function aplicaDesconto(arrayDeLivros) {
    const desconto = 0.3;
    livrosComDesconto = arrayDeLivros.map(livro => {
        return {...livro, preco: livro.preco - (livro.preco * desconto) }
    });
    return livrosComDesconto;
}