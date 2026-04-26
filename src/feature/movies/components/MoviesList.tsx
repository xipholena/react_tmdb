import ResultsHeader from './ResultsHeader.tsx';
import MoviesGrid from './MoviesGrid.tsx';

const MoviesList = () => {
  return (
    <div className="box">
      <ResultsHeader />
      <MoviesGrid />
    </div>
  );
};

export default MoviesList;
