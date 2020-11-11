import React from 'react';

class Form extends React.Component {
  constructor() {
    super();

    this.handleChange = this.handleChange.bind(this);

    this.state = {
      estado: 'RJ',
      nome: '',
      sobrenome: '',
      descricao: ''
    }
  }

  handleChange({ target }) {
    const { name, value } = target;
    this.setState({
      [name]: value
    });
  }

  render() {
    return (
      <form className="form">
        <label htmlFor="">
          Selecione seu estado:
          <select name="estado" value={this.state.value} onChange={this.handleChange}>
            <option value="RJ">Rio de Janeiro</option>
            <option value="RS">Rio Grande do Sul</option>
            <option value="RN">Rio Grande do Norte</option>
          </select>
        </label>
        <label htmlFor="">
          Nome:
          <input type="text" name="nome" value={this.state.nome} onChange={this.handleChange} />
        </label>
        <label htmlFor="">
          Sobrenome:
          <input type="text" name="sobrenome" value={this.state.sobrenome} onChange={this.handleChange} />
        </label>
        <label htmlFor="">
          Descrição:
          <textarea name="descricao" value={this.state.descricao} onChange={this.handleChange} />
        </label>
      </form>
    );
  }
}

export default Form;