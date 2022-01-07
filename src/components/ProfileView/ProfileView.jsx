// use a profile hook or context

export default function ProfileView() {
  return (
    <section>
      {/* Name display */}
      <h2>{profile.name}</h2>
      {/* email display */}
      <p>{profile.email}</p>
      {/* birthday display */}
      <p>Birthday: {profile.birthday}</p>
      {/* bio display */}
      <p>{profile.bio}</p>
    </section>
  );
}
