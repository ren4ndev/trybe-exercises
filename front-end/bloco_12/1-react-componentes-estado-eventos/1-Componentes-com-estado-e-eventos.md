# Componentes em React com estados e eventos

## Introdução ao estado

O Estado de um componente é um lugar especial que todo componente tem para armazenar informações que devem persistir enquanto a tela não for fechada ou atualizada. É o filtro selecionado, o item da lista destacado, o carrinho de compras, tudo isso e mais!

## ACESSAR UMA FUNÇÃO DENTRO DA CLASSE

Fazemos isso usando o **this**
Para acessar uma função que criamos dentro de uma classe num eventListener precisamos explicitar a origem de nossa função com a sintaxe _this.minhaFuncao_.

Ex:

```javascript

import React from 'react';
import './App.css';

class App extends React.Component {
  handleClick() {
    console.log('Clicou!')
  }

  render() {
    /* No React, precisamos dizer explicitamente que queremos uma função da nossa classe
    através da sintaxe `this.minhaFuncao` para usá-la num evento */
    return <button type="button" onClick={this.handleClick}>Meu botão</button>;
  }
}

export default App;

```

## Método _constructor()_

É possível adicionar ao construtor de uma classe comportamentos e lógicas extras usando o método constructor. Nós sobreescrevemos a implementação desse método como no exemplo abaixo:

```javascript

import React from 'react';
import './App.css';

class App extends React.Component {
  constructor(props) {
    // A função `super()` é chamada para garantir que a lógica interna do React rode **antes** da sua. Se não for assim, o código não funcionará
    super()

    // Sua lógica extra vai aqui! O parâmtro `props` é opcional, para você acessar as props diretamente no construtor
  }

  render() {
    return <span>Meu componente!</span>
  }
}

export default App;

```

## O que é o _this_?

O this acessa, nos componentes React, um objeto que guarda tudo que importa àquele componente. Um código de Hello, World! em React, ilustrado abaixo, gera a impressão no console a seguir:

Componente:
```javascript

import React from 'react';
import './App.css';

class App extends React.Component {
  render() {
    console.log(this)
    return <span>Hello, world!</span>
  }
}

export default App;

```
Console:

```log

App {
  context: {}
  props: {}
  refs: {}
  state: null
  updater: { isMounted: ƒ, enqueueSetState: ƒ, enqueueReplaceState: ƒ, enqueueForceUpdate: ƒ }
  _reactInternalFiber: FiberNode { tag: 1, key: null, stateNode: App, elementType: ƒ, type: ƒ, …}
  _reactInternalInstance: {_processChildContext: ƒ}
  isMounted: (...)
  replaceState: (...)
  *_proto_*: Component
    constructor: class App
    isMounted: (...)
    render: ƒ render()
    replaceState: (...)
    *_proto_*: {...}
  // ... Continua
  }

```

## WARNING

Quando definimos funções nossas numa classe de componente React, ele não funciona tão bem! 
Funções implementadas por nós não tem acesso ao objeto _this_.

A solução é, no constructor, fazemos para cada uma de nossas funções um vínculo "manual" da nossa função com o _this_.

Como?

`this.minhaFuncao = this.minhaFUncao.bind(this)`

Ex:

```javascript

import React from 'react';
import './App.css';

class App extends React.Component {
  constructor() {
    super()
    // A função abaixo vincula "manualmente" o `this` à nossa função
    this.handleClick = this.handleClick.bind(this)
  }

  handleClick() {
    /* Agora esse log retorna o objeto `this`, já acessível para nossa função!
    Com isso, podemos acessar as `props`, estado do componente (ainda vamos ver como!)
    e tudo o mais daqui de dentro */
    console.log(this)
    console.log('Clicou!')
  }

  render() {
    return <button onClick={this.handleClick}>Meu botão</button>
  }
}

export default App;

```

PS: é possível não fazer uso do bind se definirmos a função usando uma _arrow function_. Mas isso não é recomendado por questões de performance.

## Unindo componentes com estados e eventos

Olhe para esse exemplo:

```javascript

import React from 'react';
import './App.css';

class App extends React.Component {
  constructor() {
    super()
    this.state = {
      numeroDeCliques: 0
    }
  }

  handleClick = () => {
    /* Passando uma callback à função setState, que recebe de parâmetros
    o estado anterior e as props do componente, você garante que as atualizações
    do estado acontecerão uma depois da outra! */
    this.setState((estadoAnterior, _props) => ({
      numeroDeCliques: estadoAnterior.numeroDeCliques + 1
    }))
  }

  render() {
    return <button onClick={this.handleClick}>{this.state.numeroDeCliques}</button>
  }
}

export defult App;

```

Agora veja passo a passo o que foi feito novamente:

### Definindo estado inicial

Para definir um estado inicial ao componente, a ser definido
no momento em que o componente for colocado na tela, faça uma atribuição
de um objeto à chave `state` do `this`, ou seja, ao `this.state`

```javascript

//  Trecho do código
constructor() {
    super()
    this.state = {
      numeroDeCliques: 0
    }
}

```

### Lendo um estado do meu componente

Para LER o estado, você pode usar `this.state.chaveDoMeuEstado`

```javascript

//  Trecho do código
render() {
    return <button onClick={this.handleClick}>{this.state.numeroDeCliques}</button>
}

```

### Atualizando o estado do componente

Você **NUNCA** deve fazer atribuições diretamente a `this.state`. Deve,
ao invés disso, SEMPRE utilizar a função `this.setState(novoEstado)` do
React.

Mas se a a atualização do estado não ocorre em ordem, vocês perguntam, "como eu atualizo meu estado com base no estado anterior? Se tudo ocorre fora de ordem, como eu sei que uma conta de novoEstado = estadoAtual + 1 não dará problemas?"
Pois bem! Lembre-se de que, com Promises, para garantir que algum código executasse somente após o retorno da Promise, que é assíncrona, você tinha que colocá-lo dentro da função .then. Aqui a lógica é da mesma natureza:

```javascript

//  Trecho do código
handleClick = () => {
    /* Passando uma callback à função setState, que recebe de parâmetros
    o estado anterior e as props do componente, você garante que as atualizações
    do estado acontecerão uma depois da outra! */
    this.setState((estadoAnterior, _props) => ({
      numeroDeCliques: estadoAnterior.numeroDeCliques + 1
    }))
  }

```

## Chamando uma função com parâmetro no evento

 Se você quisesse chamar, no elemento, um evento passando um parâmetro, você deveria trocar a sintaxe <button onClick{this.minhaFuncao} ...> por <button onClick={() => this.minhaFuncao('meu parametro')}. Basicamente, substitua a função do evento por uma chamada à mesma feita via callback! Experimente!

## States vs Props

Você pode entender a diferença props vs state da seguinte forma:
props são uma forma de passar dados de pai para filho.
state é reservado para dados que seu componente controla.
O conceito é: state deve servir para guardar valores/estados do Componente que mudam com o uso do mesmo, para guardar uma alteração de estado que pode ter efeito na renderização do próprio componente. As props são valores estáticos, ou que no contexto de um Componente sejam estáticos, ou seja, não sofrem alteração dentro do escopo do componente que as recebe.