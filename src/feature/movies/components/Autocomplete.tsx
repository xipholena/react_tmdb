import style from '../styles/Autocomplete.module.css';
import { MoviesResponse } from '../../../shared/api/interfaces.ts';
import useClickOutside from '../../../shared/hooks/useClickOutside.ts';
import Genres from './Genres.tsx';

interface Props {
  data: MoviesResponse | null;
  setTextValue: React.Dispatch<React.SetStateAction<string>>;
  setAutocompleteValue: React.Dispatch<React.SetStateAction<string>>;
  setToggleAutocomplete: React.Dispatch<React.SetStateAction<boolean>>;
}

const Autocomplete = ({
  data,
  setTextValue,
  setAutocompleteValue,
  setToggleAutocomplete,
}: Props) => {
  const { ref } = useClickOutside(() => {
    setToggleAutocomplete(false);
  });

  if (!data) return null;

  const clickHandler = (title?: string | null) => {
    if (!title) return;
    setTextValue(title);
    setAutocompleteValue(title);
    setToggleAutocomplete(false);
  };

  return (
    <div ref={ref} className={style.autocompleteDropdown} id="autocompleteDropdown">
      {data?.results?.map((movie) => (
        <div
          key={movie.id}
          className={style.autocompleteItem}
          onClick={() => clickHandler(movie?.title)}
        >
          <div className={style.autocompletePoster}>
            <img alt="movie icon" src={`https://image.tmdb.org/t/p/w92/${movie?.poster_path}`} />
          </div>
          <div className={style.autocompleteInfo}>
            <h4>{movie?.title}</h4>
            <p className={style.autocompleteGenres}>
              {movie?.release_date?.split('-')[0]} &nbsp;&#9679;&nbsp;
              <Genres
                ids={movie.genre_ids}
                render={(genres) => (
                  <>
                    {genres.map((genre) => (
                      <span key={genre.id}>{genre.name} &nbsp;</span>
                    ))}
                  </>
                )}
              />
            </p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Autocomplete;
