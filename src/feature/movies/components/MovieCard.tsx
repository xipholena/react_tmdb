import style from '../styles/MovieCard.module.css';
import { Movie } from '../../../shared/api/interfaces.ts';
import Genres from './Genres.tsx';

interface Props {
  movie: Movie;
}

const MovieCard = ({ movie }: Props) => {
  return (
    <div className={style.movieCard}>
      <div className={style.moviePoster}>
        <img alt="movie icon" src={`https://image.tmdb.org/t/p/w500/${movie?.poster_path}`} />
        <span className={style.movieRating}>{movie.vote_average.toFixed(1)}</span>
      </div>
      <div className={style.movieInfo}>
        <h3 className={style.movieTitle}>{movie.title}</h3>
        {movie.release_date ? (
          <div className={style.movieYear}>{movie.release_date?.split('-')[0]}</div>
        ) : (
          ''
        )}
        {movie.overview ? <p className={style.movieOverview}>{movie.overview}</p> : ''}

        <Genres
          ids={movie.genre_ids}
          render={(genres) => (
            <div className={style.movieGenres}>
              {genres.map((genre) => (
                <span key={genre.id} className={style.genreTag}>
                  {genre.name}
                </span>
              ))}
            </div>
          )}
        />
      </div>
    </div>
  );
};

export default MovieCard;
