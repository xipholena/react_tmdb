import style from '../styles/ResultsHeader.module.css';
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
        <div className={style.resultsHeader}>
          <h2 className={style.resultsTitle}>Search Results for &#34;{textValue}&#34;</h2>
          <span className={style.resultsCount}>{amount} movies found</span>
        </div>
      )}
    </>
  );
};
export default ResultsHeader;
