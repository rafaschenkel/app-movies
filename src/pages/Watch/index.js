import { useParams } from 'react-router-dom';
import Container from '../../components/Container';
import Footer from '../../components/Footer';
import Header from '../../components/Header';
import videos from '../../json/videos.json';
import PageNotFound from '../PageNotFound';
import styles from './Watch.module.css';

function Watch () {
  const params = useParams();
  const video = videos.find(video => video.id === params.id);
  if (!video) return <PageNotFound />;

  return (
    <>
      <Header />
      <Container>
        <section className={styles.watch}>
          <iframe
            width="854"
            height="480"
            src={`https://www.youtube.com/embed/${video.id}`}
            title="YouTube video player"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowfullscreen>
          </iframe>
        </section>
      </Container>
      <Footer />
    </>
  );
}

export default Watch;
