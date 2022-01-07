import { useHistory } from 'react-router-dom';
import { Link } from 'react-router-dom';
import UserForm from '../../components/UserForm/UserForm';
import { useUser } from '../../context/UserContext';
import { signInUser, signUpUser } from '../../services/users';

export default function Auth({ isSigningUp = false }) {
  const history = useHistory();
  const { setUser } = useUser();

  const handleSubmit = async (email, password) => {
    try {
      if (isSigningUp) {
        await signUpUser(email, password);
        history.push('/confirm-email');
      } else {
        const user = await signInUser(email, password);
        setUser(user.id, user.email);
        history.push('/profile');
      }
    } catch (error) {
      throw error;
    }
  };

  return (
    <section>
      <h2>{isSigningUp ? 'Welcome!' : 'Welcome Back!'}</h2>
      {/* form component here */}
      <UserForm
        onSubmit={handleSubmit}
        label={isSigningUp ? 'Sign Up' : 'Sign In'}
      />
      {/* ternary for already have acct vs need an acct with links to login or register */}
      {isSigningUp ? (
        <p>
          Already have an account?{' '}
          <Link to="/login">
            <button>Sign In</button>
          </Link>
        </p>
      ) : (
        <p>
          Need an account?{' '}
          <Link to="/register">
            <button>Sign Up</button>
          </Link>
        </p>
      )}
    </section>
  );
}
