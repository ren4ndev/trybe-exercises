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


