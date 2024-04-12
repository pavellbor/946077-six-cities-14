import { Helmet } from 'react-helmet-async';
import styles from './not-found-page.module.css';
import { Link } from 'react-router-dom';
import { AppRoute } from '../../const';

function NotFoundPage(): JSX.Element {
  return (
    <div className={`page ${styles.root}`}>
      <Helmet>
        <title>6 cities – Not Found</title>
      </Helmet>
      <div className={styles.container}>
        <h1 className={styles.title}>404 Not Found</h1>
        <p className={styles.text}>
          Return to the{' '}
          <Link to={AppRoute.Root} className={styles.link}>
            main page
          </Link>
        </p>
      </div>
    </div>
  );
}

export default NotFoundPage;
