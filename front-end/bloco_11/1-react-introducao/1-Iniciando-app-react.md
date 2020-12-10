# Iniciando app React

React é uma biblioteca (framework), criado pelo Facebook para facilitar o desenvolvimento.

O ECOSSISTEMA do React envolve:

* React
* JSX
* ES6
* WebPack
* Flux/Redux
* axios/fetch
* Jest/Mocha

IMPORTANTE: O código React tem que ser transformado para JS puro, pois o navegador só entende isso. Para isso se usava ferramentas (bundlers) como o Babel, WebPack...

O Facebook criou um template para que a gente não se preocupe em configurar esses bundlers.

## GERENCIADOR DE PACOTES:


	(Node Version Manager)
	(Instalando)
	1) Primeiro vamos rodar o comando abaixo no terminal.
	`curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.35.3/install.sh | bash`
	2) Vamos fechar TODAS as abas abertas do terminal. Elas precisam ser fechadas para que o script do passo anterior seja carregado no terminal.
	3) Agora vamos abrir novamente o terminal e rodar o comando abaixo. Esse comando retornará a versão do nvm que acabamos de instalar, como o da foto na sequência:
	`nvm --version`

	Por fim, após todos os procedimentos bem sucedidos, vamos rodar o último comando:
	`nvm install node`

	`nvm ls-remote` //LISTA AS VERSÕES DO NODE QUE EXISTEM E QUAL ESTOU UTILIZANDO
	`nvm install v0.0.0` // INSTALA UMA VERSÃO ESPECÍFICA
	`nvm use v0.0.0` // TROCA DE VERSÃO DO NODE INSTALADA

	Como o create-react-app é um pacote que a única coisa que faz é criar todos os arquivos necessários para termos um app React, não rodamos ele mais de uma vez por projeto, nem precisamos do pacote instalado em nossas máquinas, por isso SEMPRE executamos ele com o npx e não com o npm.

	`npm` //	NODE PACAKAGE MANAGER (utilizado para instalar os pacotes em nossas aplicações)
	`npx` //	(executa o comando de um pacote sem instalá-lo em si)
	
	Para atualizar o npm:
	`npm install -g npm@latest`


## CRIAR UM APP REACT E RODÁ-LO NO NAVEGADOR:

	(COM npx, npm)
	`npx create-react-app nomedoapp`
	Na pasta do projeto...
	`npm start` //	INICIA O APP NO NAVEGADOR localhost:3000
	`^C` // STOP O APP


	(Com o yarn)
	Dentro da pasta do projeto...
	`yarn create react-app .`
	`yarn start` //	INICIA O APP NO NAVEGADOR localhost:3000
	`^C` // STOP O APP

## CONCEITOS REACT

*Componentes*: ermitem que você crie sua tela como uma junção de diferentes pequenas peças reutilizáveis e com lógica isolada.


## CONCEITOS JSX

Parece com HTML, mas é uma forma de escrever JavaScript para dar instruções de como construir os componentes.
JSX produz elementos do React. Ex:

	`const element = <h1>Hello, World!</h1>;`
	(não é string, nem html, é JSX);

Incorporando Expressões em JSX:

	No exemplo abaixo, declaramos uma variável chamada name e então a usamos dentro do JSX ao envolvê-la com chaves:

```javascript
	const name = 'Josh Perez';
	const element = <h1>Hello, {name}</h1>;

	ReactDOM.render(
		element,
		document.getElementById('root')
	);
```

#### Sintaxe JSX:

* Múltiplas linhas, código envolvido em parênteses. Ex:

```javascript
	const element = (
		<h1>
			Hello, {formatName(user)}!
		</h1>
	);
```
* Tags devem ser sempre fechadas

	Ex:
	`<br/>`
	`<hr/>`

*Documentação*: https://pt-br.reactjs.org/docs/introducing-jsx.html


## ReactDOM.render

É o responsável por renderizar e atualizar seu código dentro do HTML, exibindo seus elementos.
elementos !== componentes

Para renderizar um elemento React em um nó raiz, passe ambos para ReactDOM.render()`:

```javascript

	const element = <h1>Hello, world</h1>;
	ReactDOM.render(element, document.getElementById('root'));

```

*IMPORTANTE*: elementos React são imutáveis. Não dá pra alterar seus filhos nem atributos. Para atualizar a interface é preciso criar um novo elemento e passá-lo para ReactDOM.render();

*OLHA QUE LOUCO*: O React DOM compara o elemento novo e seus filhos com os anteriores e somente aplica as modificações necessárias. :O


## CRIAÇÃO DE COMPONENTES FUNCIONAIS E DE CLASSE

Componentes são peças reutilizáveis e com lógica isolada. Podem ser criados mediante FUNÇÕES ou com a criação de CLASSES.

* Com funções

```javascript

//	Nome dos componentes em React sempre usando capitalize
//	A função deve retornar um JSX entre parênteses ou null
const MyComponent = function() {
  return (
    <div>Content</div>
  )
}

```

* Com classes

```javascript

//	Deve-se importar o React para poder usar os métodos da classe Component
//	Há duas formas de fazer isso
import React from 'react';
//	Assim a classe deve extender React.Component
import { Component } from 'react';
//	Assim basta usar o extends Component

class MyComponent extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
		<div>
			<h1>Hello React!</h1>
		</div>
	);
  }
};


```

## COMPONDO COMPONENTES JUNTOS


```javascript

//	Arquivo ChildComponent.js
const ChildComponent = () => {
  return (
    <div>
      <p>I am the child</p>
    </div>
  );
};

//	Arquivo ParentComponent.js
//	O componente pai deve primeiro importar o componente filho caso não estejam no mesmo arquivo
import ChildComponent from ('./ChildComponent');

class ParentComponent extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div>
        <h1>I am the parent</h1>
        <ChildComponent />
      </div>
    );
  }
};

```

## ADICIONANDO UM COMENTÁRIO EM JSX

```javascript

	{/* comment */}

```

## Problemas com o watch do server React

```
	//	No root ~
	sudo gedit /etc/sysctl.conf
	//	Add a line at the bottom
	//	#fs.inotify.max_user_watches=524288
	//	Save and exit
	//	To check it:
	sudo sysctl -p

```
