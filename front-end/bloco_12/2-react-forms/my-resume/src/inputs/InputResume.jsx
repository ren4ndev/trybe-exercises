import React from 'react';

class InputResume extends React.Component {
  render() {
    const { value, handle } = this.props;
    return (
      <label className="label">
        Resumo:
        <input className="input" type="text" name="resume" value={value} onChange={handle} />
      </label>
    );
  }
}

export default InputResume;