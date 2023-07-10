import Footer from '../../components/Footer';
import Header from '../../components/Header';
import logo from './erro404.png';
import styles from './PageNotFound.module.css';

function PageNotFound () {
  return (
    <>
      <Header />
      <section className={styles.container}>
        <h1>Ops... Página não encontrada!</h1>
        <img src={logo} alt="Logo da página não encontrada" />
      </section>
      <Footer />
    </>
  );
}

export default PageNotFound;
