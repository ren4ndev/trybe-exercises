import React from 'react';

class InputType extends React.Component {
  render() {
    const { value, handle } = this.props;
    return (
      <label className="label">
        Tipo:
        <input className="input" type="text" name="type" value={value} onChange={handle} />
      </label>
    );
  }
}

export default InputType;