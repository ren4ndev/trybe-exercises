import React from 'react';

class InputCity extends React.Component {
  render() {
    const { value, handle } = this.props;
    return (
      <label className="label" >
        Cidade:
        <input className="input" type="text" name="city" value={value} onChange={handle} />
      </label>
    );
  }
}

export default InputCity;