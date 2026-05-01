import { MoviesResponse } from '../../../shared/api/interfaces.ts';
import MovieCard from './MovieCard.tsx';
import style from '../styles/MoviesGrid.module.css';
interface Props {
  data: MoviesResponse | null;
}
const MoviesGrid = ({ data }: Props) => {
  return (
    <div className={style.moviesGrid}>
      {data?.results?.length
        ? data?.results?.map((movie) => <MovieCard key={movie.id} movie={movie} />)
        : 'No movies found... Try our search!'}
    </div>
  );
};

export default MoviesGrid;
