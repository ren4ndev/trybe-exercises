import React from 'react';

class Form extends React.Component {
  constructor() {
    super();

    this.handleChange = this.handleChange.bind(this);
    this.fileInput = React.createRef();

    this.state = {
      estado: 'RJ',
      nome: '',
      sobrenome: '',
      descricao: '',
      isPcd: false
    }
  }

  handleChange({ target }) {
    const { name } = target;
    const value = target.type === 'checkbox' ? target.checked : target.value;
    this.setState({
      [name]: value
    });
  }

  render() {
    return (
      <form className="form">
        <fieldset>

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
          
        </fieldset>
        

        <fieldset>

          <label htmlFor="">
            Descrição:
            <textarea name="descricao" value={this.state.descricao} onChange={this.handleChange} />
          </label>

          <label htmlFor="">
            PCD:
            <input type="checkbox" name="isPcd" checked={this.state.isPcd} onChange={this.handleChange} />
          </label>

          <label htmlFor="">
            Anexe seu currículo
            <input type="file" ref={this.fileInput} />
          </label>

        </fieldset>
        
      </form>
    );
  }
}

export default Form;