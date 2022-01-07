import { Link } from 'react-router-dom';
import styles from './Header.css';
import pizzaFace from '../../assets/pizza-face.png';
import { useUser } from '../../context/UserContext';

export default function Header() {
  const { user } = useUser();
  return (
    <header className={styles.header}>
      <Link className={styles.logoLink} to="/">
        <img className={styles.logo} src={pizzaFace} alt="pizza face" />
        <h1>Pizza Face Employee Directory</h1>
      </Link>
      <p>
        {user.email ? (
          <>
            {' '}
            `Signed in as ${user.email}`{' '}
            <button className={styles.button}>Sign Out</button>{' '}
          </>
        ) : (
          <>
            {' '}
            Not Logged In <button className={styles.button}>Login</button>
          </>
        )}
      </p>
      {/* can add breadcrumbs like dan did for the notebook */}
    </header>
  );
}
