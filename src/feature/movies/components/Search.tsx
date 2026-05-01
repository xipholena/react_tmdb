import type { Dispatch, SetStateAction } from 'react';
import { AdvancedOptions, MoviesResponse } from '@/shared/api/interfaces.ts';
import TextInput from './TextInput.tsx';
import Autocomplete from './Autocomplete.tsx';
import AdvancedSearch from './AdvancedSearch.tsx';
import useGetGenres from '../hooks/useGetGenres.ts';
import style from '../styles/Search.module.css';

interface Props {
  textValue: string;
  autocompleteValue: string;
  toggleAutocomplete: boolean;
  data: MoviesResponse | null;
  updateOptions: (key: string, value: string | number | boolean) => void;
  advancedOptions: AdvancedOptions;
  setTextValue: Dispatch<SetStateAction<string>>;
  setAutocompleteValue: Dispatch<SetStateAction<string>>;
  setToggleAutocomplete: Dispatch<SetStateAction<boolean>>;
  setTouched: Dispatch<SetStateAction<boolean>>;
}

const Search = ({
  setTextValue,
  textValue,
  setToggleAutocomplete,
  toggleAutocomplete,
  data,
  setAutocompleteValue,
  updateOptions,
  advancedOptions,
  setTouched,
}: Props) => {
  useGetGenres({});

  return (
    <div className="box">
      <form>
        <div className={style.container}>
          <TextInput
            setTextValue={setTextValue}
            textValue={textValue}
            setToggleAutocomplete={setToggleAutocomplete}
            setTouched={setTouched}
          />

          {toggleAutocomplete ? (
            <Autocomplete
              setToggleAutocomplete={setToggleAutocomplete}
              data={data}
              setTextValue={setTextValue}
              setAutocompleteValue={setAutocompleteValue}
            />
          ) : null}
        </div>
        <AdvancedSearch updateOptions={updateOptions} advancedOptions={advancedOptions} />
      </form>
    </div>
  );
};

export default Search;
