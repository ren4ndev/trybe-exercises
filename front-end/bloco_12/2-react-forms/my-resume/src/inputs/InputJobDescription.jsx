import React from 'react';

class InputJobDescription extends React.Component {
  render() {
    const { value, handle } = this.props;
    return (
      <label className="label">
        Descrição do cargo:
        <input className="input" type="text" name="description" value={value} onChange={handle} />
      </label>
    );
  }
}

export default InputJobDescription;