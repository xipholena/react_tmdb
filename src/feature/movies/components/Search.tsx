import TextInput from './TextInput.tsx';
import Autocomplete from './Autocomplete.tsx';
import { AdvancedOptions, MoviesResponse } from '../../../shared/api/interfaces.ts';
import useGetGenres from '../hooks/useGetGenres.ts';
import AdvancedSearch from './AdvancedSearch.tsx';
import style from '../styles/Search.module.css';
interface Props {
  textValue: string;
  autocompleteValue: string;
  toggleAutocomplete: boolean;
  data: MoviesResponse | null;
  updateOptions: (key: string, value: string | number | boolean) => void;
  advancedOptions: AdvancedOptions;
  setTextValue: React.Dispatch<React.SetStateAction<string>>;
  setAutocompleteValue: React.Dispatch<React.SetStateAction<string>>;
  setToggleAutocomplete: React.Dispatch<React.SetStateAction<boolean>>;
  setTouched: React.Dispatch<React.SetStateAction<boolean>>;
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
