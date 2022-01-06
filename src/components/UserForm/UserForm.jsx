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
  const handleSubmit = async (event) => {
    event.preventDefault();
    const { email, password } = formState;

    try {
      if (!email || password.length < 8) {
        setFormError(
          'Must inclue and email and a password of 8+ characters in length'
        );
      }
      setLoading(true);
      await onSubmit(email, password);
    } catch (error) {
      setLoading(false);
      setFormError(error.message);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <fieldset>
        {/* make legend label be dynamic(pass as props from auth) */}
        <legend>{label}</legend>

        <label htmlFor="email">Email</label>
        <input
          id="email"
          type="email"
          name="email"
          value={formState.email}
          onChange={handleFormChange}
        />

        <label htmlFor="password">Password</label>
        <input
          id="password"
          type="password"
          name="password"
          value={formState.password}
          onChange={handleFormChange}
        />

        <button type="submit" disabled={loading}>
          {/* add loading state, disable when loading and change text to authenticating */}
          {loading ? 'Verifying...' : 'Submit'}
        </button>
        {/* add form error label here if there is a label */}
        {formError && <p>{formError}</p>}
      </fieldset>
    </form>
  );
}
