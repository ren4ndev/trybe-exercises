import React from 'react';

class Form extends React.Component {
  constructor() {
    super();

    this.handleChange = this.handleChange.bind(this);
    this.handleDescription = this.handleDescription.bind(this);
    this.handleName = this.handleName.bind(this);
    this.handleLastName = this.handleLastName.bind(this);

    this.state = {
      estado: 'RJ',
      nome: '',
      sobrenome: '',
      descricao: ''
    }
  }

  handleDescription(event) {
    this.setState({ descricao: event.target.value });
  }

  handleName(event) {
    this.setState({ nome: event.target.value });
  }

  handleChange(event) {
    this.setState({ estado: event.target.value });
  }

  handleLastName(event) {
    this.setState({ sobrenome: event.target.value });
  }

  render() {
    return (
      <form className="form">
        <label htmlFor="">
          Selecione seu estado:
          <select value={this.state.value} onChange={this.handleChange}>
            <option value="RJ">Rio de Janeiro</option>
            <option value="RS">Rio Grande do Sul</option>
            <option value="RN">Rio Grande do Norte</option>
          </select>
        </label>
        <label htmlFor="">
          Nome:
          <input type="text" value={this.state.nome} onChange={this.handleName} />
        </label>
        <label htmlFor="">
          Sobrenome:
          <input type="text" value={this.state.sobrenome} onChange={this.handleLastName} />
        </label>
        <label htmlFor="">
          Descrição:
          <textarea value={this.state.descricao} onChange={this.handleDescription} />
        </label>
      </form>
    );
  }
}

export default Form;