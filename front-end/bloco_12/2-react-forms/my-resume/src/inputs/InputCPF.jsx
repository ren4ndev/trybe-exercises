import React from 'react';

class InputCPF extends React.Component {
  render() {
    const { value, handle } = this.props;
    return (
      <label className="label">
        CPF:
        <input className="input" type="text" name="cpf" value={value} onChange={handle} />
      </label>
    );
  }
}

export default InputCPF;