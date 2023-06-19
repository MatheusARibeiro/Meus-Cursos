# Introdução ao React

Nesse curso será feito o site <u>organo</u>, com a primissa de utilizar o react como instrumento de trabalho e aprender tudo o que se pode sobre ele.

---

![](https://i.im.ge/2023/06/17/iEj91S.logo-node-js.png)

Por se tratar de uma aplicação react, não iniciaremos a construção do código de maneira convencional e sim, ultilizaremos do artificio **npx** para criarmos todos os nossos componentes nescessarios atraves no **Node js**.

---

## NPX
O npx é um gerenciador de pacotes do node usado pelo npm para executar pacotes no lugar de uma instalação global. E para criar esse arquivo sera usado o seguinte código:
```
npx create-react-app (nome do seu projeto)
```
Basicamente, ele cria uma instalação temporária do React de modo que, a cada novo projeto, você esteja usando a versão mais recente do React, ou seja, te retorna um template pronto para ser ultilizado.

Com tudo pronto, para que seja aberto o nosso arquivo, dentro do nosso terminal do node, entraremos na pasta do projeto e ultilizaremos o código:
```
npm start
```
Assim, conseguiremos rodar nosso projeto localmente.

![](https://i.im.ge/2023/06/17/iENulW.react-capa.jpg)

---

## Por dentro do React.

Observando como é o código da tela a cima, percebe-se como a sintax é totalmente diferente da forma padrão de se escrever.

```js
import logo from './logo.svg';
import './App.css';

function App() {
    return (
        <div className="App">
            <header className="App-header">
                <img src={logo} className="App-logo" alt="logo" />
                <p>
                    Edit <code>src/App.js</code> and save to reload.
                </p>
                <a className="App-link" 
                href="https://reactjs.org" 
                target="_blank" 
                rel="noopener noreferrer">
                    Learn React
                </a>
            </header>
        </div>
    );
}

export default App;
```

Isso é o que chamamos de **JSX**, esta é a forma como o React trabalha com a parte visual. Então isso parece um HTML, mas não é. O que o React vai fazer por debaixo nos panos é entender o que é isso e fazer o apende no **DOM**. É como se no modo clássico nós fizessos um <u>**document.createElement** e criássemos cada componente e definíssemos os seus atributos</u>. Então, o JSX é como o React lê isso e transforma em elementos no DOM. Ele parece HTML, mas não é, ele é JSX.

---
## A nivel de curiosidade

Navegando mais a fundo dentro do código, na lateral, onde fica a nossa barra de navegação observamos quais de fato nossos itens essenciais:

![](https://i.im.ge/2023/06/18/i3obTK.navegacao-intens-png.jpg) 

Fazendo um breve resumo do proposito de cada item do nosso **src**:

#### **App.js**
é a pasta onde todos os componentes do site serão comportados.
#### **style.css**
é onde está sendo setado uma estilização global do site.
#### **index.js**
o que o React faz aqui, ele faz o import do React DOM e cria o root onde vai ficar o componente principal da aplicação, e o que passamos como argumento para esse createRoot é algo que estamos acostumados, um seletor document.getElementByid, então alguém procurou um elemento com o id root.
```js
const root = ReactDOM.createRoot(document.getElementById('root'));
```
Depois de descobrirmos onde ele fez isso, ele renderizou o nosso App. Esse componente nada mais é do que o nosso "App.js". Então podemos falar que esse "index.js" é o que chamamos de **bootstrap**, o ponto de entrada. Esse é o primeiro arquivo que vai ser executado e que vai renderizar o primeiro componente e iniciar um movimento em cascata.

E o ReactStrictMode é para nos ajudar enquanto Front-End. Ele em produção não fará nada, mas em ambiente de desenvolvimento, o fato dele estar aqui vai nos ajudar a prevenir erros e ter mensagens de erros mais amigáveis.

```js
  <React.StrictMode>
    <App />
  </React.StrictMode>
```
Falando na pasta **public**, A ideia do "public" é que, quando criarmos e formos publicar em algum lugar, tudo que chamamos de "imagem estáticas" será disponibilizado colocando dentro da pasta "public".

---
---
<img align="center" width="400px" src="../img/logo.svg"> <img align="center" width="280px" src="../img/logo-branca-2.svg">

---
---
