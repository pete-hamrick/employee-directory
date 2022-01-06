import { useState } from 'react';
import { useForm } from '../../hooks/useForm.js';

export default function UserForm({ onSubmit, label }) {
  const [loading, setLoading] = useState(false);
  const { formState, formError, handleFormChange, setFormError } = useForm({
    email: '',
    password: '',
  });

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
