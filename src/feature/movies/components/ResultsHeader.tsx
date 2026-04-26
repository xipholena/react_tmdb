import styles from '../styles/ResultsHeader.module.css';

const ResultsHeader = () => {
  return (
    <div className={styles.resultsHeader}>
      <h2 className={styles.resultsTitle}>Search Results</h2>
      <span className={styles.resultsCount} id="resultsCount">
        0 movies found
      </span>
    </div>
  );
};
export default ResultsHeader;
