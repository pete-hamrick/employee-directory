import UserForm from '../../components/UserForm/UserForm';

export default function Auth() {
  return (
    <div>
      {/* ternary if signing up or signing in */}
      <h2>Welcome</h2>
      {/* form component here */}
      <UserForm />
      {/* ternary for already have acct vs need an acct with links to login or register */}
    </div>
  );
}
