# Componentes React

## Criando componentes no React

```javascript

import React from 'react';

class HelloWorld extends React.Component {
	render () {
		return (
			<span>
				Hello World
			</span>
		)
	}
}

export default HelloWorld;

```

## Recebendo props

```javascript

import React from 'react';

class Greeting extends React.Component {
  render() {
    return <h1>Hello, {this.props.name} {this.props.lastName}</h1>;
  }
}

export default Greeting;

```

## Passando props na chamada do componente

```javascript

import Greeting from './Greeting';

function App() {
  return (
    <div>
      <Greeting name="Samuel" lastName="Silva" />
    </div>
  );
}

```
