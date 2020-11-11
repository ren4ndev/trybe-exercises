import React from 'react';

class InputJob extends React.Component {
  render() {
    const { value, handle } = this.props;
    return (
      <label className="label">
        Cargo:
        <input className="input" type="text" name="job" value={value} onChange={handle} />
      </label>
    );
  }
}

export default InputJob;