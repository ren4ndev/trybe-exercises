import React from 'react';
import PersonalForm from './PersonalForm';
import LastJobForm from './LastJobForm';

class Form extends React.Component {
  render() {
    return (
      <form className="form">
        <PersonalForm />
        <LastJobForm />
      </form>
    );
  }
}

export default Form;