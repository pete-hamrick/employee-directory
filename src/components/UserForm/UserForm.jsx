export default function UserForm() {
  return (
    <form>
      <fieldset>
        {/* make legend label be dynamic(pass as props from auth) */}
        <legend>Label</legend>

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
