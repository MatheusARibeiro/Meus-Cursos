const docJSON = "https://guilhermeonrails.github.io/casadocodigo/livros.json";
let arrayDeLivros = [];

async function buscarLivrosDaAPI () {
    const elementoDaAPI = await fetch(docJSON);
    arrayDeLivros = await elementoDaAPI.json();

   let livrosComDesconto = aplicaDesconto (arrayDeLivros);
    vitrineDeLivros (livrosComDesconto);
}

buscarLivrosDaAPI ();
