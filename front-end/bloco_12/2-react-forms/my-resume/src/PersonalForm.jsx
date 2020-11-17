import React from 'react';
import InputName from './inputs/InputeName';
import InputEmail from './inputs/InputEmail';
import InputCPF from './inputs/InputCPF';
import InputAdress from './inputs/InputAdress';
import InputCity from './inputs/InputCity';
import InputState from './inputs/InputState';
import InputType from './inputs/InputType';

class PersonalForm extends React.Component {
  constructor(props) {
    super(props);
    this.handleChange = this.handleChange.bind(this);
    this.state = {
      name: '',
      email: '',
      cpf: '',
      adress: '',
      city: '',
      state: '',
      type: ''
    }
  }

  handleChange({ target }) {
    const { name, value } = target;
    this.setState({
      [name]: value
    })
  }
  render() {
    return (
      <fieldset>
        <InputName value={this.state.name} handle={this.handleChange} />
        <InputEmail value={this.state.email} handle={this.handleChange} />
        <InputCPF value={this.state.cpf} handle={this.handleChange} />
        <InputAdress value={this.state.adress} handle={this.handleChange} />
        <InputCity value={this.state.city} handle={this.handleChange} />
        <InputState value={this.state.state} handle={this.handleChange} />
        <InputType value={this.state.type} handle={this.handleChange} />
      </fieldset>
    );
  }
}

export default PersonalForm;