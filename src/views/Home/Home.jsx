import { Link } from 'react-router-dom';
import { useUser } from '../../context/UserContext';

export default function Home() {
  const { user } = useUser();
  return (
    <div>
      <h1>Welcome to the Pizza Face Employee Directory</h1>
      <p>
        As an employee here at Pizza Face, you're required to create a profile
        on our intranet so we know when your birthday is(presents!) and so we
        can get to know you better
      </p>
      <p>Create and Account, then log in and fill out the requested details</p>
      <p>Thank you for being a part of the team!</p>
      {user.email ? (
        <Link to="/profile">View Your Profile</Link>
      ) : (
        <>
          {' '}
          <Link to="/register">
            <button>Sign Up</button>
          </Link>{' '}
          or{' '}
          <Link to="/login">
            <button>Login</button>
          </Link>{' '}
        </>
      )}
    </div>
  );
}
