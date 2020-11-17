import React from 'react';

class InputState extends React.Component {
  render() {
    const { value, handle } = this.props;
    return (
      <label className="label">
        Estado:
        <input className="input" type="text" name="state" value={value} onChange={handle} />
      </label>
    );
  }
}

export default InputState;