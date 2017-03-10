import React from 'react'
import { Field, reduxForm } from 'redux-form/immutable'

// import validate from './validate'

function validate(values) {

  console.log('Validate values', values);

  return {};

}

class renderField extends React.Component {

  render() {
      const props = this.props
      console.log('renderField props', props);;
      return (
        <div>
            <input {...props}/>
            {props.touched && props.error && <span>{props.error}</span>}
        </div>
      );
  }

}

// const renderField = props => (
//
// )

// const handleSubmit = (event) => {
//   console.log('handleSubmit');
//   console.log(event);
// };

class ImmutableForm extends React.Component {

  mySubmit(values) {
    // ev.preventDefault();
    let un = values.get('username');
    console.log('username', un);
    // console.log('arguments', arguments);
  }

  render() {
    const { handleSubmit, pristine, reset, submitting, invalid, values } = this.props;
    return (
      <form onSubmit={handleSubmit(val => this.mySubmit(val))}>
        <Field name="username" type="text" component="input" value="one" placeholder="Username"/>
        <Field name="email" type="email" component="input" placeholder="Email"/>
        <Field name="age" type="number" component="input" placeholder="Age"/>
        <div>
          <button type="submit" disabled={submitting || invalid }>Submit</button>
          <button type="button" disabled={pristine || submitting} onClick={reset}>Clear Values</button>
        </div>
      </form>
    );
  }

}

// const ImmutableForm = (props) => {
//   const { handleSubmit, pristine, reset, submitting, invalid } = props
//   return (
//     <form onSubmit={handleSubmit}>
//       <Field name="username" type="text" component={renderField} placeholder="Username"/>
//       <Field name="email" type="email" component={renderField} placeholder="Email"/>
//       <Field name="age" type="number" component={renderField} placeholder="Age"/>
//       <div>
//         <button type="submit" disabled={submitting || invalid }>Submit</button>
//         <button type="button" disabled={pristine || submitting} onClick={reset}>Clear Values</button>
//       </div>
//     </form>
//   )
// }

export default reduxForm({
  form: 'myReForm',  // a unique identifier for this form
  // fields: ['username','email','age'],
  validate
})(ImmutableForm)
