import styles from '../styles/ResultsHeader.module.css';

interface Props {
  amount?: number;
  textValue?: string;
}

const ResultsHeader = ({ amount = 0, textValue = '' }: Props) => {
  return (
    <div className={styles.resultsHeader}>
      <h2 className={styles.resultsTitle}>Search Results for &#34;{textValue}&#34;</h2>
      <span className={styles.resultsCount} id="resultsCount">
        {amount} movies found
      </span>
    </div>
  );
};
export default ResultsHeader;
