import { useState } from 'react';
import { DialogProps } from '@mui/material/Dialog';
import { Movie } from '@/shared/api/interfaces.ts';
import Spinner from './Spinner.tsx';
import CardDialog from './CardDialog.tsx';
import useGetGenres from '../hooks/useGetGenres.ts';
import style from '../styles/MovieCard.module.css';

interface Props {
  movie: Movie;
}
const IMAGE_BASE_URL = 'https://image.tmdb.org/t/p/w500';

const MovieCard = ({ movie }: Props) => {
  const [open, setOpen] = useState(false);
  const [scroll, setScroll] = useState<DialogProps['scroll']>('paper');

  const { genres, isLoading } = useGetGenres({ ids: movie.genre_ids });
  return (
    <>
      <CardDialog open={open} setOpen={setOpen} scroll={scroll} movie={movie} />
      <div
        className={style.movieCard}
        onClick={() => {
          setOpen(true);
          setScroll('paper');
        }}
      >
        <div className={style.moviePoster}>
          {movie?.poster_path && (
            <img alt="movie icon" src={`${IMAGE_BASE_URL}${movie?.poster_path ?? ''}`} />
          )}
          <span className={style.movieRating}>
            {Number.isFinite(movie.vote_average) ? movie.vote_average.toFixed(1) : 'N/A'}
          </span>
        </div>
        <div className={style.movieInfo}>
          <h3 className={style.movieTitle}>{movie.title}</h3>
          {movie.release_date ? (
            <div className={style.movieYear}>{movie.release_date?.split('-')[0]}</div>
          ) : (
            ''
          )}
          {movie.overview ? <p className={style.movieOverview}>{movie.overview}</p> : ''}

          {isLoading ? (
            <Spinner />
          ) : (
            <div className={style.movieGenres}>
              {genres.map((genre) => (
                <span key={genre.id} className={style.genreTag}>
                  {genre.name}
                </span>
              ))}
            </div>
          )}
        </div>
      </div>
    </>
  );
};

export default MovieCard;
