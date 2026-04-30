import MoviesList from './MoviesList.tsx';
import Search from './Search.tsx';
import { useState } from 'react';
import useGetMovies from '../hooks/useGetMovies.ts';
import { DEFAULT_ADVANCED_OPTIONS } from '../../../shared/constants.ts';
import useMovies from '../hooks/useMovies.ts';

const Movies = () => {
  const [textValue, setTextValue] = useState('');
  const [autocompleteValue, setAutocompleteValue] = useState('');
  const [toggleAutocomplete, setToggleAutocomplete] = useState(false);
  const [advancedOptions, setAdvancedOptions] = useState(DEFAULT_ADVANCED_OPTIONS);

  const { values, updateOptions } = useMovies({ textValue, setAdvancedOptions, advancedOptions });
  const { data, isLoading } = useGetMovies({
    values,
  });
  return (
    <>
      <Search
        advancedOptions={advancedOptions}
        updateOptions={updateOptions}
        setTextValue={setTextValue}
        textValue={textValue}
        autocompleteValue={autocompleteValue}
        setAutocompleteValue={setAutocompleteValue}
        setToggleAutocomplete={setToggleAutocomplete}
        toggleAutocomplete={toggleAutocomplete}
        data={data}
      />

      <MoviesList data={data} isLoading={isLoading} textValue={textValue} />
    </>
  );
};

export default Movies;
