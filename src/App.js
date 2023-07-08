import './App.css';
import Banner from './components/Banner';
import Card from './components/Card';
import Category, { categories, filterCategory } from './components/Category';
import Container from './components/Container';
import Footer from './components/Footer';
import Header from './components/Header';

function App() {
  return (
    <>
      <Header />
      <Banner img='home' />
      <Container>
        {categories.map((categoria, index) =>
          <Category category={categoria} key={index}>
            { filterCategory(index).map((video, index) => <Card id={video.id} key={index} />) }
          </Category>
        )}
      </Container>
      <Footer />
    </>
  );
}

export default App;
