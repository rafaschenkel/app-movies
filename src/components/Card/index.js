import { Link } from 'react-router-dom';
import styles from './Card.module.css';

function Card ({ id }) {
  return (
    <section className={styles.card}>
      {/* <a
        href={`https://www.youtube.com/watch?v=${id}`}
        target="_blank"
        rel="noopener noreferrer">
        <img src={`https://img.youtube.com/vi/${id}/mqdefault.jpg`} alt="Capa" />
      </a> */}

      <Link to={`/watch/${id}`}>
        <img src={`https://img.youtube.com/vi/${id}/mqdefault.jpg`} alt="Capa" />
      </Link>
    </section>
  );
}

export default Card;
