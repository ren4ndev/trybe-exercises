import React from 'react';

class InputAdress extends React.Component {
  render() {
    const { value, handle } = this.props;
    return (
      <label className="label" >
        Endereço:
        <input className="input" type="text" name="adress" value={value} onChange={handle}/>
      </label>
    );
  }
}

export default InputAdress;