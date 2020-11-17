import React from 'react';
import InputResume from './inputs/InputResume';
import InputJob from './inputs/InputJob';
import InputJobDescription from './inputs/InputJobDescription';

class LastJobForm extends React.Component {
  constructor(props) {
    super(props);
    this.handleChange = this.handleChange.bind(this);
    this.state = {
      resume: '',
      job: '',
      description: ''
    }
  }

  handleChange({ target }) {
    const { name, value } = target;
    this.setState({
      [name]: value
    })
  }
  render() {
    return (
      <fieldset>
        <InputResume value={this.state.resume} handle={this.handleChange} />
        <InputJob value={this.state.job} handle={this.handleChange} />
        <InputJobDescription value={this.state.description} handle={this.handleChange} />
      </fieldset>
    );
  }
}


export default LastJobForm;