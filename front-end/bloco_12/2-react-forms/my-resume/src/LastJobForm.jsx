import React from 'react';
import InputResume from './inputs/InputResume';
import InputJob from './inputs/InputJob';
import InputJobDescription from './inputs/InputJobDescription';

class LastJobForm extends React.Component {
  render() {
    return (
      <fieldset>
        <InputResume />
        <InputJob />
        <InputJobDescription />
      </fieldset>
    );
  }
}


export default LastJobForm;