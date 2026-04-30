import styles from '../styles/ResultsHeader.module.css';
import ProgressBar from './ProgressBar.tsx';

interface Props {
  amount?: number;
  textValue?: string;
  isLoading: boolean;
}

const ResultsHeader = ({ amount = 0, textValue = '', isLoading }: Props) => {
  return (
    <>
      {isLoading ? (
        <ProgressBar />
      ) : (
        <div className={styles.resultsHeader}>
          <h2 className={styles.resultsTitle}>Search Results for &#34;{textValue}&#34;</h2>
          <span className={styles.resultsCount}>{amount} movies found</span>
        </div>
      )}
    </>
  );
};
export default ResultsHeader;
