import TextInput from './TextInput.tsx';
import Autocomplete from './Autocomplete.tsx';
import { AdvancedOptions, MoviesResponse } from '../../../shared/api/interfaces.ts';
import useGetGenres from '../hooks/useGetGenres.ts';
import AdvancedSearch from './AdvancedSearch.tsx';
import style from '../styles/Search.module.css';
interface Props {
  setTextValue: (value: string) => void;
  textValue: string;
  autocompleteValue: string;
  setToggleAutocomplete: (value: boolean) => void;
  toggleAutocomplete: boolean;
  data: MoviesResponse | null;
  setAutocompleteValue: (value: string) => void;
  updateOptions: (key: string, value: string | number | boolean) => void;
  advancedOptions: AdvancedOptions;
  setTouched: (value: boolean) => void;
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
    <div className="box" onClick={() => setTouched(true)}>
      <form>
        <div className={style.container}>
          <TextInput
            setTextValue={setTextValue}
            textValue={textValue}
            setToggleAutocomplete={setToggleAutocomplete}
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
