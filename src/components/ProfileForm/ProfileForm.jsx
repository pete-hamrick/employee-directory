export default function ProfileForm() {
  return (
    <form>
      <fieldset>
        {/* make legend dynamic, about you or edit profile */}
        <legend>About You</legend>
        {/* name input */}
        <label htmlFor="name">Name</label>
        <input id="name" name="name" type="text" />
        {/* email display(not editable) */}
        <label>email@email.com</label>
        {/* birthday input */}
        <label htmlFor="birthdate">Birthdate</label>
        <input id="birthdate" name="birthdate" type="date" />
        {/* biography input */}
        <label htmlFor="bio">Bio</label>
        <textarea id="bio" name="bio" type="textarea" />

        <button type="submit">Submit</button>
      </fieldset>
    </form>
  );
}
