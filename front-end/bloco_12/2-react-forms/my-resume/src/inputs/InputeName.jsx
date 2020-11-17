import React from 'react';

class InputName extends React.Component {
  render() {
    const { value, handle } = this.props;
    return (
      <label className="label" >
        Nome:
        <input className="input" type="text" name="name" value={value} onChange={handle} />
      </label>
    );
  }
}

export default InputName;