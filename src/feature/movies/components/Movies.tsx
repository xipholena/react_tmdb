import MoviesList from './MoviesList.tsx';
import Search from './Search.tsx';
import { useState } from 'react';
import useGetMovies from '../hooks/useGetMovies.ts';

import { useDebounceValue } from '../../../shared/hooks/useDebouncedValue.ts';

const Movies = () => {
  const [textValue, setTextValue] = useState('');
  const [autocompleteValue, setAutocompleteValue] = useState('');
  const [toggleAutocomplete, setToggleAutocomplete] = useState(false);
  const debouncedTextValue = useDebounceValue(textValue, 500);
  const { data } = useGetMovies({ value: debouncedTextValue });
  return (
    <>
      <Search
        setTextValue={setTextValue}
        textValue={textValue}
        autocompleteValue={autocompleteValue} /*options={data?.results} */
        setAutocompleteValue={setAutocompleteValue}
        setToggleAutocomplete={setToggleAutocomplete}
        toggleAutocomplete={toggleAutocomplete}
        data={data}
      />

      <MoviesList data={data} textValue={textValue} />
    </>
  );
};

export default Movies;
