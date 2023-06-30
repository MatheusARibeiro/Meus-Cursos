# Formulário

Para a criação do nosso segundo componente react, será feito mais do mesmo no início. Em components, cria-se uma pasta chamada "Formulario" e dentro dessa pasta, dois arquivos: Formulario.css e o index.js.

![](https://i.im.ge/2023/06/19/i8N6bf.formulario-react.jpg)

Dentro do index.js, será feito o mesmo esquema de import, export e const do "Banner", a diferença aqui é que, no lugar de "Banner" coloca-se "Formulario".

```js
import "./Formulario.css";

const Formulario = () => {
    return (

    );
}

export default Formulario;
```
Esse é o padrão. Agora será criada uma *section* e uma className para ela, e dentro dela um *form*. Assim, já está tudo pronto para que possa receber os componentes do formulário.

```js
import "./Formulario.css";

const Formulario = () => {
    return (
        <section className="formulario">
            <form>
                
            </form>
        </section>
    );
}

export default Formulario;
```
O formulário é parecido com o "App.js", ambos apresentam a mesma estrutura, um componente com componentes menores dentro. Logo ele também faz chamada dos componentes utilizando as tag's personalizadas.

O primeiro componente do formulario será o titulo, então dentro da tag "h2" escreve-se:

```js 
<h2>Preencha os dados para criar os dados do colaborador</h2>
```
> **nota**: Em questão de estilização, olhar o código original.

---
## Campo de texto
---

Para o segundo componente, dentro da pasta "Formulario" será criado uma outra pasta chamada "CampoTexto", e dentro dessa pasta, os arquivos css e js. Então, no index.js do "CampoTexto", repetirá o padrão apresentado até agora.

```js
import "./CampoTexto";

const CampoTexto = () => {
    return (

    );
}

export default CampoTexto;
```
E em seguida, adicionaremos o *label* e o *input* ao código

```js
import "./CampoTexto";

const CampoTexto = () => {
    return (
        <label></label>
        <input/>
    );
}

export default CampoTexto;
```
Pois bem, como o nome sugere, trata-se de um campo de texto e no formulário serão três campos onde a pessoa terá que inserir os dados necessários. Tendo isso em vista é preciso ter três *label* e *input*, mas isso fária com que o código se tornasse muito repetitivo. Então, como resolver?

Deve-se lembrar que, todos esses componentes são funções e, como se sabe, funções podem receber parametro. Então é assim que será feito para que não haja repetições.

<br>

Bom, como são três campos de texto, chamaremos três vezes essa função:

```js
import CampoTexto from "./CampoTexto";
import "./Formulario.css";

const Formulario = () => {
    return (
        <section className="formulario">
            <form>
                <h2>Preencha os dados para criar os dados do colaborador</h2>
                <CampoTexto />
                <CampoTexto /> 
                <CampoTexto />
            </form>
        </section>
    );
}

export default Formulario;
```
Agora em cada um será inserido as informações necessarias, como o "label" e o "placeholder", distinguindo cada um.

```js
<CampoTexto label="nome" placeholder="Digite o seu nome"/>
<CampoTexto label="cargo" placeholder="Digite o seu cargo"/>
<CampoTexto label="imagem" placeholder="digite a url da imagem"/>
```
Se olharmos no que foi impresso na tela, repararemos que nada mudou

![](https://i.im.ge/2023/06/21/iZkARq.form-props.jpg)

A partir do momento que passamos uma propriedade dessas, podemos pegar imadiatamente aqui do CampoTexto(). Isso porque o React nos entrega implicitamente um parâmetro chamado props, que são as propriedades que esse componente recebeu. Observe no console do navegador como fica.

```js
const CampoTexto = (props) => {
console.log(props);
```
![](https://i.im.ge/2023/06/21/iZziOW.console-parametro.jpg)

Veja que eles se repetem duas vezes. Lembram que o React.StrictMode nos ajuda a dizer se tem algo errado? Então, para conseguir validar isso ele faz renderizar adicionais do componente. Se desligarmos ele, ele só faz uma vez para cada componente.

Continuando, em "Formulario" colocamos um label de Nome, Cargo e Imagem e os placeholder's e foi isso o que recebemos nas props: um objeto JavaScript com uma propriedade que vem com o valor que foi passado.

Ou seja, conseguimos passar o parâmetro para o componente. O que precisamos fazer agora é uma mistura de um valor de objeto JavaScript e imprimir ele no HTML.

Agora teremos acesso ao valor que foi passado. Na tag label precisamos que tenha um props.label.

```js
<label>props.label</label>
```

Porém, se apenas digitarmos assim livremente, o React vai entender isso como uma string qualquer.

Para indicarmos que queremos imprimir o valor dessa variável precisamos colocá-la entre chaves { }.

```js
<label>{props.label}</label>
```
Agora o React está entendo que o que recebermos nessa propriedade, ele vai imprimir.

Também precisamos disso para o placeholder, então passaremos ele como argumento.

Em label nós imprimimos direto no HTML, agora em placeholder, nós queremos que o valor dele venha da variável. Nele, então, temos placeholde= e podemos colocar {props.placeholder}.

```js
<input placeholder={props.placeholder}/>    
```
---
## A nivel de curiosidade
--- 

E se precisassemos concatenar a string? Por exemplo, porque em placeholder= não precisamos das aspas "". E se precisassemos colocar placeholder="Alguma coisa" {props.placeholder}. Acho que isso se chama interpolação. Como ficaria a sintaxe nesse caso?

Vamos criar aqui do lado de fora uma constante const chamada placeholderModificada.

```js
const placeholderModificada =
```

 Com JavaScript existem muitas formas de fazer a interpolação, aqui vamos usar o template string usando crase.

```js
const placeholderModificada = `${props.placeholder}...`
```

Assim conseguimos chamar o "placeholderModificado" no input.

```js
<input placeholder={placeholderModificado}/>
```

Podemos apagar o const placeholderModificada e colocar ${props.placeholder}direto no placeholder=.

```js
<input placeholder =`${props.placeholder}...` />
```

O resultado é o mesmo! O placeholder={} espera uma variável JavaScript, se estamos criando ela do lado de fora ou dentro dele, para o JSX isso não importa.

![](https://i.im.ge/2023/06/21/iZn2Q6.formulario-parcial.jpg)

>**nota**: A palavra "props" é uma palavra comumente usada, mas pode ser qualquer palavra passada como parametro. "Props" vem de "propriedade".

> **nota**: Em questão de estilização, olhar o código original. 

---
## Lista suspença
---

Veremos agora como fazer uma lista de opções para que possa escolher algumas das áreas do meio tecnologico. Bom, de começo, seguiremos com o padrão. Criar uma pasta,  com o nome "Lista supença" e, dentro dela, os arquivos css e js. E em seguida, ja pode fazer o import dentro do formulario.

A sintaxe do arquivo js, padrão:

![](https://i.im.ge/2023/06/24/iJvKYa.listajs.jpg)

No gerar de uma lista suspensa, como o corpo usaremos a tag "select" e como opções a tag "option", mas e agora? 

Precisamos de alguma forma interar em cima dessa lista, ou seja, de alguma maneira precisamos receber uma props.itens e para cada item dessa lista temos que renderizar o options.

Com o React nós temos um jeito muito específico de realizar isso, que é uma forma de iterar em cima desse elemento renderizando o HTML para cada item da lista. 

Todo array do javascript possui o método ".map". Ele é responsavel por, para cada item da lista ele retornará um array novo manipulado, ou seja, além dele percorrer a lista ele retorna outra lista diferente.

Tendo isso em mente, vamos criar a lista para podermos percorre-la. Além disso chamaremos a "ListaSuspensa" no "formulario" e inseriremos o "label" logo.

![](https://i.im.ge/2023/06/30/0yb3o4.listasuspensa.jpg)

Com a lista criada, no "index.js" ja criaremos as tags necessarias:

```js
import "./ListaSuspensa.css";

const ListaSuspensa = (props) => {
    return (
        <div>
            <label>{props.label}</label>
            <select>

            </select>
        </div>
    );
}

export default ListaSuspensa;
```
Dentro da tag "select" será inserido nossa "props" para podermos pegar os itens criados no formulário. Seguindo uma logica, essa props está pegando uma lista com **itens** (argumento passado para se referir aos elementos da lista) e nesses itens usaremos o "map".

```js
<select>
    {props.itens.map}
</select>
```
O map percorre cada **item** da lista (passando um aerofunction), cada item retorna uma option e será impresso o item em cada option.

```js
<select>
    {props.itens.map(item => <option>{item}</option>)}
</select>
```
ou podemos fazer da seguinte maneira:

```js
<select>
    {props.itens.map(item => {
        return <option>{item}</option>;
    })}
</select>
```  

Mas algo precisa ser dito aqui, cada item da nossa lista precisa de uma chave "key". O React precisa disso para controlar a renderização e saber quando ele precisa atualizar um item ou não. Em nosso caso, podemos usar o próprio nome do time como chave.

```js
return <option key={item}>{item}</option>;
```
Nesse nosso caso, a lista é simples de um componente simples, mas ele poderia ser um componente muito complexo e sem essa chave o React perde o controle de quando renderizar de novo.

>O map nos dá o iten, o valor, e o index, a posição dele no array. Poderíamos pegar a posição do iten no array, que é única e colocar como chave e isso funcionaria.
>Entretanto, se por algum motivos trabalharmos em remover algum item dessa lista, o React pode ser perder e não analizar o índice anterior porque a chave é a mesma.
---
## Botão
---

Por fim, será criado o botão. De começo toda a criação de arquivo é padrão. Então seguiremos com o que interessa.

```js
import "./Botao.css";

const Botao = (props) => {
    return (
        <button className="botao">{props.texto}</button>
    )
}

export default Botao;
```

Bom, o texto do botão nós estamos recebendo via prop o que para esse cenário funciona, porém, esse botão poderiam ser uma ícone, por exemplo, ou ter uma imagem dentro dele. Se fossem esses os caso, fazer isso via props seria complicado.

O React no traz uma outra maneira de passar elementos para dentro do componente que se parece com o HTML como nós o conhecemos.

Vamos abrir o "index.js" do "Formulario". Aqui, temos o Botao. Seria interessante se pudessemos fazer algo como:

```js
<Botao>

</Botao>
```

Vinicios: E dentro dele, no corpo, chamaríamos o **Criar card**. O React nos dá uma forma para fazer algo parecido. Por padrão, todo componente tem o que chamamos de children, que são os filhos.

Então, em vez de fazer o *props.texto* vamos fazer o *props.children* em Botao.

```js
return (<button className='botao'>{props.children}</button>);
```

Tudo que estiver dentro de Botao será passado pela propriedade children.

![](https://i.im.ge/2023/07/01/0ErZNc.fromulario.jpg)

---
---
<img align="center" width="400px" src="../img/logo.svg"> <img align="center" width="280px" src="../img/logo-branca-2.svg">

---
---