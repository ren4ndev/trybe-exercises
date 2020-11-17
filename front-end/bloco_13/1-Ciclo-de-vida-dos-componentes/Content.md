# Ciclo de vida dos componentes

O ciclo de vida e os principais métodos funcionam da seguinte maneira:
Inicialização:
* constructor - recebe as props e define o estado;
Montagem:
* render - renderiza o componente, inserindo-o no DOM;
* componentDidMount - dispara uma ou mais ações após o componente ser inserido no DOM (ideal para requisições);
Atualização:
* shouldComponentUpdate - possibilita autorizar ou não o componente a atualizar;
* componentDidUpdate - dispara uma ou mais ações após o componente ser atualizado;
Desmontagem:
* componentWillUmount - dispara uma ou mais ações antes de o componente ser desmontado.

Além dos métodos citados, há também outros que o próprio React intitula de Métodos Raramente Usados, como o getDerivedStateFromProps e getSnapshotBeforeUpdate, e que não serão o foco desta aula. Caso tenha interesse, você pode aprender sobre eles neste link.

### Como garantir que o render só rode depois de o estado ser atualizado

Vimos no vídeo como fazemos para garantir que algo só rode depois do estado ser atualizado! Passamos como segundo parâmetro da this.setState uma callback com a dita lógica!

```javascript

this.setState({ meuEstado: novoValor }, () => {
  // ... Sua lógica aqui
})

```
E para o caso mais complicado? Isto é, atualizar o estado baseado no estado anterior e executar alguma lógica somente depois do estado atualizar ao mesmo tempo?! Nesse caso tanto o primeiro parâmetro quanto o segundo são callbacks!

```javascript

this.setState(
  (estadoAnterior) => ({ meuEstado: estadoAnterior }), // Primeiro parâmetro!
  () => { /* ... Sua lógica aqui */ } // Segundo parâmetro!
)

```

