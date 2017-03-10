import React from 'react'
import { Field, reduxForm } from 'redux-form/immutable'

import validate from './validate'

const inputField = props => {

  console.log('renderField props', props);

  return (
    <div>
        <input type={props.type} placeholder={props.placeholder} {...props.input} />
        {props.meta.touched && props.meta.error && <span>{props.meta.error}</span>}
    </div>
  );

}

class ImmutableForm extends React.Component {

  mySubmit(values) {
    // ev.preventDefault();
    console.log('values', values);
    let un = values.get('username');
    console.log('username', un);
    // console.log('arguments', arguments);
  }

  render() {
    const { handleSubmit, pristine, reset, submitting, invalid, values } = this.props;
    return (
      <form onSubmit={handleSubmit(this.mySubmit)}>
        <Field name="username" type="text" component={inputField} placeholder="Username"/>
        <Field name="email" type="email" component={inputField} placeholder="Email"/>
        <Field name="age" type="number" component={inputField} placeholder="Age"/>
        <div>
          <button type="submit" disabled={submitting || invalid }>Submit</button>
          <button type="button" disabled={pristine || submitting} onClick={reset}>Clear Values</button>
        </div>
      </form>
    );
  }
}

export default reduxForm({
  form: 'myReForm',  // a unique identifier for this form
  validate
})(ImmutableForm)
