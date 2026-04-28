import TextInput from './TextInput.tsx';
import Autocomplete from './Autocomplete.tsx';
import { MoviesResponse } from '../../../shared/api/interfaces.ts';
import useGetGenres from '../hooks/useGetGenres.ts';

interface Props {
  setTextValue: (value: string) => void;
  textValue: string;
  autocompleteValue: string;
  setToggleAutocomplete: (value: boolean) => void;
  toggleAutocomplete: boolean;
  data: MoviesResponse | null;
  setAutocompleteValue: (value: string) => void;
}

const Search = ({
  setTextValue,
  textValue,
  setToggleAutocomplete,
  toggleAutocomplete,
  data,
  setAutocompleteValue,
}: Props) => {
  useGetGenres({});
  return (
    <div className="box">
      <form>
        <TextInput
          setTextValue={setTextValue}
          textValue={textValue}
          setToggleAutocomplete={setToggleAutocomplete}
        />
      </form>
      {toggleAutocomplete ? (
        <Autocomplete
          setToggleAutocomplete={setToggleAutocomplete}
          data={data}
          setTextValue={setTextValue}
          setAutocompleteValue={setAutocompleteValue}
        />
      ) : null}
    </div>
  );
};

export default Search;
