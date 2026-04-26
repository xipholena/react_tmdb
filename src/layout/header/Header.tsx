import styles from './Header.module.css';

const Header = () => {
  return (
    <header className={styles.header}>
      <h1>TMDB Movie Search</h1>
      <p>Find your favorite movies with powerful search and autocomplete</p>
    </header>
  );
};

export default Header;
