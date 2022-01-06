import { useState } from 'react';
import { useForm } from '../../hooks/useForm.js';

// dan also passes in an authenticate label, dunno what that is
export default function UserForm({ onSubmit, label }) {
  const [loading, setLoading] = useState(false);
  const { formState, formError, handleFormChange, setFormError } = useForm({
    email: '',
    password: '',
  });

  // there is a handle submit in the private notebook
  // prevent default
  // destructure email and password from formState imported above
  // using a try/catch, it sets loading and awaits our passed in onSubmit from auth
  //in the try there is an if check for no email and the password being less than 8 characters, throws an error if true
  // the catch sets the form error and sets loading to false

  return (
    <form onSubmit={onSubmit}>
      <fieldset>
        {/* make legend label be dynamic(pass as props from auth) */}
        <legend>{label}</legend>

        <label htmlFor="email">Email</label>
        <input id="email" type="email" name="email" />

        <label htmlFor="password">Password</label>
        <input id="password" type="password" name="password" />

        <button type="submit">
          {/* add loading state, disable when loading and change text to authenticating */}
          Submit
        </button>
        {/* add form error label here if there is a label */}
      </fieldset>
    </form>
  );
}
