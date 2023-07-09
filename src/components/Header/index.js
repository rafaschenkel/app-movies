import { Link } from 'react-router-dom';
import styles from './Header.module.css';

function Header () {
  return (
    <header className={styles.header}>
      <Link to="/">
        <h1>MaiaFlix</h1>
      </Link>
      <nav>
        <Link to="/">Home</Link>
        <Link to="/watch">Assistir</Link>
      </nav>
    </header>
  );
}

export default Header;
