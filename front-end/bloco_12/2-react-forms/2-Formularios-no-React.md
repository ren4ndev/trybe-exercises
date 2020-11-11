# Formulários no react :rocket:

## Componentes controlados

Componente controlado é o componente que tem o seu estado gerenciado pelo React.
Exemplo de componente controlado:

```javascript

<textarea name="estadoFavorito" value={this.state.estadoFavorito} onChange={this.handleChange} />

```
Exemplo de componente não controlado

```javascript

<textarea name="estadoFavorito" />

```

Para entender melhor como o componente é controlado veja o código abaixo:

```javascript

import React, { Component } from 'react'
import './Form.css'

class Form extends Component {
  constructor() {
    super();

    this.handleChange = this.handleChange.bind(this);

    this.state = {
      estadoFavorito: '',
    };
  }


  handleChange(event) {
    this.setState({
      estadoFavorito: event.target.value,
    });
  }

  render() {
    return (
      <div>
        <h1>Estados e React - Tecnologia fantástica ou reagindo a regionalismos?</h1>
        <form className="form">
          <label>
            Diga qual o seu Estado favorito! De React ou do Brasil, você decide! =)
              <textarea name="estadoFavorito" value={this.state.estadoFavorito} onChange={this.handleChange} />
          </label>
          <input
            type="number"
            name="idade"
          />
          <input
            type="checkbox"
            name="vaiComparecer"
          />
        </form>
      </div>
    );
  }
}

export default Form;

```
## Como fazer eventHandlers genéricos

Uma excelente forma de criarmos formulários 100% com componentes controlados é fazermos um event handler genérico, capaz de atualizar o estado de todos os componentes com a mesma lógica.

```javascript

handleChange({ target }) {
  const { name } = target;
  const value = target.type === 'checkbox' ? target.checked : target.value;

  this.setState({
    [name]: value,
  });
}

```
## Transmitindo informações do componente filho pro componente pai

A transmissão de informações de um componente filho para um componente pai é um dos conceitos primordiais de React. Ele se baseia nos seguintes pilares:

* O componente pai detém o Estado e controla completamente como ele será atualizado. Isso significa que as funções que manipularão o estado devem ser declaradas sempre nele mesmo.
* Quando algum componente filho deve passar alguma informação ao componente pai, ele deve receber como props a função que atualiza o estado do pai e dar a ela, como parâmetro, a informação pedida.
* A informação transmitida dessa forma será inserida no estado do componente pai.

No código abaixo vemos um exemplo disso acontecendo numa aplicação diferente do formulário que estamos vendo: o contador de cliques do qual falamos no primeiro dia do bloco.

```javascript

import React from 'react';

class Button extends React.Component {
  render() {
    /* A função que altera o estado do componente pai chega
       ao componente filho via `props`! */
    const { handleClick } = this.props;

    return (<button type="button" onClick={handleClick} >Contar clique!</button>);
  }
}

class App extends React.Component {
  constructor() {
    super();

    this.handleClick = this.handleClick.bind(this);

    // O componente pai é o dono do estado!
    this.state = {
      numeroDeCliques: 0,
    };
  }

  /* A função de alterar o estado é definida no componente pai*/
  handleClick() {
    this.setState((estadoAnterior) => ({
      numeroDeCliques: estadoAnterior.numeroDeCliques + 1,
    }));
  }

  /* O componente filho recebe a função de alterar estado do pai via `props`,
     na forma de uma callback */
  render() {
    return (
      <div>
        <h1>{`${this.state.numeroDeCliques} cliques!`}</h1>
        <Button handleClick={this.handleClick} />
      </div>
    );
  }
}

export default App

```