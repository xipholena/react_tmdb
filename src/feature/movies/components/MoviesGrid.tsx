import style from '../styles/MoviesGrid.module.css';
import MovieCard from './MovieCard.tsx';

const MoviesGrid = () => {
  return (
    <div className={style.moviesGrid} id="moviesGrid">
      <MovieCard />
    </div>
  );
};

export default MoviesGrid;
