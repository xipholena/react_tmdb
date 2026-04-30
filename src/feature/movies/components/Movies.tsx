import MoviesList from './MoviesList.tsx';
import Search from './Search.tsx';
import { useMemo, useState } from 'react';
import useGetMovies from '../hooks/useGetMovies.ts';

import { useDebounceValue } from '../../../shared/hooks/useDebouncedValue.ts';
import { DEFAULT_ADVANCED_OPTIONS } from '../../../shared/constants.ts';

const Movies = () => {
  const [textValue, setTextValue] = useState('');
  const [autocompleteValue, setAutocompleteValue] = useState('');
  const [toggleAutocomplete, setToggleAutocomplete] = useState(false);
  const [advancedOptions, setAdvancedOptions] = useState(DEFAULT_ADVANCED_OPTIONS);
  const debouncedTextValue = useDebounceValue(textValue, 500);

  const values = useMemo(
    () => ({
      ...advancedOptions,
      query: debouncedTextValue,
    }),
    [advancedOptions, debouncedTextValue]
  );
  const { data, isLoading } = useGetMovies({
    values,
  });
  const updateOptions = (key: string, value: string | number | boolean) => {
    setAdvancedOptions((prev) => ({
      ...prev,
      [key]: value,
    }));
  };

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
