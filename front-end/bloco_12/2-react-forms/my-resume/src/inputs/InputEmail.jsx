import React from 'react';

class InputEmail extends React.Component {
  render() {
    const { value, handle } = this.props;
    return (
      <label className="label">
        Email:
        <input className="input" type="text" name="email" value={value} onChange={handle} />
      </label>
    );
  }
}

export default InputEmail;