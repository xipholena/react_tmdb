import type { FallbackProps } from 'react-error-boundary';
import styles from './ErrorPage.module.css';

const ErrorPage = (_props: FallbackProps) => {
  return (
    <main className={styles.wrapper}>
      <section className={styles.card}>
        <p className={styles.code}>Error 500</p>
        <h1>Ooops... What could pissibly go wrong? </h1>
        <p className={styles.description}>
          We are working on it. Please come back later.
        </p>
        <button className={styles.button} onClick={resetErrorBoundary} type="button">
          Спробувати знову
        </button>
      </section>
    </main>
  );
};

export default ErrorPage;
