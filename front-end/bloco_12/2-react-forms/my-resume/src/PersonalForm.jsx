import React from 'react';
import InputName from './inputs/InputeName';
import InputEmail from './inputs/InputeEmail';
import InputCPF from './inputs/InputCPF';
import InputAdress from './inputs/InputAdress';
import InputCity from './inputs/InputCity';
import InputState from './inputs/InputState';
import InputType from './inputs/InputType';

class PersonalForm extends React.Component {
  render() {
    return (
      <fieldset>
        <InputName />
        <InputEmail />
        <InputCPF />
        <InputAdress />
        <InputCity />
        <InputState />
        <InputType />
      </fieldset>
    );
  }
}

export default PersonalForm;