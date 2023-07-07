import './App.css';
import Banner from './components/Banner';
import Container from './components/Container';
import Footer from './components/Footer';
import Header from './components/Header';

function App() {
  return (
    <>
      <Header />
      <Banner img='home' />
      <Container>
        <h1>Hello world</h1>
        <p>Estou aprendendo ReactJS</p>
      </Container>
      <Footer />
    </>
  );
}

export default App;
