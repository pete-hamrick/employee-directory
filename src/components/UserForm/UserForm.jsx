import { useState } from 'react';
import { useForm } from '../../hooks/useForm.js';

export default function UserForm({ onSubmit, label }) {
  const [loading, setLoading] = useState(false);
  const { formState, formError, handleFormChange, setFormError } = useForm({
    email: '',
    password: '',
  });

  const handleSubmit = async (event) => {
    event.preventDefault();
    const { email, password } = formState;

    try {
      if (!email || password.length < 8) {
        setFormError(
          'Must include and email and a password of 8+ characters in length'
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
          {loading ? 'Verifying...' : 'Submit'}
        </button>
        {formError && <p>{formError}</p>}
      </fieldset>
    </form>
  );
}
