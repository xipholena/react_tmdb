import style from '../styles/MovieCard.module.css';
const MovieCard = () => {
  return (
    <div className={style.movieCard}>
      <div className={style.moviePoster}>
        <div className={style.movieRating}>8.5</div>
      </div>
      <div className={style.movieInfo}>
        <h3 className={style.movieTitle}>Example Movie Title</h3>
        <div className={style.movieYear}>2024</div>
        <p className={style.movieOverview}>
          This is an example movie overview that would come from the TMDB API. Replace this with
          actual movie.overview from the API response.
        </p>
        <div className={style.movieGenres}>
          <span className={style.genreTag}>Action</span>
          <span className={style.genreTag}>Adventure</span>
          <span className={style.genreTag}>Sci-Fi</span>
        </div>
      </div>
    </div>
  );
};

export default MovieCard;
