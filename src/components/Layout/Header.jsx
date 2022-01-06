import { Link } from 'react-router-dom';
import styles from './Header.css';
import pizzaFace from '../../assets/pizza-face.png';

export default function Header() {
  return (
    <header className={styles.header}>
      <Link className={styles.logoLink} to="/">
        <img className={styles.logo} src={pizzaFace} alt="pizza face" />
        <h1>Pizza Face Employee Directory</h1>
      </Link>
      <p>
        {/* TODO: when there's user context, ternary signed in as... or not signed in */}
        Not Logged In
        {/* button can be separate component */}
        <button className={styles.button}>Login</button>
      </p>
      {/* can add breadcrumbs like dan did for the notebook */}
    </header>
  );
}
