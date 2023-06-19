# Criação de componentes

Para que se crie componentes no react é bom ter a boa pratica de manter tudo o mais organizado possivel dentro do seu ambiente de trabalho. Isso se deve pela facilitação na manutenção do código e para que outros programadores, que possam a vir mexer no projeto, consigam se localizar e entender melhor o que está escrito.

Nesse metodo de organização optamos por fazer o nosso site top-down, ou seja, faze-lo de cima para baixo. Bom, dentro do **src** será criado uma nova pasta que chamaremos de "components", dentro dessa pasta criaremos nosso primeiro componente que, daremos o nome de "Banner" com b maiusculo. E dentro desse componente criaremos dois arquivos: Banner.css e index.js.

![](https://i.im.ge/2023/06/19/ig4qOD.componentes-png.jpg)

---

## Conteudo de cada componente 
---

Dentro do nosso **index.js** do componente "Banner", iremos adicionar todo o conteudo necessario, em outras palavras, o corpo do componente.

Seguindo o modelo o "App.js", para da inicio a construção do Banner, criaremos uma *function* chamada Banner e em seguida faremos o export dela.

```js
function Banner() {

}

export default Banner;
```
Ao meu ver, é melhor que essa function seja armazenada dentro de uma *const* e é assim que trabalharei nesse projeto. Em seguida, dentro da nossa function, iremos da um *return*. Esse *return* é de multiplas linhas, logo os parenteses ficam em linhas distintas.

```js
const Banner = () => {
    return (

    );
}

export default Banner;
```
Na ideia original o site não apresenta um cabeçalho, o banner meio que fará esse papel, então iremos inserir a tag *header* e dentro dela a tag *img*.

```js
const Banner = () => {
    return (
        <header>
            <img/>
        </header>
    );
}

export default Banner;
```
Como dito anteriormente, na introdução, a pasta public é onde está localizado todas as imagens estaticas do projeto e por se tratar de uma pasta raiz, no *src* ela sera o nosso "/"; é a partir dela que iremos encontrar nossas imagens. Vale orientar que, é uma boa pratica utilizar o "alt" nas imagens, pois se, por um acaso, o navegador não conseguir carregar a imagem, ao menos, terá uma descrição do que ela seja.
```js
const Banner = () => {
    return (
        <header>
            <img src="/img/banner.png" alt="Banner do organograma da Alura" />
        </header>
    );
}

export default Banner;
``` 
Acrescentaremos uma *class* ao nosso *header*. E um fator interessante que deve-se ter em mente, a palavra "class" é uma palavra reservada do Javascript e isso pode gerar algum conflito. Por se tratar de react, será usado a palavra "className" e o nome dela será "banner".

```js
<header className="banner">
```

---
## Estilizando o componente
---
Em questões de estilização, usaremos o css da forma padrão dele.

```css
.banner {
    text-align: center;
    background-color: #6278f7;
}

.banner  img {
    max-width: 100%;
}
```
Agora é preciso fazer com que o "index.js" leve esse arquivo css em consideração. Então dentro do "index.js" faremos um *import* direto do "Banner.css".

```js
import "./Banner.css";

const Banner = () => {
    return (
        <header className="banner">
            <img src="/img/banner.png" alt="Banner do organograma da Alura" />
        </header>
    );
}

export default Banner;
```
---
## Importando componentes
---

Bom, o nosso componente já está pronto, mas ainda não é visivel no nosso localhost. Para que ele seja renderizado na tela do computador precisamos fazer o *impot* desse componente. Então onde que deve ser feito esse import? 

Comportaremos todos eles no arquivo "App.js", pois ele tem como função o acolhimento e a organização dos nossos componentes. Pois, como já mencionado, o arquivo "App.js" é renderizado pelo "index.js" na tela do computador.

Sendo assim, no "App.js" iremos fazer o import do nosso componente e em seguida o chamaremos dentro da function. Repare que a tag usada para chamar o componente é justamente o seu nome.

```js
import Banner from "./components/Banner";

function App() {
    return (
        <section>
            <Banner />
        </section>
    );
}

export default App;
```
Caso o nome do arquivo js do "Banner" fosse "Banner", o *import* ficaria da seguinte maneira:

```js
import Banner from "./components/Banner/Banner";
```
Mas como foi colocado "index.js" isso não é necessario.

![](https://i.im.ge/2023/06/19/i8SsJS.banner-finalizado.jpg)

---
---
<img align="center" width="400px" src="img/logo.svg"> <img align="center" width="280px" src="img/logo-branca-2.svg">

---
---