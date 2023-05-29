const form = document.getElementById ("novoItem");
const lista = document.getElementById ("lista");
const checkList = JSON.parse(localStorage.getItem("item")) || [];

checkList.forEach ((element) => {
    criaElemento (element);
});

form.addEventListener ("submit", (event) => {
    event.preventDefault();

    const nome = event.target.elements["nome"];
    const quantidade = event.target.elements["quantidade"];
    const itemAtual = {
        "nome": nome.value,
        "quantidade": quantidade.value 
    }
    const existe = checkList.find (element => element.nome === nome.value);

    if (existe) {
        itemAtual.id = existe.id;
        alualizaElemento (itemAtual);
        checkList[checkList.findIndex(element => element.id === existe.id)] = itemAtual;
    } else {
        itemAtual.id = checkList [checkList.length -1] ? (checkList [checkList.length -1]).id + 1: 0;
        criaElemento (itemAtual);
        checkList.push(itemAtual);
    }

    localStorage.setItem ("item",JSON.stringify(checkList));

    form.reset();
});

function criaElemento (item) {
    const negrito = document.createElement ("strong");  
    const itemLi = document.createElement ("li");
    
        negrito.innerHTML = item.quantidade;
        negrito.dataset.id = item.id;

        itemLi.classList.add ("item");
        itemLi.appendChild (negrito);
        itemLi.innerHTML += item.nome;
        itemLi.appendChild(botaoDeleta(item.id));
        
        lista.appendChild (itemLi);
}

function alualizaElemento (item) {
    document.querySelector ("[data-id='"+item.id+"']").innerHTML = item.quantidade; 
}

function botaoDeleta () {
    const elementButton = document.createElement ("button");
    elementButton.innerText = "x";
    
    elementButton.addEventListener ("click", function () {
        deletElement (this.parentNode);
    });

    return elementButton;
}

function deletElement (tag) {
    tag.remove();
    checkList.splice (checkList.findIndex (element => element.id === id), 1);
    localStorage.setItem ("item",JSON.stringify(checkList));
}